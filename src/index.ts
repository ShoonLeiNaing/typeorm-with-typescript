import { createConnection } from "typeorm";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "shoonlei",
      password: undefined,
      database: "typeorm",
    });
    console.log("Database connect");
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to database");
  }
};
main();
