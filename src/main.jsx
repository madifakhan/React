import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,}from "react-router-dom";
import Home from './Components/Ecommerce_web/Home.jsx';
import Contact from './Components/Ecommerce_web/Contact.jsx';
import About_us from './Components/Ecommerce_web/About_us.jsx';
import Cakes from './Components/Ecommerce_web/Cakes.jsx';

import Cheese_cake from './Components/Ecommerce_web/Cheese_cake.jsx';
import Menu from './Components/Ecommerce_web/Menu.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/cake",
    element:<Cakes/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about_us",
    element: <About_us/>,
  },
  {
  path: "/menu",
  element: <Menu/>,
},
 {
    path: "/cheese_cake",
    element: <Cheese_cake />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
