import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TestingPage from "../pages/TestingPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import TestingDiiferPage from "../pages/TestingDifferPage";
import Camera from "../pages/Camera";
import ProfilePage from "../pages/ProfilePage";
import RegisterSuccessLoading from "../component/registerComponent/RegisterSuccessLoading";

import JobPage from "../pages/JobPage";

import ResultPage from "../pages/ResultPage";
import RegisterError from "../component/registerComponent/RegisterError";

const Layout = () => {


  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);
console.log(location.pathname)
  const shouldShowFooter =
    location.pathname !== "/testingPage" &&
    location.pathname !== "/testingDifferPage" &&
    location.pathname !== "/registerSuccess";
  const [select, setSelect] = useState(1);
  return (
    <>
      <Header />
      <Outlet />
      {shouldShowFooter && (
        <Footer
          setIsActive={setIsActive}
          isActive={isActive}
          setSelect={setSelect}
          select={select}
        />
      )}{" "}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/registerPage", element: <RegisterPage /> },
      { path: "/testingPage", element: <TestingPage /> },
      { path: "/testingDifferPage", element: <TestingDiiferPage /> },
      { path: "/profilePage", element: <ProfilePage /> },
      { path: "/registerSuccess", element: <RegisterSuccessLoading /> },
      { path: "/registerError", element: <RegisterError /> },
      { path: "/resultPage", element: <ResultPage /> },
    ],
  },
  {
    path: "/camera",
    element: <Camera />,
  },

  { path: "/jobPage", element: <JobPage /> },
]);


export default function Router() {
  return <RouterProvider router={router} />;
}
