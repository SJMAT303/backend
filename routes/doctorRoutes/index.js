import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.status(201).json({ messsage: "Signup Succesfull" });
});

router.post("/login", (req, res) => {
  res.status(201).json({ messsage: "Login Suucessfull" });
});

export default router;
