import { Router } from "express";

import { CategoriaController } from "./controller/CategoriaController";
import { UsuarioController } from "./controller/UsuarioController";
import { UsuarioCategoriaController } from "./controller/UsuarioCategoriaController";

const router = Router();

const usuarioController = new UsuarioController();
const categoriaController = new CategoriaController();
const usuariocategoriaController = new UsuarioCategoriaController();

router.post("/usuario", usuarioController.post);
router.post("/categoria", categoriaController.post);
router.get("/usuario_categoria", usuariocategoriaController.get);

export default router;
