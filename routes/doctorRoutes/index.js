import express from "express";
import Doctor from "../../db/models/doctorSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };

  const doctor = await Doctor.findOne({ username: body.username });
  if (doctor) {
    res.status(403).json({ messsage: "Username already taken" });
  }
  if (body.password !== body.confirmPassword) {
    res.status(403).json({ message: "Passwords dont match" });
  }
  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  await Doctor.create(body);

  res.status(201).json({ messsage: "Signup Succesfull" });
});

router.post("/login", (req, res) => {
  res.status(201).json({ messsage: "Login Suucessfull" });
});

export default router;
