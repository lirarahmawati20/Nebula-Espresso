import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddKasir() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "kasir",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengambil token akses dari localStorage
      const accessToken = localStorage.getItem("accessToken");

      // Menetapkan token bearer ke header Authorization
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Kirim data kasir baru ke server
      await axios.post(
        "http://localhost:3000/api/v1/register",
        formData,
        config
      );

      console.log("Kasir berhasil ditambahkan");
      navigate("/data_kasir");
    } catch (error) {
      console.error("Error adding kasir:", error);
      if (error.response.status === 403 || error.response.status === 401) {
        console.log("Jika 403, arahkan pengguna kembali ke halaman login");
        // Jika 403, arahkan pengguna kembali ke halaman login
        navigate("/login");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-kasir-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="User">User</option>
          </select>
        </div> */}

        <button type="submit">Tambah Kasir</button>
      </form>
    </>
  );
}
