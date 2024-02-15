import express from "express";
import cors from "cors";
import mongoose from "./db/connection.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(4000, () => {
  console.log("App is Running @hhtp://localhost:4000/");
});
