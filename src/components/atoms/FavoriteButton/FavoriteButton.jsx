import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SearchContext } from '../../../context/searchContext'
import { checkIfAlreadyExist } from '../../../helpers/setFavoritesBooksInStorage'
import StarIcon from './StarIcon'

const FavoriteButton = ({ currentCardData }) => {
  const { handleFavoriteBooks, favoritesBooks } = useContext(SearchContext)

  const alreadyExist = checkIfAlreadyExist(favoritesBooks, currentCardData.id)

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
      sx={{
        '&>svg': {
          fill: alreadyExist ? '#f2c166' : 'transparent',
        },
      }}
      _hover={{
        '&>svg': {
          fill: !alreadyExist ? '#f2c166' : 'transparent',
        },
      }}
    >
      <StarIcon />
    </Box>
  )
}

export default FavoriteButton
