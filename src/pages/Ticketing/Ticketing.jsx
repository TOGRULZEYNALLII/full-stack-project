import React from "react";
import "./style.css";
import { useState } from "react";
const Ticketing = () => {
  return (
    <>
      <section className="Ticketing-header-section">
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
        </div>
      </section>
    </>
  );
};

export default Ticketing;
