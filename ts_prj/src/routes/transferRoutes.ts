import express from "express";
import { transferFunds } from "../controllers/transferController";
import { validateTransfer } from "../middleware/validateTransfer";

const router = express.Router();

router.post("/transfer", validateTransfer, transferFunds);

export default router;