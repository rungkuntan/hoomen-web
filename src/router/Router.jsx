import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/auth/components/Header";
import Homepage from "../pages/auth/components/Homepage";
import Login from "../pages/auth/components/Login";
import ProtectedRoute from "../pages/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../pages/auth/components/RedirectIfAuthenticated";
import Register from "../pages/auth/components/Register";
import AboutUs from "../pages/auth/components/About-us";
import Services from "../pages/auth/components/Services";
import Booking from "../pages/auth/components/Booking";
import HeaderUser from "../pages/auth/components/HeaderUser";
import ProfilePage from "../pages/auth/components/ProfilePage";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <Login />
        </RedirectIfAuthenticated>
      ),
    },

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
          path: "/register",
          element: <Register />,
        },
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Homepage />,
            </ProtectedRoute>
          ),
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },

        {
          path: "/user",
          element: <HeaderUser />,
        },

        {
          path: "/form",
          element: (
            <ProtectedRoute>
              <Booking />,
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
