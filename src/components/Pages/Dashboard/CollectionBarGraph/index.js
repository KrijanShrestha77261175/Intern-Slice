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


 
  const CollectionBarGraph = ({selectStyle, flexStyle}) => {
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
      },
      legend: {
        display: false, // Set this to false to hide the dataset label from the legend
      }
    }
    
      const labels = [
       "1/12",
       "2/12",
       "3/12",
       "4/12",
       "5/12",
       "6/12",
       "7/12",
       "8/12",
       "9/12",
       "10/12",

      ];
      const data = {
        labels,
        datasets: [
          {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: "#1BB6E7",
            backgroundColor: "#1BB6E7",
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
          Collection Trend
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
  )
}

export default CollectionBarGraph;