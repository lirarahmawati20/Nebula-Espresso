import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

import Detail_transaction from "./Detail_transactio_kasir";

export default function HomeKasir() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [transactionId, setTransactionId] = useState(0);

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
        "http://localhost:3000/api/v1/transaction",
        config
      );
      setTransactions(response.data.data);
    } catch (error) {
      console.error("Error fetching Transaction:", error);
      if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        navigate("/loginkasir");
      }
    }
  };

  const handleProses = async (transactionId) => { 
    try {
        const accessToken = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.put(
          "http://localhost:3000/api/v1/transaction/proccess/" + transactionId,
          config
        );
        console.log("transaction berhasil");
        fetchTransaction();
      } catch (error) {
      console.error("Error transaction", error);
       if (
         error.response &&
         (error.response.status === 403 || error.response.status === 401)
       ) {
         navigate("/loginkasir");
       }
      }

  }

  const handleSelesai = async (transactionId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.put(
        "http://localhost:3000/api/v1/transaction/selasai/" + transactionId,
        config
      );
      console.log("transaction berhasil");
      fetchTransaction();
    } catch (error) {
      console.error("Error transaction", error);
       if (
         error.response &&
         (error.response.status === 403 || error.response.status === 401)
       ) {
         navigate("/loginkasir");
       }
    }
  };

  

  const hendleDetail = (transaction) => {
    setTransactionId(transaction.id);
    setShowDetail(true);
  };

  return (
    <>
      {showDetail ? (
        <Detail_transaction transactionId={transactionId} />
      ) : (
        <div>
          <div className="judul-header-ke3">
            <div className="tex-judul">Data Transaction</div>
          </div>

          {transactions.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <table className="product-table-transaction2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Tanggal</th>
                  <th>No. Transaksi</th>
                  <th>Total Harga</th>
                  <th>Total Produk</th>
                  <th>No Meja</th>
                  <th> status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.created_at}</td>
                    <td>{transaction.no_transaction}</td>
                    <td>${transaction.total_price}</td>
                    <td>{transaction.total_product}</td>
                    <td>{transaction.nomeja}</td>
                    <td>{transaction.status}</td>
                    <td>
                      {transaction.status === "paid" ? (
                        <button
                          className="add-button bg-green-500"
                          onClick={() => handleProses(transaction.id)}
                        >
                          proses
                        </button>
                      ) : transaction.status === "proccess" ? (
                        <button
                          className="add-button bg-green-500"
                          onClick={() => handleSelesai(transaction.id)}
                        >
                          selesai
                        </button>
                      ) : (
                        <span></span>
                      )}
                      <button
                        className="edit-button"
                        onClick={() => hendleDetail(transaction)}
                      >
                        Deatil
                      </button>

                      {/* <button className="delete-button">Delete</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
}
