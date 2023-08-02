import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import womanTab from "../../../assets/svg/women with tab.png";
import thunderbolt from "../../../assets/svg/thunderbolt.png"

const index = () => {
  return (
    <Box
      w="435px"
      h="524px"
      border={"1px solid #F0EDFF"}
      pt={"30px"}
      pl={"30px"}
      borderRadius={"36px"}
      pos={"relative"}
      bg={"whiteAlpha.400"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      
    >
      <Text
        maxW="184px"
        color={"#FFF"}
        fontFamily={'"Poppins", sans-serif'}
        fontSize={"32px"}
        fontWeight={"700"}
        lineHeight={"46px"}
      >
        Very good works are waiting for you Login Now!!!
      </Text>


      <Image left={"-40px"} pos={"absolute"} bg={"#FFF"} p={"19px"} borderRadius={"50%"} bottom={"100px"} src={thunderbolt}/>
      


      <Image pos={"absolute"} src={womanTab} left={"135px"} bottom={"0px"} />
    </Box>
  );
};

export default index;
