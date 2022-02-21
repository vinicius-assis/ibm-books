import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import BookDefaultImage from './default-book.jpg'
import Stats from '../../atoms/Stats/Stats'

const Card = () => (
  <Flex
    direction="column"
    borderRadius="4px"
    overflow="hidden"
    boxShadow="5px 5px 15px rgba(191, 189, 189, 0.9)"
    maxW="240px"
    w="100%"
    mb="20px"
  >
    <Image src={BookDefaultImage} mb="20px" />
    <Flex direction="column" textAlign="center" mb="20px">
      <Text>Titulo do Card</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, harum
        beatae voluptates explicabo nostrum inventore, recusandae necessitatibus
      </Text>
    </Flex>
    <Flex justifyContent="space-evenly" bg="#FB0772" p="20px" color="#fff">
      <Stats value="200" label="pages" />
      <Stats value="4.5" label="rating" />
    </Flex>
  </Flex>
)

export default Card
