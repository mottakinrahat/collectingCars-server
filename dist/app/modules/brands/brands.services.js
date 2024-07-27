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
exports.brandServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiErrors_1 = __importDefault(require("../../errors/ApiErrors"));
const createBrandIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate payload using Zod sche
        const existingBrands = yield prisma_1.default.brand.findUnique({
            where: {
                brandName: payload.brandName
            }
        });
        if (existingBrands) {
            throw new ApiErrors_1.default(http_status_1.default.CONFLICT, "this Brands is already exists!!");
        }
        const result = yield prisma_1.default.brand.create({
            data: {
                brandName: payload.brandName,
            },
        });
        return result;
    }
    catch (error) {
        throw new Error(`Could not create brand: ${error.message}`);
    }
});
const getAllBrandsIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.brand.findMany();
        return result;
    }
    catch (error) {
        throw new Error(`Could not get brands: ${error.message}`);
    }
});
exports.brandServices = { createBrandIntoDB, getAllBrandsIntoDB };
