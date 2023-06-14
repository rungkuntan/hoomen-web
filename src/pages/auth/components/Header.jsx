import { Link } from "react-router-dom";
import HeaderUser from "./HeaderUser";

export default function Header() {
  return (
    <div className="flex justify-center items-end p-5 gap-5 h-[75px] bg-slate-300">
      <Link to="/">HOME</Link>
      <Link to="/services">OUR SERVICES</Link>
      <Link to="/form">BOOKING</Link>
      <Link to="/aboutus">ABOUT US</Link>
      <HeaderUser />
    </div>
  );
}
