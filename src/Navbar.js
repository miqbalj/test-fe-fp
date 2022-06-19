import React from "react";
import "./Style/Navbar.css";


function Navbar() {
    return (
      <div className="containerNavbar">
        <div className="navbar">
            <div className="dateNavbar">
                <h3>Rabu, 28 Mei 2022</h3>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search something..." />
            </div>
            <div className="profileNavbar">
                <h4>User 1</h4>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatarNavbar" />
            </div>
        </div>
      </div>
    );
}


export default Navbar;