import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import logo from "../../assets/svg/logo.svg";
import sidebarOrder from "../../assets/svg/sidebarOrder.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  NAVIGATION_ROUTES,
  NAVIGATION_ROUTES_COMPONENT,
} from "../routes/routes.constant";

const Sidebar = ({ openSidebarfunction, openSidebarState }) => {
  const sidebarContent = [
    {
      name: "Dashboard",
      to: NAVIGATION_ROUTES.DASHBOARD,
      type: "nonAccordian",
    },
    { name: "Profile", to: NAVIGATION_ROUTES.PROFILE, type: "nonAccordian" },
    {
      name: "Tables",
      type: "accordian",
      child: [
        {
          name: "Users",
          to: NAVIGATION_ROUTES.USERS,
        },
        {
          name: "Posts",
          to: NAVIGATION_ROUTES.POSTS,
        },
      ],
    },
  ];

  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const { isOpen, onToggle } = useDisclosure()

  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    setSelectedComponent(NAVIGATION_ROUTES_COMPONENT[pathname]); //NAVIGATION_ROUTES_COMPONENT[pathname]
  }, []);

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
            cursor={"pointer"}
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

        <UnorderedList
          mt={"8px"}
          mx={"14px"}
          w={"212px"}
          listStyleType={"none"}
        >
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
                <Link
                  as={RouterLink}
                  to={obj.type === "accordian" ? "" : obj.to}
                >
                  <Flex gap={"14px"} flexWrap={"wrap"}>
                    <Image src={sidebarOrder} />
                    {obj.type === "accordian" ? (
                      <>
                        {/* <Accordion allowToggle>
                          <AccordionItem w="inherit" border={"none"} >
                            <h2>
                              <AccordionButton p="0" >
                                <Flex textAlign="left" justifyContent={"flex-end"}>
                                  {obj.name}
                                <AccordionIcon />
                                </Flex>
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} paddingX={"0"}>
                              <UnorderedList listStyleType="none" ml={0} pl={0}>
                                {obj.child.map((childItem, childIndex) => (
                                  <ListItem
                                    key={childIndex}
                                    cursor={"pointer"}
                                    borderRadius={"8px"}
                                    p={"8px 10px"}
                                    color={
                                      selectedComponent === childItem.name
                                        ? "#FFF"
                                        : "#969BA0"
                                    }
                                    onClick={() =>
                                      setSelectedComponent(childItem.name)
                                    }
                                    background={
                                      selectedComponent === childItem.name &&
                                      "#2295DD"
                                    }
                                  >
                                    <Link as={RouterLink} to={childItem.to}>
                                      <Text
                                        fontFamily={'"Poppins", sans-serif'}
                                        fontWeight={"500"}
                                        fontSize={"15px"}
                                      >
                                        {childItem.name}
                                      </Text>
                                    </Link>
                                  </ListItem>
                                ))}
                              </UnorderedList>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion> */}

                        <Flex justifyContent={"space-between"} gap="80px"  
                          color={
                            selectedComponent === obj.name ? "#FFF" : "#969BA0"
                          }
                          onClick={onToggle}
                        >
                          <Text>

                          {obj.name}
                          </Text>
                          <ChevronDownIcon h="20px" w="20px" />
                        </Flex>
                        <Collapse mt={4}  in={isOpen} animateOpacity>
                          <Box>
                          <UnorderedList listStyleType="none" ml={0} pl={0}>
                                {obj.child.map((childItem, childIndex) => (
                                  <ListItem
                                    key={childIndex}
                                    cursor={"pointer"}
                                    borderRadius={"8px"}
                                    p={"8px 10px"}
                                    color={
                                      selectedComponent === childItem.name
                                        ? "#FFF"
                                        : "#969BA0"
                                    }
                                    onClick={() =>
                                      setSelectedComponent(childItem.name)
                                    }
                                    background={
                                      selectedComponent === childItem.name &&
                                      "#2295DD"
                                    }
                                  >
                                    <Link as={RouterLink} to={childItem.to}>
                                      <Text
                                        fontFamily={'"Poppins", sans-serif'}
                                        fontWeight={"500"}
                                        fontSize={"15px"}
                                      >
                                        {childItem.name}
                                      </Text>
                                    </Link>
                                  </ListItem>
                                ))}
                              </UnorderedList>
                          </Box>

                        </Collapse>
                      </>
                    ) : (
                      <Text
                        fontFamily={'"Poppins", sans-serif'}
                        fontWeight={"500"}
                        fontSize={"15px"}
                      >
                        {obj.name}
                      </Text>
                    )}
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
