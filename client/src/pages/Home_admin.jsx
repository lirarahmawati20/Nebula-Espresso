import { Link } from "react-router-dom";
// import Add_prodact from "../components/Add_prodact";
// import Header from "../components/Header";
import Product from "../components/Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BadgeDollarSign,
  Boxes,
  CircleUser,
  Clock9,
  // Facebook,
  // Github,
  Home,
  // Instagram,
  LogOut,
  // LucideNotebookTabs,
  // NotebookPen,
  // PhoneCall,
  Users,
  Clock3,
  ListOrdered,
} from "lucide-react";
// import { NotebookPen CircleUser } from "lucide-react";

export default function Home_admin() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessTokenExpiresIn");
      // Redirect atau lakukan tindakan lain setelah logout berhasil
      console.log("Logout berhasil");
      navigate("/login");
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <>
      {/* <Header /> */}
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
              <button onClick={handleLogout} className="flex gap-4">
                <LogOut size={25} />

                <span className="links_name" id="logout">
                  logout
                </span>
              </button>
            </li>
            <li>
              <Link to="/add_prodact">
                <CircleUser size={25} />
                <span className="links_name">add prodact</span>
              </Link>
            </li>
          </ul>
        </div>
        <section className="home-section">
          {/* <nav>
          <div className="sidebar-button sidebarBtn">
            <i className="bx bxs-grid"></i>
            <span className="dashboard">Dashboard</span>
          </div>
        </nav> */}

          <div className="judul-header">
            <div className="tex-judul">Dashboard</div>
          </div>

          <div className="carousel">
            <div id="item4">
              <img src="/images/dasbord2.jpeg" />
            </div>
          </div>

          <div className="home-content">
            <div className="overview-boxes">
              <div className="box-1">
                <div className="right-side">
                  <div className="number">90%</div>
                  <div className="box-topic">product</div>

                  {/* <div className="indicator">
              <span className="text">more info</span>
                <Link to="/kasir">
                  <i className="bx bxs-right-arrow-circle bx-tada bx-flip-vertical"></i>
                </Link>
            </div> */}
                </div>
                <i className="bx">
                  <Boxes size={90} />
                </i>
              </div>

              <div className="box-2">
                <div className="right-side">
                  <div className="number">90%</div>
                  <div className="box-topic">orders</div>
                  {/* <div className="indicator">
                    <span className="text">more info</span>
                    <Link to="/about">
                      {" "}
                      <i className="bx bxs-right-arrow-circle bx-tada bx-flip-vertical"></i>
                    </Link>
                  </div> */}
                </div>
                <i className="bx">
                  <ListOrdered size={90} />
                </i>
              </div>
              <div className="box-3">
                <div className="right-side">
                  <div className="number">70%</div>
                  <div className="box-topic">History</div>

                  {/* <div className="indicator">
                    <span className="text">more info</span>
                    <Link to="/data-kasir/add-kasir">
                      <i className="bx bxs-right-arrow-circle bx-tada bx-flip-vertical"></i>
                    </Link>
                  </div> */}
                </div>
                <i className="bx">
                  <Clock3 size={90} />
                </i>
              </div>

              <div className="box-4">
                <div className="right-side">
                  <div className="number">65%</div>
                  <div className="box-topic">unique visitors</div>
                  {/* <div className="indicator">
                    <span className="text">more info</span>
                    <Link to="">
                      <i className="bx bxs-right-arrow-circle bx-tada bx-flip-vertical"></i>
                    </Link>
                  </div> */}
                </div>
                <i className="bx">
                  <Users size={80} />
                </i>
              </div>
            </div>
          </div>
          <div className="judul-header2 ">
            <div className="tex-judul">All Product</div>
          </div>
          <Product />
        </section>
      </div>
    </>
  );
}
