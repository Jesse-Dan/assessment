import { warn } from "../config/logger";

const validateTransfer = (req, res, next) => {
  const { fromAccount, toAccount, amount } = req.body;

  if (!fromAccount || !toAccount || !amount) {
    warn("Missing required fields");
    return res.status(400).json({
      error: "Missing required fields: fromAccount, toAccount, amount",
    });
  }

  if (typeof amount !== "number" || amount <= 0) {
    warn("Invalid amount");
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  if (fromAccount === toAccount) {
    warn("Cannot transfer to the same account");
    return res
      .status(400)
      .json({ error: "Cannot transfer to the same account" });
  }

  next();
};

export default validateTransfer;
