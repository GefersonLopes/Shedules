import { Router } from "express";
import { schedulingVisit } from "../../controllers/shedules_users_propiertes/agendVisit.c";
import { listSchedules } from "../../controllers/shedules_users_propiertes/listVisit.cc";
import { verifyAdm } from "../../middlewares/verifyAdm";
import { verifyToken } from "../../middlewares/Verifytoken";

export const Router_schedules = Router();

Router_schedules.post("", verifyToken,schedulingVisit);
Router_schedules.get("/properties/:id", verifyToken, verifyAdm, listSchedules);
