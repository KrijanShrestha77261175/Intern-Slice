import React from 'react'
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import UpcomingTable from "../ContactPage/UpcomingTable";
import TableViewAll from '../TableViewAll';

const AllocationHistory = () => {
  return (
    <Box>
        <Box>
          <InputGroup width={"338px"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search Here" />
          </InputGroup>
        </Box>

        <UpcomingTable />
     <TableViewAll/>

      </Box>
  )
}

export default AllocationHistory