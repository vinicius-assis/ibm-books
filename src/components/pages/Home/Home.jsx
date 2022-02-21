import React from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import Card from '../../molecules/Card/Card'

const Home = () => (
  <Flex direction="column" mt="40px" maxW="1280px" px="50px">
    <SearchBar />
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))">
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </Flex>
)

export default Home
