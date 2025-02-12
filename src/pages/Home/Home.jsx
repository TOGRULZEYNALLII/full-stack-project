import "../Home/style.css";
import { useState } from "react";
import Moneybag from "./assets/icons/money-bag.svg";
import Greenline from "./assets/icons/greenline.svg";
import Vector from "./assets/icons/Vector.svg";
import Redline from "./assets/icons/reddline.svg";
import Reddown from "./assets/icons/reddown.svg";
import Truck from "./assets/icons/shipping.svg";
import Profits from "./assets/icons/dollar3.svg";
import Costs from "./assets/icons/dollar.svg";
import Buttonlightblueweek from "./assets/carryingcosts/week.svg";
import Buttonbluemonth from "./assets/carryingcosts/month.svg";
import Longbluevector from "./assets/carryingcosts/longbluevector.svg";
import Horizontalline from "./assets/carryingcosts/horizontalline.svg";
import Treedotmenu from "../Sidebar/assets/icons/dot.svg";
import Bluedownvector from "./assets/carryingcosts/bluedownvector.svg";
import Lightbluelongline from "./assets/carryingcosts/longlightblueline.svg";
import Bars from "./assets/carryingcosts/Bars.svg";
import Deliverystatusbar from "./assets/carryingcosts/deliverystatusbar.svg";
import Colorfulbar from "./assets/carryingcosts/colorfulbar.svg";
import Plcosts from "./assets/warehousing/3plcosts.svg";
import Costssquere from "./assets/warehousing/costspersquere.svg";
import Perhourcosts from "./assets/warehousing/perhourcosts.svg";
import Staffcosts from "./assets/warehousing/staffcosts.svg";
import Profitcosts from "./assets/warehousing/profitcosts.svg";
import Previous from "./assets/warehousing/Previous.svg";
import Next from "./assets/warehousing/Next.svg";
import Yellowdown from "./assets/warehousing/yellowdown.svg";
import Blueup from "./assets/warehousing/blueupp.svg";
import Lightblueup from "./assets/warehousing/lightblueup.svg";
import Cancelled from "./assets/invoices/cancelled.svg";
import Squereupright from "./assets/invoices/ArrowSquareUpRight.svg";
import Leftdownvector from "./assets/invoices/leftdownvectorred.svg";
import Sandbox from "./assets/invoices/delivered.svg";
import Ordersicon from "./assets/invoices/orders.svg";
import Pendingicon from "./assets/invoices/pending.svg";
import Revenueicon from "./assets/invoices/revenuedollar.svg";
import Refundedicon from "./assets/invoices/refunded.svg";
import Editcon from "./assets/carryingcosts/editicon.svg";
import Deleteicon from "./assets/carryingcosts/deleteicon.svg";
import Okeyiucon from "./assets/invoices/okeyblue.png";
import xicon from "./assets/invoices/close.png";
import { useEffect } from "react";
import { use } from "react";
function LogistcsPage() {
  // Tüm birleşik veriyi tutan state
  const [data, setData] = useState(null);
  // Fatura (invoice) verilerini tutan state
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API linkleri (ilk 6 tanesi farklı veri, 7. URL fatura verilerini içeriyor)
  const apiLinks = [
    "http://localhost:8088/api/LogisticsPage/QuickReview",
    "http://localhost:8088/api/LogisticsPage/CarryingCosts",
    "http://localhost:8088/api/LogisticsPage/DeliveryStatus",
    "http://localhost:8088/api/LogisticsPage/WarehousingService",
    "http://localhost:8088/api/LogisticsPage/DeliveriesByCounties",
    "http://localhost:8088/api/LogisticsPage/ShipmentReview",
    "http://localhost:8088/api/LogisticsPage/Invoices",
  ];

  // Düzenleme (edit) işlemi için state'ler
  const [editInvoiceId, setEditInvoiceId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    invoiceId: "",
    customer: "",
    invoiceDate: "",
    amount: "",
  });

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
  }, []);

  // "Edit" butonuna tıklandığında ilgili faturayı düzenleme moduna alıyoruz
  const handleEditClick = (invoice) => {
    setEditInvoiceId(invoice.invoiceId);
    setEditFormData({
      invoiceId: invoice.invoiceId,
      customer: invoice.customer,
      invoiceDate: invoice.invoiceDate, // ISO formatındaki tarih
      amount: invoice.amount,
    });
  };

  // Inputlardaki değişiklikleri state'e yansıtıyoruz
  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/LogisticsPage/InvoicesEdit?id=${editFormData.invoiceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update invoice");
      }

      const updatedInvoice =
        response.status !== 204 ? await response.json() : {};

      setInvoices((prevInvoices) =>
        prevInvoices.map((inv) =>
          inv.invoiceId === updatedInvoice.invoiceId ? updatedInvoice : inv
        )
      );

      setEditInvoiceId(null);
    } catch (err) {
      console.error("Error updating invoice:", err);
      setError(err.message);
    }
    window.location.reload();
  };
  const handleDeleteClick = async (invoiceId) => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/LogisticsPage/InvoicesDelete?id=${invoiceId}`, // editFormData yerine invoiceId'yi kullanıyoruz
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete invoice");
      }

      // Faturayı yerel diziden siliyoruz
      setInvoices((prevInvoices) =>
        prevInvoices.filter((inv) => inv.invoiceId !== invoiceId)
      );
    } catch (err) {
      console.error("Error deleting invoice:", err);
      setError(err.message);
    }
  };
  const handleCancelClick = () => {
    setEditInvoiceId(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="section-card">
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Moneybag} alt="moneybag" />
              <p className="moneybag-p">Revenue</p>
            </div>
            <div className="money-container">
              <p className="money">${data?.[0]?.revenue}</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Greenline} alt="line" />
            <button className="card-button">
              <img src={Vector} alt="vector" />
              <p>{data?.[0]?.revenuePercentage}%</p>
            </button>
          </div>
        </div>
        <div className="card">
          <di className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Costs} alt="moneybag" />
              <p className="moneybag-p">Costs</p>
            </div>
            <div className="money-container">
              <p className="money">${data?.[0]?.costs}</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </di>
          <div className="graphic">
            <img src={Redline} alt="line" />
            <button className="card-button-red">
              <img src={Reddown} alt="vector" />
              <p>{data?.[0]?.costsPercentage}%</p>
            </button>
          </div>
        </div>
        {/* ------- */}
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Profits} alt="moneybag" />
              <p className="moneybag-p">Profits</p>
            </div>
            <div className="money-container">
              <p className="money">${data?.[0]?.profits}</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Greenline} alt="line" />
            <button className="card-button">
              <img src={Vector} alt="vector" />
              <p>{data?.[0]?.profitsPercentage}%</p>
            </button>
          </div>
        </div>
        {/* ========== */}
        <div className="card">
          <div className="revenue">
            <div className="revenue-card">
              <img className="moneybag" src={Truck} alt="moneybag" />
              <p className="moneybag-p">Shipments</p>
            </div>
            <div className="money-container">
              <p className="money">${data?.[0]?.shipments}</p>
            </div>
            <div className="container-text">
              <p className="text">From last month</p>
            </div>
          </div>
          <div className="graphic">
            <img src={Redline} alt="line" />
            <button className="card-button-red">
              <img src={Reddown} alt="vector" />
              <p>{data?.[0]?.shipmentsPercentage}%</p>
            </button>
          </div>
        </div>
      </section>

      <section className="section-carrying-costs">
        <div className="left-container-costs-year">
          <div className="Costs-year">
            <div>
              <p>Yearly Order Rate</p>
            </div>
            <div className="monthweek-container">
              <img src={Buttonbluemonth} alt="month light blue dot" />
              <p>Week</p>
              <img src={Buttonlightblueweek} alt="week blue dot" />
              <p>Month</p>
            </div>
            <div>
              <select name="dob-year" className="datefield-year">
                <option value="">Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
              </select>
            </div>
          </div>
          <div className="long-lines">
            <div className="numbers-left-container-lines">
              <div>
                {" "}
                <p>75</p>
              </div>
              <div>
                {" "}
                <p>50</p>
              </div>
              <div>
                {" "}
                <p>25</p>
              </div>
              <div>
                {" "}
                <p>0</p>
              </div>
            </div>
            <div>
              <img
                className="Horizontalline"
                src={Horizontalline}
                alt="lines"
              />
              <img
                className="longbluevector"
                src={Lightbluelongline}
                alt="blueline"
              />
              <img src={Longbluevector} alt="light blue line" />
              <img />
            </div>
          </div>
          <div className="lines-months">
            <p> Jan</p>
            <p> Feb</p>
            <p> Mar</p>
            <p> Apr</p>
            <p> May</p>
            <p> Jun</p>
            <p> Jul</p>
            <p> Aug</p>
            <p> Sep</p>
            <p> Oct</p>
          </div>
        </div>
        <div className="right-container-caryingcosts">
          <div className="right-container-caryingcosts-header">
            <p>Carrying Costs</p>
            <img src={Treedotmenu} alt="" />
          </div>
          <div className="border-right-container"></div>
          <div>
            <p className="border-right-container-price">${data?.[1]?.costs}</p>
          </div>
          <div className="blue-button-down-container">
            <button className="blue-button-down">
              <img src={Bluedownvector} alt="vector" />
              <p>{data?.[1]?.costsPercentage}%</p>
            </button>
            <p>from last week </p>
          </div>
          <div className="bars-container">
            <img src={Bars} alt="bars graphic lines" />
          </div>
          <div className="container-weekends">
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>

            <p>Sat</p>
          </div>
        </div>
      </section>
      {/* SECTIONNNNNNNNNNNN */}
      <section className="delivery-status">
        <div className="delivery-status-left-container">
          <div className="delivery-status-left-container-header">
            <div>
              <p>Delivery Status</p>
            </div>
            <div>
              <img src={Treedotmenu} alt="settings icon" />
            </div>
          </div>

          <div className="delivery-status-boreder-vertical"></div>
          <div className="delivery-status-flex-container">
            <div className="delivery-status-flex-container">
              <div className="delivery-status-prices">
                <div>
                  <div className="delivered-container">
                    <button className="bluedot"></button>
                    <p>Delivered</p>
                  </div>
                  <div></div>
                  <div className="dellivery-status-prices-container">
                    <p className="dellivery-status-prices-containe-price">
                      {data?.[2]?.delivered}
                    </p>
                    <div>
                      <button className="card-button">
                        <img src={Vector} alt="vector" />
                        <p>{data?.[2]?.deliveredPercentage}%</p>
                      </button>
                      <p>from last week</p>
                    </div>
                    <div className="delivery-costs-border-horizontal"></div>
                  </div>
                </div>
              </div>
              <div className="delivery-status-prices">
                <div>
                  <div className="delivered-container">
                    <button className="lightbluedot"></button>
                    <p>On Progress</p>
                  </div>
                  <div></div>
                  <div className="dellivery-status-prices-container">
                    <p className="dellivery-status-prices-containe-price">
                      {data?.[2]?.onProgress}
                    </p>
                    <div>
                      <button className="card-button">
                        <img src={Vector} alt="vector" />
                        <p>{data?.[2]?.onProgressPercentage}%</p>
                      </button>
                      <p>from last week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="delivery-status-bar">
            <img src={Deliverystatusbar} alt="bars with month" />
          </div>
        </div>

        {/* right container */}
        <div className="right-container-store-location">
          <div className="right-container-store-location-text">
            <p>Sales by Stores Location</p>
            <img src={Treedotmenu} alt="" />
          </div>
          <div className="right-container-store-location-verticalborder"></div>
          <div className="right-container-store-location-barside">
            <div>
              <img src={Colorfulbar} alt="colorful bars" />
            </div>
            <div className="right-container-store-location-horizontalborder"></div>
            <div className="month-store">
              <div className="dotsmonth">
                <button className="bluestore"> </button>
                <p>East</p>
              </div>
              <div className="dotsmonth">
                <button className="lightbluestore"></button>
                <p>West</p>
              </div>
              <div className="dotsmonth">
                <button className="lightgreenstore"></button>
                <p>North</p>
              </div>
              <div className="dotsmonth">
                <button className="lightyellowstore"></button>
                <p>South</p>
              </div>
            </div>
          </div>
          <div className="right-container-store-location-month">
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apr</p>
            <p>May</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Aug</p>
            <p>Sep</p>
          </div>
          <div className="store-vertical-line"></div>
          <p className="Datastoretextitem">Data from the year of 2023</p>
        </div>
      </section>
      {/* section  */}
      <section className="warehousing">
        <div className="warehousing-container-left">
          <div className="warehousing-container-header">
            <p>Warehousing Service Costs and Fees</p>
            <img src={Treedotmenu} alt="menu" />
          </div>
          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Costssquere} alt="staff costs icon" />
              <p>{data?.[3]?.cost[0].serviceName}</p>
            </div>
            <div className="warehousing-texts-button">
              <p>${data?.[3]?.cost[0].servicePayment}</p>
              <button className="card-button-green-gray">
                <img src={Vector} alt="vector" />
                <p>{data?.[3]?.cost[0].servicePaymentPercentage}%</p>
              </button>
            </div>
          </div>

          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Staffcosts} alt="staff costs icon" />
              <p>{data?.[3]?.cost[1].serviceName}</p>
            </div>
            <div className="warehousing-texts-button">
              <p>${data?.[3]?.cost[1].servicePayment}</p>
              <button className="card-button-red">
                <img src={Reddown} alt="vector" />
                <p>{data?.[3]?.cost[1].servicePaymentPercentage}%</p>
              </button>
            </div>
          </div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Perhourcosts} alt="hour costs icon" />
              <p>{data?.[3]?.cost[2].serviceName}</p>
            </div>
            <div className="warehousing-texts-button">
              <p>${data?.[3]?.cost[2].servicePayment}</p>
              <button className="yellowdownbutton">
                {" "}
                <img src={Yellowdown} alt="down vector" />
                {data?.[3]?.cost[2].servicePaymentPercentage}%
              </button>
            </div>
          </div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Profitcosts} alt="profit costs" />
              <p>{data?.[3]?.cost[3].serviceName}</p>
            </div>
            <div className="warehousing-texts-button">
              <p>${data?.[3]?.cost[3].servicePayment}</p>
              <button className="blueupbttuon">
                <img src={Blueup} alt="blue up vector" />
                <p>{data?.[3]?.cost[3].servicePaymentPercentage}%</p>
              </button>
            </div>
          </div>

          <div className="warehousing-vertical-border"></div>
          <div className="warehousing-texts">
            <div className="warehousing-texts-item">
              <img src={Plcosts} alt="3pl cost icon" />
              <p>{data?.[3]?.cost[4].serviceName}</p>
            </div>
            <div className="warehousing-texts-button">
              <p>${data?.[3]?.cost[4].servicePayment}</p>
              <button className="lightblueupbutton">
                <img src={Lightblueup} alt="light blue up vector" />
                <p> {data?.[3]?.cost[4].servicePaymentPercentage}% </p>
              </button>
            </div>
          </div>
          <div className="warehousing-vertical-border"></div>

          <div className="warehousing-vertical-border"></div>
          <div className="Showingdata">
            <div>
              <p className="showingdata-item">Showing 5 of 100 data</p>
            </div>
            <div>
              <img src={Previous} alt="" />
              <img src={Next} alt="" />
            </div>
          </div>
        </div>
        <div className="delivers-country">
          <div className="delivers-country-header">
            <p>Deliveries by Country</p>
            <img src={Treedotmenu} alt="settings icon" />
          </div>
          <div></div>
          <div className="line-deliveres"></div>
          <div className="delivers-country-lines-container">
            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[4]?.country}</p>
                <button className="country-percentage-lightblue">
                  {data?.[4]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-blue-line"></div>
                <div className="country-percentage-blue-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[5]?.country}</p>
                <button className="country-percentage-lightgreen">
                  {data?.[5]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-green-line"></div>
                <div className="country-percentage-green-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[6]?.country}</p>
                <button className="country-percentage-red">
                  {data?.[6]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-blue-line-countainer">
                <div className="country-percentage-red-line"></div>
                <div className="country-percentage-red-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[7]?.country}</p>
                <button className="country-percentage-yellow">
                  {" "}
                  {data?.[7]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-yellow-line-countainer">
                <div className="country-percentage-yellow-line"></div>
                <div className="country-percentage-yellow-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[8]?.country}</p>
                <button className="country-percentage-lightblue-two">
                  {data?.[8]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-light-blue-line-countainer">
                <div className="country-percentage-light-blue-line"></div>
                <div className="country-percentage-light-blue-default"></div>
              </div>
            </div>

            <div className="delivers-country-lines">
              <div className="country-percentage">
                <p>{data?.[4]?.country}</p>
                <button className="country-percentage-black">
                  {" "}
                  {data?.[4]?.deliveryPercentage}%
                </button>
              </div>
              <div className="country-percentage-black-line-countainer">
                <div className="country-percentage-black-line"></div>
                <div className="country-percentage-black-default"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INVOICES */}
      <section className="invoices-container">
        <div className="cancelled">
          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Cancelled}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    {data?.[9]?.canceled}
                  </p>
                  <p className="cancelled-text-item">Cancelled</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">
                    {data?.[9]?.canceledPercentage}%
                  </p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Sandbox}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    {data?.[9]?.delivered}
                  </p>
                  <p className="cancelled-text-item">Delivered</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Leftdownvector} />
                  <p className="cancelled-text-item-percentage-red">
                    {data?.[9]?.deliveredPercentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Ordersicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    {" "}
                    {data?.[9]?.orders}
                  </p>
                  <p className="cancelled-text-item">Orders</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">
                    {" "}
                    {data?.[9]?.ordersPercentage}%
                  </p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Pendingicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    {" "}
                    {data?.[9]?.pending}
                  </p>
                  <p className="cancelled-text-item">Pending</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">
                    {" "}
                    {data?.[9]?.pendingPercentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cancelled-delivered-container">
            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Revenueicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    ${data?.[9]?.revenue}
                  </p>
                  <p className="cancelled-text-item">Revenue</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Squereupright} />
                  <p className="cancelled-text-item-percentage">
                    {data?.[9]?.revenuePercentage}%
                  </p>
                </div>
              </div>
            </div>

            <div className="Cancelled-container">
              <div>
                <img
                  className="cancelled-img"
                  src={Refundedicon}
                  alt="cancelld icon"
                />
              </div>
              <div className="cancelled-text">
                <div className="container-32-cancelled">
                  <p className="cancelled-text-item-number">
                    {" "}
                    ${data?.[9]?.refunded}
                  </p>
                  <p className="cancelled-text-item">Refunded</p>
                </div>
                <div className="cancelled-text-item-container">
                  <img className="cancelled-text-item" src={Leftdownvector} />
                  <p className="cancelled-text-item-percentage-red">
                    {" "}
                    {data?.[9]?.refundedPercentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoices-right-container">
          <div className="invoices-right-container-dotmenu-container">
            <p>Invoices</p>
            <img src={Treedotmenu} alt="dot menu icon " />
          </div>
          <div className="warehousing-vertical-border"></div>
          <div className="users-invocing-container">
            <div className="table">
              <table className="table">
                <thead className="table-invoices-header-main">
                  <tr className="table-invoices-header">
                    <th className="table-invoices-header-content">No</th>
                    <th className="table-invoices-header-content">
                      Invoice ID
                    </th>
                    <th className="table-invoices-header-content">Customer</th>
                    <th className="table-invoices-header-content">Date</th>
                    <th className="table-invoices-header-content">Amount</th>
                    <th className="table-invoices-header-content">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr
                      key={invoice.invoiceId}
                      style={{ borderBottom: "1px solid #ddd" }}>
                      <td
                        className="table-body-content"
                        style={{ padding: "10px", textAlign: "center" }}>
                        {index + 1}
                      </td>
                      <td
                        className="table-body-content"
                        style={{ padding: "10px", textAlign: "center" }}>
                        {invoice.invoiceId}
                      </td>
                      {editInvoiceId === invoice.invoiceId ? (
                        <>
                          <td
                            className="table-body-content"
                            style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              type="text"
                              name="customer"
                              value={editFormData.customer}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td
                            className="table-body-content"
                            style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              type="date"
                              name="invoiceDate"
                              // ISO formatındaki tarih bilgisinin ilk 10 karakteri (YYYY-MM-DD)
                              value={editFormData.invoiceDate.slice(0, 10)}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td
                            className="table-body-content"
                            style={{ padding: "10px", textAlign: "center" }}>
                            <input
                              type="number"
                              name="amount"
                              value={editFormData.amount}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td
                            className="table-body-content action-button action-buttons"
                            style={{ padding: "10px", textAlign: "center" }}>
                            <button className="save" onClick={handleSaveClick}>
                              Save
                            </button>
                            <button
                              className="cancel"
                              onClick={handleCancelClick}>
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="table-body-content">
                            {invoice.customer}
                          </td>
                          <td
                            className="table-body-content"
                            style={{ padding: "10px", textAlign: "center" }}>
                            {new Date(invoice.invoiceDate).toLocaleDateString()}
                          </td>
                          <td
                            className="table-body-content"
                            style={{ padding: "10px", textAlign: "center" }}>
                            ${invoice.amount}
                          </td>
                          <td
                            className="table-body-content action-buttons"
                            style={{ padding: "10px", textAlign: "center" }}>
                            <img
                              className="table-buttons"
                              src={Editcon}
                              onClick={() => handleEditClick(invoice)}
                            />
                            <img
                              className="table-buttons"
                              src={Deleteicon}
                              onClick={() =>
                                handleDeleteClick(invoice.invoiceId)
                              }
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogistcsPage;
