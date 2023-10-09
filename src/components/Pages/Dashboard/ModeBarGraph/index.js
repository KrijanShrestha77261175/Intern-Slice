import { Box, Flex, HStack, Select, Text } from "@chakra-ui/react";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from "@faker-js/faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const ModeBarGraph = ({  selectStyle, flexStyle }) => {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
     
    },
  };
  const labels = [
    "Cheque",
    "UPI",
    "PayTM",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#2F4CDD',
        backgroundColor: '#2F4CDD',
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
          Mode of Collection
        </Text>
        <Flex gap={"18px"} >
          <Select sx={selectStyle} variant="filled" placeholder="All Products">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>

          <Select sx={selectStyle} variant="filled" placeholder="All Buckets">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
        </Flex>
        <HStack mt={"26px"} justifyContent={"center"} h="220px" w="100%">
          <Bar options={options} data={data} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default ModeBarGraph;
