import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import MyMenu from "../pages/Menu/MyMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Contact from "../pages/Contact/Contact";
import MyCart from "../pages/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers";

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
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/order",
          element: <Order></Order>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },

      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/myCart',
          element: <MyCart></MyCart>
        },
        // admin route
        {
          path: '/dashboard/users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router;