import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Entity("categoria")
class Categoria {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  nome: string;

  @Column()
  id_usuario: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario;
}

export { Categoria };
