import { UserRound } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { Loader } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username,
    password,
  }),
  mode: "no-cors",
})
  .then(async (response) => {
    console.log(response);
    if (response.ok) {
      console.log("masuk if");
      return response.json();
    } else {
      console.log("masuk else");

      const message = await response.text();
      throw new Error(message);
    }
  })

  .then((data) => {
    console.log("sukses login");

    localStorage.setItem("token", data.token);
    console.log(data.token);
    navigate("/home");
    setIsLoggedIn(true);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error("Login error:", error);
    alert(error.message);
    setIsLoading(false);
  });
}
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
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <LockKeyholeOpen size={45} className="icone-propil" />
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      );
    }
  }
}
