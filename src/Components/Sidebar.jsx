import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../assets/Css/sidebar.css";
import appData from "../data/appData";

const Sidebar = () => {
  const [apps, setApps] = useState(appData.slice(0, 3)); // Initially show only the first three apps
  const [remainingApps, setRemainingApps] = useState(appData.slice(3));
  const [newAppName, setNewAppName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showRemaining, setShowRemaining] = useState(false);

  // Function to handle adding a new app
  const addApp = () => {
    if (!showInput) {
      setShowInput(true);
      setShowRemaining(false); // Hide the remaining apps when showing the input field
    } else {
      const newId = apps.length + 1;
      const newApp = { id: newId, img: "", name: newAppName }; // You may need to add the path to the image
      setApps([...apps, newApp]);
      setNewAppName("");
      setShowInput(false); // Hide the input field after adding
    }
  };

  // Function to handle adding an app from the remaining list to the displayed list
  const addFromRemaining = (app) => {
    setApps([...apps, app]);
    setRemainingApps(remainingApps.filter((a) => a.id !== app.id));
    setShowRemaining(false); // Hide the remaining apps after adding
  };

  return (
    <div className="sidebar">
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <img
              src={app.img}
              alt="App Icon"
              style={{ height: app.height, width: app.width }}
            />
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!showInput && (
          <AddCircleIcon
            style={{ height: "40px", width: "40px" }}
            onClick={() => setShowRemaining(true)}
          />
        )}
      </div>

      {showRemaining && (
        <ul>
          {remainingApps.map((app) => (
            <li key={app.id} onClick={() => addFromRemaining(app)}>
              <img
                src={app.img}
                alt="App Icon"
                style={{ height: app.height, width: app.width }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
