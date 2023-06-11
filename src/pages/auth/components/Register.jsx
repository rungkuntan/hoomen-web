import { useState } from "react";
import validateRegister from "../validator/validate-for-register";
import ErrorMessage from "./Errormessage";
import RegisterInput from "./RegisterInput";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerThunk } from "../slice/auth-slice";

const initialInput = {
  userName: "",
  password: "",
  userEmail: "",
  confirmPassword: "",
};

export default function Register() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerThunk(input)).unwrap();
      toast.success("register successfully");
      onSuccess();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-200">
      <div className="w-full p-6 m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-black pb-4">
          Register
        </h1>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <div>
            <RegisterInput
              placeholder="Username"
              name="userName"
              value={input.userName}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.userName} />
          </div>

          <div>
            <RegisterInput
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.password} />
          </div>
          <div>
            <RegisterInput
              placeholder="Email-address"
              name="userEmail"
              value={input.userEmail}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.userEmail} />
          </div>
          <div>
            <RegisterInput
              placeholder="Confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.confirmPassword} />
          </div>
          <div className="grid place-items-end">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
