import LoginInput from "./Logininput";
export default function Login() {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-80px)] overflow-hidden bg-slate-200 ">
      <div className="w-full p-6 mt-5 mb-5 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-black ">
          Log-In
        </h1>

        <div>
          <span className="text-base label-text">Username</span>
          <div>
            <LoginInput placeholder="Username" />
          </div>
        </div>
        <div>
          <span className="text-base label-text">Password</span>

          <div>
            <LoginInput placeholder="Password" />
          </div>
        </div>
        <a
          href="#"
          className="text-xs text-gray-600 hover:underline hover:text-blue-600"
        >
          Forget Password?
        </a>
        <div>
          <button className="bg-slate-500 hover:bg-slate-400 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
