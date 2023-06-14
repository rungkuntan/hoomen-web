import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/auth-slice";
export default function HeaderUser() {
  const [open, setOpen] = useState(false);
  const dropdown = useRef();

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  return (
    <div
      className="absolute right-0 translate-y-1 px-5 bg-white border rounded-xl shadow-lg w-90 p-2"
      role="button"
      onClick={() => setOpen(!open)}
      ref={dropdown}
    >
      <h4 className="cursor-pointer">WELCOME {user?.userName}</h4>

      {open && (
        <div className="absolute right-0 translate-y-1  mt-1 bg-white border rounded-xl shadow-lg w-90 p-2">
          <Link to="/profile"> User Page</Link>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(logout())}
            role="button"
          >
            <h4>LOG OUT</h4>
          </div>
        </div>
      )}
    </div>
  );
}
