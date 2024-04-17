/* eslint-disable no-unused-vars */
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import QrCode from "./QrCode";

export default function BokingMeja({ products, counts, showBok }) {
  console.log(products);
  console.log(counts);
  console.log(showBok);
  const [dataReq, setDataReq] = useState([]);
  const [nomeja, setNomeja] = useState("");
  const [customer, setCustomer] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [transactionId, setTransactionId] = useState(0);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const newDataReq = products.map((product) => ({
      id: product.id,
      name: product.product_name,
      price: product.price,
      quantity: counts[product.id],
      total_price: product.price * counts[product.id],
      image: product.image,
    }));
    setDataReq([...dataReq, ...newDataReq]);
  };

 

      const calculateTotalHarga = () => {
        let total = 0;
        products.forEach((product) => {
          total += product.price * counts[product.id];
        });
        return total;
  };
   const calculateTotalAmount = () => {
     let total = 0;
     products.forEach((product) => {
       total += counts[product.id];
     });
     return total;
   };


  const handelePaymet = async () => {
    const dataRequest = {
      total_price: calculateTotalHarga(),
      amount: calculateTotalAmount(),
      nomeja: nomeja,
      customer: customer,
      data: dataReq,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/transaction",
        dataRequest
      );
      console.log("transaction berhasil");
      setTransactionId(response.data.data.id);
      setShowQr(true);
    } catch (error) {
      console.error("Error transaction", error);
    }
  };

   const handleChange = (e) => {
     setCustomer(e.target.value);
   };

  
  return (
    <>
      {showQr ? (
        <QrCode transactionId={transactionId} />
      ) : (
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
              <UserRound size={45} className="icone-propil1" />
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              name="customer"
              value={customer}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">
              <UserRound size={45} className="icone-propil1" />
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
            <button type="submit" onClick={handelePaymet}>
              {/* <Link to="/qrCode">Next</Link> */} Next
            </button>
            <p className="transaction-text">Transaksi Pembayaran</p>
          </div>
        </div>
      )}
    </>
  );
}
