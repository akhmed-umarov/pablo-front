import { RouterProvider } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux"
import store from '@/store/index'
import { router } from '@/routes'
import '@/styles/tailwind.css'

function App() {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  )
}

export default App
