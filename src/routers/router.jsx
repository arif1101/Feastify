import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import MyMenu from "../pages/Menu/MyMenu";
import Order from "../pages/Order/Order";

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
          path: "/menu",
          element: <MyMenu></MyMenu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        }
      ]
    },
  ]);

  export default router;