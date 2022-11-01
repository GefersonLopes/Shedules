import { Request, Response } from "express";
import { loginUser_Service } from "../../services/users/loginUser.service";

export const loginUser = async (req: Request ,res: Response) => {
    const { email, password } = req.body;
    const result = await loginUser_Service({email, password});
    return res.status(200).json(result);
};