import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend as LegendModule,
} from "chart.js";
import { Box, Flex, HStack, Select, Text } from "@chakra-ui/react";

const DoughnutChart = ({ selectStyle, flexStyle }) => {
  const data = {
    labels: [
      "Collected Till Date",
      "PTP",
      "Actioned - No Result",
      "Not Actioned",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 5, 3, 5],
        backgroundColor: ["#10CF8B", "#928FFF", "#FDF8CF", "#FF6666"],
        borderColor: ["#10CF8B", "#928FFF", "#FDF8CF", "#FF6666"],
        borderWidth: 1,
      },
    ],
  };
  ChartJS.register(ArcElement, Tooltip, LegendModule);

  const legendOptions = {
    display: true, // Display the legend
    position: "right", // Display the legend on the right side
    labels: {
      usePointStyle: true, // Use point style for the legend labels
    },
  };

  const textCenter = {
    beforeDraw: function(chart) {
      var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "top";
          var text = "Foo-bar",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
     } 
  }
  return (
    <Box sx={flexStyle}>
      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          fontFamily={'"Poppins", sans-serif'}
          fontSize={"15px"}
          fontWeight={"700"}
        >
          Collection Till Date
        </Text>
        <Flex gap={"18px"}>
          <Select sx={selectStyle} variant="filled" placeholder="All Products">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>

          <Select sx={selectStyle} variant="filled" placeholder="All Buckets">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
        </Flex>
      </Flex>
      <HStack justifyContent={"center"} h="250px">
        <Doughnut
          data={data}
          options={{
            plugins: { legend: legendOptions, textCenter },
            responsive: true,
            maintainAspectRatio: true,
            
          }}
        />
      </HStack>
    </Box>
  );
};

export default DoughnutChart;
