import { Link } from "react-router-dom";
import { Boxes, CircleUser,  LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  Clock9,
  Home,
} from "lucide-react";


export default function Transaction() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [kasirs, setKasirs] = useState([]);
  const fetchKasirs = async () => {
    try {
      // Mengambil token akses dari localStorage
      const accessToken = localStorage.getItem("accessToken");

      // Menetapkan token bearer ke header Authorization
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Melakukan permintaan GET ke API dengan header yang ditetapkan
      const response = await axios.get(
        "http://localhost:3000/api/v1/getallkasir",
        config
      );
      setKasirs(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error.response.status === 403 || error.response.status === 401) {
        console.log("Jika 403, arahkan pengguna kembali ke halaman login");
        // Jika 403, arahkan pengguna kembali ke halaman login
        navigate("/login");
        //return;
      }
    }
  };
  useEffect(() => {
    fetchKasirs();
  }, []);


const handleDelete = async (kasirId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.delete(
      "http://localhost:3000/api/v1/deletekasir/" + kasirId,
      config
    );
    fetchKasirs();
    alert("delete Kasir berhasil");
  } catch (error) {
    console.error("Error delete Kasir", error);
     if (
       error.response &&
       (error.response.status === 403 || error.response.status === 401)
     ) {
       navigate("/login");
     }
  }
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
                <span className="links_name">Data kasir </span>
              </Link>
            </li>

            <li>
              <Link to="/AddKasir">
                <CircleUser size={25} />
                <span className="links_name">Tambah Kasir </span>
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
        <div className="tex-judul">Data kasir</div>
      </div>

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
          {kasirs.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="flex">
                <button className="delete-button" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
