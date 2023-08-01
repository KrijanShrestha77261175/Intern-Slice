import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useTable } from "react-table";
import TableViewAll from "../TableViewAll";
const UpcomingTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "1000001521",
        col2: "Office Address",
        col3: " 09 Aug 2023",
        col4: "17:00",
        col5: "17:00",
        col6: "Cheque",
        col7: "5000",
        col8: "Ajay Sinha",
        col9: "0",
        col10: "N",
        col11: "N",
        col12: "",
      },
      {
        col1: "1000001582",
        col2: "Home Address",
        col3: " 09 Aug 2023",
        col4: "17:00",
        col5: "17:00",
        col6: "Cash",
        col7: "25000",
        col8: "Ajay Sinha",
        col9: "0",
        col10: "N",
        col11: "N",
        coll12: "",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Pickup ID",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Address",
        accessor: "col2",
      },
      {
        Header: "Pickup Date",
        accessor: "col3",
      },
      {
        Header: "Time From",
        accessor: "col4",
      },
      {
        Header: "Time To",
        accessor: "col5",
      },
      {
        Header: "Mode",
        accessor: "col6",
      },
      {
        Header: "PTP Amt",
        accessor: "col7",
      },
      {
        Header: "Allocated to",
        accessor: "col8",
      },
      {
        Header: "Amt Paid",
        accessor: "col9",
      },
      {
        Header: "PTP Met",
        accessor: "col10",
      },
      {
        Header: "PTP Cancel",
        accessor: "col11",
      },
      {
        Header: "Button",
        accessor: "col12",
      },
    ],
    []
  );

  let x = useTable({ columns, data });
  console.log(x);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(getTableProps, getTableBodyProps, headerGroups, rows, prepareRow);
  return (
    <Box mx={"104px"}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    marginTop: "8px",
                    padding: "28px 16px",
                    borderBottom: "1px solid #E5E7EB",
                    background: "#FFF",
                    color: "black",
                    fontWeight: "500",
                    fontSize: "16px",
                    fontFamily: '"Poppins", sans-serif',
                    width: "auto",
                    textAlign: "center",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        marginBottom: "8px",
                        padding: "16px",
                        background: "#F9FAFB",
                        textAlign: "center",
                        fontFamily: '"Roboto", sans-serif',
                        fontWeight: "400",
                        fontSize: "15px",
                        color: "#3E4954",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

    </Box>
  );
};

export default UpcomingTable;
