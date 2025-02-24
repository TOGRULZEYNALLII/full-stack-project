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
import Aviable from "./assets/patient/aviable.svg";
import Leave from "./assets/patient/leave.svg";
import Patientgraph from "./assets/patient/patientgraph.svg";
import Unaviable from "./assets/patient/unaviable.svg";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import Revenue from "./assets/revenue.svg";
import Vectorupgreen from "../Pos/assets/totalorders/vectorupgreen.svg";
const PatientAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [filters, setFilters] = useState({ name: "", date: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(
      "http://localhost:8088/api/HospitalManagement/PatientAppointment?hospitalId=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  // Filtreleme işlemi: Patient Name, Date ve Status
  const filteredAppointments = appointments.filter((appointment) => {
    const nameMatch = filters.name
      ? appointment.patientName
          .toLowerCase()
          .includes(filters.name.toLowerCase())
      : true;
    // Tarih karşılaştırması için, API'den gelen ISO formatından sadece tarih kısmını alıyoruz
    const dateMatch = filters.date
      ? appointment.date.split("T")[0] === filters.date
      : true;
    const statusMatch = filters.status
      ? appointment.status.toLowerCase() === filters.status.toLowerCase()
      : true;
    return nameMatch && dateMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredAppointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-container-header">
          <p>Patient Appointments</p>
          {/* İkon eklemek istersen buraya ekleyebilirsin */}
        </div>

        <div className="select-input-container">
          <input
            className="input-name"
            type="text"
            name="name"
            placeholder="Enter patient name"
            value={filters.name}
            onChange={handleFilterChange}
          />
          <input
            className="input-date"
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
          <select
            className="select-input"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}>
            <option value="">Select Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Follow Up">Follow Up</option>
          </select>
        </div>

        <table className="appointment-table">
          <thead>
            <tr>
              <th>Patient’s Name</th>
              <th>Age</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Treatment</th>
              <th>Status</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody className="appointment-table-body">
            {currentData.length > 0 ? (
              currentData.map((appointment, index) => (
                <tr
                  className="appointment-table-body-tr"
                  key={startIndex + index}>
                  <td className="appointment-table-body-td">
                    {appointment.patientName}
                  </td>
                  <td>{appointment.age}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.treatment}</td>
                  <td>
                    <button
                      className={
                        appointment.status === "Pending"
                          ? "pendingred"
                          : appointment.status === "Confirmed"
                          ? "confirmed-green"
                          : appointment.status === "Follow Up"
                          ? "button-light-blue"
                          : ""
                      }>
                      {appointment.status}
                    </button>
                  </td>
                  <td>{appointment.moreInfo ? appointment.moreInfo : "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <button
            className="previous"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}>
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>

          <button
            className="next"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
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
          <h2 className="bold-little">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="calendar-buttons-container">
            <button
              className="calendar-buttons"
              onClick={() => changeMonth(-1)}>
              <img src={Arrowaquareleft} />{" "}
            </button>
            <button className="calendar-buttons" onClick={() => changeMonth(1)}>
              <img src={ArrowSquareRight} />{" "}
            </button>
          </div>
        </div>
        <div className="days-of-week gray">
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
            <div className="calendar-text">
              <div className="div-orange"></div>
              <div className="gap">
                <div className="dentist-apointment-container">
                  <p>Dentist Appointment</p>
                  <img src={Treedot} />
                </div>
                <div className="flex">
                  <img src={Clock} />
                  <p>10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="calendar-text">
              <div className="div-light-blue"></div>
              <div className="gap">
                <div className="dentist-apointment-container">
                  <p>Dentist Appointment</p>
                  <img src={Treedot} />
                </div>
                <div className="flex">
                  <img src={Clock} />
                  <p>10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hospital-patient-overview-seciton">
        <div className="hospital-patient-overview-left">
          <div className="hospital-patient-overview-left-header">
            <p className="hospital-patient-overview-left-header-p">
              Patient Overview by Departments
            </p>
            <img src={Treedot} />
          </div>
          <div className="hospital-patient-overview-left-inputs">
            <select className="select-little" name="" id="">
              <option value="Week 1">Week 1</option>
              <option value="Week 1">Week 1</option>
              <option value="Week 1">Week 1</option>
              <option value="Week 1">Week 1</option>
              <option value="Week 1">Week 1</option>
            </select>
            <select className="select-little" name="" id="">
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
            </select>
            <select className="select-little" name="" id="">
              <option value="">2028</option>
              <option value="">2028</option>
              <option value="">2028</option>
              <option value="">2028</option>
              <option value="">2028</option>
            </select>
          </div>
          <div className="hospital-patient-overview-left-middle">
            <img src={Patientgraph} />
          </div>
          <div className="hospital-patient-overview-left-footer">
            <div className="flex">
              <div className="blue-circle"></div>
              <p>Cardiology </p>
            </div>
            <div className="flex">
              <div className="light-blue-circle"></div>
              <p>Therapy</p>
            </div>
            <div className="flex">
              <div className="green-circle-right"></div>
              <p>Endocrinology</p>
            </div>
          </div>
        </div>
        <div className="hospital-patient-overview-right ">
          <div className="hospital-patient-overview-left-header">
            <p className="hospital-patient-overview-left-header-p">
              Doctors’ Schedule
            </p>
            <img src={Treedot} />
          </div>
          <div className="border-vertical-special"></div>
          <div className="hospital-patient-overview-right-middle">
            <div className="hospital-patient-overview-right-middle-boxs">
              <div className="hospital-patient-overview-right-middle-box ">
                <div className="flex-row">
                  <p className="bold-little">77</p>
                  <p className="gray">Available</p>
                </div>
                <div>
                  <img src={Aviable} />
                </div>
              </div>
              <div className="hospital-patient-overview-right-middle-box">
                <div>
                  <p className="bold-little">77</p>
                  <p className="gray">Unavaible</p>
                </div>
                <div>
                  <img src={Unaviable} />
                </div>
              </div>
              <div className="hospital-patient-overview-right-middle-box">
                <div>
                  <p className="bold-little">77</p>
                  <p className="gray">Leave</p>
                </div>
                <div>
                  <img src={Leave} />
                </div>
              </div>
            </div>
            <div className="hospital-patient-overview-right-middle-contents">
              <div className="hospital-patient-overview-right-middle-contents-header">
                <p>List of Doctor</p>
              </div>
              <div className="listofdoctors">
                <div className="listofdoctors-content">
                  <div>
                    <p className="bold-little">Adeline Palmerston</p>
                    <p className="gray">Cardiology</p>
                  </div>
                  <div>
                    <button className="button-light-blue">sss</button>
                  </div>
                </div>
                <div className="listofdoctors-content">
                  <div>
                    <p className="bold-little">Adeline Palmerston</p>
                    <p className="gray">Cardiology</p>
                  </div>
                  <div>
                    <button className="button-light-blue">sss</button>
                  </div>
                </div>
                <div className="listofdoctors-content">
                  <div>
                    <p className="bold-little">Adeline Palmerston</p>
                    <p className="gray">Cardiology</p>
                  </div>
                  <div>
                    <button className="button-light-blue">sss</button>
                  </div>
                </div>
                <div className="listofdoctors-content">
                  <div>
                    <p className="bold-little">Adeline Palmerston</p>
                    <p className="gray">Cardiology</p>
                  </div>
                  <div>
                    <button className="button-light-blue">sss</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PatientAppointment />
      <section className="hospital-footer-section">
        <div className="hospital-footer-section-left">
          <div className="hospital-footer-section-left-header">
            <p>Reports</p>
            <img src={Treedot} />
          </div>
          <div className="border-vertical-special"></div>
          <div className="hospital-footer-section-left-content">
            <div className="hospital-footer-section-left-content-box">
              <p>Broken Air Conditioning on 2nd Floor</p>
              <div className="hospital-footer-section-left-content-box-button">
                <p className="gray">10 minutes ago</p>
                <button className="button-right">{">"}</button>
              </div>
            </div>
            <div className="hospital-footer-section-left-content-box">
              <p>Broken Air Conditioning on 2nd Floor</p>
              <div className="hospital-footer-section-left-content-box-button">
                <p className="gray">10 minutes ago</p>
                <button className="button-right">{">"}</button>
              </div>
            </div>
            <div className="hospital-footer-section-left-content-box">
              <p>Broken Air Conditioning on 2nd Floor</p>
              <div className="hospital-footer-section-left-content-box-button">
                <p className="gray">10 minutes ago</p>
                <button className="button-right">{">"}</button>
              </div>
            </div>
            <div className="hospital-footer-section-left-content-box">
              <p>Broken Air Conditioning on 2nd Floor</p>
              <div className="hospital-footer-section-left-content-box-button">
                <p className="gray">10 minutes ago</p>
                <button className="button-right">{">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hospital-footer-section-middle">
          <div className="hospital-footer-section-middle-header">
            <p className="bold-ittle">Revenue</p>
            <div className="flex">
              <div className="flex">
                <div className="circle-light-blue-little"></div>
                <p className="gray-big">Income</p>
              </div>
              <div className="flex">
                <div className="circle-blue-little"></div>
                <p className="gray-big">Expense</p>
              </div>
            </div>
            <select className="select-little" name="" id="">
              <option value="">2025</option>
            </select>
          </div>
          <div className="hospital-footer-section-middle-text">
            <div className="flex">
              <p className="bold">$13,777,200</p>
              <button className="green-button">
                <img src={Vectorupgreen} alt="" />
                sad
              </button>
            </div>
            <div>
              <p className="bold-little">Increase amount $6,283.00</p>
              <p className="gray">From 01/01/2025-30/12/2025</p>
            </div>
          </div>

          <div>
            <img src={Revenue} />
          </div>
          <div className="revenue-box-container">
            <div className="revenure-box">
              <div className="flex-special-secondary">
                <div className="light-blue-circle"></div>
                <p className="gray-big">Income</p>
              </div>
              <div>
                <p className="bold-little">$11,273.95</p>
              </div>
              <div className="flex-special-secondary">
                <img src={Greensquareup} />
                <p className="green">+15%</p>
                <p className="gray">from last month</p>
              </div>
            </div>
            <div className="vector"></div>
            <div className="revenure-box">
              <div className="flex-special-secondary">
                <div className="orange-circle"></div>
                <p className="gray-big">Income</p>
              </div>
              <div>
                <p className="bold-little">$11,273.95</p>
              </div>
              <div className="flex-special-secondary">
                <img src={ArrowSquareDownLeft} />
                <p className="red">+15%</p>
                <p className="gray">from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-activity-container">
          <div className="header">
            <p className="bold-little">Recent Activity</p>
            <p className="blue">view all</p>
          </div>
          <div className="recent-activity-container-content-boxs">
            <div className="recent-activity-container-content">
              <p className="bold-little-special ">Daniel Roe</p>
              <p className="recent-activity-containe-p">
                registered as a new patient
              </p>
              <p className="gray-little">15 minutes ago</p>
            </div>
            <div className="recent-activity-container-content">
              <p className="bold-little-special ">Daniel Roe</p>
              <p className="recent-activity-containe-p">
                registered as a new patient
              </p>
              <p className="gray-little">15 minutes ago</p>
            </div>
            <div className="recent-activity-container-content">
              <p className="bold-little-special ">Daniel Roe</p>
              <p className="recent-activity-containe-p">
                registered as a new patient
              </p>
              <p className="gray-little">15 minutes ago</p>
            </div>
            <div className="recent-activity-container-content">
              <p className="bold-little-special ">Daniel Roe</p>
              <p className="recent-activity-containe-p">
                registered as a new patient
              </p>
              <p className="gray-little">15 minutes ago</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HospitalManagement;
