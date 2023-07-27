import { Button, Divider, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ContactRecordAction from "./ContactPage/ContactRecordAction";
import UpcomingPtp from "./ContactPage/UpcomingPtp";

const Contact = () => {
  return (
    <>
      <Flex
        mt={{base:"22px",md:"33px",lg:"33px"}}
        px={{base:"16px",md:"42px", lg:"42px"}}
        justifyContent={"space-between"}
        flexWrap={{ base: "wrap" }}
      >
        <Text
          fontFamily={'"Poppins", sans-serif'}
          fontSize={"20px"}
          fontWeight={"600"}
          lineHeight={"normal"}
          mr={"11px"}
        >
          Contact
        </Text>

        <Flex overflowX={{ base: "scroll", md: "auto" }} sx={{"&::-webkit-scrollbar": { appearance: "none", height: 0 },}} mt={{base:"20px"}}>
          <HStack gap={"11px"}>
            <Text
              fontFamily={'"Roboto", sans-serif'}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Initiate:
            </Text>

         

            <Button
              alignItems={"center"}
              border="1px solid #2F4CDD"
              variant="outline"
              p="8px 16px"
              color={"#2F4CDD"}
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
            >
              Settlement
            </Button>
            <Button
              alignItems={"center"}
              border="1px solid #2F4CDD"
              variant="outline"
              p="8px 16px"
              color={"#2F4CDD"}
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
            >
              Legal
            </Button>
            <Button
              alignItems={"center"}
              border="1px solid #2F4CDD"
              variant="outline"
              p="8px 16px"
              color={"#2F4CDD"}
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
            >
              SARFAESI
            </Button>
            <Button
              alignItems={"center"}
              border="1px solid #2F4CDD"
              variant="outline"
              p="8px 16px"
              color={"#2F4CDD"}
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
            >
              Reposession
            </Button>

            <Divider w="1px" h="45px" ml={"30px "} mr={"30px"}orientation="vertical" />
          <Button
            alignItems={"center"}
            border="1px solid #FF0909"
            variant="outline"
            p="8px 16px"
            color={"#FF0909"}
            fontFamily={'"Poppins", sans-serif'}
            fontSize={"14px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            
          >
            Escalate
          </Button>
          </HStack>

          

          
        </Flex>

        <Divider mt="18px" display={{md:"none", lg:"none"}} orientation="horizontal" width={"100%"} height={"1px"}/>
      </Flex>

      <ContactRecordAction />
      <UpcomingPtp/>
    </>
  );
};

export default Contact;
