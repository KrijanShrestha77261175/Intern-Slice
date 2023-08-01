import { Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";

const SaveNExit = () => {
  return (
    <>
    <VStack w="100vw">
      <Flex
        mt="90px"
        p="15px 30px"
        mx="16px"
        h="70px"
        borderRadius={"10px"}
        justifyContent={"center"}
        background={"#272937"}
        gap={"10px"}
      >
        
          <Button
            p="8px 16px"
            alignItems={"center"}
            borderRadius={"8px"}
            border={"1px solid #FFF"}
            h="40px"
            w="80px"
            fontSize={"14px"}
            fontFamily={'"Work Sans", sans-serif'}
            fontWeight={"500"}
            lineHeight={"24px"}
            background={"#272937"}
            color={"#FFF"}
          >
            Cancel
          </Button>

          <Button
            p="8px 16px"
            alignItems={"center"}
            borderRadius={"8px"}
            border={"1px solid #FFF"}
            h="40px"
            w="109px"
            fontSize={"14px"}
            fontFamily={'"Work Sans", sans-serif'}
            fontWeight={"500"}
            lineHeight={"24px"}
            background={"#272937"}
            color={"#FFF"}
          >
            Save & Exit
          </Button>

          <Button
            p="8px 16px"
            alignItems={"center"}
            borderRadius={"8px"}
            h="40px"
            w="80px"
            fontSize={"14px"}
            fontFamily={'"Work Sans", sans-serif'}
            fontWeight={"500"}
            lineHeight={"24px"}
            background={"#2F4CDD  "}
            color={"#FFF"}
          >
            Save
          </Button>
      </Flex>
        </VStack>
    </>
  );
};

export default SaveNExit;
