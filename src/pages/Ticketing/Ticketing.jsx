import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
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
const Ticketselling = () => {
  const [data, setData] = useState(null);
  const [timestamp, setTimestamp] = useState("Week");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        // "This " + timestamp örneğin "This Week" olacak ve encodeURIComponent ile kodlanır.
        const url = `http://localhost:8088/api/TicketingPage/TicketSelling?timestamp=${encodeURIComponent(
          "This " + timestamp
        )}&companyId=1`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("API call failed");
        }
        const result = await response.json();
        setData(result); // setOrders yerine setData kullanıyoruz.
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [timestamp]);

  const handleSelect = (e) => {
    setTimestamp(e.target.value);
  };

  return (
    <div className="ticket-selling">
      <div className="ticket-selling-header">
        <p>Ticket Selling</p>
        <img src={Dot} alt="dot" />
      </div>
      <div className="ticket-selling-middle">
        <select
          className="select-ticket-sales"
          value={timestamp}
          onChange={handleSelect}>
          <option value="Week">This week</option>
          <option value="Year">This year</option>
          <option value="Month">This month</option>
          <option value="Day">This day</option>
        </select>
        <img src={Ticketsellinggraph} alt="Ticketsellinggraph" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Hata: {error}</p>}
      {data && (
        <>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="blue-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">
                  {data?.ticketSold}
                </p>
                <p className="ticket-selling-footer-text-item"> Ticket Sold</p>
              </div>
            </div>
            <div>
              <img src={Arrowright} alt="arrow" />
            </div>
          </div>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="green-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">
                  {data?.availableTickets}
                </p>
                <p className="ticket-selling-footer-text-item">
                  Ticket Available
                </p>
              </div>
            </div>
            <div>
              <img src={Arrowright} alt="arrow" />
            </div>
          </div>
          <div className="ticket-selling-footer">
            <div className="ticket-selling-footer-text">
              <div className="orange-oval"></div>
              <div className="flex">
                <p className="ticket-selling-footer-text-price">
                  {data?.pendingPayment}
                </p>
                <p className="ticket-selling-footer-text-item">
                  Pending payment
                </p>
              </div>
            </div>
            <div>
              <img src={Arrowright} alt="arrow" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Ticektsalesgraph = () => {
  const [timestamp, setTimestamp] = useState("today");
  const [data, setData] = useState(null);

  const fetchData = async (timestamp) => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/TicketingPage/TicketSalesAnalytics?timestamp=${timestamp}&companyId=1`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(timestamp);
  }, [timestamp]);
  return (
    <>
      <div className="ticketing-sales-container">
        <div className="ticketing-sales-container-header">
          <p>Ticket Sales Analytics</p>
          <div>
            <button
              className="Previous-Transactions-container-header-right-button-first"
              onClick={() => setTimestamp("today")}>
              Today
            </button>
            <button
              className="Previous-Transactions-container-header-right-button"
              onClick={() => setTimestamp("weekly")}>
              Weekly
            </button>
            <button
              className="Previous-Transactions-container-header-right-button"
              onClick={() => setTimestamp("monthly")}>
              Monthly
            </button>
            <button
              className="Previous-Transactions-container-header-right-button-last"
              onClick={() => setTimestamp("yearly")}>
              Yearly
            </button>
          </div>
        </div>
        <div>
          <img className="ticketsales-graph" src={Ticketsaleheadergraph} />
          <div className="ticketsales-graph-container">
            <p className="ticketsales-graph-container-p-bold">
              ${data?.[0].amount}
            </p>
            <p className="ticketsales-graph-container-p-gray">
              {data?.[0].dateOrTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const LatestTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({ name: "", date: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(
      "http://localhost:8088/api/TicketingPage/LatestTransactions?companyId=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Filtre değiştiğinde sayfa numarasını 1'e sıfırla
    setCurrentPage(1);
  };

  // Filtreleme işlemi: İsim, tarih ve statü
  const filteredTransactions = transactions.filter((transaction) => {
    const nameMatch = filters.name
      ? transaction.customerName
          .toLowerCase()
          .includes(filters.name.toLowerCase())
      : true;
    const dateMatch = filters.date
      ? transaction.purchaseDate === filters.date
      : true;
    const statusMatch = filters.status
      ? transaction.status.toLowerCase() === filters.status.toLowerCase()
      : true;
    return nameMatch && dateMatch && statusMatch;
  });

  // Toplam sayfa sayısını hesaplayalım
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  // Geçerli sayfa için gösterilecek veriyi dilimle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredTransactions.slice(
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
    <section className="transaction-section">
      <div className="transaction-container">
        <div className="transaction-container-header">
          <p>Latest Transactions</p>
          <img src={Dot} alt="dot icon" />
        </div>

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
        </div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Purchased Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbdoy">
            {currentData.length > 0 ? (
              currentData.map((transaction, index) => (
                <tr key={startIndex + index}>
                  <td>{transaction.id || startIndex + index}</td>
                  <td>{transaction.customerName}</td>
                  <td>{transaction.purchaseDate}</td>
                  <td>{transaction.amount}</td>
                  <div className="table-td-flex">
                    <button
                      className={
                        transaction.status === "Pending"
                          ? "pendingred"
                          : transaction.status === "Paid"
                          ? "paid"
                          : transaction.status === "Refunded"
                          ? "refunded"
                          : ""
                      }>
                      {" "}
                      {transaction.status}
                    </button>
                  </div>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <div className="table-footer-buttons">
            <button
              className="previous"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}>
              Previous
            </button>
            <button
              className="next"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Ticketing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiLinks = [
    "http://localhost:8088/api/TicketingPage/QuickReview?companyId=1",
    "http://localhost:8088/api/TicketingPage/CustomerStatistics?companyId=1",
    "http://localhost:8088/api/TicketingPage/DailySalesGrowth?companyId=1",
    "http://localhost:8088/api/TicketingPage/TicketAvailability?companyId=1",
    "http://localhost:8088/api/TicketingPage/SalesSummary?companyId=1",
    "http://localhost:8088/api/TicketingPage/SalesComparison?companyId=1",
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
        const combinedData = responses.flat();
        setData(combinedData);
        // İlk 10 öğe farklı veriler ise, faturalar 11. öğeden (index 10) başlıyor:
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // selectedValue değiştiğinde API çağrısını tekrar yap

  return (
    <>
      <section className="Ticketing-header-section">
        <div>
          <Ticektsalesgraph />
          <div className="ticket-sales-footer">
            <div className="ticket-sales-footer-container">
              <img src={Salesgraphhorizontal} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Sales
                </p>
                <p className="bold">${data?.[0]?.sales}</p>
              </div>
            </div>

            <div className="ticket-sales-footer-container">
              <img src={Ziqzaqgraph} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Customer
                </p>
                <p className="bold">{data?.[0]?.customer}</p>
              </div>
            </div>

            <div className="ticket-sales-footer-container">
              <img src={Growthgraph} />
              <div className="ticket-sales-footer-container-text">
                <p className="gray" style={{ height: "1px" }}>
                  Growth
                </p>
                <div className="flex">
                  <p className="bold">{data?.[0]?.growth}%</p>
                  <img src={Vectorgreenup} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Ticketselling />
      </section>

      <section className="flex-middle">
        <div>
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
                    {data?.[1]?.customerAgeGroup}
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    {data?.[1]?.customerPercentage} Years Old
                  </p>
                </div>
              </div>{" "}
              <div className="customer-statistics-container-middle-items">
                <img src={Graph35} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    {data?.[2]?.customerAgeGroup}
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    {data?.[2]?.customerPercentage} Years Old
                  </p>
                </div>
              </div>
              <div className="customer-statistics-container-middle-items">
                <img src={Graph55} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    {data?.[3]?.customerAgeGroup}
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    {data?.[3]?.customerPercentage} Years Old
                  </p>
                </div>
              </div>{" "}
              <div className="customer-statistics-container-middle-items">
                <img src={Graph78} />
                <div>
                  <p className="customer-statistics-container-middle-items-p">
                    {data?.[4]?.customerAgeGroup}
                  </p>
                  <p className="customer-statistics-container-middle-items-p-gray">
                    {data?.[4]?.customerPercentage} Years Old
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
                <p className="daily-sales-growth-middle-p">{data?.[5]}</p>
                <p className="daily-sales-growth-middle-p-gray"> Sales</p>
              </div>
              <div>
                <img src={Dailysalesgraph} />
              </div>
            </div>
          </div>
        </div>
        <LatestTransactions />
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
              <p className="bold-little ">{data?.[6]?.ticketSold} pcs</p>
            </div>
            <div>
              <img src={Ticketingfooterleftimg} />
            </div>
          </div>
          <div className="ticketing-footer-container-left-bottom">
            <div>
              <p className="bold-little">{data?.[6]?.availableTickets} left</p>
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
              <p className="bold-little ">{data?.[7]?.ticketSold} pcs</p>
            </div>
            <div>
              <img src={Salessummary} />
            </div>
          </div>
          <div className="ticketing-footer-container-middle-bottom">
            <div className="ticketing-footer-container-middle-text">
              <div className="blue-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">
                  {data?.[7]?.categories?.[0].category}
                </p>
                <p className="blue-dot-text-gray">
                  {data?.[7]?.categories?.[0].percentage}%
                </p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="black-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">
                  {" "}
                  {data?.[7]?.categories?.[1].category}
                </p>
                <p className="blue-dot-text-gray">
                  {data?.[7]?.categories?.[1].percentage}%
                </p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="blue-dot-gray-cold"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">
                  {data?.[7]?.categories?.[2].category}
                </p>
                <p className="blue-dot-text-gray">
                  {data?.[7]?.categories?.[2].percentage}%
                </p>
              </div>
            </div>
            <div className="ticketing-footer-container-middle-text">
              <div className="white-dot"></div>
              <div className="blue-dot-text">
                <p className="blue-dot-text-item">
                  {data?.[7]?.categories?.[3].category}
                </p>
                <p className="blue-dot-text-gray">
                  {data?.[7]?.categories?.[3].percentage}%
                </p>
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
            <p className="bold">{data?.[8]?.ticketSold} pcs</p>
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
