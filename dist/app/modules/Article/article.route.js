"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const article_controller_1 = require("./article.controller");
const router = express_1.default.Router();
// task 3
router.post('/', article_controller_1.ArticleController.createArticle);
router.get('/', article_controller_1.ArticleController.getAllArticles);
exports.articleRoutes = router;
