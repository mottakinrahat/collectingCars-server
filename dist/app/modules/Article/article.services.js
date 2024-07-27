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
exports.articleServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiErrors_1 = __importDefault(require("../../errors/ApiErrors"));
const createArticleIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.article.create({
            data: {
                bannerImage: payload.bannerImage,
                articleTitle: payload.articleTitle,
                published_by: payload.published_by,
                published_Date: payload.published_Date,
                viewed_by: payload.viewed_by,
                description: payload.description,
                userComment: payload.userComment,
                createdAt: payload.createdAt,
                updatedAt: payload.updatedAt,
            },
        });
        return result;
    }
    catch (error) {
        throw new ApiErrors_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Could not create article: ${error.message}`);
    }
});
const getAllArticlesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.article.findMany();
        return result;
    }
    catch (error) {
        throw new ApiErrors_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Could not get articles: ${error.message}`);
    }
});
exports.articleServices = { createArticleIntoDB, getAllArticlesFromDB };
