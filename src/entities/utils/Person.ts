import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity() //decorator, for the table name 'client'
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column() //Column decorator
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
