import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [showSidebar, setShowSideBar] = useState(true);

  const openSidebar = () => {
    setShowSideBar((prevState) => !prevState);
  };
  return (
    <Grid>
      <GridItem>
        <Sidebar
          openSidebarfunction={openSidebar}
          openSidebarState={showSidebar}
        />
      </GridItem>
      <GridItem
        overflowX={showSidebar ? "hidden" : "auto"}
        maxW={showSidebar ? "82.93vw " : "100vw"}
        transform={showSidebar && "translateX(16vw)"}
      >
        <Navbar
          openSidebarfunction={openSidebar}
          openSidebarState={showSidebar}
        />

        {children}
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
