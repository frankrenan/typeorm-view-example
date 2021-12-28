import { Request, Response } from "express";
import { UsuarioService } from "../service/UsuarioService";

class UsuarioController {
  async post(request: Request, response: Response) {
    const { id, nome } = request.body;

    const usuarioService = new UsuarioService();

    const usuario = await usuarioService.execute({ id, nome });

    return response.status(200).json(usuario);
  }
}

export { UsuarioController };
