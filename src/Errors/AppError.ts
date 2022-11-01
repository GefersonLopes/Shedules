export class AppError extends Error {
    status;
    constructor(status: number, message: string) {
        super();
        this.message = message;
        this.status = status;
    }
};