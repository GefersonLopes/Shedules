import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categoriesEntity";
import { AppError } from "../../Errors/AppError";

export const listCategoryProperties_Service = async (id: string) => {
    const listJoinCategory = AppDataSource.getRepository(Categories);

    const category = await listJoinCategory.findOne({
        where: {
            id: id,
        },
        relations: {properties: true},
    });

    if(!category) throw new AppError(404, "Category not found");

    return category;
};
