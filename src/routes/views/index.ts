
import Express from "express";

import { exerciseRecordsViewRouter } from './exercise-records.routes';


export const viewRouter = Express.Router();


viewRouter.use('/', exerciseRecordsViewRouter);