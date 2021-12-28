import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
class Usuario {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  nome: string;
}

export { Usuario };
