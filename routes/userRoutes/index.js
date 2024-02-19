import express from "express";
import User from "../../db/models/userSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };

  const user = await User.findOne({ username: body.username });
  if (user) {
    res.status(403).json({ message: "Username exists" });
  }
  if (body.password !== body.confirmPassword) {
    res.status(403).json({ message: "Password dont match" });
  }
  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  await User.create(body);

  res.status(200).json({ message: "Signup Successfull" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login Successfull" });
});

export default router;
