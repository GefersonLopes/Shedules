import { Request, Response } from "express";
import { AppError } from "../../Errors/AppError";
import { updateUser_Service } from "../../services/users/updateUser.service";

export const updateUser = async (req: Request, res: Response) => {
    const { name, email, password, isAdm, isActive, id } = req.body;
    if (isActive === false || isAdm === false || id === false)
        throw new AppError(401, "Error");
    const uuid = req.params.id;
    const result = await updateUser_Service({ name, email, password }, uuid);
    return res.status(200).json(result);
};
