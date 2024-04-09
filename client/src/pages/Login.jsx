import { UserRound } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
        "http://localhost:3000/api/v1/login",
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

  if (isLoading) {
    return <Loader2 className="animate-spin text-blue-500" />;
  } else {
    if (isLoggedIn) {
      return "Login berhasil.";
    } else {
      return (
        <div className="login-container">
          <div id="gambar-profil">
            <img src="https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png" />
          </div>
          <h2 className="login">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">
                <UserRound size={45} className="icone-propil" />
              </label>
              <input
                id="username"
                type="text"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-loginn ">
              Submit
            </button>
            <label hidden={hidden}> username atau password salah</label>
            <div className="to-register">
              <Link to="../register">Sign Up </Link>
              <Link to="../register">Forgot password ?</Link>
            </div>
          </form>
        </div>
      );
    }
  }
}
