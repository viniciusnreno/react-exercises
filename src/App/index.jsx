// pages
import Home from '../pages/Home'
import UseStateClass from '../pages/UseStateClass'
import PredictAge from '../pages/PredictAge'
import RandomDog from '../pages/RandomDog'
import Form from '../pages/Form'
import Redux from '../pages/Redux'

// tools
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import Provider  from 'react-redux';

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
      },
      {
        path: "/classes/Redux",
        element: <Redux/>
      },
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
    <Provider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  )
}
 export default App
