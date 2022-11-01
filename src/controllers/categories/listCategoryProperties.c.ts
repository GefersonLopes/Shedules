import { Request, Response } from "express";
import { listCategoryProperties_Service } from "../../services/categories/listCategoryProperties.service";

export const listCategoryProperties = async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await listCategoryProperties_Service(id);
    return res.status(200).json(result);
};