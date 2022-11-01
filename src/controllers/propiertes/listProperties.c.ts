import { Request, Response } from "express";
import { listProperties_Service } from "../../services/propiertes/listProperties.service";

export const listProperties = async ( req: Request, res: Response) => {
    const result = await listProperties_Service();
    
    return res.status(200).json(result);
};