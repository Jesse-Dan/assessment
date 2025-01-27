import TransferService from "../services/transferService";
import logger from "../config/logger";

const transferFunds = async (req, res, next) => {
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
  } catch (error) {
    logger.error(`Transfer failed: ${error.message}`);
    next(error);
  }
};

export default { transferFunds };
