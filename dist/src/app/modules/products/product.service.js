"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiErrors_1 = __importDefault(require("../../errors/ApiErrors"));
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    try {
        const existingProduct = yield prisma_1.default.products.findUnique({
            where: {
                productName: payload.productName,
            },
        });
        if (existingProduct) {
            throw new ApiErrors_1.default(http_status_1.default.CONFLICT, 'This product already exists!');
        }
        const result = yield prisma_1.default.products.create({
            data: {
                productName: payload.productName,
                ProductDescription: payload.ProductDescription,
                auction: payload.auction,
                price: payload.price,
                brandId: payload.brandId.toString(),
                drivingPosition: payload.drivingPosition,
                ManufactureCountry: payload.ManufactureCountry,
                status: payload.status,
                category: payload.category,
                isDeleted: false,
                productImage: {
                    create: payload.productImages.map(image => ({
                        image: image.image,
                        imageType: image.imageType,
                    }))
                }
            },
        });
        // return result;
    }
    catch (error) {
        throw new Error(`Could not create product: ${error}`);
    }
});
const getAllProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const andSearchCondition = [];
        if (query.category || query.status || query.searchTerms) {
            andSearchCondition.push({
                status: query.status ? query.status : undefined,
                category: query.category ? query.category : undefined,
                OR: ['productName', 'ManufactureCountry'].map(field => ({
                    [field]: {
                        contains: query.searchTerms,
                        mode: 'insensitive'
                    }
                }))
            });
        }
        const whereConditions = { AND: andSearchCondition };
        const result = yield prisma_1.default.products.findMany({
            where: whereConditions,
            include: {
                brand: true, // Assuming the relation is named brand
            },
        });
        return result;
    }
    catch (error) {
        throw new Error(`Could not get products: ${error.message}`);
    }
});
exports.productServices = { createProductIntoDB, getAllProductsFromDB };
