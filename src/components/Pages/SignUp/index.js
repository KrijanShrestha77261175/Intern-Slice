import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import usernameImg from "../../../assets/svg/username.svg";
import passwordImg from "../../../assets/svg/password.svg";
import LogIndex from "../Login/LoginInput/index";
import { Link, useNavigate } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import email from "../../../assets/svg/email.svg";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { signInSchema } from "../../Schema";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode:"onBlur",
    resolver: yupResolver(signInSchema),
  });

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log("Registered", data);
    navigate(NAVIGATION_ROUTES.LOGIN)
  };

  // const passwordValidation ={
  //       required:"This field is required",
  //       minLength: {
  //         value:8,
  //         message:"Password must be at least 8 characters long"
  //       },
  //       pattern: {
  //         value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
  //         message:"Password must include at least one uppercase character, one lowercase letter one number and one special character"
  //       }
  //     }
      
  // const emailValidation={
  //       required:"This field is required",
  //       pattern: {
  //         value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //         message:"Email is in Invalid Format"
  //       }
      
  // }
  // const usernameValidation={
  //       required:"This field is required",
  //       minLength: {
  //         value:8,
  //         message:"Username must be at least 6 characters long"
  //       },
  // }

  return (
    <>
      <Flex
        h={"100vh"}
        w={{ base: "100vw", xl: "100vw" }}
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
            Sign Up
          </Text>
          <Text
            color={"#525252"}
            fontFamily={'"Poppins",sans-serif'}
            fontSize={"16px"}
            fontWeight={"400"}
            textAlign={"center"}
          >
            How do I get started at MiFin?
          </Text>

          <form onSubmit={handleSubmit(onSubmit)} style={{display:"Flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {/* Login component for user input */}
            <LogIndex
              placeholder="Username"
              type="text"
              icon={usernameImg}
              name="username"
              control={control}
              errors={errors}
            />
            <LogIndex
              placeholder="Email"
              type="email"
              icon={email}
              name="email"
              control={control}
              errors={errors}
            />
            <LogIndex
              placeholder="Password"
              type="password"
              icon={passwordImg}
              name="password"
              control={control}
              errors={errors}
            />
            <LogIndex
              placeholder="Confirm Password"
              type="password"
              icon={passwordImg}
              name="confirmPassword"
              control={control}
              errors={errors}
            />

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
              type="submit"
            
            >
              Sign Up
            </Button>
          </form>

          <HStack mt={"14px"}>
            <Text color={"#525252"} fontSize={"16px"}>
              Already a member?
            </Text>
            <Link to={NAVIGATION_ROUTES.LOGIN}>
              <Text
                cursor={"pointer"}
                fontWeight={"500"}
                fontSize={"16px"}
                textDecoration={"underline"}
              >
                Login
              </Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUp;
