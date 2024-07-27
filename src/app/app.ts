import express, { Application, NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from '.';
import GlobalErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handler for root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Collecting car server.."
    });
});

// Router setup
app.use('/api/v1', router); // Assuming router handles '/api/v1' routes

app.use(GlobalErrorHandler)

// Not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    });
});

// Example global error handler middleware (globalErrorHandler.ts)
const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Global error handler:', err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Internal Server Error',
        error: err.message // You can customize error handling here
    });
};

export default app;
