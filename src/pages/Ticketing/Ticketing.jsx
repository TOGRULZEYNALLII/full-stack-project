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
import Footergraph from "./assets/footer/footergraph.svg";
import Salescomprasion from "./assets/footer/salescomprasion.svg";
import Salessummary from "./assets/footer/salessummary.svg";
import Ticketingfooterleftimg from "./assets/footer/ticketingfooterleftimg.svg";

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

    // Eğer sonuç boşsa veya hata varsa kontrol et
    if (filtered.length === 0) {
      // Boş durumu ele al (örneğin kullanıcıya mesaj göster)
      console.log("Sonuç bulunamadı.");
      setFilteredTransactions([]); // Boş sonuç set et veya hata mesajı göster
    } else {
      setFilteredTransactions(filtered); // Normal durumda filtrelenmiş verileri ayarla
    }
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
            <div className="select-input-container">
              <input
                className="input-name"
                type="text"
                name="name"
                placeholder="Enter name"
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
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Refunded">Refunded</option>
              </select>
              <button className="apply-filters-button" onClick={applyFilters}>
                Apply Filters
              </button>
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
                    <span className={`status-badge `}></span>
                  </td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ticketing-footer-section">
        <div className="ticketing-footer-container-left">
          <div className="ticketing-footer-container-left-header">
            <p>Ticket Availability</p>
            <img src={Dot} />
          </div>
          <div className="ticketing-footer-container-left-middle  ">
            <div className="ticketing-footer-container-left-middle-text">
              <p className="gray">Ticket Sold</p>
              <p className="bold-little ">21,512 pcs</p>
            </div>
            <div>
              <img src={Ticketingfooterleftimg} />
            </div>
          </div>
          <div className="ticketing-footer-container-left-bottom">
            <div>
              <p className="bold-little">25 left</p>
              <p className="gray">Available Tickets</p>
            </div>
            <div>
              <img src={Footergraph} />
            </div>
          </div>
        </div>

        <div className="ticketing-footer-container-left">
          <div className="ticketing-footer-container-left-header">
            <p>Sales Summary</p>
            <img src={Dot} />
          </div>
          <div className="ticketing-footer-container-left-middle  ">
            <div className="ticketing-footer-container-left-middle-text">
              <p className="gray">Ticket Sold</p>
              <p className="bold-little ">21,512 pcs</p>
            </div>
            <div>
              <img src={Salessummary} />
            </div>
          </div>
          <div className="ticketing-footer-container-middle-bottom">
            <div className="ticketing-footer-container-middle-text">
              <div className="blue-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">VIP</p>
                <p className="blue-dot-text-gray">30%</p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="black-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">Exclusive</p>
                <p className="blue-dot-text-gray">24%</p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="blue-dot-gray-cold"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">Regular</p>
                <p className="blue-dot-text-gray">33%</p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="white-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">Economy</p>
                <p className="blue-dot-text-gray">36%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ticketing-footer-container-right">
          <div className="header">
            <p>Sales Comparison</p>
            <img src={Dot} />
          </div>
          <div className="ticketing-footer-container-right-middle">
            <p className="bold">21,512 pcs</p>
            <div>
              <img src="" alt="" />
              <p className="gray">from last week</p>
            </div>
          </div>
          <div>
            <img src={Salescomprasion} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticketing;
