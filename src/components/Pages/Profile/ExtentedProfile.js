import { Box, Button, Collapse, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import showToggle from "../../../assets/svg/showToggle.svg";

const ExtentedProfile = () => {
  const toFillData = [
    { name: "Prospect No.", value: "CDL000000000947" },
    { name: "Instalment Amount", value: "-" },
    { name: "Sanction Date", value: "16 May 2024" },
    { name: "Instalment Start Date", value: "-" },
    { name: "Group", value: "Adaptwise" },
    { name: "Processed", value: "No" },
    { name: "Sanctioned Amount", value: "500000" },
    { name: "Tenure", value: "24M 15D" },
    { name: "Frequency", value: "-" },
    { name: "Instalment Type", value: "-" },
    { name: "App Form No.", value: "T65Y6749" },
    { name: "Branch", value: "Alwar" },
    { name: "Interest RT", value: "-" },
    { name: "NPA Stage", value: "Regular" },
    { name: "Customer Code", value: "CN000000000000644" },
    { name: "Effective Rate", value: "-" },
    { name: "Product", value: "CDL Product" },
    { name: "Scheme", value: "CDL Scheme" },
    { name: "Last Tranch", value: "None" },
    { name: "Entity Type", value: "Individual" },
    { name: "NACH Status", value: "-" },
  ];

  const [show, setShow] = useState(false);
  const HandleToggle = () => setShow(!show);
  return (
    <>
      {/* <Collapse> */}
        <Grid
          mt={"30px"}
          mb={"40px"}
          px={"40px"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {toFillData.map((obj, index) => {
            return (
              <GridItem mb={"25px"} key={index}>
                <Text fontSize={"14px"} fontWeight={"400"}>
                  {obj.name}
                </Text>
                <Text fontSize={"16px"} fontWeight={"500"} color={"#3E4954"}>
                  {obj.value}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
    </>
  );
};

export default ExtentedProfile;
