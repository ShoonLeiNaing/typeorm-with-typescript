import { Entity, Column } from "typeorm";
import { Person } from "./utils/Person";

@Entity("banker") //decorator, for the table name 'client'
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;
}
