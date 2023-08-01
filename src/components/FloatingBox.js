import { ChevronDownIcon } from "@chakra-ui/icons";
import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import addPencil from '../assets/svg/addPencil.svg'
import addClock from '../assets/svg/addClock.svg'
import addUp from '../assets/svg/addUp.svg'

const FloatingBox = () => {
  return (
    <>
      <Flex
        w={{ base: "311px", md: "256px" }}
        h={{ base: "72px", md: "60px" }}
        borderRadius={"10px"}
        border={"1px solid #D1D9E5"}
        boxShadow={" 0px 0px 20px 0px rgba(0, 0, 0, 0.10)"}
        background={"#FFF"}
      >
        <Flex alignItems={"center"} >
          <ChevronDownIcon ml={"20px"} mr={"20px"} h="20px" w="20px"/>
          <Divider orientation="vertical" h={{base:"72px",md:"60px" }}/>
        </Flex>

        <Flex alignItems={"center"} gap={"24px"}>
            <Text ml={{base:"25px", md:"22px"}} fontFamily={'"Roboto", sans-serif'} fontSize={"12px"} fontWeight={"400"}>
                Add
            </Text>

            <Image h={{base:"28px", md:"24px"}} w={{base:"25px", md:"20px"}} src={addPencil}/>

            <Image h={{base:"30px", md:"24px"}} w={{base:"30px", md:"24px"}} src={addClock}/>

            <Image mr={{base:"22px", md:"26px"}} h={{base:"28px", md:"24px"}} w={{base:"25px", md:"20px"}} src={addUp}/>


        </Flex>
      </Flex>
    </>
  );
};

export default FloatingBox;
