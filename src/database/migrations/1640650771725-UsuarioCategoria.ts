import { MigrationInterface, QueryRunner } from "typeorm";

export class UsuarioCategoria1640650771725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE VIEW usuario_categoria as SELECT u.id as id, u.nome as Nome, c.nome as categoriaNome FROM usuario u INNER JOIN categoria as c ON u.id = c.id_usuario"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP VIEW usuario_categoria");
  }
}
