import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Appointments from "./assets/appointments.svg";
import Arrowaquareleft from "./assets/arrowaquareleft.svg";
import ArrowSquareRight from "./assets/arrowsquareRight.svg";
import Bedroom from "./assets/bedroom.svg";
import Bluevector from "./assets/bluevector.svg";
import Clock from "./assets/clock.svg";
import Greenvector from "./assets/greenvector.svg";
import Lightbluevector from "./assets/lightbluevector.svg";
import Overallvistors from "./assets/overallvistors.svg";
import Patientoverwiev from "./assets/patientoverwiev.svg";
import Totalpatients from "./assets/totalpatients.svg";
import ArrowSquareDownLeft from "../Pos/assets/totalorders/arrowsquaredownright.png";
import Greensquareup from "../Pos/assets/totalorders/greensquareup.svg";
const Calendar = () => {
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

const HospitalManagement = () => {
  return (
    <>
      <section className="hospital-header-section">
        <div className="hospital-header-container">
          <div className="hospital-header-content">
            <img src={Overallvistors} />
            <div className="flex-row">
              <div>
                <p className="bold-height">566,273</p>
              </div>
              <div className="flex">
                <p className="gray">Overall Visitors</p>
                <img src={Greensquareup} />
                <p className="green">+15%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Totalpatients} />
            <div className="flex-row">
              <div>
                <p className="bold-height">566,273</p>
              </div>
              <div className="flex">
                <p className="gray">Total Patients</p>
                <img src={Greensquareup} />
                <p className="green">+15%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Appointments} />
            <div className="flex-row">
              <div>
                <p className="bold-height">566,273</p>
              </div>
              <div className="flex">
                <p className="gray">Appointments</p>
                <img src={ArrowSquareDownLeft} />
                <p className="red">+15%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Bedroom} />
            <div className="flex-row">
              <div>
                <p className="bold-height">566,273</p>
              </div>
              <div className="flex">
                <p className="gray">Bedroom</p>
                <img src={ArrowSquareDownLeft} />
                <p className="red">+15%</p>
              </div>
            </div>
          </div>
        </div>
        {/* middle  */}
        <div className="hospital-header-middle">
          <div className="patient-overview-container">
            <div className="patient-overview">
              <p>Patient Overview</p>
              <div>
                <button className="Previous-Transactions-container-header-right-button-first">
                  Today
                </button>
                <button className="Previous-Transactions-container-header-right-button">
                  Weekly
                </button>
                <button className="Previous-Transactions-container-header-right-button">
                  Monthly
                </button>
                <button className="Previous-Transactions-container-header-right-button-last">
                  Yearly
                </button>
              </div>
            </div>
            <div>
              <img src={Patientoverwiev} />
            </div>
            <div className="child-container">
              <div className="child-container-content">
                <div className="child-container-content-container">
                  <div>
                    {" "}
                    <div className="child-container-content-flex">
                      <div className="light-blue-circle"></div>
                      <p className="gray">Child</p>
                    </div>
                    <p className="bold-little-special-middle ">213</p>
                    <div className="flex">
                      <button className="light-blue-button">
                        <img src={Lightbluevector} />
                        3%
                      </button>
                      <p className="gray">vs last month</p>
                    </div>
                  </div>
                  <div className="horizontal-border"></div>
                  <div>
                    {" "}
                    <div className="child-container-content-flex">
                      <div className="blue-circle"></div>
                      <p className="gray">Adult</p>
                    </div>
                    <p className="bold-little-special-middle ">213</p>
                    <div className="flex">
                      <button className="blue-button">
                        <img src={Bluevector} />
                        3%
                      </button>
                      <p className="gray">vs last month</p>
                    </div>
                  </div>
                  <div className="horizontal-border"></div>
                  <div>
                    {" "}
                    <div className="child-container-content-flex">
                      <div className="green-circle"></div>
                      <p className="gray">Elderly</p>
                    </div>
                    <p className="bold-little-special-middle ">213</p>
                    <div className="flex">
                      <button className="green-button">
                        <img src={Greenvector} />
                        3%
                      </button>
                      <p className="gray">vs last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
      </section>
    </>
  );
};
export default HospitalManagement;
