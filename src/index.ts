import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Person } from "./entities/utils/Person";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "shoonlei",
      password: undefined,
      database: "typeorm",
      entities: [Client, Banker, Person],
      synchronize: true,
    });
    console.log("Database connect");
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to database");
  }
};
main();
