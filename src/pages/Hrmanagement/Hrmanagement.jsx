import React from "react";
import { useState } from "react";
import "./style.css";
const Hrmanagement = () => {
  return (
    <>
      <section className="section-main-container">
        <div className="leftside-section-container">
          <section className="hrmanagemnt-header-section">
            <div className="hrmanagemnt-header-section-container">
              <div className="total-employes-container">
                <p className="total-employes-container-p">Total Employees</p>
              </div>
              <div className="total-employes-container-price">
                <p className="total-employes-container-price-p">2,048</p>
                <img src="" alt="" />
              </div>
              <div className="total-employes-container-footer">
                <div>
                  <img src="" alt="" />
                  <p>+15%</p>
                </div>
                <div>
                  <p>vs last month</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="rightside-section-container"></div>
      </section>
    </>
  );
};

export default Hrmanagement;
