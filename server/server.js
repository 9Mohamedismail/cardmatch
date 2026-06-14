import express from "express";
import "./config/dotenv.js";
import path from "path";
import { fileURLToPath } from "url";
import cardRouter from "./routes/cards.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientPublicPath = path.resolve(__dirname, "../client/public");

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/scripts", express.static(path.join(clientPublicPath, "scripts")));
app.use(express.static(clientPublicPath));

app.use("/cards", cardRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
