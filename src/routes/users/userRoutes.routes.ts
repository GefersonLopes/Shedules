import { Router } from "express";
import { createUser } from "../../controllers/users/createUser.c";
import { deleteUser } from "../../controllers/users/deleteUser.c";
import { listUser } from "../../controllers/users/listUsers.c";
import { updateUser } from "../../controllers/users/updateUser.c";
import { verifyAdm } from "../../middlewares/verifyAdm";
import { verifyNotAdm } from "../../middlewares/verifyNotAdm";
import { verifyToken } from "../../middlewares/Verifytoken";

export const Router_Users = Router();

Router_Users.post("", createUser);
Router_Users.get("", verifyToken, verifyAdm, listUser);
Router_Users.patch("/:id", verifyToken, verifyNotAdm, updateUser);
Router_Users.delete("/:id", verifyToken, verifyAdm, deleteUser);
