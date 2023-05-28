
import { Request, Response, NextFunction } from 'express';

import { HttpException } from '@/exceptions/http-exception.exception';


// Middleware to handle errors thrown by other middlewares or controllers.
// This middleware should be the last middleware in the middleware chain.

export const errorHandler = (
    error: Error | HttpException,
    request: Request,
    response: Response,
    next: NextFunction
) => {

    console.error(error);

    if (error instanceof HttpException) {
        return response.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message,
            error: error.error
        });
    }
    
    return response.status(500).json({
        statusCode: 500,
        message: "Internal Server Error. Please contact the administrator.",
        error: 'Internal Server Error'
    });
}