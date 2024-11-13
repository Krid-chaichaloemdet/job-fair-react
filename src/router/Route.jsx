import { RouterProvider, createBrowserRouter, Outlet ,} from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TestingPage from "../pages/TestingPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/registerPage", element: <RegisterPage /> },
      { path: `/testingPage/1`, element: <TestingPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}> </RouterProvider>;
}
