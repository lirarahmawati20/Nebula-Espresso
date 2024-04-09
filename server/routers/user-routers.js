import express from "express";
import {
    register,
    login,
    refresh,
    testToken
} from "../controllers/user.js";

import {
    verifyToken
} from '../middleware/verifyToken.js';

const router = express.Router();

router.post("/api/v1/register", register);
router.post("/api/v1/login", login);
router.post("/api/v1/refresh-token", refresh);

router.get("/api/v1/protected", verifyToken, testToken);

router.post('/api/v1/logout', (req, res) => {
    // Di sini Anda dapat melakukan beberapa tindakan yang diperlukan saat logout
    // Misalnya, menghapus token dari cookie atau database sesuai dengan implementasi autentikasi Anda
    res.clearCookie('accessToken'); // Contoh jika menggunakan cookie untuk menyimpan token
    res.json({
        message: 'Logout berhasil'
    });
});




export default router;