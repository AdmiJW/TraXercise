
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { ExerciseRecordRequestDto } from "@/dto/exercise-record.request.dto";
import { HttpException, HttpStatusCode } from "@/exceptions/http-exception.exception";


const prisma = new PrismaClient();

export async function getExerciseRecord(id: string) {
    try {
        const record = await prisma.exerciseRecord.findUnique({ where: { id }});
        return record;
    }
    catch (err) {
        throwNotFoundError(err);
        throw err;
    }
}


export async function getExerciseRecords(
    name: string,
    dateFrom?: Date,
    dateTo?: Date,
) {
    const whereClause : any = {
        name: name,
    };

    if (dateFrom && dateTo) whereClause["date"] = {
        gte: dateFrom,
        lte: dateTo,
    };

    const records = await prisma.exerciseRecord.findMany({
        where: whereClause,
    });
    return records;
}


export async function createExerciseRecord(data: ExerciseRecordRequestDto) {
    const record = await prisma.exerciseRecord.create({ data });
    return record;
}


export async function updateExerciseRecord(id: string, data: ExerciseRecordRequestDto) {
    try {
        const record = await prisma.exerciseRecord.update({ where: { id }, data });
        return record;
    } 
    catch (err) {
        throwNotFoundError(err);
        throw err;
    }
}


export async function deleteExerciseRecord(id: string) {
    try {
        const record = await prisma.exerciseRecord.delete({ where: { id }});
        return record;
    }
    catch (err) {
        throwNotFoundError(err);
        throw err;
    }
}



/// Check if error is a PrismaClientKnownRequestError with code P2025
/// If so, throw a HttpException with status code 404 instead of the original error
function throwNotFoundError(error: unknown) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        throw new HttpException({
            statusCode: HttpStatusCode.NOT_FOUND,
            error: "Not found",
            message: `Exercise record not found`,
        });
    }
}