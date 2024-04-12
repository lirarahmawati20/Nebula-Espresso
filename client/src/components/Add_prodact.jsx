import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add_prodact() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("product_name", formData.product_name);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("image", formData.image);

    try {
      // Mengambil token akses dari localStorage
      const accessToken = localStorage.getItem("accessToken");

      // Menetapkan token bearer ke header Authorization
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.post("http://localhost:3000/api/v1/newProduct", data, config);
      console.log("Produk berhasil ditambahkan");
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

  return (
    <>
      <form onSubmit={handleSubmit} className="add-product">
        <div>
          <label htmlFor="NamePerodact">Name</label>
          <input
            className="inputAdd"
            id="product_name"
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="image">image</label>
          <input
            className="inputAdd"
            id="name-prodact"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <label htmlFor="price">price</label>
          <input
            className="inputAdd"
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="stok">stok</label>
          <input
            className="inputAdd"
            id="stok"
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

        <button type="submit">save</button>
      </form>
    </>
  );
}
