import React from "react"
import "./Style/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";


function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
