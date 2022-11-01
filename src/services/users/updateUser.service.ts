import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../Errors/AppError";
import { IUser, IUserUpdate } from "../../interfaces/users";

export const updateUser_Service = async (
    { name, email, password }: IUserUpdate,
    id: string | boolean
): Promise<IUser> => {
    const updateRepository = AppDataSource.getRepository(User);
    const users = await updateRepository.find();

    const user = users.find((u) => u.id === id);
    const userEmail = users.find((u) => u.email === email);
    if (!user) throw new AppError(404, `User not found`);
    if (userEmail) throw new AppError(400, "User already exists");

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;
    await updateRepository.save(user);
    return user;
};
