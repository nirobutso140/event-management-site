import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RootFile from './RootFile/RootFile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import Team from './pages/Team/Team';
import About from './pages/About/About';
import SingleService from './pages/SingleService/SingleService';
import ContextProvider from './Provider/ContextProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/team",
        element: <Team/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
    
        path: '/service/:id',
        element: <SingleService/>,
        loader: ()=> fetch('/socialEvent.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ContextProvider>
       <RouterProvider router={router} />
       </ContextProvider>
       
  </React.StrictMode>,
)
