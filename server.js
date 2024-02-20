import express from "express";
import cors from "cors";
import mongoose from "./db/connection.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("App is Running @hhtp://localhost:4000/");
});
