
import React from "react";
import Testpage from "./pages/test/test";
import { Container } from "react-bootstrap";
import './App.css';
import Navbar from "./components/navbar";


function App() {
  

    
  return (
    <Container fluid className="p-0 m-0">
      <Navbar/>

    <div className="d-flex justify-content-center big-containter">
      
     <Testpage/>
    </div>
    </Container>
  );
};


export default App;
