import express from 'express';
import dotenv from 'dotenv';
import routerUser from "./routers/user-routers.js";
import cookieParser from 'cookie-parser';
import routerProduct from "./routers/product-routers.js";
import routerTransaction from "./routers/transaction-routers.js";
import cors from 'cors';


dotenv.config();

const app = express();


app.use(cors());
// Middleware
app.use(express.json());
app.use(cookieParser());


//app.use(express.static("public"));
app.use(routerUser);
app.use(routerProduct);
app.use(routerTransaction);




const PORT = process.env.PORT || 3000; // Menambahkan default port 3000 jika PORT tidak tersedia di environment variable

app.listen(PORT, () => console.log(`Server is running on https: //localhost:${PORT}`));