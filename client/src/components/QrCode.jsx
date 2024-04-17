import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function QrCode(transactionId) {

  const id = transactionId.transactionId;
  const navigate = useNavigate();
 
  const handleSelesai = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v1/transaction/paid/"+id
      );
      console.log("transaction berhasil");
      navigate("/loading");
    } catch (error) {
      console.error("Error transaction", error);
    }
  };



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
          <button onClick={handleSelesai}>
             selesai
          </button>
        </div>
      </div>
    </>
  );
}
