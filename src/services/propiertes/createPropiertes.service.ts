import AppDataSource from "../../data-source";
import { Property } from "../../entities/propertiesEntity";
import { AppError } from "../../Errors/AppError";
import {
    ICreatePropertyRequest,
    IPropertyRequest,
} from "../../interfaces/properties";
import { Categories } from "../../entities/categoriesEntity";
import { Addresses } from "../../entities/addresesEntity";

export const createProperty_Service = async ({
    value,
    size,
    address,
    categoryId,
}: IPropertyRequest) => {
    const createPropertyRepository = AppDataSource.getRepository(Property);
    const categoryRepository = AppDataSource.getRepository(Categories);
    const addressRepository = AppDataSource.getRepository(Addresses);

    const createProperties = await createPropertyRepository.find();

    const newAddress = addressRepository.create({ ...address });
    await addressRepository.save(newAddress);

    const properties = createProperties.find(
        (p) =>
            p.address.city === address.city &&
            p.address.district === address.district &&
            p.address.number === address.number &&
            p.address.state === address.state &&
            p.address.zipCode === address.zipCode
    );
    /*  */
    const verify = createProperties.find((p) => p === properties);
    if (verify) throw new AppError(400, "Address already exists");

    const category = await categoryRepository.findOne({
        where: { id: categoryId },
    });
    if (!category) throw new AppError(404, "Category not found");
    if (address.state.length > 2 || address.zipCode.length > 8)
        throw new AppError(400, "State or ZipCode very long");

    const newCategory = categoryRepository.create({ ...category });
    await categoryRepository.save(newCategory);

    const property = new Property();
    property.value = value;
    property.address = newAddress;
    property.size = size;
    property.categories = category;
    property.sold = false;
    property.createdAt = new Date();
    property.updatedAt = new Date();

    createPropertyRepository.create(property);
    await createPropertyRepository.save(property);
    return property;
};
