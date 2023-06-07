import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/auth/components/Header";
import Login from "../pages/auth/components/Login";
import Register from "../pages/auth/components/Register";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        { index: true },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
