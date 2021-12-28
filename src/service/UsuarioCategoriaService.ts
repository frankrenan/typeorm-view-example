import { getCustomRepository } from "typeorm"
import { UsuarioCategoriaRepository } from "../repository/UsuarioCategoriaRepository"


class UsuarioCategoriaService{

  async execute(){

    const usuarioCategoriaRepository = getCustomRepository(UsuarioCategoriaRepository);

    return await usuarioCategoriaRepository.find();
  }

}

export {UsuarioCategoriaService}