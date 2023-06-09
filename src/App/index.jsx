// tools
import { RouterProvider, Outlet } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from '../Tools/store'
import { router } from '../Tools/router'
import { client } from '../Tools/clientConfig';
import Navbar from '../components/Navbar';

const App = () => {
  return(
    <>
          
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </>
  )
}
 export default App
