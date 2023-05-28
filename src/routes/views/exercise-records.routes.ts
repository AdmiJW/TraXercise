
import Express from "express";

import * as ExerciseRecordViewController from "@/controllers/views/exercise-records.controller";



export const exerciseRecordsViewRouter = Express.Router();


exerciseRecordsViewRouter.get('/', ExerciseRecordViewController.viewExerciseRecordsPage);

exerciseRecordsViewRouter.get('/analysis', ExerciseRecordViewController.viewExerciseRecordsAnalysisPage);

exerciseRecordsViewRouter.get('/create', ExerciseRecordViewController.createExerciseRecordPage);