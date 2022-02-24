import React, { useContext, useState } from 'react'
import { Button, Flex, Input } from '@chakra-ui/react'
import { SearchContext } from '../../../context/searchContext'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const { searchFetch, loading } = useContext(SearchContext)

  const handleChange = ({ target }) => setInputValue(target.value)

  return (
    <Flex mb="50px" w="100%">
      <Input
        onChange={handleChange}
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
        width={['70%', 'inherit']}
      />
      <Button
        onClick={() => searchFetch(inputValue)}
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
