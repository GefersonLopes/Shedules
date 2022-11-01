import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserLogin } from "../../interfaces/users";
import bcryptjs from "bcryptjs";
import { AppError } from "../../Errors/AppError";
import jwt from "jsonwebtoken";

export const loginUser_Service = async ({ email, password }: IUserLogin) => {
    const loginRepository = AppDataSource.getRepository(User);
    const users = await loginRepository.find();

    const user = users.find((user) => user.email === email);

    if(!user) throw new AppError(403,"Email invalid")
    const userPass = bcryptjs.compareSync(password, user!.password);
    if (!userPass) throw new AppError(403, "password invalid");

    const token = jwt.sign(
        {
            email: email,
            isAdm: user!.isAdm,
            id: user!.id,
        },
        process.env.SECRET_KEY as string,
        { expiresIn: "1d" }
    );

    return { token };
};
