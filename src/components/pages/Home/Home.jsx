import React from 'react'
import { Flex, Grid } from '@chakra-ui/react'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import { SearchStorage } from '../../../context/searchContext'
import CardList from '../../organisms/CardList'

const Home = () => {
  return (
    <SearchStorage>
      <Flex
        wrap="wrap"
        mt="40px"
        maxW="1280px"
        width="100%"
        px="50px"
        mx="auto"
      >
        <SearchBar />
        <Grid
          width="100%"
          gap="20px"
          gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          justifyItems="center"
        >
          <CardList />
        </Grid>
      </Flex>
    </SearchStorage>
  )
}

export default Home
