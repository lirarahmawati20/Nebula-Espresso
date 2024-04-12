// import React from "react";
import { Link } from "react-router-dom";
// import Header_Admin from "./Header_Admin";
import { CircleUser, LogOut } from "lucide-react";
import { useState } from "react";

import {
  BadgeDollarSign,
  Clock9,
  Home,
} from "lucide-react";
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    level: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    level: "User",
  },
];

export default function Transaction() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <header>
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className={`bar ${isSidebarOpen ? "rotate-up" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "hide" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "rotate-down" : ""}`}></div>
        </div>
      </header>

      <div className={`app ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidebar">
          <div className="logo-details">
            <span className="logo_name">
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

            {/* <li>
              <Link to="/product">
                <Boxes size={25} />
                <span className="links_name">Product</span>
              </Link>
            </li> */}

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
                <span className="links_name">Data kasir </span>
              </Link>
            </li>
            {/* <li>
              <Link to="../../product">
                <CircleUser size={25} />
                <span className="links_name">Contact</span>
              </Link>
            </li> */}
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
        <div className="tex-judul">Data kasir</div>
      </div>

      {/* Tabel */}
      <table className="product-table-transaction">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Level</th>
            <th colSpan="2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.level}</td>
              <td className="flex">
                <button className="edit-button">Edit</button>{" "}
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
