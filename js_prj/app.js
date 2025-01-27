import express from "express";
import { json } from "body-parser";
import { config } from "dotenv";
import logger from "./src/config/logger.js";
import transferRoutes from "./src/routes/transferRoutes.js";

config();
const app = express();
app.use(json());

app.use("/api", transferRoutes);

app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
