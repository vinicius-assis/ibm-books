import React, { memo } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import BookDefaultImage from './default-book.jpg'
import Stats from '../../atoms/Stats/Stats'
import FavoriteButton from '../../atoms/FavoriteButton'

const Card = ({ cardData, ...rest }) => {
  const { description, title, pageCount, averageRating = 'unrated' } = cardData

  return (
    <Flex
      direction="column"
      borderRadius="4px"
      overflow="hidden"
      boxShadow="5px 5px 15px rgba(191, 189, 189, 0.9)"
      maxW="240px"
      w="100%"
      mb="20px"
      position="relative"
      sx={rest}
    >
      <FavoriteButton currentCardData={cardData} />
      <Image src={BookDefaultImage} mb="20px" />
      <Flex direction="column" textAlign="center" mb="20px" px="10px">
        <Text fontWeight="bold" mb="10px" lineHeight="1.2">
          {title}
        </Text>
        <Text
          lineHeight="1.2"
          fontSize="14px"
          color="#888"
          maxH="150px"
          h="100%"
          overflowY="hidden"
        >
          {description}
        </Text>
      </Flex>
      <Flex
        justifyContent="space-evenly"
        bg="#FB0772"
        p="20px"
        color="#fff"
        mt="auto"
      >
        <Stats value={pageCount} label="pages" />
        <Stats value={averageRating} label="rating" />
      </Flex>
    </Flex>
  )
}

export default memo(Card)
