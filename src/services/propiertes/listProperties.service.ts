import AppDataSource from "../../data-source";
import { Property } from "../../entities/propertiesEntity";
import { ICreatePropertyRequest } from "../../interfaces/properties";

export const listProperties_Service = async () => {
    const listRepository = AppDataSource.getRepository(Property);
    const list = await listRepository.find();

    return list;
};