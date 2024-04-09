import { Facebook, Github, Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <div className="futer">
      <div className="contack">
        <PhoneCall />
        <Github />
        <Instagram />
        <Facebook />
      </div>
      <p>Copy@lira Rahmawati</p>
    </div>
  );
}
