import "./style.css";
import Greenup from "./assets/cards/greenup.svg";
import Mastercard from "./assets/cards/mastercard.svg";
import Reddown from "./assets/cards/reddown.svg";
import WaweElements from "./assets/cards/waveElements.svg";
import CaretCricleDown from "./assets/income/CaretCircleDown.svg";
import CurrencyCricleDollar from "./assets/income/CurrencyCircleDollar.svg";
import GraphStatic from "./assets/income/graphstatic.svg";
import Person1 from "./assets/income/person1.svg";
import Person2 from "./assets/income/person2.svg";
import Person3 from "./assets/income/person3.svg";
import Person4 from "./assets/income/person4.svg";
import Telegram from "./assets/income/telegram.svg";
import Balon from "./assets/spending/balon.svg";
import Basketmeal from "./assets/spending/basketmeal.svg";
import Car from "./assets/spending/car.svg";
import Graphnumbers from "./assets/spending/graphnumbers.svg";
import Greendown from "./assets/spending/greendown.svg";
import Pig from "./assets/spending/pig.svg";
import Redup from "./assets/spending/redup.svg";
import Treedotmenu from "../Sidebar/assets/icons/dot.svg";
import Vectordown from "./assets/spending/vectordown.svg";
import Dollaricon from "./assets/spending/dollaricon.svg";
import Eye from "../Invoicing/assets/list/Eye.svg";
import Edit from "../Invoicing/assets/list/Edit.svg";
import Printer from "../Invoicing/assets/list/Printer.svg";
import Blueprogress from "./assets/spending/blueprogress.svg";
import Greenprogress from "./assets/spending/greenprogress.svg";
import Yellowprogress from "./assets/spending/yellowprogress.svg";
import Lightblueprogress from "./assets/spending/lightblueprogress.svg";
import { React, useState } from "react";
const Banking = () => {
  const [transactions, setTransactions] = useState([
    {
      name: "XYZ Store Iasdasdasddasf",
      date: "November 28, 2023",
      time: "05:34 AM",
      type: "Electronic",
      amount: "+ $53.98",
      status: "PENDING",
    },
    {
      name: "Restaurant ABC",
      date: "November 28, 2023",
      time: "07:56 AM",
      type: "Food & Beverages",
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
      <section className="cards-container">
        <div className="card-t">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Second Wallet</p>
            <p className="card-price-item"> $12,637.98</p>
          </div>
          <div className="card-id">
            <p className="id">5555 3434 **** 6767</p>
            <img src={Mastercard} />
          </div>
        </div>

        <div className="card-t-light-blue">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Third Wallet</p>
            <p className="card-price-item">$6,716.33</p>
          </div>
          <div className="card-id">
            <p className="id"> 6666 8989 **** 7878</p>
            <img src={Mastercard} />
          </div>
        </div>

        <div className="card-t-green">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Main Wallet</p>
            <p className="card-price-item"> $45,500.12</p>
          </div>
          <div className="card-id">
            <p className="id"> 4444 2121 **** 2424</p>
            <img src={Mastercard} />
          </div>
        </div>
      </section>

      <section className="income-section">
        <div className="income-container-left">
          <div className="income-cotanier-left-header">
            <p>Income vs Expense Statistics</p>
            <img src={Treedotmenu} />
          </div>
          <div className="income-cotanier-left-middle">
            <div className="income-cotanier-left-middle-prices-container">
              <div className="income-cotanier-left-middle-prices-container-left">
                <div className="blue-circle-container">
                  <div className="blue-circle"></div>
                  <p className="income-cotanier-left-middle-prices-container-left-p">
                    income
                  </p>
                </div>

                <div className="income-cotanier-left-middle-prices-container-left-prices">
                  <p className="income-cotanier-left-middle-prices-container-left-prices-p">
                    $8,294.89
                  </p>
                </div>
                <div className="income-cotanier-left-middle-prices-container-footer">
                  <img src={Greenup} />
                  <p className="income-cotanier-left-middle-prices-container-footer-percentage">
                    25%
                  </p>
                  <p className="income-cotanier-left-middle-prices-container-footer-text-item">
                    Bigger than last month
                  </p>
                </div>
              </div>
              <div className="horizontat-bordder"></div>
              <div className="income-cotanier-left-middle-prices-container-right">
                <div className="blue-circle-container">
                  <div className="blue-circle"></div>
                  <p className="income-cotanier-left-middle-prices-container-left-p">
                    income
                  </p>
                </div>

                <div className="income-cotanier-left-middle-prices-container-left-prices">
                  <p className="income-cotanier-left-middle-prices-container-left-prices-p">
                    $8,294.89
                  </p>
                </div>
                <div className="income-cotanier-left-middle-prices-container-footer">
                  <img src={Greenup} />
                  <p className="income-cotanier-left-middle-prices-container-footer-percentage">
                    25%
                  </p>
                  <p className="income-cotanier-left-middle-prices-container-footer-text-item">
                    Bigger than last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="income-cotanier-graph-container">
            <img src={GraphStatic} />
          </div>
        </div>

        <div className="send-container">
          <div className="send-container-header">
            <p>Send Payments</p>
            <img src={Treedotmenu} />
          </div>

          <div className="send-container-middle-container">
            <p className="send-container-middle-container-item-text">
              Chose Recipient
            </p>
            <div className="send-container-profiles-container">
              <div className="send-container-profile">
                <img src={Person1} />
                <p>Maria</p>
              </div>
              <div className="send-container-profile">
                <img src={Person2} />
                <p>Dinda</p>
              </div>
              <div className="send-container-profile">
                <img src={Person3} />
                <p>Dave</p>
              </div>
              <div className="send-container-profile">
                <img src={Person4} />
                <p>Atmo</p>
              </div>
              <div className="send-container-profile">
                <img src={Person1} />
                <p>Angel</p>
              </div>
              <div className="send-container-profile">
                <img src={Person3} />
                <p>Dave</p>
              </div>
            </div>
            <div className="payement-catagory-container">
              <div>
                <p className="payement-catagory-container-p">
                  Payment Category
                </p>
                <div className="input-container">
                  <input className="input" type="text" placeholder="Select" />
                  <img className="vectoricon" src={Vectordown} />
                </div>
              </div>
              <div>
                <p className="payement-catagory-container-p">
                  Payment Category
                </p>
                <div className="input-container">
                  <img className="vectoricon" src={Dollaricon} />
                  <input className="input" type="text" placeholder="Select" />
                </div>
              </div>
            </div>
            <div className="payement-catagory-container-button-container">
              <button className="payement-catagory-container-button">
                <img src={Telegram} />
                <p>Send Payment</p>
              </button>
            </div>
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
            <button className="Banking-Previous-Transactions-container-header-right-button-first">
              <p className="Banking-Previous-Transactions-container-header-right-button-text">
                Today
              </p>
            </button>
            <button className="Banking-Previous-Transactions-container-header-right-button-first">
              <p className="Banking-Previous-Transactions-container-header-right-button-text">
                Weekly
              </p>
            </button>
            <button className="Banking-Previous-Transactions-container-header-right-button-first">
              <p className="Banking-Previous-Transactions-container-header-right-button-text">
                Monthly
              </p>
            </button>
            <button className="Banking-Previous-Transactions-container-header-right-button-first">
              <p className="Banking-Previous-Transactions-container-header-right-button-text">
                Yearly
              </p>
            </button>
          </div>
        </div>
        <div className="transaction-table">
          <table className="transaction-table">
            <thead>
              <tr>
                <th className="white-th">Transaction Name</th>
                <th className="white-th">Date & Time</th>
                <th className="white-th">CATEGORY</th>
                <th className="white-th">Amount</th>
                <th className="white-th">Status</th>
                <th className="white-th">Action</th>
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
                          <option value="PENDING">PENDING</option>
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

      <section className="Banking-footer">
        <div className="banking-footer-leftside-container">
          <div className="banking-footer-leftside-container-header">
            <p>Spending Categories</p>
            <img src={Treedotmenu} />
          </div>
          <div className="banking-footer-leftside-container-main-flex">
            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Pig} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">Installment</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Blueprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    $720.26 used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from $1,000
                  </p>
                </div>
              </div>
            </div>
            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Basketmeal} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">Food and Beverages</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Greenprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    $304.57 used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from $1,300
                  </p>
                </div>
              </div>
            </div>

            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Car} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">Transportation</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Yellowprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    $230.89 used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from $750
                  </p>
                </div>
              </div>
            </div>

            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Balon} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">Travel and Holiday</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Lightblueprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    $956.27 used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from $1,350
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banking-footer-leftside-container">
          <div className="banking-footer-leftside-container-header">
            <p>Spending Categories</p>
            <img src={Treedotmenu} />
          </div>
          <div className="graph-container-price">
            <img src={Graphnumbers} />
          </div>
          <div className="dots-container">
            <div className="dots-container-left">
              <div className="dots-container-left-color">
                <div className="blue-squere"></div>
                <p>Food</p>
              </div>
              <div className="dots-container-left-color">
                <div className="green-squere"></div>
                <p>Transportation </p>
              </div>
              <div className="dots-container-left-color">
                <div className="red-squere"></div>
                <p>Investment</p>
              </div>
            </div>
            <div className="dots-container-right">
              <div className="dots-container-left-color">
                <div className="light-blue-squere"></div>
                <p>Rent</p>
              </div>{" "}
              <div className="dots-container-left-color">
                <div className="yellow-squere"></div>
                <p>Installment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="history-container">
          <div className="history-container-header">
            <p>Transaction History</p>
            <img src={Treedotmenu} />
          </div>
          <div className="history-container-main-container">
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>Pay Bills</p>
                <p className="history-container-main-text-gray">
                  2 Nov 2023, 13:45 PM
                </p>
              </div>
              <div>
                <p className="price-history">-100.99$</p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Greendown} />
              <div className="history-container-main-text">
                <p>Payment Received</p>
                <p className="history-container-main-text-gray">
                  30 Oct 2023, 13:45 PM
                </p>
              </div>
              <div>
                <p className="price-history-green">+547.90$</p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Greendown} />
              <div className="history-container-main-text">
                <p>Project Payment </p>
                <p className="history-container-main-text-gray">
                  28 Oct 2023, 13:45 PM
                </p>
              </div>
              <div>
                <p className="price-history-green">+1,325.68$</p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>Restaurant ABC</p>
                <p className="history-container-main-text-gray">
                  28 Oct 2023, 13:45 PM
                </p>
              </div>
              <div>
                <p className="price-history">-79.22$</p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>Gadget Payment</p>
                <p className="history-container-main-text-gray">
                  28 Oct 2023, 13:45 PM
                </p>
              </div>
              <div>
                <p className="price-history">-998.90$ </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
