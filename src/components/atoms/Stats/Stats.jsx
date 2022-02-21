import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Stats = ({ value, label }) => (
  <Flex align="center" direction="column">
    <Text fontWeight="bold" fontSize="18px" lineHeight="1">
      {value}
    </Text>
    <Text fontSize="14px">{label}</Text>
  </Flex>
)

export default Stats
