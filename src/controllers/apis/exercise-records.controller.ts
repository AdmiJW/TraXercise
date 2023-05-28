
import { Request, Response, NextFunction } from "express";

import * as ExerciseRecordService from "@/services/apis/exercise-records.service";
import { ExerciseRecordRequestDto } from "@/dto/exercise-record.request.dto";
import { HttpException, HttpStatusCode } from "@/exceptions/http-exception.exception";




export async function getExerciseRecords(
    request: Request, 
    response: Response, 
    next: NextFunction,
) {
    const { name } = request.params;

    if (!name) return next(new HttpException({
        statusCode: HttpStatusCode.BAD_REQUEST,
        error: "Bad request",
        message: "Missing name parameter",
    }));

    const { dateFrom, dateTo } = request.query as { dateFrom?: string, dateTo?: string };

    if (dateFrom && !Date.parse(dateFrom)) return next(new HttpException({
        statusCode: HttpStatusCode.BAD_REQUEST,
        error: "Bad request",
        message: "Invalid dateFrom parameter",
    }));

    if (dateTo && !Date.parse(dateTo)) return next(new HttpException({
        statusCode: HttpStatusCode.BAD_REQUEST,
        error: "Bad request",
        message: "Invalid dateTo parameter",
    }));


    try {
        const res = await ExerciseRecordService.getExerciseRecords(
            name, 
            dateFrom && new Date(dateFrom as string) || undefined,
            dateTo && new Date(dateTo as string) || undefined,
        );
        response.json(res);
    }
    catch (err) {
        next(err);
    }
}


export async function createExerciseRecord(
    request: Request, 
    response: Response,
    next: NextFunction,
) {
    const dto = request.body as ExerciseRecordRequestDto;

    try {
        const res = await ExerciseRecordService.createExerciseRecord(dto);
        response.json(res);
    } catch (err) {
        next(err);
    }
}


export async function updateExerciseRecord(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const { id } = request.params;

    if (!id) return next(new HttpException({
        statusCode: HttpStatusCode.BAD_REQUEST,
        error: "Bad request",
        message: "Missing id parameter",
    }));

    const dto = request.body as ExerciseRecordRequestDto;

    try {
        const res = await ExerciseRecordService.updateExerciseRecord(id, dto);
        response.json(res);
    } catch (err) {
        next(err);
    }
}





export async function deleteExerciseRecord(
    request: Request, 
    response: Response, 
    next: NextFunction,
) {
    const { id } = request.params;

    if (!id) return next(new HttpException({
        statusCode: HttpStatusCode.BAD_REQUEST,
        error: "Bad request",
        message: "Missing id parameter",
    }));

    try {
        const res = await ExerciseRecordService.deleteExerciseRecord(id);
        response.json(res);
    } catch (err) { 
        next(err);
    }
}