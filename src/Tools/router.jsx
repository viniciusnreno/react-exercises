// pages
import UseStateClass from '../pages/UseStateClass'
import PredictAge from '../pages/PredictAge'
import RandomDog from '../pages/RandomDog'
import Form from '../pages/Form'
// import Home from '../pages/Home'

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
      path: "/classes/useState",
      element: <UseStateClass />
    },
    {
      path: "/",
      element: <Form />
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
])