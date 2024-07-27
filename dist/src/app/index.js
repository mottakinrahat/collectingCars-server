"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/products/product.route");
const brands_route_1 = require("./modules/brands/brands.route");
const user_route_1 = require("./modules/User/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/products',
        route: product_route_1.productRoutes
    },
    {
        path: '/brands',
        route: brands_route_1.brandRoutes
    },
    {
        path: '/auth/users',
        route: user_route_1.userRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
