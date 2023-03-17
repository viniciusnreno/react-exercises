// pages
import Home from '../pages/Home'
import UseStateClass from '../pages/UseStateClass'
import PredictAge from '../pages/PredictAge'
import RandomDog from '../pages/RandomDog'
import Form from '../pages/Form'

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/classes/useState",
        element: <UseStateClass />
      },
      {
        path: "/classes/PredictAge",
        element: <PredictAge />
      },
      {
        path: "/classes/RandomDog",
        element: <RandomDog />
      },
      {
        path: "/classes/Form",
        element: <Form/>
      }
    ]
  }
])