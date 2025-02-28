import React from "react";
import "../Restaurant/style.css";
import { useRef, useState } from "react";
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
import Dailyordergraph from "../Restaurant/assets/trendingitems/dailyordergraph.svg";
import Vector from "../Home/assets/icons/Vector.svg";
import Reddown from "../Home/assets/icons/reddown.svg";
import Days from "../Restaurant/assets/trendingitems/Days.svg";
import Customreviewsgraph from "../Restaurant/assets/trendingitems/Custom-reviews-graph.svg";
import Blueellipse from "../Restaurant/assets/trendingitems/Blueellipse.svg";
import Ellipseorange from "../Restaurant/assets/trendingitems/Ellipseorange.svg";
import { Chart } from "chart.js/auto";
const TopSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://localhost:8088/api/RestaurantPage/TopSellingProducts?restaurantId=1"
        );
        if (!response.ok) {
          throw new Error("API call failed");
        }
        const result = await response.json();
        setProducts(result.slice(0, 4)); // Sadece ilk 4 ürünü al
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="topsellingproducs-container">
      <div className="topsellingproducs-container-header">
        <p>Top Selling Products</p>
        <img src={Treedotmenu} alt="menu" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="topsellingproducs-container-middle">
          {products.map((product, index) => (
            <div
              key={index}
              className="topsellingproducs-container-middle-content">
              <img
                className="topsellingproducs-container-middle-content-img"
                src={`http://localhost:8088${product.image}`} // Resim URL'sini düzelttim
                alt={product.name}
              />
              <div className="topsellingproducs-container-middle-content-text-container">
                <p className="topsellingproducs-container-middle-content-text">
                  {product.name}
                </p>
                <div className="stars-container">
                  <img src={Stars} alt="stars" />
                  <p>4/5</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="selling-products--button-container">
        <button className="selling-products--button">View All Products</button>
      </div>
    </div>
  );
};

const CustomReviews = () => {
  const [year, setYear] = useState("2025");
  const [reviewData, setReviewData] = useState(null);
  const [Download, setDownload] = useState();
  const chartRef = useRef(null); // Grafik için referans
  const chartInstance = useRef(null); // Chart örneğini saklamak için

  // Seçilen yıla göre API çağrısı yapılıyor.
  useEffect(() => {
    fetch(
      `http://localhost:8088/api/RestaurantPage/CustomerReviews?year=${year}&restaurantId=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
      })
      .catch((error) => console.error("API isteğinde hata:", error));
  }, [year]);

  // Grafik oluşturma efekti
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Eski grafiği temizle
    }

    const ctx = chartRef.current.getContext("2d");

    // Rastgele veri üret (12 ay için)
    const randomData = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 100)
    );

    chartInstance.current = new Chart(ctx, {
      type: "line", // Çizgi grafik
      data: {
        labels: [
          "Oca",
          "Şub",
          "Mar",
          "Nis",
          "May",
          "Haz",
          "Tem",
          "Ağu",
          "Eyl",
          "Eki",
          "Kas",
          "Ara",
        ],
        datasets: [
          {
            label: "Aylık Değerlendirmeler",
            data: randomData,
            borderColor: "#36A2EB",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Temizleme
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [year]); // Yıl değiştiğinde grafik yeniden oluşturulur

  // Yıl seçimi değiştiğinde state güncelleniyor.
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // download
  const handledownload = () => {
    fetch(
      `http://localhost:8088/api/RestaurantPage/CustomerReviewsDownload?year=${year}&restaurantId=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob(); // Dosyayı blob olarak alıyoruz.
      })
      .then((blob) => {
        // Blob için URL oluşturuyoruz.
        const url = window.URL.createObjectURL(blob);
        // İndirme işlemini tetiklemek için dinamik bir <a> etiketi oluşturuyoruz.
        const a = document.createElement("a");
        a.href = url;
        a.download = `CustomerReviewsReport_${year}.pdf`; // Dosya adı ve uzantısını backend'e göre ayarla.
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // Belleği temizliyoruz.
      })
      .catch((error) => console.error("Download API isteğinde hata:", error));
  };

  // API'den dönen monthOfYear dizisindeki boş verileri filtreleyelim.
  const filteredMonths =
    reviewData && reviewData.monthOfYear
      ? reviewData.monthOfYear.filter((m) => m.month && m.month.trim() !== "")
      : [];

  return (
    <div className="customer-reviews">
      <div className="reviews-header">
        <h2>Customer Reviews</h2>
        <img src={Treedotmenu} alt="Menu" />
      </div>
      <div className="border"></div>
      <div>
        <div className="filter-container">
          <select className="filter-select">
            <option>All Reviews</option>
          </select>
          <select
            className="filter-select"
            value={year}
            onChange={handleYearChange} // Burada handleYearChange kullanılıyor
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <button className="download-btn" onClick={handledownload}>
            Download Report
          </button>
        </div>
      </div>
      <div className="reviews-content">
        <div className="review-summary">
          <div className="positive-reviews">
            <div className="postove-reviews-height">
              <img src={Blueellipse} alt="Blue Ellipse" />
              <p>Positive Reviews</p>
            </div>
            <h3 className="postive-number">
              {reviewData ? reviewData.positiveReviews : "0"}
            </h3>
            <div className="flex-fromlastmonth">
              <button className="card-button">
                <img src={Vector} alt="vector" />
                <p>
                  {reviewData ? reviewData.positiveReviewsPercentage : "0"}%
                </p>
              </button>
              <p className="small">from last week</p>
            </div>
          </div>
          <div className="positive-reviews">
            <div className="postove-reviews-height-gap">
              <img src={Ellipseorange} alt="Blue Ellipse" />
              <p>Negative Reviews</p>
            </div>
            <h3 className="postive-number">
              {reviewData ? reviewData.negativeReviews : "0"}
            </h3>
            <div className="flex-fromlastmonth">
              <button className="card-button-red">
                <img src={Reddown} alt="vector" />
                <p>
                  {reviewData ? reviewData.negativeReviewsPercentage : "0"}%
                </p>
              </button>
              <p className="small">from last week</p>
            </div>
          </div>
        </div>
        <div className="reviews-graph">
          {/* <img> yerine <canvas> ekledik */}
          <canvas
            ref={chartRef}
            style={{ width: "100%", height: "240px" }}></canvas>
        </div>
      </div>
    </div>
  );
};
const TrendingItems = () => {
  const [month, setMonth] = useState("March");
  const [trendingItems, setTrendingItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Bir sayfada gösterilecek öğe sayısı

  // Ay değiştiğinde API çağrısı yapıyoruz
  useEffect(() => {
    fetchTrendingItems();
  }, [month]);

  // API çağrısı: Seçilen ay + sabit yıl "2025"
  const fetchTrendingItems = () => {
    const timestamp = encodeURIComponent(`${month} 2025`);
    const apiUrl = `http://localhost:8088/api/RestaurantPage/TrendingItems?timestamp=${timestamp}&restaurantId=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTrendingItems(data);
        setCurrentPage(1); // Yeni ay seçildiğinde sayfa sıfırlanır
      })
      .catch((error) => console.error("API isteğinde hata:", error));
  };

  // Sayfalama hesaplamaları
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = trendingItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(trendingItems.length / itemsPerPage);

  // Sayfa değiştirme fonksiyonları
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Ay seçimi değiştirildiğinde
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className="trending-items-container-left">
      {/* Başlık ve Ay Seçimi */}
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
          <select
            className="trending-items-container-left-header-left-select"
            value={month}
            onChange={handleMonthChange}>
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
          <img src={Treedotmenu} alt="Menu" />
        </div>
      </div>

      {/* Trending Items Listesi */}
      <div className="trending-items-container-middle">
        {currentItems.map((item, index) => {
          // API'den gelen image değeri ile tam URL oluşturuluyor
          const fullImageURL = `http://localhost:8088${item.image}`;
          return (
            <div
              key={index}
              className="trending-items-container-middle-container">
              <div className="trending-items-container-middle-container-img-container">
                <p className="hastag">#{index + 1}</p>
                <img
                  style={{ height: "87px", borderRadius: "10px" }}
                  src={fullImageURL}
                  alt={item.name}
                />
              </div>

              <div className="trending-items-container-middle-container-text">
                <p className="trending-items-container-middle-container-text-main">
                  MAIN COURSE
                </p>
                <p className="trending-items-container-middle-container-text-p">
                  {item.name}
                </p>
                <p className="trending-items-container-middle-container-text-price">
                  Stars: {item.stars}
                </p>
              </div>

              <div className="trending-items-container-middle-container-graph">
                <img src={Graph1} alt="Graph" />
                <div className="trending-items-container-middle-container-graph-text">
                  <p className="price">{item.stars}</p>
                  <p className="gray">Rating</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination: Önceki, Sayfa Numaraları, Sonraki */}
      <div className="trending-items-footer-button-container">
        <button
          className="trending-items-footer-button-previous"
          onClick={handlePrevious}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`trending-items-footer-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}

        <button
          className="trending-items-footer-button-next"
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const [timestamp, setTimestamp] = useState("today"); // Varsayılan olarak 'today' ayarlandı.
  const [data, setData] = useState(null);
  const handleClick = (value) => {
    setTimestamp(value); // Tıklanılan zaman periyoduna göre timestamp güncellenir.
    fetch(
      `http://localhost:8088/api/RestaurantPage/CurrentOrderSummary?timestamp=${value}&restaurantId=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("API isteğinde hata:", error));
  };
  return (
    <>
      <div className="order-summary-container">
        <div className="order-summary-container-header">
          <p>Current Order Summary</p>
          <img src={Treedotmenu} />
        </div>

        <div className="order-summary-container-middle-button-container">
          <button
            className={`order-summary-container-middle-button ${
              timestamp === "today"
                ? ""
                : "order-summary-container-middle-button-default"
            }`}
            onClick={() => handleClick("today")}>
            <p>Today</p>
          </button>

          <button
            className={`order-summary-container-middle-button ${
              timestamp === "weekly"
                ? ""
                : "order-summary-container-middle-button-default"
            }`}
            onClick={() => handleClick("weekly")}>
            <p>Weekly</p>
          </button>

          <button
            className={`order-summary-container-middle-button ${
              timestamp === "monthly"
                ? ""
                : "order-summary-container-middle-button-default"
            }`}
            onClick={() => handleClick("monthly")}>
            <p>Monthly</p>
          </button>

          <button
            className={`order-summary-container-middle-button ${
              timestamp === "yearly"
                ? ""
                : "order-summary-container-middle-button-default"
            }`}
            onClick={() => handleClick("yearly")}>
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
              {data?.delivered}
            </p>
            <p className="manage-order-button-container-text-item-delivered-d">
              Delivered
            </p>
          </div>
          <div className="manage-order-button-container-text-item-delivered">
            <p className="manage-order-button-container-text-item-delivered-p">
              {data?.onProcess}
            </p>
            <p className="manage-order-button-container-text-item-delivered-d">
              On Process
            </p>
          </div>
          <div className="manage-order-button-container-text-item-delivered">
            <p className="manage-order-button-container-text-item-delivered-p">
              {data?.newOrders}
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
                <p>Delivered ({data?.deliveredPercentage}%)</p>
                <p className="manage-order-container-last-progress-container-tex-price">
                  {data?.delivered}
                </p>
              </div>
              <img src={Greenprogressbar} />
            </div>

            <div className="manage-order-container-last-progress-container">
              <div className="manage-order-container-last-progress-container-text">
                <p>On Process ({data?.onProcessPercentage}%)</p>
                <p className="manage-order-container-last-progress-container-tex-price">
                  {data?.onProcess}
                </p>
              </div>
              <img src={Blueprogressbar} />
            </div>

            <div className="manage-order-container-last-progress-container">
              <div className="manage-order-container-last-progress-container-text">
                <p>New Orders ({data?.newOrdersPercentage}%)</p>
                <p className="manage-order-container-last-progress-container-tex-price">
                  {data?.newOrders}
                </p>
              </div>
              <img src={Yellowprogressbar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Restaurant = () => {
  const [data, setData] = useState(null);
  // Fatura (invoice) verilerini tutan state
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API linkleri (ilk 6 tanesi farklı veri, 7. URL fatura verilerini içeriyor)
  const apiLinks = [
    "http://localhost:8088/api/RestaurantPage/QuickRewiewTop?restaurantId=1",
    "http://localhost:8088/api/RestaurantPage/QuickRewiewBottom?restaurantId=1",
    "http://localhost:8088/api/RestaurantPage/TodaysLiveOrders?restaurantId=1",
    "http://localhost:8088/api/RestaurantPage/TopSellingProducts?restaurantId=1",
    "http://localhost:8088/api/RestaurantPage/DailyOrderReport?restaurantId=1",
  ];

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
        // const invoiceData = combinedData.slice(10);
        // setInvoices(invoiceData);
        console.log("Combined Data:", combinedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="header-container">
        <div className="header-container-income">
          <img src={Greengraph} alt="green graph icon" />
          <div className="header-container-income-text">
            <div className="header-container-income-text-common-container">
              <p className="header-container-income-text-income">Income</p>
              <p className="header-container-income-text-price">
                ${data?.[0].income}
              </p>
            </div>

            <div className="header-container-income-text-button">
              <button className="card-button">
                <img src={Vector} alt="vector" />
                <p>{data?.[0].incomePercentage}%</p>
              </button>
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
              <p className="header-container-income-text-price">
                ${data?.[0].expense}
              </p>
            </div>

            <div className="header-container-income-text-button">
              <button className="card-button-red">
                <img src={Reddown} alt="vector" />
                <p>{data?.[0]?.expensePercentage}%</p>
              </button>
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
            <p className="total-income-container-price">
              ${data?.[0].totalIncome}
            </p>
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
            <p className="order-complated-container-text-item-price">
              {data?.[1].totalOrdersCompleted}
            </p>
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
            <p className="order-complated-container-text-item-price">
              {data?.[1].totalOrdersDelivered}
            </p>
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
            <p className="order-complated-container-text-item-price">
              {data?.[1].totalOrdersCanceled}
            </p>
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
            <p className="order-complated-container-text-item-price">
              {data?.[1].totalOrdersPending}
            </p>
            <p className="order-complated-container-text-item-text">
              Total Order Pending
            </p>
          </div>
        </div>
      </section>

      <section className="order-summary-section-container">
        <OrderSummary />

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
                    {data?.[2].name}
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    {data?.[2].date}
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $ {data?.[2].amount}
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    {data?.[3].name}
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    {data?.[3].date}
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    ${data?.[3].amount}
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    {data?.[6].name}
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    <p>02:30 PM</p>
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $14$
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>

            <div className="crossbar-container">
              <div className="crossbar-container-content">
                <div className="crossbar-container-content-text">
                  <p className="crossbar-container-content-text-order">
                    {data?.[7].name}
                  </p>
                  <p className="crossbar-container-content-text-hour">
                    <p>03:46 PM</p>
                  </p>
                </div>
                <div className="crossbar-container-content-text-price-container">
                  <p className="crossbar-container-content-text-price-container-p">
                    $12
                  </p>
                  <img className="Arrowdefault" src={Arrowdefault} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopSellingProducts />
      </section>

      <section className="trending-items-section-container">
        <TrendingItems />

        <div className="dashboard-container">
          {/* Daily Order Report Section */}
          <div className="order-report">
            <div className="order-header">
              <div className="order-header-left">
                <h2 className="small-height-one">Daily Order Report</h2>
                <p className="small-height">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex">
                <button className="download-btn">
                  {/* <img alt="Download Icon" />  */}
                  Download Report
                </button>
                <img src={Treedotmenu} />
              </div>
            </div>
            <div className="order-graph">
              <div className="relative">
                <img src={Dailyordergraph} alt="Order Graph" />
                <img src={Days} alt="Days" />

                <div className="order-stats absolute">
                  <h3 className="small-height-one">{data?.[35].orders}</h3>
                  <p className="small-height"> {data?.[35].date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <CustomReviews />
        </div>
      </section>
    </>
  );
};

export default Restaurant;
