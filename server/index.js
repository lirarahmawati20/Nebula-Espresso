import express from 'express';
import dotenv from 'dotenv';
import routerUser from "./routers/user-routers.js";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));
app.use(routerUser);

const PORT = process.env.PORT || 3000; // Menambahkan default port 3000 jika PORT tidak tersedia di environment variable

app.listen(PORT, () => console.log(`Server is running on https: //localhost:${PORT}`));