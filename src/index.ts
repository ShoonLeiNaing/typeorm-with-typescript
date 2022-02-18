import { createConnection } from "typeorm";
import express from "express";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerAndClientRouter } from "./routes/connect_banker_and_client";
import { deleteClientRouter } from "./routes/delete_client";
import { getAllClientsRouter } from "./routes/fetch_clients";
import { fetchClientByIdRouter } from "./routes/fetch_client_by_id";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "shoonlei",
      password: undefined,
      database: "typeorm",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log("Database connect");

    //server and middleware
    app.use(express.json());
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerAndClientRouter);
    app.use(getAllClientsRouter);
    app.use(fetchClientByIdRouter);
    app.use(deleteClientRouter);
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to database");
  }
};
main();
