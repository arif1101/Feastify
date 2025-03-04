import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import MyMenu from "../pages/Menu/MyMenu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <MyMenu></MyMenu>
        }
      ]
    },
  ]);

  export default router;