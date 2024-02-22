import express from "express";
import Slot from "../../db/models/slotSchema.js";
import checkTokens from "../../middlewares/checktoken.js";

const router = express.Router();

//add slot by doctor === doctor route
router.post("/", checkTokens(["DOCTOR"]), async (req, res) => {
  const body = { ...req.body };
  await Slot.insertmany(body);
  res.status(201).json({ message: "Slots Addeed" });
});

//list slots by doctor === user route
router.get("/doctor/:id", checkTokens(["DOCTOR", "USER"]), async (req, res) => {
  const { id } = req.params;
  const slots = await Slot.find({ doctor: id });
  res.status(200).json(slots);
});

export default router;
