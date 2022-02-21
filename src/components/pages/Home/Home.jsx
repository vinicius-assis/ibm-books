import React from 'react'
import { Flex } from '@chakra-ui/react'
import SearchBar from 'src/components/molecules/SearchBar'
import Card from 'src/components/molecules/Card'

const Home = () => (
  <Flex direction="column" mt="40px" maxW="1280px" px="50px">
    <SearchBar />
    <Card />
  </Flex>
)

export default Home
