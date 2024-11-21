import { RouterProvider, createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TestingPage from "../pages/TestingPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import TestingDiiferPage from "../pages/TestingDifferPage";
import Camera from "../pages/Camera";
import ProfilePage from "../pages/ProfilePage";

import JobPage from "../pages/JobPage"

import ResultPage from "../pages/ResultPage";


// Layout component that conditionally renders the Footer
const Layout = () => {

  const footerBar = [
    { id: 1, title: "Jobs", path: "/" },
    { id: 2, title: "Send Profile",  path: "/registerPage" },
    { id: 3, title: "profile",  path: "/profilePage" },
  ];


  const location = useLocation();  // Get the current route
console.log(location.pathname)
const [isActive, setIsActive] =useState(location.pathname)
  // Conditionally render Footer based on the route
  // const shouldShowFooter = location.pathname !== "/testingDifferPage";
  const shouldShowFooter = location.pathname !== "/testingPage" && location.pathname !== "/testingDifferPage";
  const [select, setSelect] = useState(1);
  return (
    <>
      <Header />
      <Outlet />  {/* Render child route components here */}
      {shouldShowFooter && <Footer setIsActive={setIsActive} isActive={isActive} setSelect={setSelect} select={select}/>}  {/* Show Footer unless on /testingPage */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use the Layout component that includes Header and Footer
    children: [
      { path: "/", element: <HomePage  /> },
      { path: "/registerPage", element: <RegisterPage /> },
      { path: "/testingPage", element: <TestingPage /> },  // TestingPage will not show Footer
      { path: "/testingDifferPage", element: <TestingDiiferPage /> },
      { path: "/profilePage", element: <ProfilePage /> },

      

      { path: "/resultPage", element: <ResultPage />}

    ],
  },
  {
    path: "/camera",
    element: <Camera />
  },
  { path: "/jobPage"
    ,element: <JobPage /> }
]);

// Router component to provide the router to the app
export default function Router() {
  return <RouterProvider router={router} />;
}
