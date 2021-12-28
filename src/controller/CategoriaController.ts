import { Request, Response } from "express";
import { CategoriaService } from "../service/CategoriaService";

class CategoriaController {
  async post(request: Request, response: Response) {
    const { id, nome, id_usuario } = request.body;

    const categoriaService = new CategoriaService();

    const categoria = await categoriaService.execute({  id, nome, id_usuario });

    return response.status(200).json(categoria);
  }
}

export { CategoriaController };
