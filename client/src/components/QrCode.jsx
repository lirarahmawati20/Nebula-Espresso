import { Link } from "react-router-dom";

export default function QrCode() {
  return (
    <>
      <div className="login-container">
        <div className="judulScan">
          <h1>Scan Disini </h1>
          <h4>Untuk Melakuan Transaksi Pembayaran</h4>
        </div>

        <div className="center-container">
          <img src="qrcode.png" alt="QR Code" />
        </div>
        <div className="center-container-button">
          <button>
            <Link to="/loading"> selesai</Link>
          </button>
        </div>
      </div>
    </>
  );
}
