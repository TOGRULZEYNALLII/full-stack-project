import React from "react";
import { useState } from "react";
import "./style.css";
import Arrowsqueredownright from "./assets/header/ArrowSquareDownRight.svg";
import Dot from "../Sidebar/assets/icons/dot.svg";
import Arrowsquereupright from "./assets/header/ArrowSquareUpRight.svg";
import Bluevector from "./assets/header/bluvector.svg";
import Greenvector from "./assets/header/greenvector.svg";
import Lightbluevector from "./assets/header/lightbluevector.svg";
import Redvector from "./assets/header/redvector.svg";
import Attendancegraph from "./assets/attendancestatistics/barchartgraph.svg";
import Darkbluebutton from "./assets/attendancestatistics/darkbluebutton.svg";
import Lightbluebutton from "./assets/attendancestatistics/lightbluebutton.svg";
import Bluegraph from "./assets/todayattendance/bluegraph.svg";
import Greengraph from "./assets/todayattendance/greengraph.svg";
import Redgraph from "./assets/todayattendance/redgraph.svg";
import Orangegraph from "./assets/todayattendance/orangegraph.svg";
import Lighrbluegraph from "./assets/todayattendance/lightbluegraph.svg";
import Redarrow from "./assets/todayattendance/redvector.svg";
import Greenarrow from "./assets/todayattendance/greenvector.svg";
import Orangearrow from "./assets/todayattendance/orangevector.svg";
import Lightbluearrow from "./assets/todayattendance/lightlbuevector.svg";
import Bluearrow from "./assets/todayattendance/bluevector.svg";
import Action from "./assets/table/Action.svg";
import Adeliine from "./assets/table/Adeliine.svg";
import Daniel from "./assets/table/Daniel.svg";
import Jordan from "./assets/table/Jordan.svg";
import Juliana from "./assets/table/Juliana.svg";
import Lars from "./assets/table/Lars.svg";
import Murad from "./assets/table/Murad.svg";
import Attendancerate from "./assets/rightsideassets/attendancerate.svg";
import CalendarBlank from "./assets/rightsideassets/calendarblank.svg";
import Calendarblankblue from "./assets/rightsideassets/calendarblankblue.svg";
import Calendarblankgreen from "./assets/rightsideassets/calendarblankgreen.svg";
import Calendarblankgray from "./assets/rightsideassets/calendarblankgray.svg";
import Clockblank from "./assets/rightsideassets/clockblank.svg";
import Clockin from "./assets/rightsideassets/clockin.svg";
import Clockout from "./assets/rightsideassets/clockout.svg";
import Hiringchart from "./assets/rightsideassets/hiringchart.svg";
import Joinedteam from "./assets/rightsideassets/joinedteam.svg";
import Movedteam from "./assets/rightsideassets/movedteam.svg";
import Startedbreak from "./assets/rightsideassets/startedbreak.svg";
import Vectorleft from "./assets/rightsideassets/vectorleft.svg";
import Vectorright from "./assets/rightsideassets/vectorright.svg";
const Hrmanagement = () => {
  const employees = [
    {
      name: "Adeline Palmerston",
      position: "UI Designer",
      email: "adeline@email.com",
      team: "Product Design Team",
      attendance: 92,
      status: "ACTIVE",
      color: "rgba(0, 153, 126, 1)",
    },
    {
      name: "Jordan Nico",
      position: "Web Developer",
      email: "jordan.nico@email.com",
      team: "Developer Team",
      attendance: 70,
      status: "ACTIVE",
      color: "rgba(86, 85, 215, 1)",
    },
    {
      name: "Daniel Gallego",
      position: "Project Manager",
      email: "daniel.gale@email.com",
      team: "Product Design Team",
      attendance: 59,
      status: "LEAVE",
      color: "rgba(255, 174, 65, 1)",
    },
    {
      name: "Juliana Silva",
      position: "UX Researcher",
      email: "juli.silva@email.com",
      team: "Product Design Team",
      attendance: 23,
      status: "ACTIVE",
      color: "rgba(255, 65, 75, 1)",
    },
    {
      name: "Murad Naser",
      position: "UI Designer",
      email: "murad.naser@email.com",
      team: "Product Design Team",
      attendance: 72,
      status: "LEAVE",
      color: "rgba(86, 85, 215, 1)",
    },
    {
      name: "Lars Peeters",
      position: "Project Manager",
      email: "lars.peeters@email.com",
      team: "Product Design Team",
      attendance: 59,
      status: "LEAVE",
      color: "#FFAB00",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const positions = [
    ...new Set(employees.map((employee) => employee.position)),
  ];
  const statuses = ["ACTIVE", "LEAVE"];

  const filteredEmployees = employees.filter((employee) => {
    return (
      (employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedPosition === "" || employee.position === selectedPosition) &&
      (selectedStatus === "" || employee.status === selectedStatus)
    );
  });

  return (
    <>
      <section className="section-main-container">
        <div className="leftside-section-container">
          <section className="hrmanagemnt-header-section">
            <div className="hrmanagemnt-header-section-container">
              <div className="total-employes-container">
                <p className="total-employes-container-p">Total Employees</p>
              </div>
              <div className="total-employes-container-price">
                <p className="total-employes-container-price-p">2,048</p>
                <img src={Bluevector} />
              </div>
              <div className="total-employes-container-footer">
                <div className="total-employes-container-footer-flex">
                  <img src={Arrowsquereupright} />
                  <p style={{ fontSize: "13px" }}>+15%</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>vs last month</p>
                </div>
              </div>
            </div>

            <div className="hrmanagemnt-header-section-container">
              <div className="total-employes-container">
                <p className="total-employes-container-p">Total Attendance</p>
              </div>
              <div className="total-employes-container-price">
                <p className="total-employes-container-price-p">1,870</p>
                <img src={Greenvector} />
              </div>
              <div className="total-employes-container-footer-green">
                <div className="total-employes-container-footer-flex">
                  <img src={Arrowsqueredownright} />
                  <p style={{ fontSize: "13px" }}>-6%</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>vs last month</p>
                </div>
              </div>
            </div>

            <div className="hrmanagemnt-header-section-container">
              <div className="total-employes-container">
                <p className="total-employes-container-p">Personal Leaves</p>
              </div>
              <div className="total-employes-container-price">
                <p className="total-employes-container-price-p">294</p>
                <img src={Lightbluevector} />
              </div>
              <div className="total-employes-container-footer-lightblue">
                <div className="total-employes-container-footer-flex">
                  <img src={Arrowsquereupright} />
                  <p style={{ fontSize: "13px" }}>+2%</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>vs last month</p>
                </div>
              </div>
            </div>

            <div className="hrmanagemnt-header-section-container">
              <div className="total-employes-container">
                <p className="total-employes-container-p">Absent</p>
              </div>
              <div className="total-employes-container-price">
                <p className="total-employes-container-price-p">39</p>
                <img src={Redvector} />
              </div>
              <div className="total-employes-container-footer-red">
                <div className="total-employes-container-footer-flex">
                  <img src={Arrowsqueredownright} />
                  <p style={{ fontSize: "13px" }}>-12%</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>vs last month</p>
                </div>
              </div>
            </div>
          </section>

          <section className="attendances-container-main">
            <div className="attendance-container-main-header">
              <p className="Attendance-Statistics-p">Attendance Statistics</p>
              <img src={Dot} />
            </div>
            <div className="attendance-container-middle">
              <div className="attendance-graph-container">
                <img src={Attendancegraph} />
              </div>
              <div className="attendance-text-container">
                <div className="attendance-text-container-up">
                  <div className="attendance-text-container-up-text-button">
                    <img />
                    <div className="blue-circle"></div>
                    <p>Attendance </p>
                  </div>
                  <div className="attendance-text-container-up-text-price">
                    <p className="attendance-text-container-up-text-price-p">
                      1,395
                    </p>
                  </div>
                  <div className="attendance-text-container-button-with-text">
                    <img src={Darkbluebutton} />
                    <p className="from-last-month">vs last month</p>
                  </div>
                </div>

                <div className="attendance-text-container-up">
                  <div className="attendance-text-container-up-text-button">
                    <div className="light-blue-circle"></div>
                    <p>Leaves </p>
                  </div>
                  <div className="attendance-text-container-up-text-price">
                    <p className="attendance-text-container-up-text-price-p">
                      1,283
                    </p>
                  </div>
                  <div className="attendance-text-container-button-with-text">
                    <img src={Lightbluebutton} />
                    <p className="from-last-month">vs last month</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="upcoming-events-container-main">
            <div className="upcoming-events-container-left">
              <div className="upcoming-events-container-header">
                <p>Upcoming Events</p>
                <img src={Dot} />
              </div>

              <div className="upcoming-events-container">
                <div className="upcoming-events-container-middle">
                  <div className="upcoming-events-container-middle-month">
                    <p>Nov 29</p>
                  </div>
                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="blue-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Employee Training
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          08:00 AM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="light-blue-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Meeting with Team
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          10:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="green-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Interview Candidate
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="upcoming-events-container-middle">
                  <div className="upcoming-events-container-middle-month">
                    <p>Nov 30</p>
                  </div>

                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="red-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          C-level Meeting
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          11:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="orange-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Interview Candidate
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="blue-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Employee Workshop
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          08:00 AM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="blue-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Employee Workshop
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          08:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="upcoming-events-container-middle">
                  <div className="upcoming-events-container-middle-month">
                    <p>Nov 31 </p>
                  </div>
                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="blue-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Employee Training
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          08:00 AM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="light-blue-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Meeting with Team
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          10:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-events-container-employee-container">
                    <div className="upcoming-events-container-employee">
                      <div className="green-vertical-border"></div>
                      <div className="upcoming-events-container-employee-text">
                        <p className="upcoming-events-container-employee-text-p">
                          Interview Candidate
                        </p>
                        <p className="upcoming-events-container-employee-text-hour">
                          11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="today-attendance-container">
              <div className="today-attendance-header">
                <p>Today Attendance</p>
                <img src={Dot} />
              </div>

              <div className="today-attendance-middle-container">
                <div className="today-attendance-middle">
                  <div>
                    <img src={Bluegraph} />
                  </div>
                  <div className="today-attendance-middle-text">
                    <p className="today-attendance-middle-text-p">
                      Product Design Team
                    </p>
                    <p className="today-attendance-middle-text-blue">40/50</p>
                  </div>
                  <div>
                    <img src={Bluearrow} />
                  </div>
                </div>
              </div>

              <div className="today-attendance-middle-container">
                <div className="today-attendance-middle">
                  <div>
                    <img src={Greengraph} />
                  </div>
                  <div className="today-attendance-middle-text">
                    <p className="today-attendance-middle-text-p">
                      Development Team
                    </p>
                    <p className="today-attendance-middle-text-green">25/50</p>
                  </div>
                  <div>
                    <img src={Greenarrow} />
                  </div>
                </div>
              </div>

              <div className="today-attendance-middle-container">
                <div className="today-attendance-middle">
                  <div>
                    <img src={Redgraph} />
                  </div>
                  <div className="today-attendance-middle-text">
                    <p className="today-attendance-middle-text-p">
                      Administrative Team
                    </p>
                    <p className="today-attendance-middle-text-red">15/50</p>
                  </div>
                  <div>
                    <img src={Redarrow} />
                  </div>
                </div>
              </div>

              <div className="today-attendance-middle-container">
                <div className="today-attendance-middle">
                  <div>
                    <img src={Lighrbluegraph} />
                  </div>
                  <div className="today-attendance-middle-text">
                    <p className="today-attendance-middle-text-p">
                      Marketing Team
                    </p>
                    <p className="today-attendance-middle-text-light-blue">
                      43/50
                    </p>
                  </div>
                  <div>
                    <img src={Lightbluearrow} />
                  </div>
                </div>
              </div>

              <div className="today-attendance-middle-container">
                <div className="today-attendance-middle">
                  <div>
                    <img src={Orangegraph} />
                  </div>
                  <div className="today-attendance-middle-text">
                    <p className="today-attendance-middle-text-p">Sales Team</p>
                    <p className="today-attendance-middle-text-orange">32/50</p>
                  </div>
                  <div>
                    <img src={Orangearrow} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="empoyess-data-container">
            <div className="empoyess-data-container-header">
              <p>Employees Data</p>
              <img src={Dot} />
            </div>
            <div className="table">
              <div className="employee-table-container">
                <div className="filters">
                  <div className="search-input">
                    <p className="filters-p">Search User</p>
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="filter-select">
                    <p className="filters-p">Position</p>
                    <select
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}>
                      <option value="">Select Position</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="filter-select">
                    <p className="filters-p">Status</p>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}>
                      <option value="">Select Status</option>
                      {statuses.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <table className="employee-table">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Position</th>
                      <th>Attendance Rate</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee, index) => (
                      <tr key={index}>
                        <td>
                          <div className="employee-info">
                            <input className="checkbox" type="checkbox" />
                            <div className="avatar">
                              <img
                                src={
                                  employee.name === "Adeline Palmerston"
                                    ? Adeliine
                                    : employee.name === "Jordan Nico"
                                    ? Jordan
                                    : employee.name === "Daniel Gallego"
                                    ? Daniel
                                    : employee.name === "Juliana Silva"
                                    ? Juliana
                                    : employee.name === "Murad Naser"
                                    ? Murad
                                    : Lars
                                }
                              />
                            </div>
                            <div>
                              <div className="name">{employee.name}</div>
                              <div className="email">{employee.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="position">{employee.position}</div>
                          <div className="team">{employee.team}</div>
                        </td>
                        <td>
                          <div className="attendance-bar">
                            <div
                              className="attendance-fill"
                              style={{
                                width: `${employee.attendance}%`,
                                backgroundColor: employee.color,
                              }}></div>
                          </div>
                          <span>{employee.attendance}%</span>
                        </td>
                        <td className="flex">
                          <div
                            className={`status ${employee.status.toLowerCase()}`}>
                            {employee.status}
                          </div>
                        </td>
                        <td>
                          <img src={Action} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="nextpreviuous-button-container">
                  <button className="previous">Previous</button>
                  <p>Page 1 of 12</p>
                  <button className="next">Next</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* rightside container section container start frfom here baby */}
        <div className="rightside-section-container">
          <div className="month-container">
            <div className="month-header">
              <div className="month-header-container">
                <p>November, 2023</p>
                <div className="month-header-container-vectors">
                  <img src={Vectorleft} />
                  <img src={Vectorright} alt="" />
                </div>
              </div>
            </div>
            <div className="month-list-container">
              <div className="month-list">
                <p className="month-list-month">Mon</p>
                <p className="month-list-numbers">29</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Tue</p>
                <p className="month-list-numbers">30</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Wed</p>
                <p className="month-list-numbers">31</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Thu</p>
                <p className="month-list-numbers">1</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Fri</p>
                <p className="month-list-numbers">2</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Sat</p>
                <p className="month-list-numbers">3</p>
              </div>
              <div className="month-list">
                <p className="month-list-month">Sun</p>
                <p className="month-list-numbers">4</p>
              </div>
            </div>
            <div className="meeting-container">
              <div className="calendarblank">
                <img src={CalendarBlank} />
              </div>
              <div>
                <p className="headerofcalendaritem">
                  Meeting with Candidate #1
                </p>
                <div className="flex">
                  <img className="img" src={Calendarblankgray} />
                  <p className="height">November 31, 2023</p>
                </div>
                <div className="flex">
                  <img className="img" src={Clockblank} />
                  <p className="height">10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>{" "}
            <div className="meeting-container">
              <div className="calendarblank-green">
                <img src={Calendarblankgreen} />
              </div>
              <div>
                <p className="headerofcalendaritem">Employee Training </p>
                <div className="flex">
                  <img className="img" src={Calendarblankgray} />
                  <p className="height">November 31, 2023</p>
                </div>
                <div className="flex">
                  <img className="img" src={Clockblank} />
                  <p className="height">01:00 PM - 02:00 PM</p>
                </div>
              </div>
            </div>
            <div className="meeting-container">
              <div className="calendarblank-blue">
                <img src={Calendarblankblue} />
              </div>
              <div>
                <p className="headerofcalendaritem">Meeting with Team </p>
                <div className="flex">
                  <img className="img" src={Calendarblankgray} />
                  <p className="height">November 31, 2023</p>
                </div>
                <div className="flex">
                  <img className="img" src={Clockblank} />
                  <p className="height">02:00 PM - 03:00 PM</p>
                </div>
              </div>
            </div>
            <div className="employee-rate-container">
              <div className="empolyee-rate-container-header">
                <p>Employee Attendance Rate</p>
                <img src={Dot} />
              </div>
              <div className="empolyee-rate-container-middle">
                <select className="select" name="year" id="year">
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023" selected>
                    2023
                  </option>
                  <option value="2024">2024</option>
                </select>
                <img src={Attendancerate} />
              </div>
            </div>
            <div className="latest-activity-container">
              <div className="latest-activity-container-header">
                <p>Latest Activity</p>
                <img src={Dot} />
              </div>
              <div className="latest-activity-middle-container">
                <div className="latest-activity-middle">
                  <div>
                    <img src={Clockout} />
                  </div>

                  <div className="latest-activity-middle-text">
                    <p className="height-10"> Jordan Nico</p>
                    <p className="gray">Clocked Out</p>
                  </div>
                  <div>
                    <p className="gray">03:00 PM</p>
                  </div>
                </div>

                <div className="latest-activity-middle-container">
                  <div className="latest-activity-middle">
                    <img src={Clockin} />
                    <div className="latest-activity-middle-text">
                      <p className="height-10"> Adeline Palmerston</p>
                      <p className="gray">Clocked In</p>
                    </div>
                    <div>
                      <p className="gray">03:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="latest-activity-middle-container">
                  <div className="latest-activity-middle">
                    <img src={Joinedteam} />
                    <div className="latest-activity-middle-text">
                      <p className="height-10"> Daniel Gallego</p>
                      <p className="gray">Joined Team</p>
                    </div>
                    <div>
                      <p className="gray">01:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="latest-activity-middle-container">
                  <div className="latest-activity-middle">
                    <img src={Movedteam} />
                    <div className="latest-activity-middle-text">
                      <p className="height-10"> Juliana Silva</p>
                      <p className="gray">Moved Team</p>
                    </div>
                    <div>
                      <p className="gray">01:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="latest-activity-middle-container">
                  <div className="latest-activity-middle">
                    <img src={Startedbreak} />
                    <div className="latest-activity-middle-text">
                      <p className="height-10"> Murad Naser</p>
                      <p className="gray">Started a Break</p>
                    </div>
                    <div>
                      <p className="gray">11:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hrmanagement;
