import { Entity, Column, OneToMany, ManyToMany } from "typeorm";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";

@Entity("client") //decorator, for the table name 'client'
export class Client extends Person {
  @Column({
    type: "numeric",
  })
  balance: number;

  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  addtional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @ManyToMany(() => Banker)
  bankers: Banker[];

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];
}
