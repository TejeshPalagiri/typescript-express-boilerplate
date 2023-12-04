import { Request, Response, NextFunction } from "express";
import CustomError from "../helpers/CustomError";

// Dummy route
export const simpleUserFetch = (req: Request, res: Response, next: NextFunction) => {
    try {
        const error = new CustomError('Status fault', 400);
        throw error;
    } catch (error) {
        next(error);
    }
}
