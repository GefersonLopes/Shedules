import { Request, Response } from "express";
import { createAddresses_Service } from "../../services/addresses/createAddreses.service";

export const createAddresses = (req: Request, res: Response) => {
    const { district, zipCode, number, city, state } = req.body;
    const result = createAddresses_Service({
        district,
        zipCode,
        number,
        city,
        state,
    });

    return res.status(201).json(result);
};
