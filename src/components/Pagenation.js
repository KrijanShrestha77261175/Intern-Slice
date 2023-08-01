import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

const Pagenation = () => {
  return (
    <>
    <Flex mx={ {base:"10px",md:"14px"}} mt ={{base:"42px", md:"85px" }}justifyContent={"space-between "}>
        <Flex alignItems={"center"} gap={"12px"}>
            <Button p={"16px 20px"} h="48px" w="48px">
                <ChevronLeftIcon h="20px" w="20px" color={"#2F4CDD"}/>
                
            </Button>
            <Text fontFamily={'"Roboto", sans-serif'} fontSize={"12px"} fontWeight={"400"} color={"rgba(0, 0, 0, 0.50)"} >
            Previous
            </Text>
        </Flex>

        <Flex alignItems={"center"} gap={"12px"}>
            <Button p={"16px 20px"} h="48px" w="48px">
                <ChevronRightIcon h="20px" w="20px" color={"#2F4CDD"}/>
                
            </Button>
            <Text fontFamily={'"Roboto", sans-serif'} fontSize={"12px"} fontWeight={"400"} color={"rgba(0, 0, 0, 0.50)"} >
            Next
            </Text>
        </Flex>
    </Flex>
    </>
  )
}

export default Pagenation