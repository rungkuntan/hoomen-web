import LoginInput from "./Logininput";
import validateLogin from "../validator/validate-for-login";
import ErrorMessage from "./Errormessage";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { login } from "../slice/auth-slice";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      userName: "",
      password: "",
    },
    validateLogin
  );
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
      <div className="flex flex-col items-center h-[calc(100vh-80px)] overflow-hidden bg-slate-200 ">
        <div className="w-full p-6 mt-5 mb-5 bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center text-black ">
            Log-In
          </h1>

          <div>
            <span className="text-base label-text">Username</span>
            <div>
              <LoginInput
                placeholder="Username"
                name="userName"
                value={input.userName}
                onChange={handleChangeInput}
                isInvalid={error.userName}
              />
              <ErrorMessage message={error.userName} />
            </div>
          </div>
          <div>
            <span className="text-base label-text">Password</span>

            <div>
              <LoginInput
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                isInvalid={error.password}
              />
              <ErrorMessage message={error.password} />
            </div>
          </div>
          <Link to="/register">Sign up</Link>
          <div className="mt-5">
            <button className="bg-slate-500 hover:bg-slate-400 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
