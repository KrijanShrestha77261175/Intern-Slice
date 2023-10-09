import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableHeader from "../TableHeader";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";

const fetchTableData = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

const TableUser = () => {
  useEffect(() => {
    fetchTableData();
  }, []);

  const { data, isError, error } = useQuery("users", fetchTableData, {
    staleTime: 30000,
    cacheTime: 5000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
  return (
    <Box mx={"28px"}>
      <TableHeader />
      <TableContainer>
        <Table size="sm" >
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Company</Th>
              <Th>Website</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((value) => {
              return (
                <Tr key={value.id}>
                  <Td>{value.name}</Td>
                  <Td>{value.email}</Td>
                  <Td>{value.company.name}</Td>
                  <Td>{value.website}</Td>
                  <Td>
                    <SimpleGrid columns={3}>
                      <Button bg={"none"}>
                        <ViewIcon />
                      </Button>

                      <Button bg={"none"}>
                        <EditIcon />
                      </Button>

                      <Button bg={"none"}>
                        <DeleteIcon />
                      </Button>
                    </SimpleGrid>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableUser;
