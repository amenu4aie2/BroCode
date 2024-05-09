import React,{createContext} from "react";
import LightModeLandingPage from "./Landingpage";
import DarkLandingPage from "./darkLandingPage";
import MainPage from './components/MainPage'
import './App.css';
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

// import Home from "./Home";
import Room from "./Room";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

  //   <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
  //   <CodeEditor />
  // </Box>
    
    <Routes>
    <Route path="/" element={<LightModeLandingPage/>}></Route>
<Route path="/room" element={    <React.Fragment>
       <MainPage/>
   
    </React.Fragment>}>



</Route>
<Route path="/dark" element={<DarkLandingPage/>}></Route>
    </Routes>

    
  );
}

export default App;
