
import express, { Express } from 'express';
import dotenv from 'dotenv';

import { errorHandlerMiddleware } from '@/middlewares/error-handler.middleware';

import { apiRouter } from './routes/apis';
import { viewRouter } from './routes/views';



dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


// Configurations
// 1. View engine
app.set('view engine', 'ejs');
// 2. Static folder
app.use(express.static('public'));


// Middlewares
// 1. Parse JSON bodies 
app.use(express.json());
// 2. Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api', apiRouter);
app.use('/', viewRouter);


// Error handler middleware. This should be the last middleware.
app.use(errorHandlerMiddleware);



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});