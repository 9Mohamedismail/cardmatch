import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import CardsController from "../controllers/cards.js";
import cardData from "../data/cards.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", CardsController.getCards);

router.get("/:slug", (req, res) => {
  const card = cardData.find((c) => c.slug === req.params.slug);

  if (!card) {
    return res
      .status(404)
      .sendFile(path.resolve(__dirname, "../../client/public/404.html"));
  }

  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../client/public/card.html"));
});

export default router;
