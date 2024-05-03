import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Runs only once when the component mounts

  // Format the time as HH:MM
  const formattedTime = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Format the date as "Friday, March 6th"
  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
      }}
    >
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "40px",
          fontWeight: "600",
          margin: 0,
          color: "white",
        }}
      >
        {formattedTime}
      </p>
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: "600",
          margin: 0,
        }}
      >
        {formattedDate}
      </p>
    </div>
  );
};

export default Clock;
