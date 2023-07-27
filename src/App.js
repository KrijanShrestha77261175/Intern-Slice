import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tab from './components/Tab';
import { Box } from '@chakra-ui/react';
import PersonProfile from './components/PersonProfile';
import Contact from './components/CollectionComponent/Contact';


function App() {
  return (
 <Box fontFamily="'Poppins', sans-serif">
 <Navbar/>
 <Tab/>
 <PersonProfile/>
 <Contact/>
 </Box>
  );
}

export default App;
