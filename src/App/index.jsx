
import Home  from '../pages/Home'
import { UseStateClass } from '../pages/UseStateClass'
import  PredictAge  from '../pages/PredictAge'
import RandomDog from '../pages/RandomDog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'

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
      }
    ]
  }
])
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refechOnWindowFocus: false
    }
  }
});

const App = () => {
  return(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  )
}
 export default App
