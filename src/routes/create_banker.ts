import express from "express";
import { Banker } from "./../entities/Banker";

const router = express.Router();

router.post("/api/create-banker", async (req, res) => {
  const { firstName, lastName, email, employeeNumber } = req.body;
  const banker = Banker.create({
    first_name: firstName,
    last_name: lastName,
    email,
    employee_number: employeeNumber,
  });
  await banker.save();
  return res.json(banker);
});

export { router as createBankerRouter };
