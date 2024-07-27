"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const brands_validation_1 = require("./brands.validation");
const brands_controller_1 = require("./brands.controller");
const router = express_1.default.Router();
// task 3
router.post('/', (0, validateRequest_1.default)(brands_validation_1.brandValidation.BrandValidationSchema), brands_controller_1.brandController.createBrand);
router.get('/', brands_controller_1.brandController.getAllBrands);
exports.brandRoutes = router;
