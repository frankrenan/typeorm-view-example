import { EntityRepository, Repository } from "typeorm";
import { Categoria } from "../database/entities/Categoria";

@EntityRepository(Categoria)
class CategoriaRepository extends Repository<Categoria> {}

export { CategoriaRepository };
