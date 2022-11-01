import { Request, Response } from "express";
import { createCategories_Service } from "../../services/categories/createCategories.service";

export const createCategories = async (req: Request, res: Response) => {
    const { name } = req.body; 
    const result = await createCategories_Service(name);

    return res.status(201).json(result);
}; 