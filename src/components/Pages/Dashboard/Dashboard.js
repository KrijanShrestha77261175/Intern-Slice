import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import DoughnutChart from "./Doughnut";
import Header from "./Header";
import SelectField from "./SelectField";
import BarGraph from "./PTPBarGraph";
import CollectionBarGraph from "./CollectionBarGraph";
import ModeBarGraph from "./ModeBarGraph";
import ComplexGraph from "./ComplexGraph";

const Dashboard = () => {
  const selectStyle = {
    minW: "125px",
    fontSize: "12px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "500",
  };
  const flexStyle = {
    maxW: "544px",
    minW: "544px",
    h: "320px",
    border: "1px solid #E5EAF2",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.07)",
    p: "16px",
  };
  const headerBoxStyle = {
    border: "1px solid #E5EAF2",
    borderRadius: "15px",
    px: "26px",
    py: "20px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <Box>
      <Header headerBoxStyle={headerBoxStyle} />
      <SelectField />
      <VStack>
        <Grid mt={"14px"} templateColumns={"repeat(2,1fr)"} gap="10px" columnGap="50px">
          <GridItem>
            <DoughnutChart selectStyle={selectStyle} flexStyle={flexStyle} />
            </GridItem>
            <GridItem>
            <CollectionBarGraph
              selectStyle={selectStyle}
              flexStyle={flexStyle}
            />
          </GridItem>

            <GridItem>

            <BarGraph selectStyle={selectStyle} flexStyle={flexStyle} />
          </GridItem>

         

          <GridItem>

            <ModeBarGraph selectStyle={selectStyle} flexStyle={flexStyle} />
          </GridItem>
          <GridItem colSpan={2} rowSpan={2}>
            <ComplexGraph headerBoxStyle={headerBoxStyle} />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Dashboard;
