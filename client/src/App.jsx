// import { Outlet } from "react-router-dom";
// import Header from"./components/Header"
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";


export const AuthContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {/* <header className="p-4 flex justify-between gap-8 shadow-md">
        <Link to="/" className="font-bold text-xl">
          Getch
        </Link>
        <nav className="flex gap-4">
          <Link to="/">Beranda</Link>
          <Link to="/prayer">Presensi Shalat</Link>
        </nav>
        {isLoggedIn ? (
          <Link className="bg-blue-500" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="bg-blue-500" to="/login">
            Login
          </Link>
        )}
      </header> */}
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </AuthContext.Provider>
  );
}
