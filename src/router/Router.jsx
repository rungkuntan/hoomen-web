import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/auth/components/Header";
import Homepage from "../pages/auth/components/Homepage";
import Login from "../pages/auth/components/Login";
import ProtectedRoute from "../pages/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../pages/auth/components/RedirectIfAuthenticated";
import Register from "../pages/auth/components/Register";
import AboutUs from "../pages/auth/components/About-us";
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
        {
          path: "/login",
          element: (
            <RedirectIfAuthenticated>
              <Login />,
            </RedirectIfAuthenticated>
          ),
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/",
          element: (
            // <ProtectedRoute>
            <Homepage />
            /* </ProtectedRoute> */
          ),
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/booking",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
