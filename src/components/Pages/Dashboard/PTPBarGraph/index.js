import { Box, Flex, HStack, Select, Text } from "@chakra-ui/react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ selectStyle, flexStyle }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
      plugins: {
            legend: {
              display: false, // Hide the legend
            },
            title: {
              // display: true,
              // text: 'Chart.js Horizontal Bar Chart',
            },
            tooltip: {
              callbacks: {
                label: () => null, // Hide the tooltip label
              },
            },
          },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Rupees (Lakhs)', // Custom label for the y-axis
          font: {
            size: 11,
            family:"Roboto"
          },
        },
      },
}
  };

  const labels = [
    "01/23",
    "02/23",
    "03/23",
    "04/23",
    "05/23",
    "06/23",
    "07/23",
    "08/23",
    "09/23",
    "10/23",
  ];
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "#2F4CDD",
        backgroundColor: "#2F4CDD",
      },
    ],
  };

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
          PTP Trend
        </Text>
        <Flex gap={"18px"} justifyContent={"flex-end"}>
          <Select sx={selectStyle} variant="filled" placeholder="All Products">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>

          <Select sx={selectStyle} variant="filled" placeholder="All Buckets">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
        </Flex>
        <HStack mt={"26px"} justifyContent={"center"} h="220px"  w="100%">
          <Bar options={options} data={data} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default BarGraph;
