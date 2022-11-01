import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUser } from "../../interfaces/users";

export const listUser_Service = async (): Promise<IUser[]> => {
    const listRepository = AppDataSource.getRepository(User);
    const users = await listRepository.find();
    return users;
};