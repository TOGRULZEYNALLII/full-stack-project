import "../Home/style.css";
import { useState } from "react";
import Moneybag from "./assets/icons/money-bag.svg";
import Greenline from "./assets/icons/greenline.svg";
import Vector from "./assets/icons/Vector.svg";
import Redline from "./assets/icons/reddline.svg";
import Reddown from "./assets/icons/reddown.svg";
import Truck from "./assets/icons/shipping.svg";
import Profits from "./assets/icons/dollar3.svg";
import Costs from "./assets/icons/dollar.svg";
import Buttonlightblueweek from "./assets/carryingcosts/week.svg";
import Buttonbluemonth from "./assets/carryingcosts/month.svg";
import Longbluevector from "./assets/carryingcosts/longbluevector.svg";
import Horizontalline from "./assets/carryingcosts/horizontalline.svg";
import Treedotmenu from "../Sidebar/assets/icons/dot.svg";
import Bluedownvector from "./assets/carryingcosts/bluedownvector.svg";
import Lightbluelongline from "./assets/carryingcosts/longlightblueline.svg";
import Bars from "./assets/carryingcosts/Bars.svg";
import Deliverystatusbar from "./assets/carryingcosts/deliverystatusbar.svg";
import Colorfulbar from "./assets/carryingcosts/colorfulbar.svg";
import Plcosts from "./assets/warehousing/3plcosts.svg";
import Costssquere from "./assets/warehousing/costspersquere.svg";
import Perhourcosts from "./assets/warehousing/perhourcosts.svg";
import Staffcosts from "./assets/warehousing/staffcosts.svg";
import Profitcosts from "./assets/warehousing/profitcosts.svg";
import Previous from "./assets/warehousing/Previous.svg";
import Next from "./assets/warehousing/Next.svg";
import Yellowdown from "./assets/warehousing/yellowdown.svg";
import Blueup from "./assets/warehousing/blueupp.svg";
import Lightblueup from "./assets/warehousing/lightblueup.svg";
import Cancelled from "./assets/invoices/cancelled.svg";
import Squereupright from "./assets/invoices/ArrowSquareUpRight.svg";
import Leftdownvector from "./assets/invoices/leftdownvectorred.svg";
import Sandbox from "./assets/invoices/delivered.svg";
import Ordersicon from "./assets/invoices/orders.svg";
import Pendingicon from "./assets/invoices/pending.svg";
import Revenueicon from "./assets/invoices/revenuedollar.svg";
import Refundedicon from "./assets/invoices/refunded.svg";
import Editcon from "./assets/carryingcosts/editicon.svg";
import Deleteicon from "./assets/carryingcosts/deleteicon.svg";
import Okeyiucon from "./assets/invoices/okeyblue.png";
import xicon from "./assets/invoices/close.png";
function LogistcsPage() {
  const initialInvoices = [
    {
      id: 1,
      invoiceId: "#874729",
      customer: "Cahaya Dewi",
      date: "08/09/23",
      amount: 728,
    },
    {
      id: 2,
      invoiceId: "#874730",
      customer: "Samantha Olie",
      date: "02/11/22",
      amount: 182,
    },
    {
      id: 3,
      invoiceId: "#874731",
      customer: "Daniel Gallego",
      date: "22/08/23",
      amount: 456,
    },
    {
      id: 4,
      invoiceId: "#874732",
      customer: "Avery Davis",
      date: "02/12/22",
      amount: 359,
    },
    {
      id: 5,
      invoiceId: "#874733",
      customer: "Taylor Alonso",
      date: "13/04/23",
      amount: 224,
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
      <section className="section-card">
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Moneybag} alt="moneybag" />
              <p className="moneybag-p">Revenue</p>
            </div>
            <div className="money-container">
              <p className="money">$12,234</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Greenline} alt="line" />
            <button className="card-button">
              <img src={Vector} alt="vector" />
              <p>25%</p>
            </button>
          </div>
        </div>
        <div className="card">
          <di className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Costs} alt="moneybag" />
              <p className="moneybag-p">Costs</p>
            </div>
            <div className="money-container">
              <p className="money">$2,495</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </di>
          <div className="graphic">
            <img src={Redline} alt="line" />
            <button className="card-button-red">
              <img src={Reddown} alt="vector" />
              <p>5%</p>
            </button>
          </div>
        </div>
        {/* ------- */}
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Profits} alt="moneybag" />
              <p className="moneybag-p">Profits</p>
            </div>
            <div className="money-container">
              <p className="money">$9,274</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Greenline} alt="line" />
            <button className="card-button">
              <img src={Vector} alt="vector" />
              <p>15%</p>
            </button>
          </div>
        </div>
        {/* ========== */}
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Truck} alt="moneybag" />
              <p className="moneybag-p">Shipments</p>
            </div>
            <div className="money-container">
              <p className="money">$8,472</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Redline} alt="line" />
            <button className="card-button-red">
              <img src={Reddown} alt="vector" />
              <p>10%</p>
            </button>
          </div>
        </div>
      </section>

      <section className="section-carrying-costs">
        <div className="left-container-costs-year">
          <div className="Costs-year">
            <div>
              <p>Yearly Order Rate</p>
            </div>
            <div className="monthweek-container">
              <img src={Buttonbluemonth} alt="month light blue dot" />
              <p>Week</p>
              <img src={Buttonlightblueweek} alt="week blue dot" />
              <p>Month</p>
            </div>
            <div>
              <select name="dob-year" className="datefield-year">
                <option value="">Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
              </select>
            </div>
          </div>
          <div className="long-lines">
            <div className="numbers-left-container-lines">
              <div>
                {" "}
                <p>75</p>
              </div>
              <div>
                {" "}
                <p>50</p>
              </div>
              <div>
                {" "}
                <p>25</p>
              </div>
              <div>
                {" "}
                <p>0</p>
              </div>
            </div>
            <div>
              <img
                className="Horizontalline"
                src={Horizontalline}
                alt="lines"
              />
              <img
                className="longbluevector"
                src={Lightbluelongline}
                alt="blueline"
              />
              <img src={Longbluevector} alt="light blue line" />
              <img />
            </div>
          </div>
          <div className="lines-months">
            <p> Jan</p>
            <p> Feb</p>
            <p> Mar</p>
            <p> Apr</p>
            <p> May</p>
            <p> Jun</p>
            <p> Jul</p>
            <p> Aug</p>
            <p> Sep</p>
            <p> Oct</p>
          </div>
        </div>
        <div className="right-container-caryingcosts">
          <div className="right-container-caryingcosts-header">
            <p>Carrying Costs</p>
            <img src={Treedotmenu} alt="" />
          </div>
          <div className="border-right-container"></div>
          <div>
            {" "}
            <p className="border-right-container-price">$2,847.90</p>
          </div>
          <div className="blue-button-down-container">
            <button className="blue-button-down">
              <img src={Bluedownvector} alt="vector" />
              <p>25%</p>
            </button>
            <p>from last week </p>
          </div>
          <div className="bars-container">
            <img src={Bars} alt="bars graphic lines" />
          </div>
          <div className="container-weekends">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>

            <p>Sat</p>
          </div>
        </div>
      </section>
      {/* SECTIONNNNNNNNNNNN */}
      <section className="delivery-status">
        <div className="delivery-status-left-container">
          <div className="delivery-status-left-container-header">
            <div>
              <p>Delivery Status</p>
            </div>
            <div>
              <img src={Treedotmenu} alt="settings icon" />
            </div>
          </div>

          <div className="delivery-status-boreder-vertical"></div>
          <div className="delivery-status-flex-container">
            <div className="delivery-status-flex-container">
              <div className="delivery-status-prices">
                <div>
                  <div className="delivered-container">
                    <button className="bluedot"></button>
                    <p>Delivered</p>
                  </div>
                  <div></div>
                  <div className="dellivery-status-prices-container">
                    <p className="dellivery-status-prices-containe-price">
                      2,948
                    </p>
                    <div>
                      <button className="card-button">
                        <img src={Vector} alt="vector" />
                        <p>25%</p>
                      </button>
                      <p>from last week</p>
                    </div>
                    <div className="delivery-costs-border-horizontal"></div>
                  </div>
                </div>
              </div>
              <div className="delivery-status-prices">
                <div>
                  <div className="delivered-container">
                    <button className="lightbluedot"></button>
                    <p>On Progress</p>
                  </div>
                  <div></div>
                  <div className="dellivery-status-prices-container">
                    <p className="dellivery-status-prices-containe-price">
                      673
                    </p>
                    <div>
                      <button className="card-button">
                        <img src={Vector} alt="vector" />
                        <p>25%</p>
                      </button>
                      <p>from last week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="delivery-status-bar">
            <img src={Deliverystatusbar} alt="bars with month" />
          </div>
        </div>

        {/* right container */}
        <div className="right-container-store-location">
          <div className="right-container-store-location-text">
            <p>Sales by Stores Location</p>
            <img src={Treedotmenu} alt="" />
          </div>
          <div className="right-container-store-location-verticalborder"></div>
          <div className="right-container-store-location-barside">
            <div>
              <img src={Colorfulbar} alt="colorful bars" />
            </div>
            <div className="right-container-store-location-horizontalborder"></div>
            <div className="month-store">
              <div className="dotsmonth">
                <button className="bluestore"> </button>
                <p>East</p>
              </div>
              <div className="dotsmonth">
                <button className="lightbluestore"></button>
                <p>West</p>
              </div>
              <div className="dotsmonth">
                <button className="lightgreenstore"></button>
                <p>North</p>
              </div>
              <div className="dotsmonth">
                <button className="lightyellowstore"></button>
                <p>South</p>
              </div>
            </div>
          </div>
          <div className="right-container-store-location-month">
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apr</p>
            <p>May</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Aug</p>
            <p>Sep</p>
          </div>
          <div className="store-vertical-line"></div>
          <p className="Datastoretextitem">Data from the year of 2023</p>
        </div>
      </section>
      {/* section  */}
      <section className="warehousing">
        <div className="warehousing-container-left">
          <div className="warehousing-container-header">
            <p>Warehousing Service Costs and Fees</p>
            <img src={Treedotmenu} alt="menu" />
          </div>
          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Costssquere} alt="staff costs icon" />
              <p>Cost Per Square Foot of Warehouse Space</p>
            </div>
            <div className="warehousing-texts-button">
              <p>$6.53</p>
              <button className="card-button-green-gray">
                <img src={Vector} alt="vector" />
                <p>5%</p>
              </button>
            </div>
          </div>

          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Staffcosts} alt="staff costs icon" />
              <p>Cost of Warehouse Management Staff Per Year</p>
            </div>
            <div className="warehousing-texts-button">
              <p>$47,500</p>
              <button className="card-button-red">
                <img src={Reddown} alt="vector" />
                <p>3%</p>
              </button>
            </div>
          </div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Perhourcosts} alt="hour costs icon" />
              <p>Cost of Warehouse Staff Per Hour</p>
            </div>
            <div className="warehousing-texts-button">
              <p>$11.44</p>
              <button className="yellowdownbutton">
                {" "}
                <img src={Yellowdown} alt="down vector" />
                4%
              </button>
            </div>
          </div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Profitcosts} alt="profit costs" />
              <p>Corporate Profit % For Warehouses</p>
            </div>
            <div className="warehousing-texts-button">
              <p>8.83%</p>
              <button className="blueupbttuon">
                <img src={Blueup} alt="blue up vector" />
                <p>11%</p>
              </button>
            </div>
          </div>

          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Plcosts} alt="3pl cost icon" />
              <p>What Percentage Do 3PL Warehouses Increase Pricing</p>
            </div>
            <div className="warehousing-texts-button">
              <p>2.37%</p>
              <button className="lightblueupbutton">
                <img src={Lightblueup} alt="light blue up vector" />
                <p> 4%</p>
              </button>
            </div>
          </div>
          <div className="warehousing-vertical-border"></div>

          <div className="warehousing-vertical-border"></div>
          <div className="Showingdata">
            <div>
              <p className="showingdata-item">Showing 5 of 100 data</p>
            </div>
            <div>
              <img src={Previous} alt="" />
              <img src={Next} alt="" />
            </div>
          </div>
        </div>
        <div className="delivers-country">
          <div className="delivers-country-header">
            <p>Deliveries by Country</p>
            <img src={Treedotmenu} alt="settings icon" />
          </div>
          <div></div>
          <div className="line-deliveres"></div>
          <div className="delivers-country-lines-container">
            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>America</p>
                <button className="country-percentage-lightblue">20%</button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-blue-line"></div>
                <div className="country-percentage-blue-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>Netherlands</p>
                <button className="country-percentage-lightgreen">25%</button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-green-line"></div>
                <div className="country-percentage-green-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>France</p>
                <button className="country-percentage-red">30%</button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-red-line"></div>
                <div className="country-percentage-red-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>Spain</p>
                <button className="country-percentage-yellow">35%</button>
              </div>
              <div className="country-percentage-yellow-line-countainer">
                <div className="country-percentage-yellow-line"></div>
                <div className="country-percentage-yellow-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>India</p>
                <button className="country-percentage-lightblue-two">
                  45%
                </button>
              </div>
              <div className="country-percentage-light-blue-line-countainer">
                <div className="country-percentage-light-blue-line"></div>
                <div className="country-percentage-light-blue-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>Indonesia</p>
                <button className="country-percentage-black">65%</button>
              </div>
              <div className="country-percentage-black-line-countainer">
                <div className="country-percentage-black-line"></div>
                <div className="country-percentage-black-default"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INVOICES */}
      <section className="invoices-container">
        <div className="cancelled">
          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Cancelled}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">32</p>
                  <p className="cancelled-text-item">Cancelled</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">+13%</p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Sandbox}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">176</p>
                  <p className="cancelled-text-item">Delivered</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Leftdownvector} />
                  <p className="cancelled-text-item-percentage-red">-7%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Ordersicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">384</p>
                  <p className="cancelled-text-item">Orders</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">+25%</p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Pendingicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">42</p>
                  <p className="cancelled-text-item">Pending</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">+2%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Revenueicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">$982</p>
                  <p className="cancelled-text-item">Revenue</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">+35%</p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Refundedicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">18</p>
                  <p className="cancelled-text-item">Refunded</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Leftdownvector} />
                  <p className="cancelled-text-item-percentage-red">-8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoices-right-container">
          <div className="invoices-right-container-dotmenu-container">
            <p>Invoices</p>
            <img src={Treedotmenu} alt="dot menu icon " />
          </div>
          <div className="warehousing-vertical-border"></div>
          <div className="users-invocing-container">
            <div style={{ padding: "0px" }}>
              <table className="table-invoices">
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid #ddd",
                      backgroundColor: "rgba(247, 248, 250, 1)",
                    }}
                  >
                    <th style={{ padding: "10px" }}>No</th>
                    <th style={{ padding: "10px" }}>Invoice ID</th>
                    <th style={{ padding: "10px" }}>Customer</th>
                    <th style={{ padding: "10px" }}>Date</th>
                    <th style={{ padding: "10px" }}>Amount</th>
                    <th style={{ padding: "10px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr
                      key={invoice.id}
                      style={{ borderBottom: "1px solid #ddd" }}
                    >
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
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              className="input-customer"
                              type="number"
                              name="amount"
                              value={editFormData.amount}
                              onChange={handleEditFormChange}
                              style={{ width: "100%" }}
                            />
                          </td>
                          <td className="xokeycontainer">
                            <img
                              className="okeyxbutton"
                              src={Okeyiucon}
                              alt="okeyicon"
                              onClick={handleSaveClick}
                            />
                            <img
                              className="xbutton"
                              src={xicon}
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
                          <td style={{ padding: "10px", textAlign: "center" }}>
                            ${invoice.amount}
                          </td>
                          <td className="Td-editdelete">
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleEditClick(invoice)}
                              src={Editcon}
                              alt="edit icon"
                            />
                            <img
                              style={{ height: "30px", cursor: "pointer" }}
                              onClick={() => handleDelete(invoice.id)}
                              src={Deleteicon}
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

            {/* <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p>No</p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>

            <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p>No</p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>

            <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p></p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>

            <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p>No</p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>

            <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p>4</p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>

            <div className="users-invocing-container-header">
              <div className="users-invocing-container-header-text">
                <p>No</p>
                <p>Invoices ID</p>
                <p>Customer</p>
              </div>
              <div className="users-invocing-container-header-text-right">
                <p>Date</p>
                <p>Amount</p>
                <p>Action</p>
              </div>
            </div>   */}
          </div>
        </div>
      </section>
    </>
  );
}

export default LogistcsPage;
