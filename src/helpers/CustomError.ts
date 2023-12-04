export default class CustomError extends Error {
    // Setting default error status code to SERVER-ERROR
    status: number = 500;
    statusCode: string = 'SERVER-ERROR';

    constructor(message: string, status: number, statusCode?: string) {
        super(message);
        this.status = status;
        this.statusCode = statusCode;
    }
}