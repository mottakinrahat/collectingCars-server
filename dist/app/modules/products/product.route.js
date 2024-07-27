"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// task 3
router.post('/', product_controller_1.productCotroller.createProduct);
router.get('/', product_controller_1.productCotroller.getAllProduct);
exports.productRoutes = router;
