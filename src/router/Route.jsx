import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TestingPage from "../pages/TestingPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/registerPage',
        element: <RegisterPage />
    },
    {
        path: '/testingPage',
        element: <TestingPage />
    }
])

export default function Router() {
    return <RouterProvider router={router}> </RouterProvider>;
  }