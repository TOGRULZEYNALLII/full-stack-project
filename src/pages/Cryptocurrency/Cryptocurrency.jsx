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
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // Burada BarElement ekleniyor
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register( 
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // Burada BarElement ekleniyor
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Sellbuyorder = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Litecoin");
  const [amount, setAmount] = useState(18.56879);
  const [price, setPrice] = useState(192.04994);
  const [fees, setFees] = useState(2.349);
  const [message, setMessage] = useState(""); // Mesaj state
  const [isSuccess, setIsSuccess] = useState(false); // Başarı durumunu kontrol etme

  const calculateTotal = () => {
    const total = amount * price * (1 - fees / 100);
    return total.toFixed(5);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleBuyClick = () => {
    setMessage("Buy request is being processed..."); // Buy işlemi başladı mesajı
    setIsSuccess(true);
    // Simulate a fetch request (or any other async action)
    setTimeout(() => {
      setMessage("Buy request successful!"); // Başarı mesajı
      setIsSuccess(true);
    }, 2000); // 2 saniye sonra başarılı mesajı
  };

  const handleSellClick = () => {
    setMessage("Sell request is being processed..."); // Sell işlemi başladı mesajı
    setIsSuccess(false);
    // Simulate a fetch request (or any other async action)
    setTimeout(() => {
      setMessage("Sell request successful!"); // Başarı mesajı
      setIsSuccess(false);
    }, 2000); // 2 saniye sonra başarılı mesajı
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
        <button className="buy-button" onClick={handleBuyClick}>
          Buy
        </button>
        <button className="sell-button" onClick={handleSellClick}>
          Sell
        </button>
      </div>

      {message && (
        <div
          style={{
            backgroundColor: isSuccess ? "green" : "orange",
            color: "white",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "5px",
          }}>
          {message}
        </div>
      )}

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

  // Bar chart için ayrı veri yapılandırması (API'den gelen verilerle)
  const barChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Balance",
        data: data
          ? [
              data.lastWeekBalance || 0,
              data.secondWeekBalance || 0,
              data.thirdWeekBalance || 0,
              data.fourthWeekBalance || 0,
            ]
          : [0, 0, 0, 0],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="left-side-container">
        <div className="balance-header-container">
          <div>
            <p>Overview Balance</p>
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
              <button className="card-button">
                <img src={Vector} alt="vector" />
                <p>{data.percentageDifference}%</p>
              </button>
            )}
          </div>
        </div>

        <div>
          {/* Burada daha önceki <img> yerine Bar chart kullanılıyor */}
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            style={{ width: "500px", height: "300px" }}
          />
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

  // Her kripto para için dummy veri tanımlamaları
  const dummyData = {
    Bitcoin: [
      {
        incomePercentage: 20,
        income: 1000,
        spendsPercentage: 10,
        spends: 500,
        installmentsPercentage: 5,
        installments: 300,
        investsPercentage: 15,
        invests: 200,
      },
      { invoiceId: 1, amount: 250 },
      { invoiceId: 2, amount: 150 },
    ],
    Ripple: [
      {
        incomePercentage: 25,
        income: 1200,
        spendsPercentage: 12,
        spends: 600,
        installmentsPercentage: 7,
        installments: 350,
        investsPercentage: 18,
        invests: 220,
      },
      { invoiceId: 1, amount: 300 },
      { invoiceId: 2, amount: 180 },
    ],
    Litecoin: [
      {
        incomePercentage: 18,
        income: 900,
        spendsPercentage: 8,
        spends: 400,
        installmentsPercentage: 6,
        installments: 280,
        investsPercentage: 12,
        invests: 170,
      },
      { invoiceId: 1, amount: 200 },
      { invoiceId: 2, amount: 130 },
    ],
    Ethereum: [
      {
        incomePercentage: 22,
        income: 1100,
        spendsPercentage: 9,
        spends: 450,
        installmentsPercentage: 4,
        installments: 310,
        investsPercentage: 20,
        invests: 240,
      },
      { invoiceId: 1, amount: 270 },
      { invoiceId: 2, amount: 160 },
    ],
  };

  // Dummy veriyi seçilen kripto para göre yükleme
  useEffect(() => {
    setLoading(true);
    try {
      const localData = dummyData[selectedValue] || [];
      setData(localData);
      // Faturaları 2. elemandan itibaren alıyoruz (index 1)
      const invoiceData = localData.slice(1);
      setInvoices(invoiceData);
      console.log("Local Data for", selectedValue, ":", localData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedValue]);

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
              <p>Spends ({data?.[0]?.spendsPercentage}%)</p>
            </div>
            <div>
              <p>${data?.[0]?.spends}</p>
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
const PortfolioPanel = () => {
  const [selectedCoin, setSelectedCoin] = useState("Bitcoin");

  // Her coin için farklı dummy veri tanımlamaları
  const coinData = {
    Bitcoin: {
      currency: "BTC/IDR",
      price: "USD 34.147,80",
      rate: "-0.0662%/hr",
      volume: "IDR 280.55T",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Bitcoin Price",
            data: [30000, 32000, 31000, 29000, 34000, 36000, 38000],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
          },
        ],
      },
    },
    Ripple: {
      currency: "XRP/IDR",
      price: "USD 1,20",
      rate: "0.5%/hr",
      volume: "IDR 150.30T",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Ripple Price",
            data: [0.5, 0.6, 0.55, 0.52, 0.58, 0.62, 0.65],
            borderColor: "rgba(255,99,132,1)",
            backgroundColor: "rgba(255,99,132,0.2)",
          },
        ],
      },
    },
    Litecoin: {
      currency: "LTC/IDR",
      price: "USD 200,00",
      rate: "1.2%/hr",
      volume: "IDR 80.20T",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Litecoin Price",
            data: [100, 120, 115, 110, 130, 140, 150],
            borderColor: "rgba(54,162,235,1)",
            backgroundColor: "rgba(54,162,235,0.2)",
          },
        ],
      },
    },
    Ethereum: {
      currency: "ETH/IDR",
      price: "USD 2100,00",
      rate: "-0.5%/hr",
      volume: "IDR 320.00T",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Ethereum Price",
            data: [1000, 1100, 1050, 1020, 1080, 1150, 1200],
            borderColor: "rgba(153,102,255,1)",
            backgroundColor: "rgba(153,102,255,0.2)",
          },
        ],
      },
    },
  };

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  const currentData = coinData[selectedCoin];

  return (
    <div className="container-left">
      <div className="portfolio-header-container">
        <div>
          <p>My Portfolio</p>
        </div>
        <div className="select-container">
          {/* Coin seçimi için basit bir select */}
          <select onChange={handleCoinChange} value={selectedCoin}>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ripple">Ripple</option>
            <option value="Litecoin">Litecoin</option>
            <option value="Ethereum">Ethereum</option>
          </select>
          <img src={Treedot} alt="menu" />
        </div>
      </div>
      <div className="vertical-line-div"></div>
      <div className="Portfolio-middle-container">
        <div className="Portfolio-middle-container-text-secondary">
          <div>
            <p>Currency</p>
            <h3>{currentData.currency}</h3>
          </div>
          <div className="horizontal-line"></div>

          <div className="Portfolio-middle-container-text-item">
            <div>
              <p>Price</p>
              <h3>{currentData.price}</h3>
            </div>
            <div>
              <img src={Greenup3} alt="up button" />
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div>
            <p>Rate</p>
            <h3>{currentData.rate}</h3>
          </div>
          <div className="horizontal-line"></div>
          <div className="volume">
            <div>
              <p>Volume (24h)</p>
              <h3>{currentData.volume}</h3>
            </div>
            <div>
              <img src={Reddown5} alt="down" />
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        {/* Sadece burası değişti: <img> yerine <Line> bileşeni kullanılarak grafik gösteriliyor */}
        <Line
          style={{ width: "500px", height: "400px" }}
          data={currentData.chartData}
        />
      </div>
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
      <section className="top-container slide">
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

        <div className="Bitcoin-container ">
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

      <section className="Portfolio-container slide">
        <PortfolioPanel />
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
        <OverviewBalance />

        <WalletActivity />
      </section>
    </>
  );
};

export default Cryptocurrency;
export { Bitcoinoption, SellOrder, Sellbuyorder };
