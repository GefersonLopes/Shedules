import AppDataSource from "../../data-source";
import { Property } from "../../entities/propertiesEntity";
import { Schedules } from "../../entities/schedulesEntity";
import { AppError } from "../../Errors/AppError";

export const listSchedules_Service = async (id: string) => {
    const propertyRepository = AppDataSource.getRepository(Property);
    const schedulesRepository = AppDataSource.getRepository(Schedules);

    const property = await propertyRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!property) throw new AppError(404, "not found data");
    
    const schedule = await schedulesRepository.findOne({
        where: {
            property: property,
        },
    });
    if (!schedule) throw new AppError(404, "not found data");

    
    return property;
};
