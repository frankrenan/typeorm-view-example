import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Categoria1640646569173 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categoria",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "id_usuario",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKCategoriaUsuario",
            referencedTableName: "usuario",
            referencedColumnNames: ["id"],
            columnNames: ["id_usuario"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categoria");
  }
}
