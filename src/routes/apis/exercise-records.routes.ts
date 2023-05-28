
import Express from "express";

import * as ExerciseRecordApiController from "@/controllers/apis/exercise-records.controller";

import { dtoValidator } from "@/middlewares/dto-validator.middleware";
import { ExerciseRecordRequestDto } from "@/dto/exercise-record.request.dto";


export const exerciseRecordsApiRouter = Express.Router();


exerciseRecordsApiRouter.get(
    '/:name',
    ExerciseRecordApiController.getExerciseRecords,
);

exerciseRecordsApiRouter.post(
    '/', 
    dtoValidator(ExerciseRecordRequestDto),
    ExerciseRecordApiController.createExerciseRecord,
);

exerciseRecordsApiRouter.put(
    '/:id',
    dtoValidator(ExerciseRecordRequestDto),
    ExerciseRecordApiController.updateExerciseRecord,
);

exerciseRecordsApiRouter.delete(
    '/:id',
    ExerciseRecordApiController.deleteExerciseRecord,
);
