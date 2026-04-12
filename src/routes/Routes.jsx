import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details",
        Component: PhoneDetails,
      },
    ],
  },
]);
