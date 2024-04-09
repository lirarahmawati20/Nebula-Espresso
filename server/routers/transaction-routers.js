import express from "express";
import {
    getTransaction,
    getTransactionById,
    postTransaction
} from '../controllers/transaction.js';

import {
    getAllProducts
}
from "../controllers/product.js";
const router = express.Router();

router.get("/api/v1/transaction", getTransaction);
router.get("/api/v1/transaction/:id", getTransactionById);
router.post("/api/v1/transaction", postTransaction);

router.get("/api/v1/listProduct", getAllProducts);
export default router;