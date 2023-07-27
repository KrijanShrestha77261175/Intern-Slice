import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Progress,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import group191 from "../assets/svg/Group191.svg";
import groupCall from "../assets/svg/GroupCall.svg";
import group4787 from "../assets/svg/Group4787.svg";
import groupLocation from "../assets/svg/GroupLocation.svg";
import groupMail from "../assets/svg/GroupMail.svg";
import addBtn from "../assets/svg/ADD.svg";
import history1 from "../assets/svg/history1.svg";
import ExtentedProfile from "./ExtentedProfile";
import editPicture from '../assets/svg/editPicture.svg'
import radheShyam from '../assets/svg/radheshyam.svg'

const PersonProfile = () => {
  return (
    <>
      <Box
        mx={{ base: "16px", md: "41px" }}
        mt="24px"
        h="708pz"
        borderRadius="20px"
        border="1px solid #E5EAF2"
        background="#FFF"
        boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
      >
        <Flex px={"20px"} mb={"18px"} >
          <Box position={"relative"} minW={{ base: "70px", md: "128px" }}
              minH={{ base: "70px", md: "128px" }}
              maxH={{ base: "70px", md: "128px" }}
              maxW={{ base: "70px", md: "128px" }}
              mt={"15px"}>
            <Image
              
              h={ "inherit"}
              w={ "inherit"}
              borderRadius="16px"
              src={radheShyam}
              
            />
            <Image w="40px" h="40px" position="absolute" bottom="0" right="0" src={editPicture}/>
          </Box>

          <Flex flexDirection="column" ml={"32px"}>
            <Flex display={{base:"block", lg:"flex"}}> 
              <Flex mt="20px">
                <Box>
                  <Text
                    fontFamily="'Roboto', sans-serif"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                  >
                    Applicant
                  </Text>
                  <Flex alignItems={"center"}>
                    <Text
                      fontFamily="Poppins"
                      fontSize={{base:"18px",md:"28px"}}
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="normal"
                      whiteSpace={"nowrap"}
                    >
                      Rohan Mehra
                    </Text>
                    <Image ml={{base:"90px",md:"19px"}} w="20px" h="12px" src={group191} />
                  </Flex>
                </Box>
              </Flex>

              <Flex mt={9} ml={{base:"23px",md:44}} >
                <HStack alignItems={"flex-start"} >
                  <Flex alignItems={"center"} >
                    <Image w="16px" h="18px" src={groupCall} />
                    <Text
                      ml="3px"
                      mr="6px"
                      fontSize="14px"
                      fontWeight="500"
                      color="#3E4954"
                      whiteSpace={"nowrap"}
                    >
                      +91 9825361829
                    </Text>

                    <Image w="12px" h="8px" src={group4787} />
                  </Flex>
                </HStack>

                <HStack alignItems={"flex-start"}>
                  <Flex alignItems={"center"}>
                    <Image ml="24px" w="14px" h="20px" src={groupLocation} />
                    <Text
                      mr="6px"
                      ml="8px"
                      color="#3E4954"
                      fontSize="14px"
                      fontWeight="500"
                      whiteSpace={"nowrap"}
                    >
                      15 A Atlantis tower...
                    </Text>
                    <Image w="12px" h="8px" src={group4787} />
                    <Image
                      ml="22.85px"
                      w="22.64px"
                      h="15.92px"
                      src={groupMail}
                    />
                  </Flex>
                </HStack>
              </Flex>

              <Flex mt="22px">
                <Divider
                  ml="23px"
                  mr="23px"
                  h="50px"
                  w="1px"
                  orientation="vertical"
                />
                <Box>
                  <Text fontSize="12px" fontWeight="400" opacity="0.5">
                    Overall Progress
                  </Text>
                  <Flex>
                    <Text fontSize="15px" fontWeight="700" mt="8px" mr="12px">
                      29%
                    </Text>
                    <Progress
                      borderRadius="10px"
                      w="118px"
                      colorScheme="green"
                      height="20px"
                      value={29}
                    />
                  </Flex>
                </Box>
                <Divider
                  ml="24px"
                  mr="24px"
                  h="50px"
                  w="1px"
                  orientation="vertical"
                />
                <Box>
                  <Text mb="7px" opacity="0.5" fontSize="12px" fontWeight="400">
                    Loan Status
                  </Text>
                  <Box
                    textAlign="center "
                    borderRadius="4px"
                    w=" 84px"
                    h="23px"
                    fontSize="15px"
                    fontWeight="400"
                    color="#FFF"
                    background="#F17E14"
                    mr="34px"
                  >
                    Pending
                  </Box>
                </Box>
              </Flex>
            </Flex>

            {/** Sanctioned Amount */}
            <Flex mt={"14px"} display={{ base: "none", md:"flex" }}>
              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"25px"}
                >
                  Sanctioned Amount
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  Rs. 500000
                </Text>
                <Divider
                  ml="20px"
                  mr="20px"
                  h="24px"
                  w="1px"
                  orientation="vertical"
                />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"14px"}
                >
                  Branch
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  Alwar
                </Text>
                <Divider
                  ml="20px"
                  mr="20px"
                  h="24px"
                  w="1px"
                  orientation="vertical"
                />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"18px"}
                >
                  Product
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  CDL Product
                </Text>
                <Divider
                  ml="20px"
                  mr="20px"
                  h="24px"
                  w="1px"
                  orientation="vertical"
                />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                >
                  Tenure
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  24M 15D
                </Text>
                <Divider
                  ml="20px"
                  mr="20px"
                  h="24px"
                  w="1px"
                  orientation="vertical"
                />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                >
                  Interest Rate
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  7.1%
                </Text>
                <Divider
                  ml="20px"
                  mr="20px"
                  h="24px"
                  w="1px"
                  orientation="vertical"
                />
              </HStack>
            </Flex>

            {/*** Customer Code */}
            <Flex mt={"22px"} display={{ base: "none", md:"flex"  }}>
              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"23px"}
                >
                  Customer Code
                </Text>
                <Text
                  mr={"20px"}
                  color={"#3E4954"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                >
                  CN000000000000644
                </Text>
                <Divider mr="20px" h="24px" w="1px" orientation="vertical" />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"18px"}
                >
                  Prospect No
                </Text>
                <Text
                  mr={"20px"}
                  color={"#3E4954"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                >
                  172638384
                </Text>
                <Divider mr="20px" h="24px" w="1px" orientation="vertical" />
              </HStack>

              <HStack>
                <Text
                  opacity={"0.5"}
                  color={"#3E4954"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  mr={"18px"}
                >
                  NPA Stage
                </Text>
                <Text color={"#3E4954"} fontSize={"14px"} fontWeight={"500"}>
                  Regular
                </Text>
              </HStack>
            </Flex>

            {/** Tags */}
            <Flex
              mt={"15px"}
              justifyContent={"space-between"}
              alignItems={"center"}
              display={{ base: "none", md:"flex" }}
            >
              <Flex>
                <HStack>
                  <Text
                    opacity={"0.5"}
                    color={"#3E4954"}
                    fontSize={"12px"}
                    fontWeight={"400"}
                  >
                    Tags
                  </Text>
                  <Tag
                    size={"sm"}
                    borderRadius="full"
                    variant="solid"
                    backgroundColor={"#F1f1f1"}
                  >
                    <TagLabel
                      fontWeight={"400"}
                      fontSize={"12px"}
                      color="#3E4954"
                      fontFamily={"Roboto"}
                    >
                      Tag Name
                    </TagLabel>
                    <TagCloseButton color={"#000"} />
                  </Tag>
                </HStack>

                <HStack ml={"20px"} mr={"22px"}>
                  <Tag
                    size={"sm"}
                    borderRadius="full"
                    variant="solid"
                    backgroundColor={"#F1f1f1"}
                  >
                    <TagLabel
                      fontWeight={"400"}
                      fontFamily={"Roboto"}
                      fontSize={"12px"}
                      color="#3E4954"
                    >
                      Tag Name
                    </TagLabel>
                    <TagCloseButton color={"#000"} />
                  </Tag>
                </HStack>

                <Image
                  h="14px"
                  w="14px"
                  transform={`rotate(90deg)`}
                  src={addBtn}
                  mr={"16px"}
                />
                <Image h="14px" w="14px" src={history1} />
              </Flex>

              <Flex gap={"10px"} mb="27px">
                <Button
                  h="32px"
                  w="62px"
                  fontSize={"14px"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  border="1px solid #2F4CDD"
                  variant="outline"
                  p="4px 16px"
                  color={"#2F4CDD"}
                >
                  SOA
                </Button>

                <Button
                  h="32px"
                  w="104px"
                  fontSize={"14px"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  border="1px solid #2F4CDD"
                  variant="outline"
                  p="4px 16px"
                  color={"#2F4CDD"}
                >
                  Stat-Card
                </Button>

                <Button
                  h="32px"
                  w="184px"
                  fontSize={"14px"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  border="1px solid #2F4CDD"
                  variant="outline"
                  p="4px 16px"
                  color={"#2F4CDD"}
                >
                  Repayment Schedule
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex mt={"9px"} justifyContent={"center"}>
          <Divider width="95%" orientation="horizontal" />
        </Flex>
        <ExtentedProfile />
      </Box>
    </>
  );
};

export default PersonProfile;
