import { logger } from "../config/logger.js";

export const validateTransfer = (req, res, next) => {
  const { fromAccount, toAccount, amount } = req.body;

  if (!fromAccount || !toAccount || !amount) {
    logger.error("Missing required fields");
    return res.status(400).json({
      error: "Missing required fields: fromAccount, toAccount, amount",
    });
  }

  if (typeof amount !== "number" || amount <= 0) {
    logger.error("Invalid amount");
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  if (fromAccount === toAccount) {
    logger.error("Cannot transfer to the same account");
    return res
      .status(400)
      .json({ error: "Cannot transfer to the same account" });
  }

  next();
};

