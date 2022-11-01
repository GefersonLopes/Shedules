import { Router } from "express";
import { createCategories } from "../../controllers/categories/createCategories.c";
import { listCategories } from "../../controllers/categories/listCategories_Join_properties";
import { listCategoryProperties } from "../../controllers/categories/listCategoryProperties.c";

import { verifyAdm } from "../../middlewares/verifyAdm";
import { verifyToken } from "../../middlewares/Verifytoken";

export const Router_Categories = Router();

Router_Categories.post("", verifyToken, verifyAdm, createCategories);
Router_Categories.get("", listCategories);
Router_Categories.get("/:id/properties", listCategoryProperties);

