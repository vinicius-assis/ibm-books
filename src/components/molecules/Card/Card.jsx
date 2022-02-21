import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import BookDefaultImage from './default-book.jpg'

const Card = () => (
  <Flex
    direction="column"
    borderRadius="4px"
    overflow="hidden"
    boxShadow="1px 2px 1px 1px #ccc"
    maxW="240px"
    w="100%"
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
      <Text>
        200<span>pages</span>
      </Text>
      <Text>
        4.5<span>ratings</span>
      </Text>
    </Flex>
  </Flex>
)

export default Card
