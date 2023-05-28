
import Express from "express";

import { exericseRecordsRouter } from './exercise-records.routes';


export const apiRouter = Express.Router();


apiRouter.use("/exercise-records", exericseRecordsRouter);
