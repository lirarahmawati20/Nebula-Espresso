// controllers/product.js
import {
    pool
}
from "../db.js";
import multer from "multer"
const upload = multer({
    dest: "public/images"
})

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/'); // Direktori tempat menyimpan gambar
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // Nama file yang disimpan
//     }
// });

// const upload = multer({
//     storage: storage
// }).single('image');

// Create a new product
export const newProduct = async (req, res) => {
    try {
        const {
            product_name,
            price,
            stock,
            image
        } = req.body;
        const result = await pool.query(
            "INSERT INTO Product (product_name, image, price, stock) VALUES ($1, $2, $3, $4) RETURNING *",
            [product_name, image, price, stock]
        );
        res.json({
            product: result.rows[0],
            message: "Product successfully added.",
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

// Get all products
export const getAllProducts = async (_req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Product");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

// Get product by ID
export const getProductById = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Product WHERE id = $1", [
            req.params.id,
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

// Update product
export const updateProduct = async (req, res) => {
    try {
        const {
            product_name,
            image,
            price,
            stock
        } = req.body;
        await pool.query(
            "UPDATE Product SET product_name = $1, image = $2, price = $3, stock = $4 WHERE id = $5",
            [product_name, image, price, stock, req.params.id]
        );
        res.status(200).json({
            message: "Product successfully updated.",
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

// Delete product by ID
export const deleteProductById = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await pool.query(
            "DELETE FROM Product WHERE id = $1",
            [id]
        );
        res.status(200).json({
            message: "Product successfully deleted.",
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};