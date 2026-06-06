import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cardData from "../data/cards.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(cardData);
});

router.get("/:cardId", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../client/public/card.html"));
});

export default router;
