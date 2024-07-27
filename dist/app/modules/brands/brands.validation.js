"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandValidation = exports.BrandValidationSchema = void 0;
const zod_1 = require("zod");
exports.BrandValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional(),
        brandName: zod_1.z.string(),
    })
});
exports.brandValidation = {
    BrandValidationSchema: exports.BrandValidationSchema
};
