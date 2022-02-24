import React from 'react'
import { Button } from '@chakra-ui/react'
import StarIcon from '../FavoriteButton/StarIcon'

const FavoriteSectionButton = ({ onClick, drawerButtonRef }) => (
  <Button
    onClick={onClick}
    ref={drawerButtonRef}
    pos="absolute"
    right="0"
    top="100px"
    borderTopRightRadius="0"
    borderBottomRightRadius="0"
    _hover={{
      '& > svg': {
        fill: '#f2c166',
      },
    }}
  >
    <StarIcon />
  </Button>
)

export default FavoriteSectionButton
