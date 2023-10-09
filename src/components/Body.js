import React from "react";
import Tab from "./HeaderTab/Tab";
import Pagenation from "./Pagenation";
import { Box } from "@chakra-ui/react";
import SaveNExit from "./SaveNExit";
import FloatingBox from "./FloatingBox";

const Body = () => {
  return (
    <>
      <Box position={"relative"}>
        <Tab />
        <Pagenation />
        <Box display={{ base: "flex", md: "none" }}>
          <SaveNExit />
        </Box>
        <Box
          pos={"fixed"}
          bottom={"18px"}
          left={{ base: "50%", md: "15px" }}
          transform={{ base: "translateX(-50%)", md: "none" }}
          zIndex={1}
        >
          <FloatingBox />
        </Box>
      </Box>
    </>
  );
};

export default Body;
