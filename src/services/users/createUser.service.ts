import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../Errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users";
import bcryptjs from "bcryptjs";
import { instanceToPlain } from "class-transformer"

export const createUser_Service = async ({name, email, password, isAdm}: IUserRequest): Promise<IUser> => {
    const createUserRepository = AppDataSource.getRepository(User);
    const users = await createUserRepository.find();

    const validationEmail = users.find(user => user.email === email);
    if(validationEmail) throw new AppError(400,"Email already exists");

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = bcryptjs.hashSync(password, 10);
    user.isAdm = isAdm;
    user.isActive = true;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    createUserRepository.create(user);
    await createUserRepository.save(user);
    return user;
};