import React from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
const Header = ({headerBoxStyle}) => {
      const style = {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "15px",
  };
  const style1 = {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "24px",
    fontWeight: "700",
  };
   
  return (
    <HStack justifyContent={"space-evenly"} >

    <Grid gap={"19px"} mt={"26px"} templateColumns={"repeat(4,1fr)"}>
        <GridItem minW="265px" minH="100px" maxW={"265px"}>
          <Box sx={headerBoxStyle}>
            <Text sx={style}>Total Cases Alloted to Me</Text>
            <Text sx={style1}>65 </Text>
          </Box>
        </GridItem>

        <GridItem minW="265px" minH="100px" maxW={"265px"}>
          <Box sx={headerBoxStyle}>
            <Text sx={style}>Non Actioned Cases</Text>
            <Flex alignItems={"center"} gap={"15px"}>
              <Text sx={style1} color={"#FF0909"}>
                26
              </Text>
              <Text sx={style}>(15%)</Text>
            </Flex>
          </Box>
        </GridItem>

        <GridItem minW="265px" minH="100px" maxW={"265px"}>
          <Box sx={headerBoxStyle}>
            <Text sx={style}>Cases Below Me</Text>
            <Text sx={style1}>21</Text>
          </Box>
        </GridItem>

        <GridItem minW="265px" minH="100px" maxW={"265px"}>
          <Box sx={headerBoxStyle}>
            <Text sx={style}>Total Cases Resolved</Text>
            <Flex alignItems={"center"} gap={"15px"}>
              <Text sx={style1}>45</Text>
              <Text sx={style}>(85%)</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </HStack>

  )
}

export default Header