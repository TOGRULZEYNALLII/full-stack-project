import React from "react";
import "../Invoicing/style.css";
import Blue25 from "../Invoicing/assets/header/blue25.svg";
import Bluegraph from "../Invoicing/assets/header/bluegraph.svg";
import Dollar from "../Invoicing/assets/header/dollar.svg";
import Green25 from "../Invoicing/assets/header/green25.svg";
import Greengraph from "../Invoicing/assets/header/greengraph.svg";
import Lightblue3 from "../Invoicing/assets/header/lightblue3.svg";
import Lightbluegraph from "../Invoicing/assets/header/lightbluegraph.svg";
import Notepad from "../Invoicing/assets/header/notepad.svg";
import Page from "../Invoicing/assets/header/page.svg";
import Reddown5 from "../Invoicing/assets/header/reddown5.svg";
import Redgraph from "../Invoicing/assets/header/redgraph.svg";
import Telegram from "../Invoicing/assets/header/telegram.svg";
import Boxbluegraph from "../Invoicing/assets/spending/boxbluegraph.svg";
import Boxgreengraph from "../Invoicing/assets/spending/boxgreengraph.svg";
import Boxlightbluegraph from "../Invoicing/assets/spending/boxlightbluegraph.svg";
import Boxorangegraph from "../Invoicing/assets/spending/boxorangegraph.svg";
import Treedotmenu from "../Sidebar/assets/icons/dot.svg";
import Buttonok from "../Invoicing/assets/spending/buttonok.svg";
import Blueprogressbar from "../Invoicing/assets/spending/blueprogressbar.svg";
import Greenprogressbar from "../Invoicing/assets/spending/greenprogressbar.svg";
import Yellowprogressbar from "../Invoicing/assets/spending/yellowporgressbar.svg";
import Blackprogressbar from "../Invoicing/assets/spending/blackprogressbar.svg";
import lightblueprogressbar from "../Invoicing/assets/spending/lightblueprogressbar.svg";
import Redprogressbar from "../Invoicing/assets/spending/redprogressbar.svg";
import { useState } from "react";
import Transactionoverviewgraph from "../Invoicing/assets/transactionoverview/transactionoverviewgraph.svg";
import Downloadbuttonicon from "../Invoicing/assets/transactionoverview/downloadbuttonicon.svg";
import walletgraph from "../Invoicing/assets/transactionoverview/walletgraph.svg";
import Eye from "../Invoicing/assets/list/Eye.svg";
import Edit from "../Invoicing/assets/list/Edit.svg";
import Printer from "../Invoicing/assets/list/Printer.svg";
const Invoicing = () => {
  const [amount, setAmount] = useState(875);
  const balance = 456345.62;
  const [transactions, setTransactions] = useState([
    {
      name: "XYZ Store ID",
      date: "November 28, 2023",
      time: "05:34 AM",
      type: "Cashback",
      amount: "+ $53.98",
      status: "PENDING",
    },
    {
      name: "Restaurant ABC",
      date: "November 28, 2023",
      time: "07:56 AM",
      type: "Transfer Out",
      amount: "- $148.63",
      status: "COMPLETED",
    },
    {
      name: "Cindy Alexandro",
      date: "November 28, 2023",
      time: "10:13 AM",
      type: "Transfer Out",
      amount: "- $33.47",
      status: "COMPLETED",
    },
    {
      name: "Payment CME",
      date: "November 28, 2023",
      time: "12:34 PM",
      type: "Transfer In",
      amount: "+ $550.33",
      status: "PENDING",
    },
    {
      name: "Hawkins Jr.",
      date: "November 28, 2023",
      time: "04:34 PM",
      type: "Transfer In",
      amount: "+ $63.75",
      status: "CANCELED",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editTransaction, setEditTransaction] = useState({});

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditTransaction({ ...transactions[index] });
  };

  const handleSaveClick = () => {
    const updatedTransactions = [...transactions];
    updatedTransactions[editIndex] = editTransaction;
    setTransactions(updatedTransactions);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTransaction({ ...editTransaction, [name]: value });
  };

  const handleDeleteClick = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const handleViewClick = (index) => {
    alert(`Viewing details for: ${transactions[index].name}`);
  };

  return (
    <>
      <section className="header-container-invoicing">
        <div className="header-container-total-invoices">
          <div className="header-container-total-invoices-item">
            <div className="header-container-total-invoices-icon-conatiner">
              <img src={Notepad} />
              <div>
                <p className="header-container-total-invoices-icon-conatiner-text">
                  2,478
                </p>
                <p className="header-container-total-invoices-icon-conatiner-text-gray">
                  Total Invoices{" "}
                </p>
              </div>
            </div>
            <div>
              <img src={Blue25} />
            </div>
          </div>
          <div>
            <img src={Bluegraph} />
          </div>
        </div>

        <div className="header-container-total-invoices">
          <div className="header-container-total-invoices-item">
            <div className="header-container-total-invoices-icon-conatiner">
              <img src={Dollar} />
              <div>
                <p className="header-container-total-invoices-icon-conatiner-text">
                  2,478
                </p>
                <p className="header-container-total-invoices-icon-conatiner-text-gray">
                  Total Invoices{" "}
                </p>
              </div>
            </div>
            <div>
              <img src={Green25} />
            </div>
          </div>
          <div>
            <img src={Greengraph} />
          </div>
        </div>

        <div className="header-container-total-invoices">
          <div className="header-container-total-invoices-item">
            <div className="header-container-total-invoices-icon-conatiner">
              <img src={Page} />
              <div>
                <p className="header-container-total-invoices-icon-conatiner-text">
                  2,478
                </p>
                <p className="header-container-total-invoices-icon-conatiner-text-gray">
                  Total Invoices{" "}
                </p>
              </div>
            </div>
            <div>
              <img src={Reddown5} />
            </div>
          </div>
          <div>
            <img src={Redgraph} />
          </div>
        </div>

        <div className="header-container-total-invoices">
          <div className="header-container-total-invoices-item">
            <div className="header-container-total-invoices-icon-conatiner">
              <img src={Telegram} />
              <div>
                <p className="header-container-total-invoices-icon-conatiner-text">
                  2,478
                </p>
                <p className="header-container-total-invoices-icon-conatiner-text-gray">
                  Total Invoices{" "}
                </p>
              </div>
            </div>
            <div>
              <img src={Lightblue3} />
            </div>
          </div>
          <div>
            <img src={Lightbluegraph} />
          </div>
        </div>
      </section>

      <section className="spending-container">
        <div className="spending-container-left">
          <div className="spending-container-left-header">
            <p>Spending</p>
            <img src={Treedotmenu} />
          </div>

          <div className="spending-container-left-investment">
            <div className="spending-leftside-bars-container">
              <div className="spending-container-left-investment">
                <div>
                  <div
                    className="spending-container-left-investment-blue
                     "></div>
                </div>
                <div className="spending-container-left-investment-blue-text">
                  <div
                    style={{ fontSize: "17px", height: "7px" }}
                    className="spending-container-left-investment-blue-number-gray">
                    Investment
                  </div>
                  <div className="spending-container-left-investment-blue-text-number">
                    <p className="spending-container-left-investment-blue-number">
                      $1,415
                    </p>
                    <p className="spending-container-left-investment-blue-number-gray">
                      /$2,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="spending-container-left-investment">
                <div>
                  <div
                    className="spending-container-left-investment-green
                     "></div>
                </div>
                <div className="spending-container-left-investment-blue-text">
                  <div
                    style={{ fontSize: "17px", height: "7px" }}
                    className="spending-container-left-investment-blue-number-gray">
                    Installment
                  </div>
                  <div className="spending-container-left-investment-blue-text-number">
                    <p className="spending-container-left-investment-blue-number">
                      $1,567
                    </p>
                    <p className="spending-container-left-investment-blue-number-gray">
                      /$5,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="spending-container-left-investment">
                <div>
                  <div
                    className="spending-container-left-investment-orange
                     "></div>
                </div>
                <div className="spending-container-left-investment-blue-text">
                  <div
                    style={{ fontSize: "17px", height: "7px" }}
                    className="spending-container-left-investment-blue-number-gray">
                    Restaurant
                  </div>
                  <div className="spending-container-left-investment-blue-text-number">
                    <p className="spending-container-left-investment-blue-number">
                      $487
                    </p>
                    <p className="spending-container-left-investment-blue-number-gray">
                      /$10,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="spending-container-left-investment">
                <div>
                  <div
                    className="spending-container-left-investment-light-blue
                     "></div>
                </div>
                <div className="spending-container-left-investment-blue-text">
                  <div
                    style={{ fontSize: "17px", height: "7px" }}
                    className="spending-container-left-investment-blue-number-gray">
                    Property
                  </div>
                  <div className="spending-container-left-investment-blue-text-number">
                    <p className="spending-container-left-investment-blue-number">
                      $3,890
                    </p>
                    <p className="spending-container-left-investment-blue-number-gray">
                      /$4,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spending-box-common-container">
              <div className="spending-box-cotanier">
                <div className="spending-box-blue">
                  <img src={Boxbluegraph} />
                  <p>Investment</p>
                </div>

                <div className="spending-box-green">
                  <img src={Boxgreengraph} />
                  <p>Installment</p>
                </div>
              </div>
              <div className="spending-box-cotanier">
                <div className="spending-box-orange">
                  <img src={Boxorangegraph} />
                  <p>Restaurant</p>
                </div>

                <div className="spending-box-light-blue">
                  <img src={Boxlightbluegraph} />
                  <p>Property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="investment-middle-container">
          <div className="investment-middle-container-header">
            <p> Quick Transfer</p>
            <img src={Treedotmenu} />
          </div>
          <div className="enterrecipent">
            <p>Enter Recipent</p>
            <input
              className="enterrecipentinput"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="selectamount">
            <h3 className="selectamount-item">Select amount</h3>
            <div>
              <div className="amount-displaye-price-container">
                <p className="amount-displaye-price">${amount}</p>
              </div>

              <input
                className="selectamountinputrange"
                type="range"
                min="0"
                max={balance}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <p className="selectamount-item-your-balance">
                Your Balance: ${balance.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="select-amount-button">
            <button className="select-amount-bluebutton">
              Send <img src={Buttonok} />
            </button>
          </div>
        </div>
        <div className="rightside-container-spending-lists">
          <div className="rightside-container-spending-lists-header">
            <p>Spending Lists</p>
            <img src={Treedotmenu} />
          </div>
          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={Blueprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Investment
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $1,415
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$4,560
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={Greenprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Restaurant
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $2,395
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$4,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={Redprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Installment
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $1,869
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$3,259
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={Yellowprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Property
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $1,200
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$3,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={lightblueprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Hobbies
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $2,000
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$4,000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rightside-container-spending-lists-middle">
              <div className="progressbar-icon-container">
                <img className="progressbar-icon" src={Blackprogressbar} />
              </div>
              <div className="rightside-container-spending-lists-middle-text">
                <div>
                  <p className="rightside-container-spending-lists-middle-text-item-one">
                    Travel
                  </p>
                </div>
                <div className="rightside-container-spending-lists-middle-text-item-second-container">
                  <p className="rightside-container-spending-lists-middle-text-item-two">
                    $1,840
                  </p>
                  <p className="rightside-container-spending-lists-middle-text-item-three">
                    /$3,870
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Transaction-overview-container">
        <div className="Transaction-overview-container-leftside">
          <div className="Transaction-overview-container-header">
            <p>Transaction Overview</p>
            <img src={Treedotmenu} />
          </div>
          <div className="Transaction-overview-container-item-text-button">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              perfer
            </p>
            <button className="Transaction-overview-container-button">
              <p>Download Report</p>
              <img src={Downloadbuttonicon} alt="" />
            </button>
          </div>
          <div className="Transactionoverviewgraph-container">
            <img src={Transactionoverviewgraph} />
          </div>
          <div className="Transaction-overview-container-footer">
            <div className="income-container-text">
              <div className="circle-blue"></div>
              <p>Income</p>
            </div>
            <div className="horizontal-border"></div>
            <div className="income-container-text">
              <div className="circle-gray"></div>
              <p>Expenses</p>
            </div>
          </div>
        </div>

        <div className="weekly-wallet-container">
          <div className="weekly-wallet-container-header">
            <p>Weekly Wallet Transactions</p>
            <img src={Treedotmenu} />
          </div>
          <div className="weekly-wallet-container-button-container">
            <select className="month-select" name="month" id="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select className="month-select" name="year" id="year">
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
              <option value="2013">2013</option>
            </select>
          </div>
          <div className="weekly-wallet-container-item-number">
            <p className="weekly-wallet-container-item-number-price">$36,495</p>
            <div className="weekly-wallet-container-item-number-text-container">
              <img src={Green25} alt="" />
              <p className="weekly-wallet-container-item-number-text">
                from last week
              </p>
            </div>
          </div>
          <div>
            <img src={walletgraph} />
          </div>
        </div>
      </section>

      <section className="Previous-Transactions-container">
        <div className="Previous-Transactions-container-header">
          <div className="Previous-Transactions-container-header-left">
            <p>Previous Transactions</p>
            <p className="Previous-Transactions-container-header-left-text">
              Lorem ipsum dolor sit amet consectetur sit amet ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="Previous-Transactions-container-header-right">
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
        <div className="transaction-table">
          <table className="transaction-table">
            <thead>
              <tr>
                <th className="th-black">Transaction Name</th>
                <th className="th-black">Date & Time</th>
                <th className="th-black">Transaction Type</th>
                <th className="th-black">Amount</th>
                <th className="th-black">Status</th>
                <th className="th-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  {editIndex === index ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={editTransaction.name}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="date"
                          value={editTransaction.date}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="time"
                          value={editTransaction.time}
                          onChange={handleInputChange}
                          style={{ marginLeft: "10px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="type"
                          value={editTransaction.type}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="amount"
                          value={editTransaction.amount}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <select
                          name="status"
                          value={editTransaction.status}
                          onChange={handleInputChange}>
                          <option className="pending" value="PENDING">PENDING</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="CANCELED">CANCELED</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="action-button save"
                          onClick={handleSaveClick}>
                          💾 Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{transaction.name}</td>
                      <td>{`${transaction.date} ${transaction.time}`}</td>
                      <td>{transaction.type}</td>
                      <td
                        className={
                          transaction.amount.startsWith("+")
                            ? "positive"
                            : "negative"
                        }>
                        {transaction.amount}
                      </td>
                      <td>
                        <span
                          className={`status ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="action-button edit"
                          onClick={() => handleEditClick(index)}>
                          <img src={Edit} />
                        </button>
                        <button
                          className="action-button view"
                          onClick={() => handleViewClick(index)}>
                          <img src={Printer} />
                        </button>
                        <button
                          className="action-button delete"
                          onClick={() => handleDeleteClick(index)}>
                          <img src={Eye} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="last-container">
          <button className="previous">Previous</button>
          <p>Page 1 of 12</p>
          <button className="next">Next</button>
        </div>
      </section>

    
    </>
  );
};

export default Invoicing;
