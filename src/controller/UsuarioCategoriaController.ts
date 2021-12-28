import { Request, Response } from "express";
import { UsuarioCategoriaService } from "../service/UsuarioCategoriaService";

class UsuarioCategoriaController {
  async get(request: Request, response: Response) {
    const usuarioCategoriaService = new UsuarioCategoriaService();

    const usuarioCategoria = await usuarioCategoriaService.execute();

    return response.status(200).json(usuarioCategoria);
  }
}

export { UsuarioCategoriaController };
