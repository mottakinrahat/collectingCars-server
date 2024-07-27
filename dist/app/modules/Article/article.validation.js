"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValdation = exports.ArticleValidationSchema = exports.ArticleImageSchema = void 0;
// src/schemas/article.schema.ts
const zod_1 = require("zod");
exports.ArticleImageSchema = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string(),
    })
});
exports.ArticleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bannerImage: zod_1.z.string().min(1, "Banner image URL is required"),
        articleImages: zod_1.z.array(exports.ArticleImageSchema),
        articleTitle: zod_1.z.string(),
        published_by: zod_1.z.string().min(1, "Publisher name is required"),
        published_Date: zod_1.z.date(),
        viewed_by: zod_1.z.number().int().nonnegative(),
        description: zod_1.z.string().min(1, "Description is required"),
        userComment: zod_1.z.string()
    })
});
exports.articleValdation = {
    ArticleValidationSchema: exports.ArticleValidationSchema
};
