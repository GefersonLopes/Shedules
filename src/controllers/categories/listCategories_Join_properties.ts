import { Request, Response } from "express";
import { listCategories_service } from "../../services/categories/listCategories_Join_properties.service";

export const listCategories = async (req: Request, res: Response) => {
    const result = await listCategories_service();
    return res.status(200).json(result);
}; 