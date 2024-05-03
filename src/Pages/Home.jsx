import React, { useState } from "react";
import { Footer, Header, Sidebar,Clock } from "../Components";
import wallpaper from "../assets/Images/Wallpaper.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import options from "../data/options.json";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Home = () => {
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle right-click event
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent default context menu
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
  };

  // Function to hide the context menu
  const hideContextMenu = () => {
    setContextMenuPosition({ x: 0, y: 0 });
    setSelectedOption(null); // Reset selected option
  };

  // Function to handle option selection from context menu
  const handleOptionSelection = (option) => {
    // Handle the selected option here
    console.log("Selected option:", option);
    // Example: Create new app based on the selected option
    hideContextMenu();
  };

  // Function to handle hovering over a menu item
  const handleMouseEnter = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
      onContextMenu={handleContextMenu} // Attach right-click event handler
    >
      <Header />
      <Clock/>
      <Sidebar />
      <Footer />
      <Menu
        open={Boolean(contextMenuPosition.x)}
        onClose={hideContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenuPosition.y !== 0 && contextMenuPosition.x !== 0
            ? { top: contextMenuPosition.y, left: contextMenuPosition.x }
            : undefined
        }
      >
        {Object.keys(options).map((key) => (
          <MenuItem
            key={options[key].id}
            onClick={() => handleOptionSelection(options[key])}
            onMouseEnter={() => handleMouseEnter(options[key])}
          >
            {options[key].label}
            {options[key].subOptions && selectedOption === options[key] && (
              <ArrowRightIcon style={{ marginLeft: "auto" }} />
            )}
            {options[key].subOptions && selectedOption === options[key] && (
              <Menu>
                {options[key].subOptions.map((subOption) => (
                  <MenuItem
                    key={subOption.id}
                    onClick={() => handleOptionSelection(subOption)}
                  >
                    {subOption.label}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Home;
