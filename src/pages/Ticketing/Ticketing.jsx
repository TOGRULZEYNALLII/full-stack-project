import React from "react";
import "./style.css";
import { useState } from "react";
import Arrowright from "./assets/header/ArrowRight.svg";
import Growthgraph from "./assets/header/GrowthGraph.svg";
import Salesgraphhorizontal from "./assets/header/SalesGraphHorizontal.svg";
import Ticketsaleheadergraph from "./assets/header/TicketSaleHeaderGraph.svg";
import Ticketsellinggraph from "./assets/header/TicketSellingGraph.svg";
import Vectorgreenup from "./assets/header/VectorGreenUp.svg";
import Ziqzaqgraph from "./assets/header/ZiqzaqGraph.svg";
import Dailysalesgraph from "./assets/customerstats/dailysalesgraph.svg";
import Graph35 from "./assets/customerstats/graph35.svg";
import Graph55 from "./assets/customerstats/graph55.svg";
import Graph78 from "./assets/customerstats/graph78.svg";
import Graph65 from "./assets/customerstats/graph65.svg";
import Dot from "../Sidebar/assets/icons/dot.svg";

const Ticketing = () => {
  const transactionsData = [
    {
      id: "#2948592",
      name: "Adeline Palmerston",
      date: "30/05/2023",
      amount: "$430.83",
      status: "Paid",
    },
    {
      id: "#283749483",
      name: "Jordan Nico",
      date: "29/05/2023",
      amount: "$120.55",
      status: "Pending",
    },
    {
      id: "#783737492",
      name: "Daniel Gallego",
      date: "29/05/2023",
      amount: "$1,283.87",
      status: "Refunded",
    },
    {
      id: "#293273646",
      name: "Juliana Silva",
      date: "28/05/2023",
      amount: "$2,386.83",
      status: "Paid",
    },
    {
      id: "#161837368",
      name: "Murad Naser",
      date: "28/05/2023",
      amount: "$75.84",
      status: "Paid",
    },
  ];

  const [filteredTransactions, setFilteredTransactions] =
    useState(transactionsData);
  const [filters, setFilters] = useState({ name: "", date: "", status: "" });
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const applyFilters = () => {
    const filtered = transactionsData.filter((transaction) => {
      return (
        (filters.name === "" ||
          transaction.name
            .toLowerCase()
            .includes(filters.name.toLowerCase())) &&
        (filters.date === "" || transaction.date === filters.date) &&
        (filters.status === "" || transaction.status === filters.status)
      );
    });
    setFilteredTransactions(filtered);
  };
  return (
    <>
      <section className="Ticketing-header-section">
        <div>
          <div className="ticketing-sales-container">
            <div className="ticketing-sales-container-header">
              <p>Ticket Sales Analytics</p>
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
              <img src={Ticketsaleheadergraph} />
            </div>
          </div>
          <div className="ticket-sales-footer">
            <div className="ticket-sales-footer-container">
              <img src={Salesgraphhorizontal} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Sales
                </p>
                <p className="bold">$126,000</p>
              </div>
            </div>

            <div className="ticket-sales-footer-container">
              <img src={Ziqzaqgraph} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Customer
                </p>
                <p className="bold">138,290</p>
              </div>
            </div>

            <div className="ticket-sales-footer-container">
              <img src={Growthgraph} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Growth
                </p>
                <div className="flex">
                  <p className="bold">25%</p>
                  <img src={Vectorgreenup} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ticket-selling">
          <div className="ticket-selling-header">
            <p>Ticket Selling</p>
            <img src={Dot} />
          </div>
          <div className="ticket-selling-middle">
            <select className="select-ticket-sales">
              <option>This week</option>
              <option>This year</option>
              <option>This month</option>
              <option>This day</option>
            </select>
            <img src={Ticketsellinggraph} />
          </div>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="blue-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">21,512</p>
                <p className="ticket-selling-footer-text-item"> Ticket Sold</p>
              </div>
            </div>
            <div>
              <img src={Arrowright} />
            </div>
          </div>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="green-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">9,384</p>
                <p className="ticket-selling-footer-text-item">
                  Ticket Available
                </p>
              </div>
            </div>
            <div>
              <img src={Arrowright} />
            </div>
          </div>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="orange-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">10,293</p>
                <p className="ticket-selling-footer-text-item">
                  Pending payment
                </p>
              </div>
            </div>
            <div>
              <img src={Arrowright} />
            </div>
          </div>
        </div>
      </section>

      <section className="transaction-section">
        <div className="transaction-section-conatiner">
          <div className="customer-statistics-container">
            <div className="customer-statistics-container-header">
              <p>Customer Statistics</p>
              <img src={Dot} />
            </div>
            <div className="customer-statistics-container-middle">
              <div className="customer-statistics-container-middle-items">
                <img src={Graph65} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    Adult
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    30-45 Years Old
                  </p>
                </div>
              </div>{" "}
              <div className="customer-statistics-container-middle-items">
                <img src={Graph35} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    Young
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    17-29 Years Old
                  </p>
                </div>
              </div>
              <div className="customer-statistics-container-middle-items">
                <img src={Graph55} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    Teenager
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    11-16 Years Old
                  </p>
                </div>
              </div>{" "}
              <div className="customer-statistics-container-middle-items">
                <img src={Graph78} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    Kid
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    6-10 Years Old
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="daily-sales-growth">
            <div className="daily-sales-growth-header">
              <p className="daily-sales-growth-header-p-bold">
                Daily Sales Growth
              </p>
              <img src={Dot} />
            </div>
            <div className="daily-sales-growth-middle">
              <div>
                <p className="daily-sales-growth-middle-p">1,389</p>
                <p className="daily-sales-growth-middle-p-gray"> Sales</p>
              </div>
              <div>
                <img src={Dailysalesgraph} />
              </div>
            </div>
          </div>
        </div>
        <div className="transaction-container">
          <div className="transaction-container-header">
            <p>Latest Transactions</p>
            <img src={Dot} />
          </div>
          <div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={filters.name}
                onChange={handleFilterChange}
              />
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
              />
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}>
                <option value="">Select Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Refunded">Refunded</option>
              </select>
              <button onClick={applyFilters}>Apply Filters</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Purchased Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.name}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.status}</td>
                    </tr>
                  ))
                ) : (
                  <td>
                    <span
                      className={`status-badge ${transaction.status.toLowerCase()}`}>
                      {transaction.status}
                    </span>
                  </td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticketing;
