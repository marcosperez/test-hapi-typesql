import { User } from "./user";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Direction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  altura: number;

  @Column("int")
  departamento?: number;

  @Column()
  calle: string;

  @Column()
  ciudad: boolean;

  @Column()
  provincia: string;

  @Column()
  pais: string;

  @OneToOne((type) => User, (User) => User.direction)
  user: User;
}
