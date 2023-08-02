import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import Body from "./components/Body";
import FloatingBox from "./components/FloatingBox";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./components/routes/AppRoutes";
import Provider from "./components/Providers";
import Login from "./components/Login/index";


function App() {
  return (
    <Provider>
      <Box fontFamily="'Poppins', sans-serif">
        <AppRoutes/>
      </Box>
    </Provider>
  );
}

export default App;
