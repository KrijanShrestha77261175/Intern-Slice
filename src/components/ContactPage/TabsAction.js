import {
  Box,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import PTPLog from "../TabComponents/PTPLog";
import ActionHistory from "../TabComponents/ActionHistory";
import EscalationHistory from "../TabComponents/EscalationHistory";
import AllocationHistory from "../TabComponents/AllocationHistory";
import DunningHistory from "../TabComponents/DunningHistory";
import { ChevronRightIcon } from "@chakra-ui/icons";

const TabsAction = () => {
  const tabHeader = [
    { name: "Action History" },

    { name: "PTP Log" },

    { name: "Escalation History" },

    { name: "Allocation History" },

    { name: "Dunning History" },
  ];
  return (
    <>
      <Tabs mt={"58px"} display={{ base: "none", md: "block" }}>
        <TabList ml={"108px"}>
          {tabHeader.map((obj, index) => {
            return (
              <Box 
              key={obj.name + index}> 
                 <Tab
                _selected={{
                  fontWeight: "700",
                  color: "#2F4CDD",
                  borderBottom: "2px solid #2F4CDD",
                }}
                fontFamily={'"Roboto", sans-serif'}
                fontSize={"15px"}
                fontWeight={"400"}
              >
                {obj.name}
              </Tab>

              </Box>
             
            );
          })}
        </TabList>

        <TabPanels>
          <TabPanel>
            <PTPLog />
          </TabPanel>
          <TabPanel>
            <ActionHistory />
          </TabPanel>
          <TabPanel>
            <EscalationHistory />
          </TabPanel>
          <TabPanel>
            <AllocationHistory />
          </TabPanel>
          <TabPanel>
            <DunningHistory />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box display={{ base: "block", md: "none" }}>
        {tabHeader.map((obj, index) => {
          return (
            <Fragment key={index}>
            <Flex alignItems={"center"} justifyContent={"space-between"} w="100vw" >
              <Text
              ml={"16px"}
              mt={"22px"}
              mb={"22px"}
                color={"#3E4954"}
                fontFamily={'"Poppins", sans-serif'}
                fontSize={"20px"}
                fontWeight={"700"}
                whiteSpace={"nowrap"}
                
              >
                {obj.name}
              </Text>
              <ChevronRightIcon mr={"40px"} h="20px" w="20px" display={{base:"flex", md:"none"}}/>
             
            </Flex>
            <Divider orientation="horizontal" w="100vw" />
            </Fragment>
            
          );
        })}
      </Box>
    </>
  );
};

export default TabsAction;
