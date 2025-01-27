import { Router } from "express";
import { transferFunds } from "../controllers/transferController";
import { validateTransfer } from "../middleware/validateTransfer";

const router = Router();

router.post("/transfer", validateTransfer, transferFunds);

export default router;
