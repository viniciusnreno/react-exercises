import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css' 
import { Home } from './pages/Home'
import { UseStateClass } from './pages/UseStateClass'
import  PredictAge  from './pages/PredictAge'
import RandomDog, { getData } from './pages/RandomDog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/classes/useState",
        element: <UseStateClass />
      },
      {
        path: "/classes/predictAge",
        element: <PredictAge />
      },
      {
        path: "/classes/RandomDog",
        element: <RandomDog />,
        loader: getData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
