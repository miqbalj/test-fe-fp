import React from "react";
import "./Style/Sidebar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Sidebar() {
    return (
      <div className="PageComponent">
        <Navbar />
        <div className="containerSidebar">
          <div className="Sidebar">
            <h1>Sidebar</h1>
            <div>
                <img src="https://via.placeholder.com/150" alt="avatar" className="avatarSidebar" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Sidebar;