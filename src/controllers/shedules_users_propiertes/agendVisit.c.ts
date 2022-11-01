import { Request, Response } from "express";
import { schedulingVisit_Service } from "../../services/shedules_users_propiertes/agendVisit.service";
import jwt from "jsonwebtoken";

export const schedulingVisit = async (req: Request, res: Response) => {
    const { date, hour, propertyId } = req.body;

    let userId: string = "";

    let token = req.headers.authorization;
    token = token!.split(" ")[1];

    jwt.verify(
        token,
        process.env.SECRET_KEY as string,
        (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: err.message });
            }
            userId = decoded.id;
        }
    );

    const result = await schedulingVisit_Service({
        date,
        hour,
        propertyId,
        userId,
    });

    return res.status(201).json({ message: result });
};
