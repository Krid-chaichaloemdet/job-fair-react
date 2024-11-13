import { RouterProvider, createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TestingPage from "../pages/TestingPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

// Layout component that conditionally renders the Footer
const Layout = () => {
  const location = useLocation();  // Get the current route

  // Conditionally render Footer based on the route
  const shouldShowFooter = location.pathname !== "/testingPage";

  return (
    <>
      <Header />
      <Outlet />  {/* Render child route components here */}
      {shouldShowFooter && <Footer />}  {/* Show Footer unless on /testingPage */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use the Layout component that includes Header and Footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/registerPage", element: <RegisterPage /> },
      { path: "/testingPage", element: <TestingPage /> },  // TestingPage will not show Footer
    ],
  },
]);

// Router component to provide the router to the app
export default function Router() {
  return <RouterProvider router={router} />;
}
