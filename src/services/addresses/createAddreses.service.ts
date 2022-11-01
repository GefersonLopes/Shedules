import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresesEntity";
import { IAddressRequest } from "../../interfaces/properties";

export const createAddresses_Service = ({district, zipCode, number, city, state}: IAddressRequest) => {
    const addressesRepository = AppDataSource.getRepository(Addresses);
    const addresses = addressesRepository.find();

    const newAddress = new Addresses();
    newAddress.district = district;
    newAddress.zipCode = zipCode;
    newAddress.number = number || "";
    newAddress.city = city;
    newAddress.state = state;
    
    addressesRepository.create(newAddress);
    addressesRepository.save(newAddress);

    return newAddress;
};