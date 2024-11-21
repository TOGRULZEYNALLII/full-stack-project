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
import Reddown5 from "../Cryptocurrency/assets/headertop/reddown5.svg";
import Lightcoinicon from "../Cryptocurrency/assets/headertop/lightcoinicon.svg";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import { useState } from "react";
import Bitcoinbarhuge from "../Cryptocurrency/assets/portfolio/bitcoinbarhuge.svg";
import Chart from "../Cryptocurrency/assets/portfolio/Chart.svg";
import Balancegraph from "../Cryptocurrency/assets/lastsection/graphmonth.svg";
import Cancelledred from "../Cryptocurrency/assets/lastsection/cancelledred.svg";
import Completedgreen from "../Cryptocurrency/assets/lastsection/complatedgreen.svg";
import Greenx from "../Cryptocurrency/assets/lastsection/greenx.svg";
import Redx from "../Cryptocurrency/assets/lastsection/redx.svg";
import Pendingyellow from "../Cryptocurrency/assets/lastsection/pendingyellow.svg";
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
const SellOrder = () => {
  const bitcoinOrders = [
    { price: 82.3, amount: 0.15, total: 134.12 },
    { price: 84.2, amount: 0.25, total: 252.58 },
    { price: 86.2, amount: 0.18, total: 237.31 },
    { price: 83.9, amount: 0.16, total: 126.26 },
    { price: 91.6, amount: 0.75, total: 46.92 },
    { price: 92.6, amount: 0.21, total: 123.27 },
    { price: 94.2, amount: 0.18, total: 129.26 },
  ];

  const ethereumOrders = [
    { price: 152.3, amount: 0.25, total: 380.75 },
    { price: 154.8, amount: 0.35, total: 541.8 },
    { price: 148.5, amount: 0.22, total: 326.7 },
    { price: 155.0, amount: 0.1, total: 155.0 },
    { price: 149.4, amount: 0.45, total: 672.3 },
    { price: 157.2, amount: 0.18, total: 282.96 },
    { price: 150.6, amount: 0.33, total: 497.0 },
  ];

  const lightcoinOrders = [
    { price: 72.3, amount: 0.2, total: 144.6 },
    { price: 74.5, amount: 0.3, total: 223.5 },
    { price: 76.1, amount: 0.25, total: 190.25 },
    { price: 71.9, amount: 0.12, total: 86.28 },
    { price: 75.6, amount: 0.4, total: 302.4 },
    { price: 73.8, amount: 0.22, total: 162.36 },
    { price: 70.4, amount: 0.5, total: 352.0 },
  ];

  const rippleOrders = [
    { price: 1.02, amount: 150, total: 153.0 },
    { price: 1.04, amount: 200, total: 208.0 },
    { price: 1.01, amount: 175, total: 176.75 },
    { price: 1.03, amount: 120, total: 123.6 },
    { price: 1.05, amount: 220, total: 231.0 },
    { price: 1.02, amount: 190, total: 193.8 },
    { price: 1.01, amount: 250, total: 252.5 },
  ];
  const [currency, setCurrency] = useState("Bitcoin");
  const [orders, setOrders] = useState(bitcoinOrders);

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);

    // Switch between static Bitcoin and Ethereum data
    if (selectedCurrency === "Bitcoin") {
      setOrders(bitcoinOrders);
    } else if (selectedCurrency === "Ethereum") {
      setOrders(ethereumOrders);
    } else if (selectedCurrency === "Ripple") {
      setOrders(rippleOrders);
    } else if (selectedCurrency === "Lightcoin") {
      setOrders(lightcoinOrders);
    }
  };

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

      <table className="gray-container">
        <thead>
          <tr className="thead-tr-container">
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className="tr-body-container" key={index}>
              <td>{order.price}</td>
              <td>{order.amount}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            <img src={Ethereum} alt="icon of bitcoin" /> Etherium
          </div>
        </div>
      </div>
    </>
  );
};

const Cryptocurrency = () => {
  return (
    <>
      <section className="top-container">
        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img src={Bitocoinicon} alt="icon of bitcoin" />
              <div>
                <p>Bitcoin</p>
                <p>$33.568,60</p>
              </div>
              <img src={Greenupbutton} alt="GREENUP BUTton" />
            </div>
            <div>
              <img src={Yellowgraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img src={Ethereum} alt="icon of bitcoin" />
              <div>
                <p>Ethereum</p>
                <p>$12.568,90</p>
              </div>
              <img src={Reddown5} alt="GREENUP BUTton" />
            </div>
            <div>
              <img src={Bluegraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img src={Lightcoinicon} alt="icon of bitcoin" />
              <div>
                <p>Litecoin</p>
                <p>$23.456,70</p>
              </div>
              <img src={Greenup3} alt="GREENUP BUTton" />
            </div>
            <div>
              <img src={Lightbluegraph} alt="yellow graph" />
            </div>
          </div>
        </div>

        <div className="Bitcoin-container">
          <div>
            <div className="bitcoin-prices-container">
              <img src={Ripple} alt="icon of bitcoin" />
              <div>
                <p>Ripple</p>
                <p>$12.568,90</p>
              </div>
              <img src={Reddown5} alt="GREENUP BUTton" />
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
        <div className="Statistics">
          <div className="statistics-container-header">
            <p>Statistics</p>
            <Bitcoinoption />
          </div>
          <div className="vertical-line-small"></div>
          <div>
            <img src={Chart} alt="chart svg" />
          </div>
          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="bluecircle"></div>
              <p>Income (66%) </p>
            </div>
            <div>
              <p>$167,884.21</p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="lightbluecircle"></div>
              <p>Spends (50%) </p>
            </div>
            <div>
              <p>$56,132.95</p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="greencircle"></div>
              <p>Installment (23%) </p>
            </div>
            <div>
              <p>$23,698.12</p>
            </div>
          </div>

          <div className="statistics-last-text-item-container">
            <div className="circleflex">
              <div className="orangecircle"></div>
              <p>Invest (11%) </p>
            </div>
            <div>
              <p>$17,598.69</p>
            </div>
          </div>
        </div>
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
              <SellOrder />
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
        <div className="left-side-container">
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
        </div>

        <div className="wallet-activity-container">
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
        </div>
      </section>
    </>
  );
};

export default Cryptocurrency;
export { Bitcoinoption, SellOrder, Sellbuyorder };
