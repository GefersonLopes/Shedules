import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categoriesEntity";
import { ICategoryRequest } from "../../interfaces/categories";

export const listCategories_service = async (): Promise<ICategoryRequest[]> => {
    const listRepository = AppDataSource.getRepository(Categories);
    const categories = await listRepository.find();

    return categories;
};