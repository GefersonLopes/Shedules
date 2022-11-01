import { Request, Response } from "express";
import { listUser_Service } from "../../services/users/listUsers.service";
import {instanceToPlain} from "class-transformer";

export const listUser = async (req: Request ,res: Response) => {

    const result = await listUser_Service();
    return res.status(200).json(instanceToPlain(result));
};