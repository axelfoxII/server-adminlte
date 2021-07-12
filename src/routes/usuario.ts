import { Router } from "express";
import UsuarioController from "../controller/UsuarioController";
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from "../middlewares/role";

const router = Router();

// Get all usuarios

router.get('/', [checkJwt, checkRole(['admin'])], UsuarioController.getAll);

// Get one usuario

router.get('/:id', [checkJwt, checkRole(['admin'])], UsuarioController.getById);

//New Usuario

router.post('/', UsuarioController.newUsuario);

//Edit usuario

router.put('/:id', [checkJwt, checkRole(['admin'])], UsuarioController.editUsuario);

// Delete usuario

router.delete('/:id', [checkJwt], checkRole(['admin']), UsuarioController.deleteUsuario);


export default router;