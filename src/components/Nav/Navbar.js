import {
  AddIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Image, Flex, Box, Text, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import logo from "../../assets/svg/logo.svg";
import flameLogo from "../../assets/svg/flameLogo.png";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {CgLogOut} from "react-icons/cg"
import logout from "../../assets/svg/logout.png"
import {logoutFunction} from "../utils/deleteToken"

const Navbar = ({openSidebarfunction, openSidebarState  }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  // Function to format the date as "day Month year"
  const formatDate = (date) => {
    return date.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      seconds: "2-digits",
    });
  };

  // Function to update the time and display it
  const updateTime = () => {
    const currentTime = new Date();
    setCurrentTime(currentTime); // Update the currentTime state with the new time
  };

  useEffect(() => {
    // Update the time every second (1000 milliseconds)
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Flex
        p={{ base: "14px 20px", md: "18px 24px" }}
        justifyContent={openSidebarState ? "flex-end": "space-between"} 
        height="80px"
        background="#FFF"
        boxShadow="0px 8px 12px 0px rgba(0, 0, 0, 0.04)"
      >
        <Flex alignItems="center" display={openSidebarState ? "none" : "flex"}>
          <HamburgerIcon onClick={()=>openSidebarfunction() } mr="20px" display={{ base: "none", md: "block" }} cursor={"pointer"}/>
          <ChevronLeftIcon
            h="24px"
            w="48px"
            mr="9px"
            display={{ base: "block", md: "none" }}
          />
          <Image src={logo} h="42px" w="41.987px" />
          <Box ml="10px" lineHeight="18px">
            <Text
              color={{ base: "#000", md: "#3696C6" }}
              fontWeight="bold"
              fontFamily="'Raleway', sans-serif"
              fontSize="24px"
            >
              miFIN
            </Text>
            <Text color={{ base: "#000", md: "#0F6889" }}>qualtech</Text>
          </Box>
        </Flex>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Image src={flameLogo} mr="9px" />
          <Text fontWeight="bold" fontFamily="'Poppins', sans-serif" mr="27px">
            ABC Inc
          </Text>
          <Box borderLeft="1px" pl="23px" height="50px">
            <Text fontWeight="400" textAlign="end">
              Mark Anderson
            </Text>
            <Flex>
              <Text
                fontSize="12px"
                opacity="0.6000000238418579"
                fontStyle="normal"
              >
                Last Login:{formatDate(currentDate)}, {formatTime(currentTime)}
              </Text>
              <Box
                fontSize="12px"
                ml="9px"
                backgroundColor="#3E4954"
                borderRadius="4px"
                color="#FFF"
                px="12px"
              >
                {formatDate(currentDate)}
              </Box>
            </Flex>
          </Box>

          <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<ChevronDownIcon  width="28px" height="24px" ml="13px" />}
    variant='flushed'
  />
  <MenuList>
    {/* <MenuItem icon={<AddIcon />}>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />}>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      Open Closed Tab
    </MenuItem> */}
    <MenuItem onClick={logoutFunction} >
    <Image src={logout} w="16px" h="16px" mr="10px"/>
      Logout
    </MenuItem>
  </MenuList>
</Menu>
        
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
