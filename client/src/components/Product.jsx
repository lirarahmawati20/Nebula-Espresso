import { useState, useEffect } from "react";
// import Header_Admin from "./Header_Admin";
// import AddProductForm from "./AddProductForm";
import { FolderPlus } from "lucide-react";
// import Popup from "./AddProductForm"; // Mengimpor komponen Popup yang telah dibuat sebelumnya
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Product() {
  // const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      // Mengambil token akses dari localStorage
      const accessToken = localStorage.getItem("accessToken");

      // Menetapkan token bearer ke header Authorization
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Melakukan permintaan GET ke API dengan header yang ditetapkan
      const response = await axios.get(
        "http://localhost:3000/api/v1/getAllProducts",
        config
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error.response.status === 403 || error.response.status === 401) {
        console.log("Jika 403, arahkan pengguna kembali ke halaman login");
        // Jika 403, arahkan pengguna kembali ke halaman login
        navigate("/login");
        //return;
      }
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

   const handleDelete = (productId) => {
     setProducts(products.filter((product) => product.id !== productId));
   };
  // const getImage = (imageName) => `./images/${imageName}`;
  // const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <div className="judul-header">
        <div className="tex-judul">Products</div>
      </div>
      <div className="flex">
        <button className="edit-button">
          <Link to="/add_prodact">
            <span>
              <FolderPlus size={40} />
            </span>
          </Link>
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Created_at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.image}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.created_at}</td>
              <td>
                <div className="flex">
                  {/* <button className="edit-button">Edit</button>{" "} */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
