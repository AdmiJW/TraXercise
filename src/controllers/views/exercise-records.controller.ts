
import { Request, Response, NextFunction } from "express";




export async function createExerciseRecordPage(
    request: Request, 
    response: Response, 
    next: NextFunction,
) {
    response.render("track-page/track-page", {
		title: "TraXercise - Create Record",
	});
}


export async function viewExerciseRecordsPage(
    request: Request, 
    response: Response,
    next: NextFunction,
) {
    response.render("records-page/records-page", {
		title: "TraXercise - My Records",
	});
}


export async function viewExerciseRecordsAnalysisPage(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    response.render('analysis-page/analysis-page', {
        title: 'TraXercise - Analysis',
    });
}




