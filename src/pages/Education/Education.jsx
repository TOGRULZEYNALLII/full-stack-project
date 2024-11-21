import "../Education/style.css";
import Persons from "../Education/assets/persons-item.svg";
import Schedule from "../Education/assets/schedule.svg";
import Schedulenone from "../Education/assets/schedulenone.svg";
import Clock from "../Education/assets/clockyel.svg";
import Blueupvector from "../Education/assets/vectorblueup.svg";
import Greenupvector from "../Education/assets/vectorgreen.svg";
import Redvectordown from "../Education/assets/redvectordown.svg";
import Yellowdown from "../Education/assets/yellowdown.svg";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import Graphic from "../Education/assets/graphic.svg";
import Dotblue from "../Education/assets/Dot (2).svg";
import Dotlightblue from "../Education/assets/Dot (3).svg";
import { useState } from "react";
import Ellipseblue from "../Education/assets/Ellipse.svg";
import Ellipselightblue from "../Education/assets/Ellipse (1).svg";
import Ellipseorange from "../Education/assets/Ellipse (2).svg";
import Progresbar from "../Education/assets/Progress Bar (1).svg";
import Progresscircle from "../Education/assets/progres-circle.svg";
import Circlelightblue from "../Education/assets/circle-lightblue.svg";
import Circlegreen from "../Education/assets/circle-green.svg";
import Circleyellow from "../Education/assets/circle-yellow.svg";
import Yesicon from "../Education/assets/tasklist/yesicon.svg";
import Editicon from "../Education/assets/tasklist/editicon.svg";
import Okeyicon from "../Home/assets/invoices/okeyblue.png";
import Closeicon from "../Home/assets/invoices/close.png";
import Bars from "../Education/assets/tasklist/Bars.svg";
import Bars1 from "../Education/assets/tasklist/Bars (1).svg";
import Bars2 from "../Education/assets/tasklist/Bars (2).svg";
import Bars3 from "../Education/assets/tasklist/Bars (3).svg";
import Activitylogs from "../Education/assets/activitylogs/activitylogs.svg";
import Rihgtcontainergraph from "../Education/assets/activitylogs/graph.svg";
import Dinnergraph from "../Education/assets/lastsection/circle.svg";
import Vectorwhiteup from "../Education/assets/lastsection/Vector.svg";
import Personsicon from "../Education/assets/lastsection/personsicon.svg";
import Progressblue from "../Education/assets/lastsection/Progressblue.svg";
import Hour from "../Education/assets/lastsection/hour.svg";
import Lightblueprogress from "../Education/assets/lastsection/lightblueprogress.svg";
import Yellowhour from "../Education/assets/lastsection/houryellow.svg";
import Yellowprogress from "../Education/assets/lastsection/orangeprogress.svg";
import Xcalendar from "../Education/assets/lastsection/xcalendar.svg";
import Redprogress from "../Education/assets/lastsection/redprogress.svg";
import Heart from "../Education/assets/lastsection/heart.svg";
import Blackprogress from "../Education/assets/lastsection/blackprogress.svg";
import Book from "../Education/assets/lastsection/book.svg";
import Blueinprogress from "../Education/assets/lastsection/blueinprogress.svg";
import Greeninprogress from "../Education/assets/lastsection/greeninprogress.svg";
import Redinprogress from "../Education/assets/lastsection/redinprogress.svg";
import Yellowinprogress from "../Education/assets/lastsection/yellowinprogress.svg";
import Lightblueinprogress from "../Education/assets/lastsection/lightblueinprogress.svg";
import Blackinprogress from "../Education/assets/lastsection/blacinprogress.svg";
import Skuter from "../Education/assets/lastsection/skuter.svg";
import Shoes from "../Education/assets/lastsection/shoes.svg";
import Hazard from "../Education/assets/lastsection/hazard.svg";
import Magic from "../Education/assets/lastsection/magic.svg";
import Piceture from "../Education/assets/lastsection/piceture.svg";

const Education = () => {
  const initialInvoices = [
    {
      id: 1,
      // invoiceId: "#874729",
      customer: "Comparative Literary Analysis",
      date: "English Literature",
      // amount: "English Literature",
    },
    {
      id: 2,
      // invoiceId: "#874730",
      customer: "Investigating the Laws of Motion",
      date: "Physics",
      // amount: 182,
    },
    {
      id: 3,
      customer: "Historical Event Analysis",
      date: "History",
      // amount: 456,
    },
    {
      id: 4,
      // invoiceId: "#874732",
      customer: "Real-World Mathematical",
      date: "Mathematics",
      // amount: 359,
    },
    {
      id: 5,
      // invoiceId: "#874733",
      customer: "Chemical Reactions in Everyday",
      date: "Chemistry",
      // amount: 224,
    },
  ];
  const [invoices, setInvoices] = useState(initialInvoices);
  const [editInvoiceId, setEditInvoiceId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    customer: "",
    date: "",
    amount: "",
  });
  const handleEditClick = (invoice) => {
    setEditInvoiceId(invoice.id);
    setEditFormData({
      customer: invoice.customer,
      date: invoice.date,
      amount: invoice.amount,
    });
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    const updatedInvoices = invoices.map((invoice) =>
      invoice.id === editInvoiceId ? { ...invoice, ...editFormData } : invoice
    );
    setInvoices(updatedInvoices);
    setEditInvoiceId(null);
  };

  const handleCancelClick = () => {
    setEditInvoiceId(null);
  };

  const handleDelete = (id) => {
    const filteredInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(filteredInvoices);
  };

  return (
    <>
      <section>
        <div className="person-statitstics">
          <div className="person-item">
            <div>
              <img src={Persons} alt="pesrons-icon" />
            </div>
            <div className="person-item-text">
              <p>1,253</p>
              <p>Total Students</p>
            </div>
            <div>
              <button className="button-blue-up">
                <img src={Blueupvector} alt="blueup" />
                <p>25%</p>
              </button>
            </div>
          </div>

          <div className="person-item-green">
            <div>
              <img src={Schedule} alt="schedule" />
            </div>
            <div className="person-item-text">
              <p>93%</p>
              <p>Daily Attendance</p>
            </div>
            <div>
              <button className="button-blue-up">
                <img src={Greenupvector} alt="green vector up " />
                <p>15%</p>
              </button>
            </div>
          </div>

          <div className="person-item-red">
            <div>
              <img src={Schedulenone} alt="none schodule" />
            </div>
            <div className="person-item-text">
              <p>145</p>
              <p>Absences(Today)</p>
            </div>
            <div>
              <button className="button-red-down">
                <img src={Redvectordown} alt="red vector down" />
                <p>5%</p>
              </button>
            </div>
          </div>

          <div className="person-item-yellow">
            <div>
              <img src={Clock} alt="clock icon" />
            </div>
            <div className="person-item-text">
              <p>65</p>
              <p>Late Arrivals(Today)</p>
            </div>
            <div>
              <button className="button-yellow-down">
                <img src={Yellowdown} alt="yellow down" />
                <p>5%</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* sectionnnnnnnnnn */}
      <section className="section-weekly-userlist">
        <div>
          <div className="weekly-container">
            <div>
              <div className="weekly-target-container-header">
                <p>Weekly Target</p>
                <img src={Treedot} alt="tree dot svg" />
              </div>
              <div className="Border-vertical"></div>
            </div>
            <div className="border-vertical"></div>

            <div className="container-medium">
              <div className="left-container-text">
                <h7 style={{ fontSize: "60px", margin: "0px" }}>38,482</h7>
                <div className="button-text-container">
                  <button className="green-up-button-bg">
                    <img src={Greenupvector} alt="" />
                    25%
                  </button>
                  <p>from last month</p>
                </div>
              </div>
              <div className="horziontal-vector"></div>
              <div>
                <div className="button-blue-container">
                  <p className="text-item">19,241</p>
                  <button className="button-blue">50%</button>
                </div>
                <div className="complated-container">
                  <img src={Ellipseblue} alt="blue ellipse" />
                  <p>Completed</p>
                </div>
              </div>
              <div>
                <div className="button-blue-container">
                  <p className="text-item">8,394</p>
                  <button className="button-light-blue">25%</button>
                </div>
                <div className="complated-container">
                  <img src={Ellipselightblue} alt="light blue ellipse " />
                  <p>In progress</p>
                </div>
              </div>
              <div>
                <div className="button-blue-container">
                  <p className="text-item">1,589</p>
                  <button className="button-orange">6%</button>
                </div>
                <div className="complated-container">
                  <img src={Ellipseorange} alt="orange ellipse" />
                  <p>Pending</p>
                </div>
              </div>
            </div>
            <div className="container-medium-footer">
              <img src={Progresbar} alt="progress bar static for now" />
            </div>
            <div className="progress-circle-containers">
              <div className="progress-circle-container">
                <img src={Progresscircle} alt="progress circle" />
                <div>
                  <p>30%</p>
                  <p>Art and Design</p>
                </div>
              </div>

              <div className="progress-circle-container">
                <img src={Circlelightblue} alt="progress circle" />
                <div>
                  <p>48%</p>
                  <p>Mathematics</p>
                </div>
              </div>
              <div className="progress-circle-container">
                <img src={Circlegreen} alt="progress circle" />
                <div>
                  <p>75%</p>
                  <p>English</p>
                </div>
              </div>
              <div className="progress-circle-container">
                <img src={Circleyellow} alt="progress circle" />
                <div>
                  <p>47%</p>
                  <p>Chemistry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wekly-container-right">
          <div className="wekly-container-right-header">
            <p>Progress</p>
            <img src={Treedot} alt="tredotmenu" />
          </div>
          <div className="graphic-with-vector">
            <img src={Graphic} alt="graphic with vector" />
          </div>
          <div className="buttons-container">
            <div className="button-left">
              <button className="button-with-dot-blue">
                <img src={Dotblue} alt="dot blue" />
                <p>Complated</p>
              </button>
              <p className="numbers-progress">32,948</p>
              <p style={{ display: "contents" }}>Total tasks</p>
            </div>
            <div className="vertical-vector"></div>
            <div className="">
              <button className="button-with-dot-light-blue">
                <img src={Dotlightblue} alt="dot light blue" />
                <p>In progress</p>
              </button>
              <p className="numbers-progress"> 16,927</p>
              <p>Total tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* section userlist */}
      <section className="user-list">
        <div className="user-list-left">
          <div className="user-list-container-header">
            <p> Task Lists</p>
            <img src={Treedot} alt="treedot menu" />
          </div>
          <div>
            <div>
              <table className="table-invoices">
                <thead className="thead">
                  <tr className="tr">
                    <th style={{ padding: "10px" }}>No</th>
                    <th style={{ padding: "10px" }}> </th>
                    <th style={{ padding: "10px" }}>Task title</th>
                    <th style={{ padding: "10px" }}> </th>
                    <th style={{ padding: "10px" }}>Subject</th>
                    <th style={{ padding: "10px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr
                      key={invoice.id}
                      style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {index + 1}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {invoice.invoiceId}
                      </td>
                      {editInvoiceId === invoice.id ? (
                        <>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="text"
                              name="customer"
                              value={editFormData.customer}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="text"
                              name="date"
                              value={editFormData.date}
                              onChange={handleEditFormChange}
                              style={{ width: "100%" }}
                            />
                          </td>

                          <td className="xokeycontainer">
                            <img
                              className="okeyxbutton"
                              src={Okeyicon}
                              alt="okeyicon"
                              onClick={handleSaveClick}
                            />
                            <img
                              className="xbutton"
                              src={Closeicon}
                              alt=""
                              onClick={handleCancelClick}
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            {invoice.customer}
                          </td>
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            {invoice.date}
                          </td>

                          <td className="Td-editdelete">
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleEditClick(invoice)}
                              src={Editicon}
                              alt="edit icon"
                            />
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleDelete(invoice.id)}
                              src={Yesicon}
                              alt=""
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="userlist-right">
          <div className="userlist-right-container">
            <div className="userlist-right-header">
              <p>Student Performance Metrics</p>
              <img src={Treedot} alt="menu" />
            </div>
            <div className="vector-vertical"></div>
            <div className="graphs-lesson">
              <div className="graphs-lesson-height">
                <p className="userlist-right-text-item">Mathematics</p>
                <img className="bars-img" src={Bars} alt="bars 0" />
              </div>
              <div className="graphs-lesson-height">
                <p className="userlist-right-text-item">English</p>
                <img className="bars-img" src={Bars1} alt="1" />
              </div>
              <div className="graphs-lesson-height">
                <p className="userlist-right-text-item">Science</p>
                <img className="bars-img" src={Bars2} alt="3" />
              </div>
              <div className="graphs-lesson-height">
                <p className="userlist-right-text-item">History</p>
                <img className="bars-img" src={Bars2} alt="4" />
              </div>
              <div className="graphs-lesson-height">
                <p className="userlist-right-text-item">IT Technology</p>
                <img className="bars-img" src={Bars3} alt="5" />
              </div>
            </div>
            <div className="vector-vertical"></div>
            <div className="userlistrightfooter">
              <div className="footer-container">
                <div className="squere-footer-item-blue"></div>
                <p className="footer-text-item">Number of A's</p>
              </div>
              <div className="footer-container">
                <div className="squere-footer-item-light-blue"></div>
                <p className="footer-text-item">Number of B's</p>
              </div>
              <div className="footer-container">
                <div className="footer-text-item-light-green"></div>
                <p className="footer-text-item">Number of C's</p>
              </div>
              <div className="footer-container">
                <div className="squere-footer-item-light-orange"></div>
                <p className="footer-text-item">Number of D's</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="container-activiylogs">
        <div className="container-leftside">
          <div className="logs-left-header">
            <p>Activity Logs</p>
            <img src={Treedot} alt="menu" />
          </div>
          {/* <div className="horizonal-border"></div> */}
          <div>
            <img src={Activitylogs} alt="logs bars" />
          </div>
          <div className="container-attendance">
            <div className="attendance-dots">
              <button className="blue-circle"></button>
              <p>Daily Attendance</p>
            </div>
            <div className="vertical-border-logs"></div>
            <div className="attendance-dots">
              <button className="extra-light-blue-circle"></button>
              <p>Extracurricular Activities</p>
            </div>
            <div className="vertical-border-logs"></div>
            <div className="attendance-dots">
              <button className="gray-circle"></button>
              <p>Well-being and Support</p>
            </div>
          </div>
        </div>
        <div className="container-rightside">
          <div className="container-rightside-header">
            <p>On-Time Arrival</p>
            <img src={Treedot} alt="menu" />
          </div>
          <div>
            <div className="button-container-right">
              <p className="button-container-right-text">95%</p>
              <button className="button-container-right-green">
                <img src={Greenupvector} alt="upvector" />
                5%
              </button>
            </div>
            <div>
              <p>from last week</p>
            </div>
          </div>
          <div>
            <img src={Rihgtcontainergraph} alt="graph" />
          </div>
        </div>
      </section>

      {/* section last */}
      <section className="last-section-container">
        <div className="last-section-container-left">
          <div className="last-section-container-left-header">
            <p>Cafeteria and Nutrition</p>
            <img src={Treedot} alt="menu" />
          </div>
          <div className="graph-container">
            <img src={Dinnergraph} alt="graph" />
          </div>
          <div className="persentage-container">
            <div className="persentage-container-sepiceal">
              <button className="blue-persantge">
                <img src={Vectorwhiteup} alt="vectro" />
                5%
              </button>
              <p className="persentage-container-sepiceal-text">School Lunch</p>
            </div>
            <div className="persentage-container-sepiceal">
              <button className="light-blue-persantge">
                <img src={Vectorwhiteup} alt="vectro" />
                45%
              </button>
              <p className="persentage-container-sepiceal-text">
                Lunch from Home
              </p>
            </div>
            <div className="persentage-container-sepiceal">
              <button className="orange-persantage">
                <img src={Vectorwhiteup} alt="vectro" />
                20%
              </button>
              <p className="persentage-container-sepiceal-text">
                Skipping Lunch
              </p>
            </div>
          </div>
        </div>
        <div className="daily-attendance-container">
          <div className="attendance-header-container">
            <p>Daily Attendance and Participation</p>
            <img src={Treedot} alt="menu  " />
          </div>
          <div>
            <div className="bar-main-container">
              <div className="bar-container-flex">
                <div className="bar-container">
                  <img src={Personsicon} alt="person icon" />
                  <p>Attendance Rate</p>
                </div>
                <div>
                  <button className="bar-button">95%</button>
                </div>
              </div>

              <div>
                <img src={Progressblue} alt="progress blue" />
              </div>
            </div>
            <div className="bar-main-container">
              <div className="bar-container-flex">
                <div className="bar-container">
                  <img src={Hour} alt="person icon" />
                  <p>Attendance Rate</p>
                </div>
                <div>
                  <button className="bar-ligjt-blue-button">90%</button>
                </div>
              </div>

              <div>
                <img src={Lightblueprogress} alt="progress blue" />
              </div>
            </div>
            <div className="bar-main-container">
              <div className="bar-container-flex">
                <div className="bar-container">
                  <img src={Yellowhour} alt="person icon" />
                  <p>Attendance Rate</p>
                </div>
                <div>
                  <button className="bar-orange-button">40%</button>
                </div>
              </div>

              <div>
                <img src={Yellowprogress} alt="progress blue" />
              </div>
            </div>
            <div className="bar-main-container">
              <div className="bar-container-flex">
                <div className="bar-container">
                  <img src={Xcalendar} alt="person icon" />
                  <p>Attendance Rate</p>
                </div>
                <div>
                  <button className="bar-red-button ">20%</button>
                </div>
              </div>

              <div>
                <img src={Redprogress} alt="progress blue" />
              </div>
            </div>
            <div className="bar-main-container">
              <div className="bar-container-flex">
                <div className="bar-container">
                  <img src={Heart} alt="person icon" />
                  <p>Attendance Rate</p>
                </div>
                <div>
                  <button className="bar-black-button">17%</button>
                </div>
              </div>

              <div>
                <img src={Blackprogress} alt="progress blue" />
              </div>
            </div>
          </div>
        </div>
        <div className="rightside-container">
          <div className="last-section-rightside-container">
            <div className="last-section-container-left-header">
              <p>Cafeteria and Nutrition</p>
              <img src={Treedot} alt="menu" />
            </div>
            <div className="last-section-rightside-container-text">
              <div className="last-section-rightside-container-text-container">
                <div>
                  <img src={Blueinprogress} alt="book icon" />
                </div>

                <div>
                  <p className="text-item-lastcontainer">Literary Analysis</p>
                  <p className="text-item-lastcontainersmall">
                    English Literature
                  </p>
                </div>
              </div>
              <div>
                <img src={Book} alt="blue in progress" />
              </div>
            </div>
          </div>
          <div>
            <div className="last-section-rightside-container">
              <div className="last-section-rightside-container-text">
                <div className="last-section-rightside-container-text-container">
                  <div>
                    <img src={Greeninprogress} alt="book icon" />
                  </div>

                  <div>
                    <p className="text-item-lastcontainer">Literary Analysis</p>
                    <p className="text-item-lastcontainersmall">
                      English Literature
                    </p>
                  </div>
                </div>
                <div>
                  <img src={Skuter} alt="blue in progress" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="last-section-rightside-container">
              <div className="last-section-rightside-container-text">
                <div className="last-section-rightside-container-text-container">
                  <div>
                    <img src={Shoes} alt="book icon" />
                  </div>

                  <div>
                    <p className="text-item-lastcontainer">Literary Analysis</p>
                    <p className="text-item-lastcontainersmall">
                      English Literature
                    </p>
                  </div>
                </div>
                <div>
                  <img src={Redinprogress} alt="blue in progress" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="last-section-rightside-container">
              <div className="last-section-rightside-container-text">
                <div className="last-section-rightside-container-text-container">
                  <div>
                    <img src={Hazard} alt="book icon" />
                  </div>

                  <div>
                    <p className="text-item-lastcontainer">Literary Analysis</p>
                    <p className="text-item-lastcontainersmall">
                      English Literature
                    </p>
                  </div>
                </div>
                <div>
                  <img src={Yellowinprogress} alt="blue in progress" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="last-section-rightside-container">
              <div className="last-section-rightside-container-text">
                <div className="last-section-rightside-container-text-container">
                  <div>
                    <img src={Magic} alt="book icon" />
                  </div>

                  <div>
                    <p className="text-item-lastcontainer">Literary Analysis</p>
                    <p className="text-item-lastcontainersmall">
                      English Literature
                    </p>
                  </div>
                </div>
                <div>
                  <img src={Lightblueinprogress} alt="blue in progress" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="last-section-rightside-container">
              <div className="last-section-rightside-container-text">
                <div className="last-section-rightside-container-text-container">
                  <div>
                    <img src={Piceture} alt="book icon" />
                  </div>

                  <div>
                    <p className="text-item-lastcontainer">Literary Analysis</p>
                    <p className="text-item-lastcontainersmall">
                      English Literature
                    </p>
                  </div>
                </div>
                <div>
                  <img src={Blackinprogress} alt="blue in progress" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
