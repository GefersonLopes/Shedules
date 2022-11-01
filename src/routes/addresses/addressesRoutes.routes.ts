import { Router } from "express";
import { createAddresses } from "../../controllers/addresses/createAddresses.c";

export const Router_Addresses = Router();

Router_Addresses.post("", createAddresses)