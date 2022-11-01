import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categoriesEntity";
import { AppError } from "../../Errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategories_Service = async (name: string): Promise<ICategoryRequest> => {
    const createRepository = AppDataSource.getRepository(Categories);
    const categories = await createRepository.find();

    const categoryVerify = categories.find(c => c.name === name);
    if(categoryVerify) throw new AppError(400,"Category already exists");
    if(!name) throw new AppError(400, "name not null");

    const category = new Categories();
    category.name = name;

    createRepository.create(category);
    createRepository.save(category);

    return category;
};