import { getCustomRepository } from "typeorm";
import { UsuarioRepository } from "../repository/UsuarioRepository";


interface IUsuarioRequest {
  id: number;
  nome: string;
}

class UsuarioService {
  async execute({ id, nome }: IUsuarioRequest) {
    const usuarioRepository = getCustomRepository(UsuarioRepository);

    const usuario = await usuarioRepository.save({ id, nome });

    return usuario;
  }
}

export { UsuarioService };
