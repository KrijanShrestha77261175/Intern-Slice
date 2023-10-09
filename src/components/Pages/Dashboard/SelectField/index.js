import { Grid, GridItem, HStack, Select } from '@chakra-ui/react'
import React from 'react'

const SelectField = () => {
  const selectStyle ={
    fontSize: "15px",
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#3E4954"
  }
  return (
    <HStack justifyContent={"space-evenly"}>

     <Grid gap={"21px"} templateColumns={"repeat(5,1fr)"} mt={"21px"}>
        <GridItem w="204px">
          <Select sx={selectStyle} variant="flushed" placeholder="All Products">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>

        <GridItem w="204px">
          <Select  sx={selectStyle} variant="flushed" placeholder="All Buckets">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>

        <GridItem w="204px">
          <Select  sx={selectStyle} variant="flushed" placeholder="All States">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>

        <GridItem w="204px">
          <Select  sx={selectStyle} variant="flushed" placeholder="All Branches">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>

        <GridItem w="204px">
          <Select  sx={selectStyle} variant="flushed" placeholder="Allocated to All">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>
      </Grid>
    </HStack>

  )
}

export default SelectField