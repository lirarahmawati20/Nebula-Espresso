import { BadgeDollarSign, Boxes, LogOut, LucideNotebookTabs,Home } from "lucide-react";
import { Link} from "react-router-dom";
import Header from "./Header";


export default function Header_Admin(){
return (
  <>

    <div className="app">
      <div className="sidebar">
        

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
              <span className="links_name">Product</span>
            </Link>
          </li>
          <li>
            <Link to="../components/product" activeClassName="active">
              <BadgeDollarSign size={25} />
              <span className="links_name">Transaction</span>
            </Link>
          </li>
          <li>
            {/* <a href="">hello</a> */}
            <Link to="../../product">
              <LucideNotebookTabs size={25} />
              <span className="links_name">Detail Transaction</span>
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
  </>
);
}
    