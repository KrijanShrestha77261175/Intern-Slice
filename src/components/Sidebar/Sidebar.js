import {
  Box,
  Collapse,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/svg/logo.svg";
import sidebarOrder from "../../assets/svg/sidebarOrder.svg";
import { Link as RouterLink } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../routes/routes.constant";

const Sidebar = ({ openSidebarfunction, openSidebarState }) => {
  const sidebarContent = [
    { name: "Dashboard", to:  NAVIGATION_ROUTES.DASHBOARD},
    { name: "Profile", to:  NAVIGATION_ROUTES.PROFILE },
    { name: "test2" },
  ];

  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const changeComponent = (name) => {
    setSelectedComponent(name);
  };
  return (
    <Collapse in={openSidebarState} animateOpacity>
    <Box
      h="100vh"
      minW="16vw"
      background={"#1A2139"}
      boxShadow={"18px 4px 35px 0px rgba(0, 0, 0, 0.02)"}
      transition="transform 0.5s ease-in-out" 
      transform={openSidebarState ? "translateX(0)" : "translateX(-240px)"}
      pos={"fixed"}
      left="0"
      top="0"
      zIndex={1}
    >
      
      <Flex alignItems="center" background={"#000000"}>
        <HamburgerIcon
          ml="20px"
          mr="22px"
          h="16px"
          w="20px"
          color={"#FFF"}
          onClick={() => openSidebarfunction()}
        />
        <ChevronLeftIcon
          h="24px"
          w="48px"
          mr="9px"
          display={{ base: "block", md: "none" }}
        />
        <Flex
          ml="10px"
          lineHeight="18px"
          mt="20px"
          alignItems={"center"}
          pb={"20px"}
        >
          <Image src={logo} h="42px" w="42px" />
          <Box ml={"10px"}>
            <Text
              color={{ base: "#000", md: "#FFF" }}
              fontWeight="800"
              fontFamily="'Raleway', sans-serif"
              fontSize="24px"
            >
              miFIN
            </Text>
            <Text color={{ base: "#000", md: "#FFF" }}>qualtech</Text>
          </Box>
        </Flex>
      </Flex>

      <UnorderedList mt={"8px"} mx={"14px"} w={"212px"} listStyleType={"none"}>
        {sidebarContent.map((obj, index) => {
          return (
            <ListItem
              cursor={"pointer"}
              borderRadius={"8px"}
              p={"8px 10px"}
              color={selectedComponent === obj.name ? "#FFF" : "#969BA0"}
              key={index}
              onClick={() => setSelectedComponent(obj.name)}
              background={selectedComponent === obj.name && "#2295DD"}
            >
              <Link as={RouterLink} to={obj.to}>
                <Flex gap={"14px"}>
                  <Image src={sidebarOrder} />
                  <Text
                    fontFamily={'"Poppins", sans-serif'}
                    fontWeight={"500"}
                    fontSize={"15px"}
                    >
                    {obj.name}
                  </Text>
                </Flex>
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
        </Collapse>
  );
};

export default Sidebar;
