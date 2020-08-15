import { User } from "./user";
import { Category } from "./category";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  precio: number;

  @Column("int")
  stock?: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  marca: string;

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  @ManyToMany((type) => Category, (category) => category.products)
  categorias: Category[];
}
