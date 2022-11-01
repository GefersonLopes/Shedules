import { Request, Response } from "express";
import { deleteUser_Service } from "../../services/users/deleteUser.service";

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await deleteUser_Service(id);
    return res.status(204).json(result);
};