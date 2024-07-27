"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const productImageSchema = zod_1.z.object({
    id: zod_1.z.string(),
    image: zod_1.z.string(),
    imageType: zod_1.z.string(),
    productsId: zod_1.z.string().optional()
});
const brandSchema = zod_1.z.object({
    id: zod_1.z.string(),
    brandName: zod_1.z.string(),
});
exports.productValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string(),
        productName: zod_1.z.string(),
        productImage: zod_1.z.array(productImageSchema).optional(),
        ProductDescription: zod_1.z.string(),
        auction: zod_1.z.boolean(),
        price: zod_1.z.number().positive(),
        brandId: zod_1.z.string(),
        drivingPosition: zod_1.z.string(),
        ManufactureCountry: zod_1.z.string(),
        status: zod_1.z.enum(['pending', 'live', 'sold']),
        category: zod_1.z.enum(['weeklyHighlights', 'supercars', 'jdmLeagends', 'airCoooled', 'offRoadExplorer', 'twoWheels']),
        createdAt: zod_1.z.date(),
        updatedAt: zod_1.z.date(),
    })
});
exports.productValidation = {
    productValidationSchema: exports.productValidationSchema
};
