import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-end items-end p-5 gap-5 h-[75px] bg-slate-300">
      <Link to="/">HOME</Link>
      <Link>OUR SERVICES</Link>
      <Link>BOOKING</Link>
      <Link to="/aboutus">ABOUT US</Link>
      <Link to="/login">LOGIN</Link> <Link to="/register">SIGN-UP</Link>
    </div>
  );
}
