import { UserRound } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";

export default function Login() {
  return (
    <div className="login-container">
      <div id="gambar-profil">
        <img src="https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png" />
      </div>
      <h2 className="login">Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">
            <UserRound size={45} className="icone-propil" />
          </label>
          <input type="text" placeholder="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <LockKeyholeOpen size={45} className="icone-propil" />
          </label>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}
