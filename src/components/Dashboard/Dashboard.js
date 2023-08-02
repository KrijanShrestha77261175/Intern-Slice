import { Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <Container>
      <Box>
        <Grid templateColumns={"repeat(4,1fr)"}>
          <GridItem>
            <Flex minW = "200px"minH = "100px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
              <Text>sadasd</Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex w = "200px" h = "100px" boxShadow={"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

            </Flex>
          </GridItem>

          <GridItem>
            <Flex w = "200px" h = "100px" boxShadow={"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

            </Flex>
          </GridItem>

          <GridItem>
            <Flex w = "200px" h = "100px" boxShadow={"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

            </Flex>
          </GridItem>
        </Grid>
      </Box>
      </Container>
  )
}

export default Dashboard