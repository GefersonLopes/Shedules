import { Request, Response } from "express";
import { listSchedules_Service } from "../../services/shedules_users_propiertes/listVisit.service";

export const listSchedules = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await listSchedules_Service(id);

    return res.status(200).json(result);
};