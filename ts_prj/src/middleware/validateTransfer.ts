import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";

export const validateTransfer = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { fromAccount, toAccount, amount } = req.body;
  if (!fromAccount) {
    logger.warn("Missing required fields");
    res.status(400).json({
      error: "Missing required fields: fromAccount"
    });
    return;
  }
  if (!toAccount) {
    logger.warn("Missing required fields");
    res.status(400).json({
      error: "Missing required fields: toAccount"
    });
    return;
  }
  if (!amount) {
    logger.warn("Missing required fields");
    res.status(400).json({
      error: "Missing required fields: amount"
    });
    return;
  }

  if (typeof amount !== "number" || amount <= 0) {
    logger.warn("Invalid amount");
    res.status(400).json({ error: "Amount must be a positive number" });
    return;
  }

  if (fromAccount === toAccount) {
    logger.warn("Cannot transfer to the same account");
    res.status(400).json({ error: "Cannot transfer to the same account" });
    return;
  }

  next();
};