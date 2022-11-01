import { Router } from "express";
import { createProperties } from "../../controllers/propiertes/createPropiertes.c";
import { listProperties } from "../../controllers/propiertes/listProperties.c";
import { verifyAdm } from "../../middlewares/verifyAdm";
import { verifyToken } from "../../middlewares/Verifytoken";

export const Router_Properties = Router();

Router_Properties.post("", verifyToken, verifyAdm, createProperties);
Router_Properties.get("", listProperties);
