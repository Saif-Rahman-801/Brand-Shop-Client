import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Error from "./Components/ErrorPage/Error.jsx";
import Home from "./Components/Home/Home.jsx";
import AddProducts from "./Components/AddProducts/AddProducts.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import BrandProduct from "./Components/BrandProduct/BrandProduct.jsx";
import AuthContext from "./Context/AuthContext.jsx";
import ProductDetails from "./Components/BrandProduct/ProductDetails.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart/Cart.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Update from "./Components/UpdateForm/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://brand-shop-backend-phi.vercel.app/brands"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-shop-backend-phi.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/brand/:id",
        loader: ({ params }) =>
          fetch(`https://brand-shop-backend-phi.vercel.app/brand/${params.id}`),
        element: <BrandProduct />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-backend-phi.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContext>
  </React.StrictMode>
);
