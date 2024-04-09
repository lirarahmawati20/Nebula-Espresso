// import { useState } from "react";
// import { FolderPlus } from "lucide-react";
// import Popup from "./Popup"; // Mengimpor komponen Popup yang telah dibuat sebelumnya

import { Link } from "react-router-dom";
import Header_Admin from "./Header_Admin";
import {
  BadgeDollarSign,
  Boxes,
  CircleUser,
  Clock9,

  Home,

  LogOut,

  NotebookPen,

} from "lucide-react";

const transactions = [
  {
    id: 1,
    user_id: 1,
    tanggal: "2024-04-05",
    no_transaction: "TRX001",
    total_price: 50,
    total_product: 3,
    created_at: "2024-04-05 10:00:00",
  },
  {
    id: 2,
    user_id: 2,
    tanggal: "2024-04-05",
    no_transaction: "TRX002",
    total_price: 35,
    total_product: 2,
    created_at: "2024-04-05 11:00:00",
  },
];

export default function Transaction() {


  return (
    <div>
      <div className="app">
        <div className="sidebar">
          <div className="logo-details">
            <span className="logo_name">
              {" "}
              <div className="flex w-1/2">
                <img
                  src="logo-removebg-preview.png"
                  alt="logo"
                  className="w-13 h-16 rounded-full top-4"
                />
                <h1 className="logo ">Espresso</h1>
              </div>
            </span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/home_admin" className="active">
                <Home size={25} />
                <span className="links_name">Dashboard</span>
              </Link>
            </li>

           
            <li>
              <Link to="/transaction" activeClassName="active">
                <Clock9 />
                <span className="links_name">Transaction</span>
              </Link>
            </li>

            <li>
              <Link to="/dtail_transaction">
                <BadgeDollarSign size={25} />
                <span className="links_name">Detail Transaction</span>
              </Link>
            </li>
           
            <li>
              <Link to="/data_kasir">
                <CircleUser size={25} />
                <span className="links_name">Data Kasir</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <LogOut size={25} />
                <span className="links_name" id="logout">
                  logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="judul-header-ke2">
        <div className="tex-judul">Transaction</div>
      </div>

      <table className="product-table-transaction">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Tanggal</th>
            <th>No. Transaksi</th>
            <th>Total Harga</th>
            <th>Total Produk</th>
            <th>Created_at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.user_id}</td>
              <td>{transaction.tanggal}</td>
              <td>{transaction.no_transaction}</td>
              <td>${transaction.total_price}</td>
              <td>{transaction.total_product}</td>
              <td>{transaction.created_at}</td>
              <td>
                {/* <button className="edit-button">Edit</button>{" "} */}
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
