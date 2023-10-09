import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import username from "../../../assets/svg/username.svg";
import password from "../../../assets/svg/password.svg";
import google from "../../../assets/svg/google 1.png";
import facebook from "../../../assets/svg/facebook.png";
import LogIndex from "../Login/LoginInput/index";
import LoginSocial from "../Login/LoginSocial/index";
import LoginDecor from "./LoginDecor/index";
import { Link, useNavigate } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../Schema";
import axios from "axios";

// import { } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const [loginState, setLoginState] = useState(false);
  const [store, setStore] = useState("");
  const navigate = useNavigate();

  // const toast = useToast();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Logged In", data);
    try {
      const response = await axios.post(
        `https://api.escuelajs.co/api/v1/auth/login`,
        {
          email: data.username,
          password: data.password,
        }
      );
      const token = response.data;
      localStorage.setItem("AccessToken", token["access_token"]);

      toast.success("Login Success!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate(NAVIGATION_ROUTES.DASHBOARD, { replace: true });

    
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <>
      <Flex h="100vh">
        <Flex
          w={{ base: "100vw", xl: "50vw" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            w={{ base: "auto", md: "600px", xl: "364px" }}
            my="150px"
            mx={{ base: "20px", xl: "auto" }}
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
              How to get started at MiFin?
            </Text>

            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "Flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Login component for user input */}
              <LogIndex
                placeholder="Username"
                type="text"
                icon={username}
                control={control}
                name="username"
                errors={errors}
              />
              <LogIndex
                placeholder="Password"
                type="password"
                icon={password}
                control={control}
                name={"password"}
                errors={errors}
              />

              <Button
                mt={"24px"}
                p={"25px 30px"}
                maxW={"124px"}
                borderRadius={"16px"}
                bg={"linear-gradient(134deg, #24C6DC 0%, #514A9D 100%)"}
                fontFamily={'"Poppins", sans-serif'}
                fontSize={"12px"}
                fontWeight={"700"}
                color={"#FFF"}
                _hover={{ opacity: "0.75" }}
                boxShadow={"0px 8px 21px 0px rgba(0, 0, 0, 0.16)"}
                type="submit"
              >
                Login Now
              </Button>
            </form>

            <HStack mt={"14px"}>
              <Text color={"#525252"} fontSize={"16px"}>
                Not a member already?
              </Text>
              <Link to={NAVIGATION_ROUTES.SIGNUP}>
                <Text
                  cursor={"pointer"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  textDecoration={"underline"}
                >
                  Sign Up!
                </Text>
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
          display={{ base: "none", md: "none", xl: "flex" }}
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
