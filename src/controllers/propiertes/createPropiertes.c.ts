import { Request, Response } from "express";
import { createProperty_Service } from "../../services/propiertes/createPropiertes.service";

export const createProperties = async (req: Request, res: Response) => {
    const { value, size, address, categoryId } = req.body;
    
    const result = await createProperty_Service({
        value,
        size,
        address,
        categoryId,
    });
    // console.log(result);
    return res.status(201).json(result);
};
