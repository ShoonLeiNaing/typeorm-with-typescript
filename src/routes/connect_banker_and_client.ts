import express from "express";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";

const router = express.Router();
router.put("/api/client/:clientId/banker/:bankerId", async (req, res) => {
  const { clientId, bankerId } = req.params;
  const client = await Client.findOne(parseInt(clientId));
  const banker = await Banker.findOne(parseInt(bankerId));

  if (!client || !banker) {
    return res.json({
      message: "Does not exist",
    });
  } else {
    banker.clients = [client];
    banker.save();
    return res.json({
      message: "Banker connected to client",
    });
  }
});

export { router as connectBankerAndClientRouter };
