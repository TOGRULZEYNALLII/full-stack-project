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
import Eggspagetti from "./assets/summary/egg.svg";
import Juice from "./assets/summary/juice.svg";
import Lastgraph from "./assets/summary/lastgraph.svg";
import Pizza from "./assets/summary/pizza.svg";
import Spagetti from "./assets/summary/summaryspagetti.svg";
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
import Treedotmenu from "../Sidebar/assets/icons/dot.svg";
import Stars from "../Restaurant/assets/summary/Stars.svg";
import Graph1 from "../Restaurant/assets/trendingitems/Graph1.svg";
import Graph2 from "../Restaurant/assets/trendingitems/Graph2.svg";
import Graph3 from "../Restaurant/assets/trendingitems/Graph3.svg";
import Graph4 from "../Restaurant/assets/trendingitems/Graph4.svg";
import Graph5 from "../Restaurant/assets/trendingitems/Graph5.svg";
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
            <p className="order-complated-container-text-item-price">3,628</p>
            <p className="order-complated-container-text-item-text">
              Total Order Completed
            </p>
          </div>
        </div>

        <div className="order-complated-container">
          <div className="order-complated-container-icon">
            <img src={Truck} />
          </div>
          <div className="order-complated-container-text">
            <p className="order-complated-container-text-item-price">2,476</p>
            <p className="order-complated-container-text-item-text">
              Total Order Delivered
            </p>
          </div>
        </div>

        <div className="order-complated-container">
          <div className="order-complated-container-icon">
            <img src={Cancelled} />
          </div>
          <div className="order-complated-container-text">
            <p className="order-complated-container-text-item-price">265</p>
            <p className="order-complated-container-text-item-text">
              Total Order Cancelled
            </p>
          </div>
        </div>

        <div className="order-complated-container">
          <div className="order-complated-container-icon">
            <img src={Hour} />
          </div>
          <div className="order-complated-container-text">
            <p className="order-complated-container-text-item-price">1,136</p>
            <p className="order-complated-container-text-item-text">
              Total Order Pending
            </p>
          </div>
        </div>
      </section>

      <section className="order-summary-section-container">
        <div className="order-summary-container">
          <div className="order-summary-container-header">
            <p>Current Order Summary</p>
            <img src={Treedotmenu} />
          </div>

          <div className="order-summary-container-middle-button-container">
            <button className="order-summary-container-middle-button">
              <p>Today</p>
            </button>

            <button className="order-summary-container-middle-button-default">
              <p>Weekly</p>
            </button>

            <button className="order-summary-container-middle-button-default">
              <p>Monthly</p>
            </button>

            <button className="order-summary-container-middle-button-default">
              <p>Yearly</p>
            </button>
          </div>
          <div className="manage-order-button-container">
            <div className="manage-order-button-container-text-icon-container">
              <img src={Basket} />
              <p className="manage-order-button-container-text">
                125 new orders!
              </p>
            </div>
            <div className="manage-order-button-container-main">
              <button className="manage-order-button-container-button">
                Manage Order
              </button>
            </div>
          </div>

          <div className="manage-order-button-container-textitem">
            <div className="manage-order-button-container-text-item-delivered">
              <p className="manage-order-button-container-text-item-delivered-p">
                389
              </p>
              <p className="manage-order-button-container-text-item-delivered-d">
                Delivered
              </p>
            </div>
            <div className="manage-order-button-container-text-item-delivered">
              <p className="manage-order-button-container-text-item-delivered-p">
                234
              </p>
              <p className="manage-order-button-container-text-item-delivered-d">
                On Process
              </p>
            </div>
            <div className="manage-order-button-container-text-item-delivered">
              <p className="manage-order-button-container-text-item-delivered-p">
                125
              </p>
              <p className="manage-order-button-container-text-item-delivered-d">
                New Orders
              </p>
            </div>
          </div>

          <div className="manage-order-container-last">
            <img src={Piegraph} />
            <div className="manage-order-container-last-progress">
              <div className="manage-order-container-last-progress-container">
                <div className="manage-order-container-last-progress-container-text">
                  <p>Delivered (43%)</p>
                  <p className="manage-order-container-last-progress-container-tex-price">
                    384
                  </p>
                </div>
                <img src={Greenprogressbar} />
              </div>

              <div className="manage-order-container-last-progress-container">
                <div className="manage-order-container-last-progress-container-text">
                  <p>On Process (37%)</p>
                  <p className="manage-order-container-last-progress-container-tex-price">
                    234
                  </p>
                </div>
                <img src={Blueprogressbar} />
              </div>

              <div className="manage-order-container-last-progress-container">
                <div className="manage-order-container-last-progress-container-text">
                  <p>New Orders (20%)</p>
                  <p className="manage-order-container-last-progress-container-tex-price">
                    125
                  </p>
                </div>
                <img src={Yellowprogressbar} />
              </div>
            </div>
          </div>
        </div>

        <div className="live-order-corssbar-container">
          <div className="live-order-corssbar-container-header">
            <p>Today’s Live Orders</p>
            <img src={Treedotmenu} />
          </div>

          <div className="crossbar-container-scroll">
            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    Order #123
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    08:30 AM
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $59.28
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    Order #123
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    08:30 AM
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $59.28
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    Order #123
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    08:30 AM
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $59.28
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    Order #123
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    08:30 AM
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $59.28
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    Order #123
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    08:30 AM
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $59.28
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="topsellingproducs-container">
          <div className="topsellingproducs-container-header">
            <p>Top Selling Products</p>
            <img src={Treedotmenu} />
          </div>
          <div className="topsellingproducs-container-middle">
            <div className="topsellingproducs-container-middle-content">
              <img
                className="topsellingproducs-container-middle-content-img"
                src={Spagetti}
              />
              <div className="topsellingproducs-container-middle-content-text-container">
                <p className="topsellingproducs-container-middle-content-text">
                  Meidum Spicy Spagethi Italiano
                </p>
                <img src={Stars} />
              </div>
            </div>

            <div className="topsellingproducs-container-middle-content">
              <img
                className="topsellingproducs-container-middle-content-img"
                src={Burger}
              />
              <div className="topsellingproducs-container-middle-content-text-container">
                <p className="topsellingproducs-container-middle-content-text">
                  Burger Jumbo la Piazza Barbeque
                </p>
                <img src={Stars} />
              </div>
            </div>

            <div className="topsellingproducs-container-middle-content">
              <img
                className="topsellingproducs-container-middle-content-img"
                src={Pizza}
              />
              <div className="topsellingproducs-container-middle-content-text-container">
                <p className="topsellingproducs-container-middle-content-text">
                  Medium Spicy Pizza with Kemangi
                </p>
                <img src={Stars} />
              </div>
            </div>

            <div className="topsellingproducs-container-middle-content">
              <img
                className="topsellingproducs-container-middle-content-img"
                src={Desert}
              />
              <div className="topsellingproducs-container-middle-content-text-container">
                <p className="topsellingproducs-container-middle-content-text">
                  Bread Fried with Nuggets Specials
                </p>
                <img src={Stars} />
              </div>
            </div>
          </div>

          <div className="selling-products--button-container">
            <button className="selling-products--button">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className="trending-items-section-container">
        <div className="trending-items-container-left">
          <div className="trending-items-container-header">
            <div className="trending-items-container-left-header-left">
              <p className="trending-items-container-left-header-left-text1">
                Trending Items
              </p>
              <p className="trending-items-container-left-header-left-text2">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="trending-items-container-left-header-right">
              <select className="trending-items-container-left-header-left-select">
                <option>November 2023 </option>
                <option>November 2023 </option>
                <option>November 2023 </option>
                <option>November 2023 </option>
                <option>November 2023 </option>
                <option>November 2023 </option>
                <option>November 2023 </option>
              </select>
              <img src={Treedotmenu} />
            </div>
          </div>
          <div className="trending-items-container-middle">
            <div className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#1</p>
                <img
                  style={{ height: "87px", borderRadius: "10px" }}
                  src={Spagetti}
                />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  Tuna soup spinach with himalaya salt
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  $32.56
                </p>
              </div>
              <div className="trending-items-container-middle-container-graph">
                <img src={Graph1} />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">524</p>
                  <p className="gray">Sales (12%)</p>
                </div>
              </div>
            </div>

            <div className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#2</p>
                <img src={Juice} />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  Watermelon mix chocolate juice with ice
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  $12.89
                </p>
              </div>
              <div className="trending-items-container-middle-container-graph">
                <img src={Graph2} />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">513</p>
                  <p className="gray">Sales (11%)</p>
                </div>
              </div>
            </div>

            <div className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#3</p>
                <img
                  style={{ height: "87px", borderRadius: "10px" }}
                  src={Spagettiimage}
                />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  Chicken curry special with cucumber
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  $22.34
                </p>
              </div>
              <div className="trending-items-container-middle-container-graph">
                <img src={Graph4} />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">419</p>
                  <p className="gray">Sales (9%)</p>
                </div>
              </div>
            </div>

            <div className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#4</p>
                <img src={Pizza} />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  Italiano pizza mozarella with garlic
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  $32.56
                </p>
              </div>
              <div className="trending-items-container-middle-container-graph">
                <img src={Graph1} />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">336</p>
                  <p className="gray">Sales (7%)</p>
                </div>
              </div>
            </div>

            <div className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#5 </p>
                <img src={Spagettilast} />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  Tuna spagethy spinach with himalaya salt
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  $22.89
                </p>
              </div>
              <div className="trending-items-container-middle-container-graph">
                <img src={Graph5} />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">319</p>
                  <p className="gray">Sales (7%)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trending-items-footer-button-container">
            <button className="trending-items-footer-button-previous">
              Previous
            </button>
            <button className="trending-items-footer-button">1</button>
            <button className="trending-items-footer-button">2</button>
            <button className="trending-items-footer-button">3</button>
            <button className="trending-items-footer-button">4</button>
            <button className="trending-items-footer-button">5</button>
            <button className="trending-items-footer-button">6</button>
            <button className="trending-items-footer-button-next">Next</button>
          </div>
        </div>

        <div className="dashboard-container">
          {/* Daily Order Report Section */}
          <div className="order-report">
            <div className="order-header">
              <h2>Daily Order Report</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button className="download-btn">
                <img src="path/to/download-icon.png" alt="Download Icon" />{" "}
                Download Report
              </button>
            </div>
            <div className="order-graph">
              {/* You can replace this div with the actual graph component */}
              <img src="path/to/graph-image.png" alt="Order Graph" />
              <div className="order-stats">
                <h3>456 Order</h3>
                <p>Nov 18th, 2023</p>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="customer-reviews">
            <div className="reviews-header">
              <h2>Customer Reviews</h2>
              <div className="filter-container">
                <select>
                  <option>All Reviews</option>
                </select>
                <select>
                  <option>2023</option>
                </select>
                <button className="download-btn">
                  <img src="path/to/download-icon.png" alt="Download Icon" />{" "}
                  Download Report
                </button>
              </div>
            </div>
            <div className="reviews-content">
              <div className="review-summary">
                <div className="positive-reviews">
                  <h3>3,628</h3>
                  <p>Positive Reviews</p>
                  <span>+25% from last week</span>
                </div>
                <div className="negative-reviews">
                  <h3>274</h3>
                  <p>Negative Reviews</p>
                  <span>-25% from last week</span>
                </div>
              </div>
              <div className="reviews-graph">
                {/* Replace this div with the actual graph component */}
                <img src="path/to/review-graph-image.png" alt="Reviews Graph" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
