import { Mail, UserRound } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";



export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/register",
      formData
    );
    // Tangani respon dari backend
    console.log(response.data);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    localStorage.setItem(
      "accessTokenExpiresIn",
      response.data.accessTokenExpiresIn
    );
    navigate("/home_admin");
    setIsLoggedIn(true);
    setIsLoading(false);
    // Simpan token di sini jika diperlukan
  } catch (error) {
    // Tangani error jika login gagal
    console.error("Login failed:", error.response.data);

    setHidden(false);
  }
};


  return (
    <div className="login-container">
      <div id="gambar-profil">
        <img
          src="https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png"
          alt="Profile"
        />
      </div>
      <h2 className="login">Sing Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">
            <Mail size={45} className="icone-propil" />
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="username">
            <UserRound size={45} className="icone-propil" />
          </label>
          <input
            id="username"
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <LockKeyholeOpen size={45} className="icone-propil" />
          </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="role" className="ml-9 p-4 select-role">
            Role :
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 warna-select"
          >
            <option value="" className="select-role">
              {" "}
              Select Role
            </option>
            <option value="admin"> admin</option>
            <option value="kasir"> kasir</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button type="submit" className="btn">
            Save
          </button>
          <button type="submit" className="btn">
            <Link to="../login">login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
