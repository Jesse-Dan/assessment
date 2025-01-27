import { Router } from "express";
import { transferFunds } from '../controllers/transferController.js';
import { validateTransfer } from "../middleware/validateTransfer.js";

const router = Router();

router.post("/transfer", validateTransfer, transferFunds);

export default router;
