import React from "react"
import "./Style/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserDashboard from "./UserDashboard";
import Sidebar from "./Sidebar";
import ListMateriStudent from "./ListMateriStudent";
import CreateMateri from "./CreateMateri";

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <ListMateriStudent /> */}
      {/* <UserDashboard /> */}
      {/* <Sidebar /> */}
      <CreateMateri />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
