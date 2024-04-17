
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export default function Detail_transaction_kasir(transactionId) {
  const id = transactionId.transactionId;
  const navigate = useNavigate();
  const [transactionDetails, setTransactionDetails] = useState([]);
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
        "http://localhost:3000/api/v1/transactiondetail/" + id,
        config
      );
      setTransactionDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching Transaction:", error);
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

      <div className="judul-header-ke3">
        <div className="tex-judul">Detail Transaction</div>
      </div>

      <table className="product-table-transaction2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gambar</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Transaction ID</th>
            <th>Created_at</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>
                <img
                  src={detail.image}
                  alt={detail.image}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{detail.product_name}</td>
              <td>${detail.product_price}</td>
              <td>{detail.amount}</td>
              <td>${detail.total_price}</td>
              <td>{detail.id_transaction}</td>
              <td>{detail.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
\    </div>
  );
}

