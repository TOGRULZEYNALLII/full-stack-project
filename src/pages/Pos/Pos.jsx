import React from "react";
import "../Pos/style.css";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import { useState, useEffect } from "react";
import Popularsearch from "./assets/header/popularsearch.svg";
import Popularsearcharrows from "./assets/header/popularsearcharrows.svg";
import Salesbycategory from "./assets/header/salesbycategory.svg";
import Salesoverviewgraph from "./assets/header/salesoverviewgraph.svg";
import Amazon from "./assets/totalorders/amazon.svg";
import Instagram from "./assets/totalorders/instagram.svg";
import Facebook from "./assets/totalorders/facebook.svg";
import Tiktopk from "./assets/totalorders/tiktopk.svg";
import ArrowSquareDownRight from "./assets/totalorders/arrowsquaredownright.png";
import ArrowSquareDownLeft from "./assets/totalorders/arrowsquaredownright.png";
import Greenupmonthly from "./assets/totalorders/greenupmonthly.svg";
import Growthgreen from "./assets/totalorders/growthgreen.svg";
import Greensquareup from "./assets/totalorders/greensquareup.svg";
import Plus from "./assets/totalorders/plus.svg";
import Totalordersbasket from "./assets/totalorders/totalordersbasket.svg";
import Totalordersbiggraph from "./assets/totalorders/totalordersbiggraph.svg";
import Totalordersdollar from "./assets/totalorders/totalordersdollar.svg";
import Vectordownred from "./assets/totalorders/vectordownred.svg";
import Vectorup from "./assets/totalorders/vectorup.svg";
import Background from "./assets/header/background.svg";
import Vectorupgreen from "./assets/totalorders/vectorupgreen.svg";
import Mastercard from "../Banking/assets/cards/mastercard.svg";
import WaweElements from "../Banking/assets/cards/waveElements.svg";
import Progressblue from "./assets/vistors/progressblue.svg";
import Progressoramge from "./assets/vistors/progressorange.svg";
import Vistorsgraph from "./assets/vistors/vistorsgraph.svg";
import Vistors from "./assets/vistors/vistors.svg";
import Cargobox from "./assets/vistors/cargobox.svg";
import Truckbox from "./assets/vistors/truckbox.svg";
import Planebox from "./assets/vistors/planebox.svg";
import Lines from "./assets/header/Lines.svg";
import Labels from "./assets/header/y-labels.svg";
const Vistorsfunction = () => {
  const [selectedTimestamp, setSelectedTimestamp] = useState("Weekly");
  const [visitorsData, setVisitorsData] = useState(null);

  // Seçili zaman dilimi değiştikçe API'den verileri çekiyoruz.
  useEffect(() => {
    fetch(
      `http://localhost:8088/api/PointOfSalesPage/Visitors?timestamp=${selectedTimestamp}&marketId=1`
    )
      .then((res) => res.json())
      .then((data) => setVisitorsData(data))
      .catch((err) => console.error("Error fetching visitors data:", err));
  }, [selectedTimestamp]);

  // totalVisitors dizisindeki değerlerin toplamını hesaplıyoruz.
  const totalVisitors =
    visitorsData && visitorsData.totalVisitors
      ? visitorsData.totalVisitors.reduce(
          (sum, item) => sum + item.totalVisitors,
          0
        )
      : 0;

  return (
    <div className="vistors-container">
      <div className="vistors-header">
        <p>Visitors</p>
        <div className="flex">
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Weekly")}>
            Weekly
          </button>
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Monthly")}>
            Monthly
          </button>
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Yearly")}>
            Yearly
          </button>
        </div>
      </div>
      <div className="vistors-container-middle">
        <div>
          <div className="flex">
            <div className="flex-special">
              <p className="gray">New Visitors</p>
              <p className="green">
                {visitorsData
                  ? visitorsData.newAndReturningVisitors.newVisitorsPercentage >
                    0
                    ? `+${visitorsData.newAndReturningVisitors.newVisitorsPercentage}%`
                    : `${visitorsData.newAndReturningVisitors.newVisitorsPercentage}%`
                  : ""}
              </p>
            </div>
            <div>
              <p className="gray-little-special">
                {visitorsData
                  ? visitorsData.newAndReturningVisitors.newVisitors
                  : "..."}
              </p>
            </div>
          </div>
          <div>
            <img src={Progressblue} alt="Progress Blue" />
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex-special">
              <p className="gray">Returning</p>
              <p className="red">
                {visitorsData
                  ? visitorsData.newAndReturningVisitors
                      .returningVisitorsPercentage > 0
                    ? `+${visitorsData.newAndReturningVisitors.returningVisitorsPercentage}%`
                    : `${visitorsData.newAndReturningVisitors.returningVisitorsPercentage}%`
                  : ""}
              </p>
            </div>
            <div>
              <p className="gray-little-special">
                {visitorsData
                  ? visitorsData.newAndReturningVisitors.returningVisitors
                  : "..."}
              </p>
            </div>
          </div>
          <div>
            <img src={Progressoramge} alt="Progress Orange" />
          </div>
        </div>
      </div>
      <div>
        <img src={Vistorsgraph} alt="Visitors Graph" />
        <div className="vistors-absolute-container">
          <img src={Vistors} alt="Visitors Icon" />
          <div>
            <p className="bold-little-special">{totalVisitors}</p>
            <p className="gray">visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSales = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ month: "January", year: "2024" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Ay ve yıl değiştikçe API'den verileri çekiyoruz.
  useEffect(() => {
    if (filters.month && filters.year) {
      fetch(
        `http://localhost:8088/api/PointOfSalesPage/ProductSales?month=${filters.month}&year=${filters.year}&marketId=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) =>
          console.error("Error fetching product sales:", error)
        );
    }
  }, [filters.month, filters.year]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Her filtre değişiminde sayfa numarasını sıfırlıyoruz.
    setCurrentPage(1);
  };

  // Sayfalama işlemi
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = products.slice(startIndex, startIndex + itemsPerPage);

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
    <section className="transaction-section-special-secondary">
      <div className="transaction-container-special">
        <div className="transaction-container-header">
          <div>
            <p className="transaction-p">Product Sales</p>
          </div>
          {/* Ay ve yıl select'leri, dinamik olarak API isteğini tetikler */}
          <div>
            <select
              name="month"
              value={filters.month}
              onChange={handleFilterChange}>
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
            <select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
        </div>

        <div className="select-input-container-pop"></div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>stok</th>
              <th>price</th>
              <th>sales</th>
              <th>earnings</th>
            </tr>
          </thead>
          <tbody className="tbdoy">
            {currentData.length > 0 ? (
              currentData.map((product, index) => (
                <tr key={startIndex + index}>
                  {/* Eğer orderId yoksa, index numarasını kullanıyoruz */}
                  <td>{product.orderId || startIndex + index + 1}</td>
                  <td>{product.productName}</td>
                  <div className="table-td-flex">
                    <button
                      className={
                        product.status === "Available"
                          ? "status-green"
                          : product.status === "On Review"
                          ? "paid-special-secondary"
                          : product.status === "Out of Stock"
                          ? "refunded-special-secondary"
                          : ""
                      }>
                      {product.status}
                    </button>
                  </div>
                  <td className="gray">{product.stock}</td>
                  <td className="bold-little">${product.price}</td>
                  <td className="gray">{product.sales}</td>
                  <td className="bold-little">{product.earnings}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No product sales found</td>
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
const LatestTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  // Burada name filtresi müşteri adına göre, date ise API çağrısı için kullanılacak
  const [filters, setFilters] = useState({ name: "", date: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // filters.date değiştiğinde API çağrısı tetikleniyor
  useEffect(() => {
    if (filters.date) {
      fetch(
        `http://localhost:8088/api/PointOfSalesPage/Transactions?date=${filters.date}T00%3A00%3A00Z&marketId=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
        })
        .catch((error) => console.error("Error fetching transactions:", error));
    }
  }, [filters.date]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Her filtre değiştiğinde sayfa numarasını sıfırla
    setCurrentPage(1);
  };

  // Gelen veride filtreleme; burada müşteri ismine ve statüye göre filtreleme yapıyoruz
  const filteredTransactions = transactions.filter((transaction) => {
    const customerMatch = filters.name
      ? transaction.customer.toLowerCase().includes(filters.name.toLowerCase())
      : true;
    const statusMatch = filters.status
      ? transaction.status.toLowerCase() === filters.status.toLowerCase()
      : true;
    return customerMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
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
    <section className="transaction-section-special">
      <div className="transaction-container-special">
        <div className="transaction-container-header">
          <div>
            <p className="transaction-p">Transactions</p>
            <p className="height">
              Lorem ipsum dolor sit amet consectetur adipi
            </p>
          </div>
          {/* Tarih seçimi API çağrısını tetikler */}
          <input
            className="input-date"
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
          {/* İstersen diğer filtreler için ek inputlar da ekleyebilirsin */}
        </div>

        <div className="select-input-container-pop"></div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody className="tbdoy">
            {currentData.length > 0 ? (
              currentData.map((transaction, index) => (
                <tr key={startIndex + index}>
                  <td>{transaction.orderId || startIndex + index}</td>
                  <td>{transaction.productName}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.total}</td>
                  <td>
                    <div className="table-td-flex">
                      <button
                        className={
                          transaction.status === "To be Packed"
                            ? "pendingred-special"
                            : transaction.status === "To be Delivered"
                            ? "paid-special"
                            : transaction.status === "To be Shipped"
                            ? "refunded-special"
                            : ""
                        }>
                        {transaction.status}
                      </button>
                    </div>
                  </td>
                  <td>{transaction.customer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No transactions found</td>
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
const Pos = () => {
  return (
    <>
      <section className="header-section-pos">
        <div className="header-section-left">
          <div className="header-section-pos-left">
            <div className="header-section-pos-left-sales-overwiev">
              <div className="header-section-pos-left-sales-overwiev-header">
                <p>Sales Overview by Formula</p>
                <img src={Treedot} />
              </div>
              <div className="sales-animation-graph">
                {/* <img src={Salesoverviewgraph} /> */}
                <img src={Labels} />
                <div className="sales-animation-graph-container">
                  <img className="lines" src={Lines} />
                  <div className="third-columns-container">
                    <img className="lines" src={Lines} />

                    <div className="columns-container">
                      <div className="blue-column"></div>
                      <div className="light-blue-column"></div>
                      <div className="orange-column"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-secondary"></div>
                      <div className="light-blue-column-secondary"></div>
                      <div className="orange-column-secondary"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-third"></div>
                      <div className="light-blue-column-third"></div>
                      <div className="orange-column-third"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-fourth"></div>
                      <div className="light-blue-column-fourth"></div>
                      <div className="orange-column-fourth"></div>
                    </div>
                    <div className="columns-container">
                      <div className="blue-column-fives"></div>
                      <div className="light-blue-column-fives"></div>
                      <div className="orange-column-fives"></div>
                    </div>
                  </div>
                  <div className="rows-container">
                    <p>Jan</p>
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                    <p>Jun</p>
                  </div>
                </div>
              </div>
              <div className="flex-space-between">
                <div className="flex">
                  <div className="circle-blue"></div>
                  <p>Sales</p>
                </div>
                <div className="flex">
                  <div className="circle-light-blue"></div>
                  <p>Gross Margin</p>
                </div>
                <div className="flex">
                  <div className="circle-orange"></div>
                  <p>Net Profit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sales-by-category">
            <div className="sales-by-catagory-header">
              <p>Sales by Category</p>
              <select className="input-select">
                <option value="Week">Last Week</option>
              </select>
            </div>
            <div className="border-vertical"></div>
            <div className="sales-by-catagory-body">
              <div className="sales-by-catagory-text">
                <div className="sales-by-catagory-text-container">
                  <div className="div-blue"></div>
                  <div>
                    <p>Clothing (45%)</p>
                    <p className="gray-text">1,230 Category Products</p>
                  </div>
                </div>
                <div className="sales-by-catagory-text-container">
                  <div className="div-light-blue"></div>
                  <div>
                    <p>Clothing (45%)</p>
                    <p className="gray-text">1,230 Category Products</p>
                  </div>
                </div>
                <div className="sales-by-catagory-text-container">
                  <div className="div-orange"></div>
                  <div>
                    <p>Clothing (45%)</p>
                    <p className="gray-text">1,230 Category Products</p>
                  </div>
                </div>
              </div>
              <div className="border-horizontal"></div>
              <div className="sales-by-catagory-container">
                <img className="background" src={Background} />
                <div className="background-text">
                  <p className="height-text">ss</p>
                  <p className="height-text">aaaa</p>
                </div>
                <img className="salesbycatagoryimg" src={Salesbycategory} />
              </div>
            </div>
          </div>
        </div>
        <div className="header-section-right">
          <div className="card-total-orders">
            <img className="wave-elemnts" src={WaweElements} />
            <div className="card-main-walet">
              <p className="card-main-wallet-item">Second Wallet</p>
              <p className="card-price-item">123</p>
            </div>
            <div className="card-id">
              <p className="id">1231 1231</p>
              <img src={Mastercard} />
            </div>
          </div>
          <div>
            <div className="popular-serch-header">
              <p>Popular Search</p>
              <img src={Treedot} />
            </div>
            <div className="popular-serch-img">
              <img src={Popularsearch} />
              <img className="popularsearcharrows" src={Popularsearcharrows} />
              <p className="popularsearcharrows-texts-blue">23%</p>
              <p className="popularsearcharrows-texts-orange">23</p>
              <p className="popularsearcharrows-texts-red">23</p>
              <p className="popularsearcharrows-texts-green">23</p>
              <p className="popularsearcharrows-texts-light-blue">23</p>
            </div>
            <div className="dots-container-left">
              <div>
                <div className="dots-container-left-color">
                  <div className="blue-squere"></div>
                  <p></p>
                </div>
                <div className="dots-container-left-color">
                  <div className="green-squere"></div>
                  <p></p>
                </div>
                <div className="dots-container-left-color">
                  <div className="red-squere"></div>
                  <p></p>
                </div>
              </div>
              <div>
                <div className="dots-container-left-color">
                  <div className="orange-squere"></div>
                  <p></p>
                </div>
                <div>
                  <div className="dots-container-left-color">
                    <div className="light-squere"></div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-header-tags-container">
              <div className="footer-header-tags-container">
                <p>Top 3 Popular Tags</p>
                <img src={Treedot} />
              </div>
            </div>
            <div className="flex">
              <button className="gray-button-tags">#</button>{" "}
              <button className="gray-button-tags">#</button>{" "}
              <button className="gray-button-tags">#</button>
            </div>
          </div>
        </div>
      </section>

      <LatestTransactions />

      <section className="Total-orders-section">
        <div className="total-orders-left-container">
          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Totalordersbasket} />
              <p>Total Orders</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">22222</p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-blue">
                <img src={Vectorup} />
                44%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>

          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Totalordersdollar} />
              <p>Total Orders</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">22222</p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-red">
                <img src={Vectordownred} />
                44%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>

          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Growthgreen} />
              <p>Monthly Growth</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">22222</p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-green">
                <img src={Vectorupgreen} />
                44%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>
        </div>
        <div className="total-oreders-right-container">
          <div className="total-oreders-right-container-header">
            <p>Total Orders by Platform</p>
            <button className="total-oreders-right-container-header-button">
              Add Platforms <img src={Plus} />
            </button>
          </div>
          <div className="total-oreders-right-container-middle">
            <div className="total-oreders-right-container-middle-content">
              <img src={Instagram} />
              <div>
                <div>
                  <p className="height">Instagram</p>
                </div>
                <div className="flex">
                  <p className="bold-middle"> 240,96K</p>
                  <img src={Greensquareup} />
                  <p className="green">+15</p>
                </div>
              </div>
            </div>
            <div className="total-oreders-right-container-middle-content">
              <img src={Tiktopk} />
              <div>
                <div>
                  <p className="height">Instagram</p>
                </div>
                <div className="flex">
                  <p className="bold-middle"> 240,96K</p>
                  <img src={ArrowSquareDownLeft} />
                  <p className="red">+15</p>
                </div>
              </div>
            </div>
            <div className="total-oreders-right-container-middle-content">
              <img src={Facebook} />
              <div>
                <div>
                  <p className="height">Instagram</p>
                </div>
                <div className="flex">
                  <p className="bold-middle"> 240,96K</p>
                  <img src={Greensquareup} />
                  <p className="green">+15</p>
                </div>
              </div>
            </div>
            <div className="total-oreders-right-container-middle-content">
              <img src={Amazon} />
              <div>
                <div>
                  <p className="height">Instagram</p>
                </div>
                <div className="flex">
                  <p className="bold-middle"> 240,96K</p>
                  <img src={Greensquareup} />
                  <p className="green">+15</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Totalordersbiggraph} />
            <div className="big-graph-content">
              <div>
                <p className="bold-little-special">
                  Platform view distribution
                </p>
                <p className="gray-little">April, 30 2026</p>
              </div>
              <div className="big-graph-content-text-container">
                <div className="big-graph-content-text">
                  <div className="flex">
                    <div className="div-light-blue"></div>
                    <div>
                      <p className="gray">Instagram</p>
                      <p>45%</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="div-red"></div>
                    <div>
                      <p className="gray">Tiktok</p>
                      <p>45%</p>
                    </div>
                  </div>
                </div>
                <div className="big-graph-content-text">
                  <div className="flex">
                    <div className="div-orange"></div>
                    <div>
                      <p className="gray">Facebook</p>
                      <p>45%</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="div-green"></div>
                    <div>
                      <p className="gray">Amozon</p>
                      <p>45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-sales-section-main">
        <section className="product-sales-section">
          <ProductSales />
          <div className="product-sales-section-middle">
            <Vistorsfunction />
            <div className="sales-activity">
              <div className="sales-acitivity-header">
                <p>Sales Activity</p>
                <select name="" id="">
                  <option value="January">January</option>
                </select>
              </div>
              <div className="flex-special">
                <img src={Cargobox} />
                <div>
                  <p className="height">tobebacac</p>
                  <div className="flex">
                    <p className="bold-little">10,023</p>
                    <img src={Greensquareup} />
                    <p className="green">+23%</p>
                  </div>
                </div>
              </div>
              <div className="flex-special">
                <img src={Planebox} />
                <div>
                  <p className="height">tobebacac</p>
                  <div className="flex">
                    <p className="bold-little">10,023</p>
                    <img src={ArrowSquareDownLeft} />
                    <p className="red">+23%</p>
                  </div>
                </div>
              </div>
              <div className="flex-special">
                <img src={Truckbox} />
                <div>
                  <p className="height">tobebacac</p>
                  <div className="flex">
                    <p className="bold-little">10,023</p>
                    <img src={Greensquareup} />
                    <p className="green">+23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="recent-activity">
          <div className="recent-activity-header">
            <p>Recent Activity</p>
            <img src={Treedot} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pos;
