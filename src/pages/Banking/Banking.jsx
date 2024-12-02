import React from "react";
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
const Banking = () => {
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
            <p>Chose Recipient</p>
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
                  <input type="text" placeholder="Select" />
                  <img src={Vectordown} />
                </div>
              </div>
              <div>
                <p className="payement-catagory-container-p">
                  Payment Category
                </p>
                <div className="input-container">
                  <img src={Dollaricon} />
                  <input type="text" placeholder="Select" />
                </div>
              </div>
            </div>
            <button className="payement-catagory-container-button">
              <img src={Telegram} />
              <p>Send Payment</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
