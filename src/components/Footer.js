import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Flex
        mt={{base:"16px", md:"64px"}}
        h={{ base: "85px", md: "35px" }}
        alignItems={"center "}
        background={"#F2F1F1"}
        justifyContent={"center"}
        position={"relative"}
        color="#3E4954"
        opacity={" 0.699999988079071"}
        fontFamily={'"Roboto", sans-serif'}
        fontSize={"14px"}
        fontWeight={"400"}
        flexWrap={"wrap"}
        textAlign={"center"}
        
        
      >
        <Text>
          ⓒ Copyright Qualtech Solutions Pvt. Ltd. All Rights Reserved.
        </Text>

        <Text
          my={{ base: "12px", md: "auto" }}
          position={{ base: "default", md: "absolute" }}
          right={"13px"}
        >
          v 2.1.1.5
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
