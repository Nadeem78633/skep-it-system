import React from "react";
import "../assets/Css/footer.css";
import logo from "../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <button className="file">File</button>
      </div>
      <div className="footer-right">
        <div className="footer-icon-group">
          <span className="footer-icon">
            <img src={logo} alt="logo" />
          </span>
        </div>
          </div>
          
      <div class="cartoon">
        <div class="hair-container"></div>

        <div class="bubble b r hb">
          Hello
          <br />What are you looking for 
        </div>
      </div>
    </div>
  );
};

export default Header;
