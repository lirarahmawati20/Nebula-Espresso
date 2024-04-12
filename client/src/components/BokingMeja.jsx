/* eslint-disable no-unused-vars */
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BokingMeja() {
  const [nomeja, setNomeja] = useState("");
  return (
    <div className="login-container">
      <div id="gambar-profil">
        <img
          src="https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png"
          alt="Profile"
        />
      </div>
      <h2 className="login"></h2>
      <div className="input-group">
        <label htmlFor="username">
          <UserRound size={45} className="icone-propil" />
        </label>
        <input id="username" type="text" placeholder="username" />
      </div>
      <div className="input-group">
        <label htmlFor="number">
          <UserRound size={45} className="icone-propil" />
        </label>
        <input
          id="number"
          type="text"
          placeholder="nomer meja"
          value={nomeja}
        />
      </div>
      <div className="button-bocking">
        <button onClick={(e) => setNomeja(nomeja + "1")}>1</button>
        <button onClick={(e) => setNomeja(nomeja + "2")}>2</button>
        <button onClick={(e) => setNomeja(nomeja + "3")}>3</button>
        <button onClick={(e) => setNomeja(nomeja + "4")}>4</button>
        <button onClick={(e) => setNomeja(nomeja + "5")}>5</button>
        <button onClick={(e) => setNomeja(nomeja + "6")}>6</button>
        <button onClick={(e) => setNomeja(nomeja + "7")}>7</button>
        <button onClick={(e) => setNomeja(nomeja + "8")}>8</button>
        <button onClick={(e) => setNomeja(nomeja + "0")}>0</button>
        <button onClick={(e) => setNomeja(nomeja + "9")}>9</button>
      </div>
      <div className="flex-container">
        <button type="submit">
          <Link to="/qrCode">Next</Link>
        </button>
        <p className="transaction-text">Transaksi Pembayaran</p>
      </div>
    </div>
  );
}
