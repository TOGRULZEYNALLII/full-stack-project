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
const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchActivities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8088/api/HospitalManagement/RecentActivity?hospitalId=1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="recent-activity-container">
      <div className="header">
        <p className="bold-little">Recent Activity</p>
        <p className="blue">view all</p>
      </div>
      <div className="recent-activity-container-content-boxs">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="recent-activity-container-content">
              <p className="bold-little-special height">{activity.name}</p>
              <p className="recent-activity-containe-p">{activity.activity}</p>
              <p className="gray-little">{activity.date}</p>
            </div>
          ))
        ) : (
          <p>No recent activity</p>
        )}
      </div>
    </div>
  );
};
const RevenueSection = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRevenue = async (year) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8088/api/HospitalManagement/Revenue?year=${year}&hospitalId=1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRevenue(selectedYear);
  }, [selectedYear]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Basit bir currency formatlama fonksiyonu
  const formatCurrency = (number) => {
    if (number == null) return "";
    return "$" + Number(number).toLocaleString();
  };

  return (
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
        <select
          className="select-little"
          value={selectedYear}
          onChange={handleYearChange}>
          {/* İhtiyacınıza göre daha fazla yıl ekleyebilirsiniz */}
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          <div className="hospital-footer-section-middle-text">
            <div className="flex">
              {/* Büyük ana rakam; örneğin total income */}
              <p className="bold">{formatCurrency(data.income)}</p>
              <button className="green-button">
                <img src={Vectorupgreen} alt="" />
                {data.revenuePercentage > 0
                  ? `+${data.revenuePercentage}%`
                  : `${data.revenuePercentage}%`}
              </button>
            </div>
            <div>
              <p className="bold-little">
                Increase amount {formatCurrency(data.revenueTthisMonth)}
              </p>
              <p className="gray">
                From 01/01/{selectedYear}-30/12/{selectedYear}
              </p>
            </div>
          </div>

          <div>
            <img src={Revenue} alt="Revenue" />
          </div>

          <div className="revenue-box-container">
            <div className="revenure-box">
              <div className="flex-special-secondary">
                <div className="light-blue-circle"></div>
                <p className="gray-big">Income</p>
              </div>
              <div>
                <p className="bold-little">{formatCurrency(data.income)}</p>
              </div>
              <div className="flex-special-secondary">
                <img src={Greensquareup} alt="" />
                <p className="green">
                  {data.incomePercentage > 0
                    ? `+${data.incomePercentage}%`
                    : `${data.incomePercentage}%`}
                </p>
                <p className="gray">from last month</p>
              </div>
            </div>
            <div className="vector"></div>
            <div className="revenure-box">
              <div className="flex-special-secondary">
                <div className="orange-circle"></div>
                <p className="gray-big">Expense</p>
              </div>
              <div>
                <p className="bold-little">{formatCurrency(data.expense)}</p>
              </div>
              <div className="flex-special-secondary">
                <img src={ArrowSquareDownLeft} alt="" />
                <p className="red">
                  {data.expensePercentage > 0
                    ? `+${data.expensePercentage}%`
                    : `${data.expensePercentage}%`}
                </p>
                <p className="gray">from last month</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8088/api/HospitalManagement/Reports?hospitalId=1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setReports(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="hospital-footer-section-left">
      <div className="hospital-footer-section-left-header">
        <p>Reports</p>
        <img src={Treedot} alt="Treedot" />
      </div>
      <div className="border-vertical-special"></div>
      <div className="hospital-footer-section-left-content">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : reports.length > 0 ? (
          reports.map((report, index) => (
            <div
              key={index}
              className="hospital-footer-section-left-content-box">
              <p>{report.name}</p>
              <div className="hospital-footer-section-left-content-box-button">
                <p className="gray">{report.date}</p>
                <button className="button-right">{">"}</button>
              </div>
            </div>
          ))
        ) : (
          <p>No reports available</p>
        )}
      </div>
    </div>
  );
};
const DoctorsSchedule = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8088/api/HospitalManagement/DoctorsSchedule?hospitalId=1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  // API örneğinde quickView ve schedule bilgileri bulunuyor
  const quickView = data?.quickView;
  const schedule = data?.schedule || [];

  return (
    <div className="hospital-patient-overview-right">
      <div className="hospital-patient-overview-left-header">
        <p className="hospital-patient-overview-left-header-p">
          Doctors’ Schedule
        </p>
        <img src={Treedot} alt="Treedot" />
      </div>
      <div className="border-vertical-special"></div>
      <div className="hospital-patient-overview-right-middle">
        {/* Quick View Bölümü */}
        <div className="hospital-patient-overview-right-middle-boxs">
          <div className="hospital-patient-overview-right-middle-box">
            <div className="flex-row">
              <p className="bold-little">
                {quickView?.available !== undefined ? quickView.available : ""}
              </p>
              <p className="gray">Available</p>
            </div>
            <div>
              <img src={Aviable} alt="Available" />
            </div>
          </div>
          <div className="hospital-patient-overview-right-middle-box">
            <div>
              <p className="bold-little">
                {quickView?.notAvailable !== undefined
                  ? quickView.notAvailable
                  : ""}
              </p>
              <p className="gray">Unavailable</p>
            </div>
            <div>
              <img src={Unaviable} alt="Unavailable" />
            </div>
          </div>
          <div className="hospital-patient-overview-right-middle-box">
            <div>
              <p className="bold-little">
                {quickView?.leave !== undefined ? quickView.leave : ""}
              </p>
              <p className="gray">Leave</p>
            </div>
            <div>
              <img src={Leave} alt="Leave" />
            </div>
          </div>
        </div>

        {/* Doktor Listesi */}
        <div className="hospital-patient-overview-right-middle-contents">
          <div className="hospital-patient-overview-right-middle-contents-header">
            <p>List of Doctor</p>
          </div>
          <div className="listofdoctors">
            {schedule.length > 0 ? (
              schedule.map((doctor, index) => (
                <div key={index} className="listofdoctors-content">
                  <div>
                    <p className="bold-little">
                      {doctor.name ? doctor.name : ""}
                    </p>
                    <p className="gray">{doctor.fild ? doctor.fild : ""}</p>
                  </div>
                  <div>
                    {/* Doktorun durumunu hem metin olarak hem de className olarak ekliyoruz */}
                    <button className={doctor.status || ""}>
                      {doctor.status ? doctor.status : ""}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctor data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Patientoverviewcontainer = () => {
  const [filter, setFilter] = useState("Today");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Belirli filtre için API'den veriyi çekiyoruz
  const fetchData = async (timestamp) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8088/api/HospitalManagement/PatientOverview?timestamp=${timestamp}&hospitalId=1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  // filter state değiştiğinde yeni veriyi getiriyoruz
  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  // Buton tıklaması ile filtre değiştiriliyor
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="patient-overview-container">
      <div className="patient-overview">
        <p>Patient Overview</p>
        <div>
          <button
            className="Previous-Transactions-container-header-right-button-first"
            onClick={() => handleFilterChange("Today")}>
            Today
          </button>
          <button
            className="Previous-Transactions-container-header-right-button"
            onClick={() => handleFilterChange("Weekly")}>
            Weekly
          </button>
          <button
            className="Previous-Transactions-container-header-right-button"
            onClick={() => handleFilterChange("Monthly")}>
            Monthly
          </button>
          <button
            className="Previous-Transactions-container-header-right-button-last"
            onClick={() => handleFilterChange("Yearly")}>
            Yearly
          </button>
        </div>
      </div>
      <div>
        <img src={Patientoverwiev} alt="Patient Overview" />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && data.patientsByAge && (
        <div className="child-container">
          <div className="child-container-content">
            <div className="child-container-content-container">
              {/* Child */}
              <div>
                <div className="child-container-content-flex">
                  <div className="light-blue-circle"></div>
                  <p className="gray">Child</p>
                </div>
                <p className="bold-little-special-middle">
                  {data.patientsByAge.children}
                </p>
                <div className="flex">
                  <button className="light-blue-button">
                    <img src={Lightbluevector} alt="icon" />
                    {data.patientsByAge.childrenPercentage}%
                  </button>
                  <p className="gray">vs last month</p>
                </div>
              </div>
              <div className="horizontal-border"></div>

              {/* Adult */}
              <div>
                <div className="child-container-content-flex">
                  <div className="blue-circle"></div>
                  <p className="gray">Adult</p>
                </div>
                <p className="bold-little-special-middle">
                  {data.patientsByAge.adults}
                </p>
                <div className="flex">
                  <button className="blue-button">
                    <img src={Bluevector} alt="icon" />
                    {data.patientsByAge.adultsPercentage}%
                  </button>
                  <p className="gray">vs last month</p>
                </div>
              </div>
              <div className="horizontal-border"></div>

              {/* Elderly */}
              <div>
                <div className="child-container-content-flex">
                  <div className="green-circle"></div>
                  <p className="gray">Elderly</p>
                </div>
                <p className="bold-little-special-middle">
                  {data.patientsByAge.elderly}
                </p>
                <div className="flex">
                  <button className="green-button">
                    <img src={Greenvector} alt="icon" />
                    {data.patientsByAge.elderlyPercentage}%
                  </button>
                  <p className="gray">vs last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
  const [calendarData, setCalendarData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

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

  // API'den randevu verilerini çekiyoruz
  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "http://localhost:8088/api/HospitalManagement/Calendar?patientId=1&hospitalId=1"
      );
      const data = await response.json();
      setCalendarData(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Geçerli ayın ilk gününün hangi gün olduğunu ve toplam gün sayısını hesapla
  const getMonthDetails = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Pazar) - 6 (Cumartesi)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay: (firstDay + 6) % 7, daysInMonth }; // Haftanın Pazartesi'den başlaması için ayarlama
  };

  const { firstDay, daysInMonth } = getMonthDetails(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  // Takvim gridinde kullanılacak günleri oluştur
  const generateCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // Seçilen güne ait randevuları döndürür
  const getAppointmentsForDay = (day) => {
    if (!day) return [];
    const dayString = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const currentMonthName = monthNames[currentDate.getMonth()];
    const monthData = calendarData.find(
      (item) => item.month === currentMonthName
    );
    if (!monthData) return [];
    const dayData = monthData.days.find((d) => d.day === dayString);
    return dayData ? dayData.appointments : [];
  };

  // Ay değiştirilince seçili günü sıfırla
  const changeMonth = (direction) => {
    setSelectedDay(null);
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar-container">
      {/* Takvim */}
      <div className="calendar">
        <div className="header">
          <h2 className="bold-little">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="calendar-buttons-container">
            <button
              className="calendar-buttons"
              onClick={() => changeMonth(-1)}>
              <img src={Arrowaquareleft} alt="Previous Month" />
            </button>
            <button className="calendar-buttons" onClick={() => changeMonth(1)}>
              <img src={ArrowSquareRight} alt="Next Month" />
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
              className={`day ${day ? "active" : "empty"} ${
                selectedDay === day ? "selected" : ""
              }`}
              onClick={() => day && setSelectedDay(day)}>
              {day && <span>{day}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Seçilen güne ait randevu detayları */}
      {selectedDay && (
        <div className="appointments-container">
          {getAppointmentsForDay(selectedDay).length > 0 ? (
            getAppointmentsForDay(selectedDay).map((appointment, idx) => (
              <div key={idx} className="calendar-text">
                <div
                  className={
                    idx % 2 === 0 ? "div-orange" : "div-light-blue"
                  }></div>
                <div className="gap">
                  <div className="dentist-apointment-container">
                    <p>{appointment.appointment}</p>
                    <img src={Treedot} alt="Treedot" />
                  </div>
                  <div className="flex">
                    <img src={Clock} alt="Clock" />
                    <p>
                      {appointment.startTime} - {appointment.endTime}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="calendar-text">
              <p>No appointments for this day.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const HospitalManagement = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiLinks = [
    "http://localhost:8088/api/HospitalManagement/QuickView?hospitalId=1",
  ];

  // Verileri çekip, faturaları ayırıyoruz
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Veri yükleniyor
      try {
        const responses = await Promise.all(
          apiLinks.map((link) =>
            fetch(link).then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
          )
        );
        // Tüm verileri birleştiriyoruz
        const combinedData = responses.flat();
        setData(combinedData);
        // Faturaları ayırıyoruz (11. öğeden itibaren)
        const invoiceData = combinedData.slice(7, 12).map((invoice, index) => ({
          ...invoice,
          id: invoice.id || index, // Eğer id yoksa, index kullanılabilir
        }));
        console.log("Combined Data:", combinedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="hospital-header-section">
        <div className="hospital-header-container">
          <div className="hospital-header-content">
            <img src={Overallvistors} />
            <div className="flex-row">
              <div>
                <p className="bold-height">{data?.[0]?.visitors}</p>
              </div>
              <div className="flex">
                <p className="gray">Overall Visitors</p>
                <img src={Greensquareup} />
                <p className="green">{data?.[0]?.visitorsPercentage}%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Totalpatients} />
            <div className="flex-row">
              <div>
                <p className="bold-height">{data?.[0]?.patients}</p>
              </div>
              <div className="flex">
                <p className="gray">Total Patients</p>
                <img src={Greensquareup} />
                <p className="green">{data?.[0]?.patientsPercentage}%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Appointments} />
            <div className="flex-row">
              <div>
                <p className="bold-height">{data?.[0]?.appointments}</p>
              </div>
              <div className="flex">
                <p className="gray">Appointments</p>
                <img src={ArrowSquareDownLeft} />
                <p className="green">{data?.[0]?.appointmentsPercentage}%</p>
              </div>
            </div>
          </div>
          <div className="hospital-header-content">
            <img src={Bedroom} />
            <div className="flex-row">
              <div>
                <p className="bold-height">{data?.[0]?.bedroom}</p>
              </div>
              <div className="flex">
                <p className="gray">Bedroom</p>
                <img src={ArrowSquareDownLeft} />
                <p className="green">{data?.[0]?.bedroomPercentage}%</p>
              </div>
            </div>
          </div>
        </div>
        {/* middle  */}
        <div className="hospital-header-middle">
          <Patientoverviewcontainer />
          <Calendar />
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
        <DoctorsSchedule />
      </section>
      <PatientAppointment />
      <section className="hospital-footer-section">
        <Reports />
        <RevenueSection />
        <RecentActivity/>
      </section>
    </>
  );
};
export default HospitalManagement;
