import { Mail, UserRound } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="login-container">
      <div id="gambar-profil">
        <img
          src="https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png"
          alt="Profile"
        />
      </div>
      <h2 className="login">Sing Up</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">
            <Mail size={45} className="icone-propil" />
          </label>
          <input id="email" type="email" placeholder="email" />
        </div>

        <div className="input-group">
          <label htmlFor="username">
            <UserRound size={45} className="icone-propil" />
          </label>
          <input id="username" type="text" placeholder="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <LockKeyholeOpen size={45} className="icone-propil" />
          </label>
          <input id="password" type="password" placeholder="password" />
        </div>
        <div className="input-group">
          <label htmlFor="role" className="ml-9 p-4 select-role">
            Role :
          </label>
          <select
            id="role"
            name="role"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 warna-select"
          >
            <option value="" className="select-role">
              {" "}
              Select Role
            </option>
            <option value="admin"> Admin</option>
            <option value="user"> User</option>
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
