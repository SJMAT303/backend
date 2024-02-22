import express from "express";
import Department from "../../db/models/departmentSchema.js";
import checkTokens from "../../middlewares/checktoken.js";
import Doctor from "../../db/models/doctorSchema.js";

const router = express.Router();

//add a department
router.post("/", checkTokens(["DOCTOR", "USER"]), async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department added Successfully" });
});

//list all departments
router.get("/", checkTokens, async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

//list doctors by department
router.get("/doctor/:id", checkTokens(["USER"]), async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.find({ department: id });
  res.status(201).json(doctor);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Department.findByIdAndDelete(id);
  res.status(201).json({ message: "Department Deleted" });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  await Department.findByIdAndUpdate(id, data);
  res.status(200).json({ message: "Department Patched" });
});

export default router;
