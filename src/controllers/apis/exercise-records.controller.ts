
import { Request, Response } from "express";


export async function getExerciseRecords(request: Request, response: Response) {
    response.send("Hello world!");
}