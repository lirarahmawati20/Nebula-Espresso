import { Facebook, Github, Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <div className="futer">
      <div className="contack">
        <a href="https://www.facebook.com/">
          <Facebook />
        </a>
        <a href="https://github.com/">
          <Github />
        </a>
        <a href="https://www.instagram.com/">
          <Instagram />
        </a>
        <PhoneCall />
      </div>
      <p>Copy@lira Rahmawati</p>
    </div>
  );
}
