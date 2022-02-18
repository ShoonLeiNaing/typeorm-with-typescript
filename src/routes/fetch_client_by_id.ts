import express from "express";
import { Client } from "../entities/Client";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/client/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const client = await createQueryBuilder("client")
    .select("client.first_name")
    .addSelect("client.last_name")
    .addSelect("client.balance")
    .from(Client, "client")
    .leftJoinAndSelect("client.transactions", "transactions")
    .where("client.id=:clientId", { clientId: clientId })
    .getOne();
  return res.json(client);
});

export { router as fetchClientByIdRouter };
