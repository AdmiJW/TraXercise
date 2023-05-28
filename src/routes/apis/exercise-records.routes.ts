
import Express from "express";

import * as ExerciseRecordController from "@/controllers/apis/exercise-records.controller";



export const exericseRecordsRouter = Express.Router();


exericseRecordsRouter.get("/", ExerciseRecordController.getExerciseRecords);
