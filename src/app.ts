import "reflect-metadata"
import "express-async-errors"
import express, { request, response } from "express"
import { Router_Users } from "./routes/users/userRoutes.routes"
import { error } from "./middlewares/Error"
import { loginUser } from "./controllers/users/loginUser.c"
import { Router_Categories } from "./routes/categories/categoriesRoutes.routes"
import { Router_schedules } from "./routes/shedules_users_propiertes/visitRoutes.routes"
import { Router_Properties } from "./routes/properties/propiertesRoutes.routes"
import { Router_Addresses } from "./routes/addresses/addressesRoutes.routes"


const app = express()
app.use(express.json())

app.use("/users", Router_Users);
app.post("/login",loginUser);
app.use("/categories", Router_Categories);
app.use("/schedules", Router_schedules);
app.use("/properties", Router_Properties);
app.use("/addresses", Router_Addresses);

app.get("", (request,response) => response.send("Olá"))

app.use(error);

export default app