import React from "react";
import "../Restaurant/style.css";
import { useState } from "react";
import { useEffect } from "react";
import Cancelled from "./assets/header/cancelled.svg";
import Dosap from "./assets/header/dosap.svg";
import Greengraph from "./assets/header/greengreaph.svg";
import Hour from "./assets/header/hour.svg";
import Redgraph from "./assets/header/redgraph.svg";
import Truck from "./assets/header/truck.svg";
import Wallet from "./assets/header/wallet.svg";
import Downloadvector from "./assets/summary/downloadvector.svg";
import Egg from "./assets/summary/egg.svg";
import Juice from "./assets/summary/juice.svg";
import Lastgraph from "./assets/summary/lastgraph.svg";
import Pizza from "./assets/summary/pizza.svg";
import Spagetti from "./assets/summary/spagetti.svg";
import Spagettilast from "./assets/summary/spagettilast.svg";
import Arrowblue from "./assets/trendingitems/arrowblue.svg";
import Arrowdefault from "./assets/trendingitems/arrowdefault.svg";
import Basket from "./assets/trendingitems/basket.svg";
import Blueprogressbar from "./assets/trendingitems/blueprogressbar.svg";
import Burger from "./assets/trendingitems/burger.svg";
import Desert from "./assets/trendingitems/dersert.svg";
import Greenprogressbar from "./assets/trendingitems/greenprogressbar.svg";
import Piegraph from "./assets/trendingitems/piegraph.svg";
import Pizzatrendingitems from "./assets/trendingitems/pizza.svg";
import Spagettiimage from "./assets/trendingitems/spagettiimage.svg";
import Yellowprogressbar from "./assets/trendingitems/yellowprogressbar.svg";
import Green25 from "../Invoicing/assets/header/green25.svg";
import Red15 from "../Invoicing/assets/header/reddown5.svg";
const Restaurant = () => {
  return (
    <>
      <section className="header-container">
        <div className="header-container-income">
          <img src={Greengraph} alt="green graph icon" />
          <div className="header-container-income-text">
            <div className="header-container-income-text-common-container">
              <p className="header-container-income-text-income">Income</p>
              <p className="header-container-income-text-price">$24,734.50</p>
            </div>

            <div className="header-container-income-text-button">
              <img src={Green25} />
              <p className="header-container-income-text-button-text">
                From last month
              </p>
            </div>
          </div>
        </div>

        <div className="header-container-income">
          <img src={Redgraph} alt="red graph icon" />
          <div className="header-container-income-text">
            <div className="header-container-income-text-common-container">
              <p className="header-container-income-text-income">Income</p>
              <p className="header-container-income-text-price">$24,734.50</p>
            </div>

            <div className="header-container-income-text-button">
              <img src={Red15} />
              <p className="header-container-income-text-button-text">
                From last month
              </p>
            </div>
          </div>
        </div>
        <div className="horizontal-border"></div>
        <div className="total-income-container">
          <div>
            <p className="total-income-container-text">Total Income</p>
            <p className="total-income-container-price">$13,428.18</p>
          </div>

          <div>
            <button className="withdraw-button">
              <img src={Wallet} alt="wallet withdraw icon" />
              <p>Withdraw</p>
            </button>
          </div>
        </div>
      </section>
      <section className="total-order-container">
        <div className="order-complated-container">
          <div className="order-complated-container-icon">
            <img src={Dosap} />
          </div>
          <div className="order-complated-container-text">
            <p className="order-complated-container-text-item">3,628</p>
            <p className="order-complated-container-text-item">
              Total Order Completed
            </p>
          </div>  
        </div>
      </section>
    </>
  );
};

export default Restaurant;
