"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const _1 = __importDefault(require("."));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Route handler for root endpoint
app.get('/', (req, res) => {
    res.send({
        Message: "Collecting car server.."
    });
});
// Router setup
app.use('/api/v1', _1.default); // Assuming router handles '/api/v1' routes
app.use(globalErrorHandler_1.default);
// Not found handler
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    });
});
// Example global error handler middleware (globalErrorHandler.ts)
const globalErrorHandler = (err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Internal Server Error',
        error: err.message // You can customize error handling here
    });
};
exports.default = app;
