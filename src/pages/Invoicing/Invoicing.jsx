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
import { useState } from "react";
const Invoicing = () => {
  const [amount, setAmount] = useState(875);
  const balance = 456345.62;
  return (
    <>
      <section className="header-container">
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
      </section>
    </>
  );
};

export default Invoicing;
