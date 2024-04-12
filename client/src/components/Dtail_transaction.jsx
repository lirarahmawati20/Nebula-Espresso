import {
  BadgeDollarSign,
  Boxes,
  CircleUser,
  Clock9,
  Home,
  LogOut,
  NotebookPen,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const transactionDetails = [
  {
    id: 1,
    product_name: "Product 1",
    product_price: 10,
    amount: 2,
    total_price: 20,
    id_transaction: 1,
    created_at: "2024-04-05 10:30:00",
  },
  {
    id: 2,
    product_name: "Product 2",
    product_price: 15,
    amount: 3,
    total_price: 45,
    id_transaction: 2,
    created_at: "2024-04-05 11:15:00",
  },
];

export default function Dtail_transaction() {
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
              <Link to="/detail_transaction">
                <BadgeDollarSign size={25} />
                <span className="links_name">Detail Transaction</span>
              </Link>
            </li>
            {/* <li>
              <Link to="../../product">
                <NotebookPen size={25} />
                <span className="links_name">About </span>
              </Link>
            </li> */}
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
        <div className="tex-judul">Detail Transaction</div>
      </div>

      <table className="product-table-transaction">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Transaction ID</th>
            <th>Created_at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.product_name}</td>
              <td>${detail.product_price}</td>
              <td>{detail.amount}</td>
              <td>${detail.total_price}</td>
              <td>{detail.id_transaction}</td>
              <td>{detail.created_at}</td>
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
