import{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProductForm = ({ onAddProduct }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    stock: "",
    image: null,
  });

  const [showForm, setShowForm] = useState(false);

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
    data.append("name", formData.name);
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
      setShowForm(false);
      // Memanggil fungsi onAdd jika diberikan sebagai prop
      if (onAddProduct) {
        onAddProduct(); // Memanggil fungsi onAdd setelah produk berhasil ditambahkan
      }
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
    // <div className="popup">
    //   <h2>Add Prodact </h2>
    //   <input
    //     type="text"
    //     placeholder="Nama Produk"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Harga"
    //     name="price"
    //     value={formData.price}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Stok"
    //     name="stock"
    //     value={formData.stock}
    //     onChange={handleChange}
    //   />
    //   <input
    //     placeholder="URL Gambar"
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageChange}
    //   />
    //   <button onClick={handleSubmit}>Tambahkan</button>
    //   <button onClick={onClose}>Batal</button>
    // </div>

    <div>
      <button onClick={() => setShowForm(true)}>Tambah Produk</button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <h2>Tambah Produk</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nama:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Harga:</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>stok:</label>
                <input
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Gambar:</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Tambah Produk</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductForm;
