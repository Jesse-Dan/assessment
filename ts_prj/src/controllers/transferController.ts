import { Request, Response, NextFunction } from "express";
import { TransferService } from "../services/transferService";
import logger from "../config/logger";

export const transferFunds = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { fromAccount, toAccount, amount } = req.body;

  try {
    const transaction = await TransferService.transferFunds(
      fromAccount,
      toAccount,
      amount,
    );
    res.status(200).json({
      message: "Transfer successful",
      transactionId: transaction.id,
      fromAccount,
      toAccount,
      amount,
    });
  } catch (error: any) {
    logger.error(`Transfer failed: ${error.message}`);
    next(error);
  }
};
