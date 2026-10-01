import express from "express";
import Exhibition from "../models/Exhibition.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const exhibitions = await Exhibition.find();
  res.json(exhibitions);
});

router.post("/", async (req, res) => {
  const exhibition = new Exhibition(req.body);

  const savedExhibition = await exhibition.save();

  res.status(201).json(savedExhibition);
});

router.delete("/:id", async (req, res) => {
  await Exhibition.findByIdAndDelete(req.params.id);

  res.json({ message: "Exposición eliminada" });
});

router.put("/:id", async (req, res) => {

  const updatedExhibition = await Exhibition.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedExhibition);
});

export default router;