import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "enum",
    enum: TransactionTypes,
  })
  type: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  @ManyToOne(() => Client, (client) => client.transactions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "client_id", //primary key
  })
  client: Client;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
