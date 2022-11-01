import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../Errors/AppError";

export const deleteUser_Service = async (id: string) => {
    const deleteRepository = AppDataSource.getRepository(User);
    const users = await deleteRepository.find();
    
    const user = users.find(user => user.id === id);
    if(!user) throw new AppError(404,`User not found`);
    if(!user.isActive) throw new AppError(400,`User is not active`);
    user.isActive=false;
    await deleteRepository.save(user);

};