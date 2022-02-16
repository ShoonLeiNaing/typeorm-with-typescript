import express from "express";
import { Client } from "../entities/Client";
import { Transaction, TransactionTypes } from "../entities/Transaction";

const router = express.Router();
router.post("/api/client/:clientId/transaction", async (req, res) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;
  const client = await Client.findOne(parseInt(clientId));
  if (!client) {
    return res.json({
      message: "Client does not exist",
    });
  } else {
    const transaction = Transaction.create({
      amount,
      type,
      client,
    });
    await transaction.save();

    if (transaction.type === TransactionTypes.DEPOSIT) {
      client.balance = client?.balance + amount;
    } else if (transaction.type === TransactionTypes.WITHDRAW) {
      client.balance = client?.balance - amount;
    }
    await client.save();

    return res.json({
      message: "Transaction Completed",
    });
  }
});

export { router as createTransactionRouter };
