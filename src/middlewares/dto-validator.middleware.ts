
import { RequestHandler, Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { sanitize } from "class-sanitizer";

import { HttpException, HttpStatusCode } from "@/exceptions/http-exception.exception";



// Middleware to validate a DTO object.
// Throws a HttpException if validation fails, which should be handled by the error handler middleware.

export function dtoValidator(dto: any, skipMissingProperties = false): RequestHandler {

    return (req: Request, res: Response, next: NextFunction) => {

        // Convert request body to DTO object, performing any @Transform() operations
        const dtoObj = plainToInstance(dto, req.body);

        // Validate DTO object
        validate(dtoObj, { skipMissingProperties }).then((errors) => {
            if (errors.length === 0) {
                sanitize(dtoObj);
                req.body = dtoObj;
                return next();
            }

            // Map errors to a single string message separated by " | "
            const dtoErrors = errors
                .map((error) => (Object as any).values(error.constraints)).join(" | ");
            
            // Pass a HttpException to the error handler middleware
            next(new HttpException({
                statusCode: HttpStatusCode.BAD_REQUEST,
                error: "Invalid request body",
                message: dtoErrors,
            }));
        });
    };
}