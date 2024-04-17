import express from "express";
import {
  getTransaction,
  getTransactionById,
  postTransaction,
  updateToSelesai,
  updateToPaid,
  updateToProccess,
} from "../controllers/transaction.js";

import { getTransactionDetailByTransaction } from "../controllers/transaction-detail.js";

import { getAllProducts } from "../controllers/product.js";
import { verifyTokenKasir } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/api/v1/transaction", getTransaction);
router.get("/api/v1/transaction/:id", getTransactionById);
router.post("/api/v1/transaction", postTransaction);
router.put("/api/v1/transaction/paid/:id", updateToPaid);

router.put(
  "/api/v1/transaction/selasai/:id",
  verifyTokenKasir,
  updateToSelesai
);
router.put(
  "/api/v1/transaction/proccess/:id",
  verifyTokenKasir,
  updateToProccess
);

router.get("/api/v1/transactiondetail/:id", getTransactionDetailByTransaction);

router.get("/api/v1/listProduct", getAllProducts);
export default router;
