import React from 'react'
import { Button, Flex, Input } from '@chakra-ui/react'

const SearchBar = () => (
  <Flex mb="50px">
    <Input borderTopRightRadius="0" borderBottomRightRadius="0" />
    <Button borderTopLeftRadius="0" borderBottomLeftRadius="0">
      Find a Book
    </Button>
  </Flex>
)

export default SearchBar
