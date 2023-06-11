import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Router />
      <ToastContainer position="top-center" theme="light" autoClose={3000} />
    </div>
  );
}

export default App;
