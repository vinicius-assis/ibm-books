import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Home from './components/pages/Home'

const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)

export default App
