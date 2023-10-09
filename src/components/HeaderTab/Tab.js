import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React, {useState} from "react";
import Collection from "./Collection";
import { useNavigate } from "react-router-dom";
import Content from "../Content";
import PersonProfile from '../Pages/Profile/PersonProfile'

const Tab = () => {
  const sliderLeft = [
    { name: "Contact" },
    { name: "Settlement" },
    { name: "Legal" },
    { name: "Sarfaesi" },
  ];

  const sliderRight = [
    { name: "Applicant" },
    { name: "Asset" },
    { name: "Notepad" },
    { name: "Document" },
  ];

  // const navigate = useNavigate();

  const [clickName,setClickName] = useState('Contact');
  const handleClick=(name)=> {
  // eslint-disable-next-line no-restricted-globals
  history.replaceState(null, "", `?tab=${name}`);
    setClickName(name);
  }

  return (
    <>
      <Flex
      ml={"20px"}
        h="43px"
        mt="18px"
        mr={{base:"0px",md:"26px"}}
        justifyContent="space-between"
        overflowX={{ base: "scroll", md: "auto" }}
        gap={{ base: "20px", md: "20px" }}
        sx={{"&::-webkit-scrollbar": { appearance: "none", height: 0 },}}
      >
        <Flex alignItems="center" gap="20px">
          <ChevronLeftIcon
            h="24px"
            w="24px"
            mr="10px"
            display={{ base: "none", md: "block" }}
          />
          {sliderLeft.map((obj, index) => {
            return (
              <Box key={index} onClick={()=> handleClick(obj.name) }>
                <Collection name={obj.name} click={clickName}/>
              </Box>
            );
          })}
        </Flex>

        <Flex alignItems="center" gap="16px">
          {sliderRight.map((obj, index) => {
            return (
              <Box key={index} onClick={()=> handleClick(obj.name) }>
                <Collection name={obj.name} click={clickName}/>
              </Box>
            );
          })}
        </Flex>
      </Flex>
       <PersonProfile/>
      <Content isActive={clickName}/> 
    </>
  );
};

export default Tab;
