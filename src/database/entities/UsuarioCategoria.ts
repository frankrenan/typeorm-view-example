import { ViewEntity, ViewColumn, Connection } from "typeorm";
import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select("u.id", "id")
      .addSelect("u.nome", "nome")
      .addSelect("c.nome", "catNome")
      .from(Usuario, "u")
      .innerJoin(Categoria, "c", "c.id_usuario = usuario.id"),
})
export class UsuarioCategoria {
  @ViewColumn()
  id: number;

  @ViewColumn()
  nome: string;

  @ViewColumn()
  categoriaNome: string;
}
