import { Request, Response } from "express";
import { createUser_Service } from "../../services/users/createUser.service";
import {instanceToPlain} from "class-transformer";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, isAdm } = req.body;
    const result = await createUser_Service({name, email, password, isAdm});
    return res.status(201).json(instanceToPlain(result));
};