import React from "react";
import "../assets/Css/Header.css";
import wifi from "../assets/Images/wifi.png";
import sound from "../assets/Images/sound.png";
import battery from "../assets/Images/battery.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left"></div>
      <div className="right">
        <div className="icon-group">
          <span className="icon">
            <img src={wifi} className="wifi" alt="wifi" />
          </span>
          <span className="icon">
            <img src={sound} alt="sound" className="sound" />
          </span>
          <span className="icon">
            <img src={battery} alt="battery" className="battery" />
          </span>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
