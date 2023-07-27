import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Collection = (props) => {
  return (
    <Flex gap="10px" bgColor="#EEF0F6" borderRadius="8px">
      <Text
        p="10px 15px"
        borderRadius="8px"
        fontSize="15px"
        color={props.click === props.name ? "#fff" : "#000"}
        bgColor={props.click === props.name ? "#3E4954" : "#EEF0F6"}
        cursor="pointer"
        height="38px"
      >
        {props.name}
      </Text>
    </Flex>
  );
};

export default Collection;
