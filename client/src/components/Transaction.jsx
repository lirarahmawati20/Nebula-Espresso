import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BadgeDollarSign,
  Boxes,
  CircleUser,
  Clock9,
  Home,
  LogOut,
  ShoppingBasket,
} from "lucide-react";
import Detail_transaction from "./Detail_transaction";

export default function Transaction() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [transactionId, setTransactionId] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(
        "http://localhost:3000/api/v1/transaction",
        config
      );
      setTransactions(response.data.data);
    } catch (error) {
      console.error("Error fetching Transaction:", error);
      if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        navigate("/login");
      }
    }
  };

  const hendleDetail = (transaction) => {
    setTransactionId(transaction.id)
    setShowDetail(true);
  }

  return (
    <>
      {showDetail ? (
        <Detail_transaction transactionId={transactionId} />
      ) : (
        <div>
          <header>
            <div className="menu-icon" onClick={toggleSidebar}>
              <div className={`bar ${isSidebarOpen ? "rotate-up" : ""}`}></div>
              <div className={`bar ${isSidebarOpen ? "hide" : ""}`}></div>
              <div
                className={`bar ${isSidebarOpen ? "rotate-down" : ""}`}
              ></div>
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

                <li>
                  <Link to="/product">
                    <Boxes size={25} />
                    <span className="links_name">Prodact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transaction" activeClassName="active">
                    <Clock9 />
                    <span className="links_name">Transaction</span>
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

          {transactions.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <table className="product-table-transaction">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Tanggal</th>
                  <th>No. Transaksi</th>
                  <th>Total Harga</th>
                  <th>Total Produk</th>
                  <th>No Meja</th>
                  <th> status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.created_at}</td>
                    <td>{transaction.no_transaction}</td>
                    <td>${transaction.total_price}</td>
                    <td>{transaction.total_product}</td>
                    <td>{transaction.nomeja}</td>
                    <td>{transaction.status}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => hendleDetail(transaction)}
                      >
                        Deatil
                      </button>
                      {/* <button className="delete-button">Delete</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
}
