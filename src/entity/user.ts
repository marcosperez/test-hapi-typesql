import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Direction } from "./direction";
import { Product } from "./product";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  enabled: boolean;

  @OneToOne((type) => Direction, {
    cascade: true,
  })
  @JoinColumn()
  direction: Direction;

  @OneToMany((type) => Product, (product) => product.user) // note: we will create author property in the Photo class below
  products: Product[];
}
