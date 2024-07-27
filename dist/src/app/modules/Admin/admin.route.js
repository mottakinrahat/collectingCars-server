"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// task 3
router.post('/', productCotroller.createProduct);
router.get('/', productCotroller.getAllProductFromDB);
exports.adminRoutes = router;
