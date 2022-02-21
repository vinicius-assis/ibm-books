import React from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import Card from '../../molecules/Card/Card'

const Home = () => (
  <Flex wrap="wrap" mt="40px" maxW="1280px" width="100%" px="50px" mx="auto">
    <SearchBar />
    <Grid
      width="100%"
      gap="20px"
      gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      justifyItems="center"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </Flex>
)

export default Home
