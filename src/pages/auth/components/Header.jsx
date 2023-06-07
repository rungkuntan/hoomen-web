import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-end items-end p-5 gap-5 h-[75px] bg-slate-300">
      <Link>HOME</Link>
      <Link>OUR SERVICES</Link>
      <Link>BOOKING</Link>
      <Link>ABOUT US</Link>
      <Link>LOGIN / SIGN-UP</Link>
    </div>
  );
}
