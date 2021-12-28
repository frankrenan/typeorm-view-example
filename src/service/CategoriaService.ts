import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../repository/CategoriaRepository";

interface ICategoriaRequest {
  id: number;
  nome: string;
  id_usuario: number;
}

class CategoriaService {
  async execute({ id, nome, id_usuario }: ICategoriaRequest) {
    const categoriaRepository = getCustomRepository(CategoriaRepository);

    const categoria = await categoriaRepository.save({ id, nome, id_usuario });

    return categoria;
  }
}

export { CategoriaService };
