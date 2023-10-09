import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormErrorMessage,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useController } from "react-hook-form";

const Index = ({
  placeholder,
  type,
  icon,
  name,
  control,
  errors,
  registerValidation,
}) => {
  const styles = {
    borderRadius: "16px",
    h: "52px",
    bg: "#F0F8FF",
  };
  const [show, setShow] = useState(false);
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return (
    <>
      <InputGroup mt="24px">
        <InputLeftElement pointerEvents="none">
          <Image
            ml={"18px"}
            mr="10px"
            mt={"14px"}
            h="24px"
            w="24px"
            src={icon}
          />
        </InputLeftElement>

        <Input
          id={name}
          placeholder={placeholder}
          {...field}
          type={type === "password" ? (show ? "text" : "password") : type}
          borderRadius={"16px"}
          _placeholder={{
            fontFamily: '"Poppins", sans-serif',
            color: "#1C1C1C",
            fontSize: "12px",
          }}
          h="52px"
          sx={styles}
        />

        {type === "password" && (
          <InputRightElement
            width="4.5rem"
            mt={"5px"}
            onMouseDown={() => setShow(!show)}
            onMouseUp={() => setShow(false)}
            onMouseLeave={() => setShow(false)}
            cursor="pointer"
          >
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </InputRightElement>
        )}
      </InputGroup>
      {error && errors[name] && (
        <Text color={"red"}>{errors[name]?.message}</Text>
      )}
    </>
  );
};

export default Index;
