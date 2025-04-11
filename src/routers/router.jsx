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
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";

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
        {
          path: '/dashboard/payment',
          element: <Payment></Payment>
        },
        {
          path: '/dashboard/paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin route
        {
          path: '/dashboard/users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: '/dashboard/manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: '/dashboard/updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);

  export default router;