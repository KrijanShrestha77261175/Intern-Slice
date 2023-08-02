import {
  Box,
  Button,
  Flex,
  HStack,
  Text,

} from "@chakra-ui/react";
import React from "react";
import username from "../../assets/svg/username.svg";
import password from "../../assets/svg/password.svg";
import google from "../../assets/svg/google 1.png";
import facebook from "../../assets/svg/facebook.png";
import LogIndex from "../Login/LoginInput/index";
import LoginSocial from "../Login/LoginSocial/index";
import LoginDecor from "./LoginDecor/index";
import { Link  } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../routes/routes.constant";

const Login = () => {
  return (
    <>
      <Flex h="100vh" >
        <Flex w={{ base: "100vw", xl: "50vw" }} alignItems={"center"} justifyContent={"center"}>
          <Flex
            w={{base:"auto",md:"600px",xl:"364px"}}
            my="150px"
            mx={{base:"20px",xl:"auto"}}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"30px"}
              fontWeight={"700"}
              textTransform={"uppercase"}
            >
              LOGIN
            </Text>
            <Text
              color={"#525252"}
              fontFamily={'"Poppins",sans-serif'}
              fontSize={"16px"}
              fontWeight={"400"}
              textAlign={"center"}
            >
              How to i get started lorem ipsum dolor at?
            </Text>

            {/* Login component for user input */}
            <LogIndex placeholder="Username" type="text" icon={username} />
            <LogIndex placeholder="Password" type="password" icon={password} />

            <Button
              mt={"24px"}
              p={"25px 30px"}
              borderRadius={"16px"}
              bg={"linear-gradient(134deg, #24C6DC 0%, #514A9D 100%)"}
              fontFamily={'"Poppins", sans-serif'}
              fontSize={"12px"}
              fontWeight={"700"}
              color={"#FFF"}
              _hover={{ opacity: "0.75" }}
              boxShadow={"0px 8px 21px 0px rgba(0, 0, 0, 0.16)"}
            >
              Login Now
            </Button>

            <HStack mt={"14px"}>
            <Text color={"#525252"} fontSize={"16px"}>Not a member already?</Text>
            <Link to={NAVIGATION_ROUTES.SIGNUP}>
            <Text cursor={"pointer"} fontWeight={"500"} fontSize={"16px"} textDecoration={"underline"} >Sign Up!</Text>
            </Link>

            </HStack>


            <Text
              fontFamily={'"Poppins", sans-serif'}
              mt={"24px"}
              mb="8px"
              color={"#525252"}
            >
              <strong>Login</strong> with Others
            </Text>

            {/* Login component for socials */}
            <LoginSocial social={"google"} icon={google} />
            <LoginSocial social={"Facebook"} icon={facebook} />
          </Flex>
        </Flex>

        {/* Second Item */}
        <Flex
          display={{ base: "none", md: "none",xl:"flex" }}
          w="50vw"
          bg={"linear-gradient(134deg, #24C6DC 0%, #514A9D 100%)"}
          alignItems={"center"}
          justifyContent={"center"}
          
        >
          <LoginDecor />
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
