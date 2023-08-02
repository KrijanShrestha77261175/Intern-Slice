import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const index = ({social, icon}) => {
  return (
       <Flex
       mt={"16px"}
       px={{base:"60px"}}
       w={{base:"auto",md:"364px",xl:"364px"}}
       h="52px"
       borderRadius={"16px"}
       border={"1px solid #F0EDFF"}
       alignItems={"center"}
       justifyContent={"center"}
       cursor={"pointer"}
     >
       <Image mr={"8px"} src={icon} />
       <Text
         fontFamily={'"Poppins", sans-serif'}
         fontSize={"12px"}
       >
         Login with <strong>{social}</strong>
       </Text>
     </Flex>
  )
}

export default index