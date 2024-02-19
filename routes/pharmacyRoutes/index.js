import express from "express";
import Pharmacy from "../../db/models/pharmacySchema.js";

const router = express.Router();

router.post("/pharmacy", async (req, res) => {
  const body = { ...req.body };
  await Pharmacy.create(body);
  res.status(201).json({ message: "Medicine added Successfully" });
});

router.get("/pharmacy", async (req, res) => {
  const medicines = await Pharmacy.find();
  res.status(200).json(medicines);
});
``;

router.get("/pharmacy/:id", async (req, res) => {
  const { id } = req.params;
  const medicine = await Pharmacy.find(id);
  res.status(201).json(medicine);
});

router.delete("/pharmacy/:id", async (req, res) => {
  const { id } = req.params;
  await Pharmacy.findByIdAndDelete(id);
  res.status(201).json({ message: "Medicine Deleted" });
});

router.patch("/pharmacy/:id", async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  await Pharmacy.findByIdAndUpdate(id, data);
  res.status(200).json({ message: "Medicine Patched" });
});

export default router;
