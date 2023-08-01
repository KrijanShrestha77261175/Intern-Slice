import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Select,
  Text,
  VStack,
  color,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ContactRecordAction = () => {
  const data = [
    { name: "Action", type: "dropdown", placeHolder: "Select" },
    { name: "Action Date", type: "dropdown", placeHolder: "Select" },
    { name: "Action Time", type: "inputField", placeHolder: "Enter" },
    { name: "Action Code", type: "dropdown", placeHolder: "Select" },
    { name: "Case Status", type: "dropdown", placeHolder: "Enter" },
    { name: "Next Action", type: "dropdown", placeHolder: "Enter" },
    { name: "Next Action Date", type: "dropdown", placeHolder: "Select" },
    { name: "Next Action Time", type: "dropdown", placeHolder: "Select" },
    { name: "Remarks", type: "inputField", placeHolder: "Enter" },
  ];

  const options = [
    {name:"option1"},
    {name:"option2"},

    {name:"option3"},

    {name:"option4"},

  ]

  return (
    <>
      <Box mt={{ base: "21px", lg: "26px" }}>
        <Text
          ml={{ base: "16px", lg: "108px" }}
          mb="26px "
          color={"#3E4954"}
          fontFamily={'"Poppins", sans-serf'}
          fontSize={"24px"}
          fontWeight={"700"}
          marginRight={"108px"}
        >
          Record Action
        </Text>
        <VStack>
          <Grid
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(4,1fr)",
            }}
            gridColumnGap={{ base: "16px", md: "32px", lg: "96px" }}
            mx={"20px"}
          >
            {data?.map((obj, index) => {
              return (
                <GridItem mb={"24px"} key={index}>
                  <Text
                    color="#000"
                    mb="8px"
                    fontFamily={'"Roboto", sans-serif'}
                    fontSize={"14px"}
                    fontWeight={"400"}
                    opacity="0.699999988079071"
                  >
                    {obj.name}
                  </Text>
                  {obj.type === "dropdown" ? (
                    // <Menu>
                    //   <MenuButton
                    //     w={{base:"140px",md:"190px",lg:"250px"}}
                    //     borderBottom={"1px solid #00000026"}
                    //   >
                    //     <HStack justifyContent={"space-between"}>
                    //       <Text
                    //         color={"#3E4954"}
                    //         fontFamily={'"Poppins", sans-serif'}
                    //         fontWeight={"500"}
                    //         fontSize={"15px"}
                    //         opacity={"0.5"}
                    //       >
                    //         {obj.placeHolder}
                    //       </Text>
                    //       <ChevronDownIcon />
                    //     </HStack>
                    //   </MenuButton>
                    //   <MenuList>
                    //     <MenuItem>Option1</MenuItem>
                    //     <MenuItem>Option2</MenuItem>
                    //     <MenuDivider />
                    //     <MenuItem>Option3</MenuItem>
                    //     <MenuItem>Option4</MenuItem>
                    //   </MenuList>
                    // </Menu>
                    <Select sx={{fontFamily:'"Poppins", sans-serif', color:"#3E4954", fontSize:"15px" ,opacity:"0.5"}} variant="flushed" placeholder="Select">
                      {options.map((obj,index)=> {
                        return <option key={index} sx={{fontFamily:'"Poppins", sans-serif', color:"#3E4954", fontSize:"15px" ,opacity:"0.5"}} value="option1">{obj.name}</option>
                      })}
                    </Select>
                  ) : (
                    <Input
                      sx={{
                        color: "#3E4954",

                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "15px",
                        fontWeight: "500",
                        borderBottom: "1.25px solid #00000026",
                      }}
                      height={6}
                      _placeholder={{ opacity: "0.5", color: "inherit" }}
                      variant={"flushed"}
                      w={{ base: "140px", md: "190px", lg: "250px" }}
                      placeholder={obj.placeHolder}
                    />
                  )}
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
      </Box>
    </>
  );
};

export default ContactRecordAction;
