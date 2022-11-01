import { NextFunction, Request, Response } from "express";
import { AppError } from "../Errors/AppError";

export const error = (err: AppError, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    const { message, status } = err;
    return res.status(status).json({ message: message });
  }
  return res.status(500).json({ message: "internal server error" });
};
