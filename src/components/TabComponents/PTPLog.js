import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import UpcomingTable from "../ContactPage/UpcomingTable";
import TableViewAll from "../TableViewAll";

const PTPLog = () => {
  return (
    <>
      <Box>
        <Box mt={"32px"} ml={"108px"}>
          <InputGroup width={"338px"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon  color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search Here" sx={{color:"#969BA0", fontFamily:'"Roboto", sans-serif', fontSize:"15px", fontWeight:"400" }}/>
          </InputGroup>
        </Box>

        <UpcomingTable />
     <TableViewAll/>

      </Box>
    </>
  );
};

export default PTPLog;
