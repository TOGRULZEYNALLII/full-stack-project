import React from "react";
import "./style.css";
import Bitocoinicon from "../Cryptocurrency/assets/headertop/BITCOINICON.svg";
import Greenupbutton from "../Cryptocurrency/assets/headertop/greenupbutton.svg";
import Yellowgraph from "../Cryptocurrency/assets/headertop/yellowgraph.svg";
import Ripple from "../Cryptocurrency/assets/headertop/Ripple.svg";
import Greengraph from "../Cryptocurrency/assets/headertop/greengraph.svg";
import Ethereum from "../Cryptocurrency/assets/headertop/Etheriumicon.svg";
import Greenup3 from "../Cryptocurrency/assets/headertop/greenup3.svg";
import Bluegraph from "../Cryptocurrency/assets/headertop/bluegraph.svg";
import Lightbluegraph from "../Cryptocurrency/assets/headertop/lightbluegraph.svg";
import Vector from "../Home/assets/icons/Vector.svg";
import Reddown5 from "../Cryptocurrency/assets/headertop/reddown5.svg";
import Lightcoinicon from "../Cryptocurrency/assets/headertop/lightcoinicon.svg";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import { useState, useEffect } from "react";
import Bitcoinbarhuge from "../Cryptocurrency/assets/portfolio/bitcoinbarhuge.svg";
import Chart from "../Cryptocurrency/assets/portfolio/Chart.svg";
import Balancegraph from "../Cryptocurrency/assets/lastsection/graphmonth.svg";
import Cancelledred from "../Cryptocurrency/assets/lastsection/cancelledred.svg";
import Completedgreen from "../Cryptocurrency/assets/lastsection/complatedgreen.svg";
import Greenx from "../Cryptocurrency/assets/lastsection/greenx.svg";
import Redx from "../Cryptocurrency/assets/lastsection/redx.svg";
import Pendingyellow from "../Cryptocurrency/assets/lastsection/pendingyellow.svg";
import Reddown from "../Home/assets/icons/reddown.svg";
const Sellbuyorder = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Litecoin");
  const [amount, setAmount] = useState(18.56879);
  const [price, setPrice] = useState(192.04994);
  const [fees, setFees] = useState(2.349);

  const calculateTotal = () => {
    const total = amount * price * (1 - fees / 100);
    return total.toFixed(5);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="order-sell-buy-container">
      <div className="currency-select">
        <select
          className="select-currenct-container"
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}>
          <option value="Litecoin">Litecoin</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Ripple">Ripple</option>
        </select>
      </div>

      <div className="order-details">
        <div className="order-field">
          <label className="label-selectde-currency" htmlFor="amount">
            Amount {selectedCurrency}
          </label>
          <input
            className="input-number-select"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="order-field">
          <label className="label-selectde-currency" htmlFor="price">
            Price BPL
          </label>
          <input
            className="input-number-select"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="order-field">
          <label className="label-selectde-currency" htmlFor="fees">
            Fees (%)
          </label>
          <input
            className="input-number-select"
            type="number"
            id="fees"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
          />
        </div>

        <div className="order-field">
          <label className="label-selectde-currency" htmlFor="total">
            Total BPL
          </label>
          <input
            className="input-number-select"
            type="text"
            id="total"
            value={calculateTotal()}
            readOnly
          />
        </div>
      </div>

      <div className="order-buttons">
        <button className="buy-button">Buy</button>
        <button className="sell-button">Sell</button>
      </div>
      <div className="checkxbox">
        <input type="checkbox" />
        <p style={{ fontSize: "14px", fontWeight: "300" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dolor
          exercitationem culpa,
        </p>
      </div>
    </div>
  );
};
const Buyorder = () => {
  const [currency, setCurrency] = useState("Bitcoin");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8088/api/CryptocurrencyPage/BuyOrder?currencyName=${currency}`
        );
        if (!response.ok) {
          throw new Error("API call failed");
        }
        const data = await response.json();
        setOrders(data); // API'den gelen veriler
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currency]); // Currency değiştiğinde API'yi yeniden çağır

  return (
    <div>
      <select
        className="select-currenct-container"
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="Lightcoin">Lightcoin</option>
        <option value="Ripple">Ripple</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <table className="gray-container">
          <thead>
            <tr className="sell-order-tr-main">
              <th className="notth">Price</th>
              <th className="notth">Amount</th>
              <th className="notth">Total</th>
            </tr>
          </thead>
          <tbody className="sell-order-tbody">
            {orders.map((order, index) => (
              <tr className="sell-order-tr" key={index}>
                <td className="sell-order-td">{order.price}</td>
                <td className="sell-order-td">{order.amount}</td>
                <td className="sell-order-td">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const SellOrder = () => {
  const [currency, setCurrency] = useState("Bitcoin");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8088/api/CryptocurrencyPage/SellOrder?currencyName=${currency}`
        );
        if (!response.ok) {
          throw new Error("API call failed");
        }
        const data = await response.json();
        setOrders(data); // API'den gelen veriler
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currency]); // Currency değiştiğinde API'yi yeniden çağır

  return (
    <div>
      <select
        className="select-currenct-container"
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="Lightcoin">Lightcoin</option>
        <option value="Ripple">Ripple</option>
      </select>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <table className="gray-container">
          <thead>
            <tr className="sell-order-tr-main">
              <th className="notth">Price</th>
              <th className="notth">Amount</th>
              <th className="notth">Total</th>
            </tr>
          </thead>
          <tbody className="sell-order-tbody">
            {orders.map((order, index) => (
              <tr className="sell-order-tr" key={index}>
                <td className="sell-order-td">{order.price}</td>
                <td className="sell-order-td">{order.amount}</td>
                <td className="sell-order-td">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Bitcoinoption = () => {
  const [selectedValue, setSelectedValue] = useState("Bitcoin");

  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          <img src={Bitocoinicon} alt="icon of bitcoin" /> {selectedValue}
        </button>
        <div className="dropdown-content">
          <div onClick={() => handleSelect("Bitcoin")}>
            <img src={Bitocoinicon} alt="icon of bitcoin" /> Bitcoin
          </div>
          <div onClick={() => handleSelect("Bitcoin")}>
            <img src={Ripple} alt="icon of bitcoin" /> Ripple
          </div>
          <div onClick={() => handleSelect("Bitcoin")}>
            <img src={Lightcoinicon} alt="icon of bitcoin" /> Lightcoin
          </div>
          <div onClick={() => handleSelect("Bitcoin")}>
            <img
              style={{ cursor: "pointer" }}
              src={Ethereum}
              alt="icon of bitcoin"
            />{" "}
            Etherium
          </div>
        </div>
      </div>
    </>
  );
};

const OverviewBalance = () => {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2023");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8088/api/CryptocurrencyPage/OverviewBalance?month=${month}&year=${year}&userId=1`
      );
      if (!response.ok) {
        throw new Error("API call failed");
      }
      const result = await response.json();
      setData(result); // Gelen veriyi sakla
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="left-side-container">
        <div className="balance-header-container">
          <div>
            <p> Overview Balance</p>
          </div>
          <div className="select-container">
            <select
              onChange={handleMonthChange}
              value={month}
              className="selectfrom">
              <option>--Select Month--</option>
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
              value={year}
              onChange={handleYearChange}
              className="selectfromx datefield year"
              name="dob-year">
              <option value="">Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
            <button className="overwiev-button" onClick={fetchData}>
              Fetch Data
            </button>
          </div>
        </div>

        <div className="balance-middle-container-left">
          <div>
            <p className="balance-middle-container-left-text">
              Last week balance
            </p>
          </div>
          <div className="price-container">
            <p className="balance-middle-container-left-price">
              ${data?.lastWeekBalance || 0}
            </p>
            {data?.percentageDifference && (
              <>
                {/* {data.percentageDifference}% */}
                <button className="card-button">
                  <img src={Vector} alt="vector" />
                  <p>{data.percentageDifference}%</p>
                </button>
              </>
            )}
          </div>
        </div>

        <div>
          <img src={Balancegraph} alt="Balance graph" />
        </div>
      </div>
    </div>
  );
};
const Statisticspanel = () => {
  // State tanımlamaları
  const [selectedValue, setSelectedValue] = useState("Bitcoin");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [invoices, setInvoices] = useState([]);

  // Dropdown'dan seçimi güncelleyen fonksiyon
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  // API URL'sini dinamik olarak oluşturuyoruz
  const apiLinks = [
    `http://localhost:8088/api/CryptocurrencyPage/Statistics?currencyName=${selectedValue}&userId=1`,
  ];

  // Verileri çekme işlemi
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
        // API'den gelen verileri birleştiriyoruz
        const combinedData = responses.flat();
        setData(combinedData);
        // Örnek: İlk 10 öğe farklı veriler ise, faturaları 11. öğeden (index 10) başlatıyoruz
        const invoiceData = combinedData.slice(10);
        setInvoices(invoiceData);
        console.log("Combined Data:", combinedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedValue]); // selectedValue değiştiğinde API çağrısı tekrar çalışsın

  return (
    <div className="Statistics">
      <div className="statistics-container-header">
        <p>Statistics</p>
        <div className="dropdown">
          <button className="dropbtn">
            <img src={Bitocoinicon} alt="icon of bitcoin" /> {selectedValue}
          </button>
          <div className="dropdown-content">
            <div onClick={() => handleSelect("Bitcoin")}>
              <img src={Bitocoinicon} alt="icon of bitcoin" /> Bitcoin
            </div>
            <div onClick={() => handleSelect("Ripple")}>
              <img src={Ripple} alt="icon of ripple" /> Ripple
            </div>
            <div onClick={() => handleSelect("Litecoin")}>
              <img src={Lightcoinicon} alt="icon of litecoin" /> Litecoin
            </div>
            <div onClick={() => handleSelect("Ethereum")}>
              <img src={Ethereum} alt="icon of ethereum" /> Ethereum
            </div>
          </div>
        </div>
      </div>

      <div className="vertical-line-small"></div>
      <div>
        <img src={Chart} alt="chart svg" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="bluecircle"></div>
              <p>Income ({data?.[0]?.incomePercentage}%)</p>
            </div>
            <div>
              <p>${data?.[0]?.income}</p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="lightbluecircle"></div>

              <p>Spends (${data?.[0]?.spendsPercentage})</p>
            </div>
            <div>
              <p> {data?.[0]?.spends}% </p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="greencircle"></div>
              <p>Installment ({data?.[0]?.installmentsPercentage}%)</p>
            </div>
            <div>
              <p>${data?.[0]?.installments}</p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="orangecircle"></div>
              <p>Invest ({data?.[0]?.investsPercentage}%)</p>
            </div>
            <div>
              <p>${data?.[0]?.invests}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const WalletActivity = () => {
  const [data, setData] = useState([]); // Tüm veriyi saklamak için state
  const [displayData, setDisplayData] = useState([]); // Görüntülenen veriyi saklamak için state
  const [activeTab, setActiveTab] = useState("Today"); // Hangi tab aktif

  // API'den veri al
  useEffect(() => {
    fetch(
      "http://localhost:8088/api/CryptocurrencyPage/WalletActivity?timestamp=1&userId=1"
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result); // Tüm veriyi sakla
        setDisplayData(result.slice(0, 6)); // İlk 6 veriyi "Today" için göster
      });
  }, []);

  // Butonlara tıklandığında veriyi filtreleme
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Today") {
      setDisplayData(data.slice(0, 6)); // İlk 6
    } else if (tab === "Weekly") {
      setDisplayData(data.slice(6, 12)); // Sonraki 6
    } else if (tab === "Monthly") {
      setDisplayData(data.slice(12, 18)); // Sonraki 6
    } else if (tab === "Yearly") {
      setDisplayData(data.slice(18, 24)); // Sonraki 6
    }
  };

  return (
    <div className="wallet-activity-container">
      <div className="wallet-activity-container-header">
        <p className="wallet-activity-container-header-text">Wallet Activity</p>
        <img src={Treedot} alt="icon" />
      </div>

      <div className="wallet-activity-container-middle-container">
        <button
          className={`wallet-activity-container-middle-container-bluebutton-none  ${
            activeTab === "Today" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Today")}>
          Today
        </button>
        <button
          className={`wallet-activity-container-middle-container-bluebutton-none ${
            activeTab === "Weekly" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Weekly")}>
          Weekly
        </button>
        <button
          className={`wallet-activity-container-middle-container-bluebutton-none ${
            activeTab === "Monthly" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Monthly")}>
          Monthly
        </button>
        <button
          className={`wallet-activity-container-middle-container-bluebutton-none ${
            activeTab === "Yearly" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Yearly")}>
          Yearly
        </button>
      </div>

      <div className="wallet-activity-container-last">
        {displayData.map((item, index) => (
          <div
            key={index}
            className="wallet-activity-container-last-text-container">
            <div className="wallet-activity-container-last-text-container-itemandicon">
              <img
                src={
                  item.status === "Completed"
                    ? Completedgreen
                    : item.status === "Pending"
                    ? Pendingyellow
                    : Cancelledred
                }
                alt="status icon"
              />
              <p>{item.transactionType}</p>
            </div>
            <div className="wallet-activity-container-last-text-container-prices">
              <p>
                {item.transactionType === "Withdrawal"
                  ? `-$${item.amount.toFixed(2)}`
                  : `+$${item.amount.toFixed(2)}`}
              </p>
              <p style={{ color: "rgba(166, 168, 169, 1)" }}>
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cryptocurrency = () => {
  const [data, setData] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState(); // Başlangıçta Bitcoin

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  // API linkleri (seçilen coin'e göre URL dinamik olacak)
  const apiLinks = ["http://localhost:8088/api/CryptocurrencyPage/QuickReview"];

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
        // İlk 10 öğe farklı veriler ise, faturalar 11. öğeden (index 10) başlıyor:
        const invoiceData = combinedData.slice(10);
        setInvoices(invoiceData);
        console.log("Combined Data:", combinedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedValue]); // selectedValue değiştiğinde API çağrısını tekrar yap

  return (
    <>
      <section className="top-container">
        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img
                className="min"
                src={data?.[0]?.image}
                alt="icon of bitcoin"
              />
              <div>
                <p>{data?.[0]?.id}</p>
                <p>${data?.[0]?.currentPrice} </p>
              </div>
              <div className="graphic">
                <button className="card-button">
                  <img src={Vector} alt="vector" />
                  <p>{data?.[0]?.priceChangePercentage}%</p>
                </button>
              </div>
            </div>
            <div>
              <img src={Yellowgraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img
                className="min"
                src={data?.[1]?.image}
                alt="icon of bitcoin"
              />
              <div>
                <p>{data?.[1]?.id}</p>
                <p>${data?.[1]?.currentPrice}</p>
              </div>
              <button className="card-button-red">
                <img src={Reddown} alt="vector" />
                <p>{data?.[1]?.priceChangePercentage}%</p>
              </button>
            </div>
            <div>
              <img src={Bluegraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img
                className="min"
                src={data?.[2]?.image}
                alt="icon of bitcoin"
              />
              <div>
                <p>{data?.[2]?.id}</p>
                <p>${data?.[2]?.currentPrice} </p>
              </div>
              <div className="graphic">
                <button className="card-button">
                  <img src={Vector} alt="vector" />
                  <p>{data?.[2]?.priceChangePercentage}%</p>
                </button>
              </div>
            </div>
            <div>
              <img src={Lightbluegraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img
                className="min"
                src={data?.[3]?.image}
                alt="icon of bitcoin"
              />
              <div>
                <p>{data?.[3]?.id}</p>
                <p>${data?.[3]?.currentPrice} </p>
              </div>
              <div className="graphic">
                <button className="card-button">
                  <img src={Vector} alt="vector" />
                  <p>{data?.[3]?.priceChangePercentage}%</p>
                </button>
              </div>
            </div>
            <div>
              <img src={Greengraph} alt="yellow graph" />
            </div>
          </div>
        </div>
      </section>

      <section className="Portfolio-container">
        <div className="container-left">
          <div className="portfolio-header-container">
            <div>
              <p>My Portfolio</p>
            </div>
            <div className="select-container">
              <Bitcoinoption />
              <img src={Treedot} alt="menu" />
            </div>
          </div>
          <div className="vertical-line-div"></div>
          <div className="Portfolio-middle-container">
            <div>
              <p>Currency</p>
              <h3>BTC/IDR</h3>
            </div>
            <div className="horizontal-line"></div>
            <div className="Portfolio-middle-container-text-item">
              <div>
                <p>Price</p>
                <h3>USD 34.147,80</h3>
              </div>

              <div>
                <img src={Greenup3} alt="up button foto static now" />
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div>
              <p>Rate</p>
              <h3>-0.0662%/hr</h3>
            </div>
            <div className="horizontal-line"></div>
            <div className="volume">
              <div>
                <p>Volume (24h)</p>
                <h3>IDR 280.55T</h3>
              </div>
              <div>
                <img src={Reddown5} alt="down" />
              </div>
            </div>
          </div>
          <div>
            <img src={Bitcoinbarhuge} alt="bitcoin graphs" />
          </div>
        </div>
        <Statisticspanel />
      </section>

      <section className="order-container">
        <div className="sell-order-container">
          <div className="sell-order-container-header">
            <p>Sell Order</p>
            <img src={Treedot} alt="menu" />
          </div>
          <div></div>
          <div>
            <SellOrder />
          </div>
        </div>
        <div>
          <div className="sell-order-container">
            <div className="sell-order-container-header">
              <p>Buy Order</p>
              <img src={Treedot} alt="menu" />
            </div>
            <div></div>
            <div>
              <Buyorder />
            </div>
          </div>
        </div>

        <div>
          <div className="sell-order-container">
            <div className="sell-order-container-header">
              <p>Quick Trade</p>
              <img src={Treedot} alt="menu" />
            </div>
            <div></div>
            <div>
              <Sellbuyorder />
            </div>
          </div>
        </div>
      </section>

      <section className="balance">
        {/* <div className="left-side-container">
          <div className="balance-header-container">
            <div>
              <p> Overview Balance</p>
            </div>
            <div className="select-container">
              <select className="selectfrom" htmlFor="november">
                <option value="">--Select Month--</option>
                <option selected value="1">
                  January
                </option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <select
                className="selectfromx"
                name="dob-year"
                class="datefield year">
                <option value="">Year</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
              </select>
            </div>
          </div>
          <div className="balance-middle-container-left">
            <div>
              <p className="balance-middle-container-left-text">
                Last week balance
              </p>
            </div>
            <div className="price-container">
              <p className="balance-middle-container-left-price">
                $452,847.930
              </p>

              <img src={Greenup3} />
            </div>
          </div>
          <div>
            <img src={Balancegraph} />
          </div>
        </div> */}
        <OverviewBalance />

        {/* <div className="wallet-activity-container">
          <div className="wallet-activity-container-header">
            <p className="wallet-activity-container-header-text">
              Wallet Activity
            </p>
            <img src={Treedot} />
          </div>
          <div className="wallet-activity-container-middle-container">
            <button className="wallet-activity-container-middle-container-bluebutton">
              Today
            </button>
            <button className="wallet-activity-container-middle-container-bluebutton-none">
              Weekly
            </button>
            <button className="wallet-activity-container-middle-container-bluebutton-none">
              Monthly
            </button>
            <button className="wallet-activity-container-middle-container-bluebutton-none">
              Yearly
            </button>
          </div>
          <div className="wallet-activity-container-last">
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Redx} />
                <p>Withdrawal</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>-$542.88</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>06:24:45 AM</p>
              </div>
              <div>
                <img src={Pendingyellow} />
              </div>
            </div>
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Redx} />
                <p>Top Up</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>+$5,539.99</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>02:33:13 AM</p>
              </div>
              <div>
                <img src={Completedgreen} />
              </div>
            </div>
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Redx} />
                <p>Withdrawal</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>-$1,258.16</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>02:24:45 AM</p>
              </div>
              <div>
                <img src={Completedgreen} />
              </div>
            </div>
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Redx} />
                <p>Withdrawal</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>-$938.76</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>01:24:45 AM</p>
              </div>
              <div>
                <img src={Completedgreen} />
              </div>
            </div>
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Greenx} />
                <p>Top Up</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>+$5,539.99</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>02:33:13 AM</p>
              </div>
              <div>
                <img src={Completedgreen} />
              </div>
            </div>
            <div className="wallet-activity-container-last-text-container">
              <div className="wallet-activity-container-last-text-container-itemandicon">
                <img src={Redx} />
                <p>Withdrawal</p>
              </div>
              <div className="wallet-activity-container-last-text-container-prices">
                <p>-$65.76</p>
                <p style={{ color: "rgba(166, 168, 169, 1)" }}>01:13:45 AM</p>
              </div>
              <div>
                <img src={Cancelledred} />
              </div>
            </div>
          </div>
        </div> */}
        <WalletActivity />
      </section>
    </>
  );
};

export default Cryptocurrency;
export { Bitcoinoption, SellOrder, Sellbuyorder };
