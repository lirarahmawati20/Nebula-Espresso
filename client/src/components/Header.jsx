import { Link } from "react-router-dom";
import { NotebookPen, Home, CircleUser } from "lucide-react";
import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 90);
    });
  }, []);

  return (
    <header
      className={`py-4 px-6 flex items-center justify-between shadow-lg ${
        scroll ? "small" : ""
      }`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}
    >
      <div className="w-full flex items-center justify-between gap-4">
        {/* <UtensilsCrossed size={40} /> */}

        <div className="flex gap-4 w-1/2">
          <h1 className="logo">Espresso.com</h1>
        </div>
        <nav className="flex w-1/2">
          <ul className="flex w-full justify-evenly">
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <Home size={25} />
              <Link to="home" className="no-underline text-xl">
                Home
              </Link>
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <NotebookPen size={25} />
              <Link to="about" className="no-underline text-xl">
                About
              </Link>
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <CircleUser size={25} />
              <Link to="contac" className="no-underline  text-xl">
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
