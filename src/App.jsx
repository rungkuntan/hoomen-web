import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import Loading from "./pages/auth/components/Loading";
import { useSelector } from "react-redux";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  if (initialLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Router />
      <ToastContainer position="top-center" theme="light" autoClose={3000} />
    </div>
  );
}

export default App;
