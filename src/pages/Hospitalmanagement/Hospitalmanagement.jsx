import React from "react";
import { useState } from "react";
import "./style.css";
const HospitalManagement = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get details for the current month
  const getMonthDetails = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay(); // Day of week (0-6)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days
    return { firstDay: (firstDay + 6) % 7, daysInMonth }; // Adjust for Monday start
  };

  const { firstDay, daysInMonth } = getMonthDetails(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  // Generate array of days for the calendar grid
  const generateCalendar = () => {
    const days = [];
    // Add empty slots for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // Navigate months
  const changeMonth = (direction) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
  };
  return (
    <>
      <div className="calendar">
        <div className="header">
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <h2>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => changeMonth(1)}>{">"}</button>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-name">
              {day}
            </div>
          ))}
        </div>
        <div className="days-grid">
          {generateCalendar().map((day, index) => (
            <div
              key={index}
              className={`day ${day ? "active" : "empty"}`}
              style={{
                backgroundColor:
                  day === 25 ? "#6200ea" : day ? "transparent" : undefined,
                color: day === 25 ? "#fff" : "inherit",
              }}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HospitalManagement;
