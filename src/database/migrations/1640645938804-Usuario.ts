import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Usuario1640645938804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuario",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
