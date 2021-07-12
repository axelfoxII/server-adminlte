import { Router } from "express";
import auth from "./auth";
import usuario from "./usuario";
const routes = Router();


// localhost:3000/auth/login
routes.use('/auth', auth);


// localhost:3000/usuario
routes.use('/usuarios', usuario);






export default routes;