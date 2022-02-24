import React, { useContext } from 'react'
import { Button, Flex, Input } from '@chakra-ui/react'
import { SearchContext } from '../../../context/searchContext'

const SearchBar = () => {
  const { searchFetch, handleChange, loading } = useContext(SearchContext)
  const handleSubmitInput = event => event.code === 'Enter' && searchFetch()

  return (
    <Flex mb="50px" w="100%">
      <Input
        onChange={handleChange}
        onKeyDown={handleSubmitInput}
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
        width={['70%', 'inherit']}
      />
      <Button
        onClick={searchFetch}
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
        width={['30%', 'max-content']}
        isLoading={loading}
      >
        Find a Book
      </Button>
    </Flex>
  )
}

export default SearchBar
