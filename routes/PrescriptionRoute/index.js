import express from "express";
import checkTokens from "../../middlewares/checktoken.js";
import Prescription from "../../db/models/prescriptionSchema.js";
import Pharmacy from "../../db/models/pharmacySchema.js";

const router = express.Router();

//add prscription by doctor
router.post("/doctor", checkTokens(["DOCTOR"]), async (req, res) => {
  const body = { ...req.body };
  const prescription = await Prescription.create(body);
  res.status(201).json({ message: "Prescription Added" });
});

//list prescription by appointment id
router.get(
  "/appointment/:id",
  checkTokens(["DOCTOR", "USER"]),
  async (req, res) => {
    const { id } = req.params;
    const prescription = Prescription.find({ appointmnet: id });
    res.status(200).json(prescription);
  }
);

//list medicine using prescription id
router.get(
  "/pharmacy/appointment/:id",
  checkTokens(["DOCTOR,USER"]),
  async (req, res) => {
    const { id } = req.params;
    const prescription = Prescription.findOne({ appointmnet: id });
    const medicines = await Pharmacy.find({
      _id: { $in: prescription.medication },
    });
    res.status(200).json(medicines);
  }
);

export default router;
