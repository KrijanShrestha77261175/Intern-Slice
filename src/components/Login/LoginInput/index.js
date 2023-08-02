import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const index = ({ placeholder, type, icon }) => {
  const styles = {
    borderRadius: "16px",
    h: "52px",
    bg: "#F0F8FF",
  };
  return (
    <InputGroup mt="24px">
      <InputLeftElement pointerEvents="none">
        <Image ml={"18px"} mr="10px" mt={"14px"} h="24px" w="24px" src={icon} />
      </InputLeftElement>
      <Input
        borderRadius={"16px"}
        _placeholder={{
          fontFamily: '"Poppins", sans-serif',
          color: "#1C1C1C",
          fontSize: "12px",
        }}
        h="52px"
        type={type}
        sx={styles}
        placeholder={placeholder}
      />
    </InputGroup>
  );
};

export default index;
