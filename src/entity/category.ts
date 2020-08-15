import { User } from "./user";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./product";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToMany((type) => Product, (product) => product.categorias)
  @JoinTable()
  products: Product[];
}
