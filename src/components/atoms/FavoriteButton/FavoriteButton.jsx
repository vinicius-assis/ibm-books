import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SearchContext } from '../../../context/searchContext'
import StarIcon from './StarIcon'

const FavoriteButton = ({ currentCardData }) => {
  const { handleFavoriteBooks } = useContext(SearchContext)

  return (
    <Box
      onClick={() => handleFavoriteBooks(currentCardData)}
      position="absolute"
      top="10px"
      right="10px"
      bg="#dbdbdb"
      width="30px"
      height="30px"
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      _hover={{
        '&>svg': {
          fill: '#f2c166',
        },
      }}
    >
      <StarIcon />
    </Box>
  )
}

export default FavoriteButton
