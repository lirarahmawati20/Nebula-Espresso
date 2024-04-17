// routes/product.js
import express from "express";
import multer from "multer";
import {
  newProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProductById,
} from "../controllers/product.js";
import { verifyToken } from "../middleware/verifyToken.js";

const upload = multer({
  dest: "public/images",
});

const router = express.Router();

router.post("/api/v1/newProduct", newProduct);
router.get("/api/v1/getAllProducts", getAllProducts);
router.get("/api/v1/getProductById/:id", getProductById);
router.put("/api/v1/updateProduct/:id", updateProduct);
router.delete("/api/v1/deleteProductById/:id", deleteProductById);

export default router;
