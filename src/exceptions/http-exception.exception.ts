
import { HttpStatusCode } from '@/enums/http-status-code.enum';

export { HttpStatusCode } from '@/enums/http-status-code.enum';


interface HttpExceptionParams {
    message: string;
    error: string;
    statusCode?: HttpStatusCode;
}



export class HttpException extends Error {
    public error: string;
    public statusCode: HttpStatusCode;

    constructor({ 
        message, 
        error, 
        statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
    }: HttpExceptionParams) {
        super(message);
        this.error = error;
        this.statusCode = statusCode;
    }
}