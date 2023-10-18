import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import Home from './Components/Home/Home.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import Card from './Components/Card/Card.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/brands")
      },
      {
        path: "/addProducts",
        element: <AddProducts />
      },
      {
        path: "/card",
        element: <Card />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
