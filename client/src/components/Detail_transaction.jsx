import {
  Boxes,
  CircleUser,
  Clock9,
  Home,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Detail_transaction(transactionId) {
  const id = transactionId.transactionId;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [transactionDetails, setTransactionDetails] = useState([]);
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
        "http://localhost:3000/api/v1/transactiondetail/"+id,
        config
      );
      setTransactionDetails(response.data.data);
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
        <div className="tex-judul">Detail Transaction</div>
      </div>

      <table className="product-table-transaction">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gambar</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Transaction ID</th>
            <th>Created_at</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>
                <img
                  src={detail.image}
                  alt={detail.image}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{detail.product_name}</td>
              <td>${detail.product_price}</td>
              <td>{detail.amount}</td>
              <td>${detail.total_price}</td>
              <td>{detail.id_transaction}</td>
              <td>{detail.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


