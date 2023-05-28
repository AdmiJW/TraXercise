
import Express from "express";

import { exerciseRecordsApiRouter } from './exercise-records.routes';


export const apiRouter = Express.Router();


apiRouter.use("/exercise-records", exerciseRecordsApiRouter);
