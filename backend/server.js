import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import exhibitionRoutes from "./routes/exhibitionRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/exhibitions", exhibitionRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.error("Error conectando a MongoDB:", error));

app.get("/", (req, res) => {
  res.json({ message: "API Agenda de Exposiciones funcionando" });
});

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});