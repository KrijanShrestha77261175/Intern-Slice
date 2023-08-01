import { Button, VStack } from '@chakra-ui/react'
import React from 'react'

const TableViewAll = () => {
  return (
    <VStack>
    <Button
      mt="24px"
      p={"4px 16px"}
      border="1px solid #2F4CDD"
      borderRadius={"6px"}
      fontFamily={'"Poppins", sans-serif'}
      fontSize={"14px"}
      fontWeight={"500"}
      lineHeight={"24px"}
      color={"#2F4CDD"}
      background={"#FFF"}
      h={"32px"}
      w={"87px"}
    >
      View All
    </Button>
  </VStack>
  )
}

export default TableViewAll