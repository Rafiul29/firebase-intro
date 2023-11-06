import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register./Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivetRoutes from './components/routes/PrivetRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/orders",
        element:<PrivetRoutes><Orders/></PrivetRoutes>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider >
   <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
