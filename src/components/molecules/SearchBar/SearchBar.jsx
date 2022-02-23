import React, { useContext } from 'react'
import { Button, Flex, Input } from '@chakra-ui/react'
import { SearchContext } from '../../../context/searchContext'

const SearchBar = () => {
  const { searchFetch, handleChange } = useContext(SearchContext)

  return (
    <Flex mb="50px" w="100%">
      <Input
        onChange={handleChange}
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
      />
      <Button
        onClick={searchFetch}
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
      >
        Find a Book
      </Button>
    </Flex>
  )
}

export default SearchBar
