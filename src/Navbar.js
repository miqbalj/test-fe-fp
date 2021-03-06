import React from "react";
import "./Style/Navbar.css";
import {useState, useEffect} from "react";
import UserIcon from "./Assets/user_icon.png";
import SearchIcon from "./Assets/search.png";


function Navbar() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);
    }, []);


    return (
      <div className="containerNavbar">
        <div className="navbar">
          <div className="dateNavbar">
            <h3>
              {" "}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h3>
          </div>

          <div className="searchBar">
            <input type="text" placeholder="search something..." />
            <div className="iconSearch">
              <img src={SearchIcon} alt="search" />
            </div>
          </div>

          <div className="profileNavbar">
            <h4>User 1</h4>
            <a>
              <img src={UserIcon} alt="Avatar" className="avatarNavbar" />
            </a>
          </div>
        </div>
      </div>
    );
}


export default Navbar;