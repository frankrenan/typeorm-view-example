import { EntityRepository, Repository } from "typeorm";
import { UsuarioCategoria } from "../database/entities/UsuarioCategoria";

@EntityRepository(UsuarioCategoria)
class UsuarioCategoriaRepository extends Repository<UsuarioCategoria> {}

export { UsuarioCategoriaRepository };
