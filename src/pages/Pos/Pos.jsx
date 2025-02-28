import React from "react";
import "../Pos/style.css";
import Treedot from "../Sidebar/assets/icons/dot.svg";
import { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import Popularsearch from "./assets/header/popularsearch.svg";
import Popularsearcharrows from "./assets/header/popularsearcharrows.svg";
import Salesbycategory from "./assets/header/salesbycategory.svg";
import Salesoverviewgraph from "./assets/header/salesoverviewgraph.svg";
import Amazon from "./assets/totalorders/amazon.svg";
import Instagram from "./assets/totalorders/instagram.svg";
import Facebook from "./assets/totalorders/facebook.svg";
import Tiktopk from "./assets/totalorders/tiktopk.svg";
import ArrowSquareDownRight from "./assets/totalorders/arrowsquaredownright.png";
import ArrowSquareDownLeft from "./assets/totalorders/arrowsquaredownright.png";
import Greenupmonthly from "./assets/totalorders/greenupmonthly.svg";
import Growthgreen from "./assets/totalorders/growthgreen.svg";
import Greensquareup from "./assets/totalorders/greensquareup.svg";
import Plus from "./assets/totalorders/plus.svg";
import Totalordersbasket from "./assets/totalorders/totalordersbasket.svg";
import Totalordersbiggraph from "./assets/totalorders/totalordersbiggraph.svg";
import Totalordersdollar from "./assets/totalorders/totalordersdollar.svg";
import Vectordownred from "./assets/totalorders/vectordownred.svg";
import Vectorup from "./assets/totalorders/vectorup.svg";
import Background from "./assets/header/background.svg";
import Vectorupgreen from "./assets/totalorders/vectorupgreen.svg";
import Mastercard from "../Banking/assets/cards/mastercard.svg";
import WaweElements from "../Banking/assets/cards/waveElements.svg";
import Progressblue from "./assets/vistors/progressblue.svg";
import Progressoramge from "./assets/vistors/progressorange.svg";
import Vistorsgraph from "./assets/vistors/vistorsgraph.svg";
import Vistors from "./assets/vistors/vistors.svg";
import Cargobox from "./assets/vistors/cargobox.svg";
import Truckbox from "./assets/vistors/truckbox.svg";
import Planebox from "./assets/vistors/planebox.svg";
import Lines from "./assets/header/Lines.svg";
import Labels from "./assets/header/y-labels.svg";

const TotalOrdersByPlatform = () => {
  const chartRef = useRef(null); // Grafik için referans
  const chartInstance = useRef(null); // Chart örneğini saklamak için

  // Grafik oluşturma efekti
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Eski grafiği temizle
    }

    const ctx = chartRef.current.getContext("2d");

    // Platform verileri
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Zaman dilimleri
      datasets: [
        {
          label: "Instagram",
          data: [45, 50, 60, 70, 65, 75, 80], // Instagram verileri
          borderColor: "#36A2EB", // Mavi
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "TikTok",
          data: [25, 30, 35, 40, 45, 50, 55], // TikTok verileri
          borderColor: "#FF6384", // Kırmızı
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "Facebook",
          data: [15, 20, 25, 30, 35, 40, 45], // Facebook verileri
          borderColor: "#FF9F40", // Turuncu
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "Amazon",
          data: [10, 15, 20, 25, 30, 35, 40], // Amazon verileri
          borderColor: "#4BC0C0", // Yeşil
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    };

    // Yeni grafik oluştur
    chartInstance.current = new Chart(ctx, {
      type: "line", // Çizgi grafik
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top", // Legend'ı üstte göster
          },
          title: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Orders (in K)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Months",
            },
          },
        },
      },
    });

    // Temizleme
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Sadece ilk render'da çalışır

  return (
    <div className="total-oreders-right-container">
      <div className="total-oreders-right-container-header">
        <p>Total Orders by Platform</p>
        <button className="total-oreders-right-container-header-button">
          <p>Platforms</p>
        </button>
      </div>
      <div className="total-oreders-right-container-middle">
        <div className="total-oreders-right-container-middle-content">
          <img src={Instagram} alt="Instagram" />
          <div>
            <div>
              <p className="height">Instagram</p>
            </div>
            <div className="flex">
              <p className="bold-middle">500,26K</p>
              <img src={Greensquareup} alt="Increase" />
              <p className="green">+35</p>
            </div>
          </div>
        </div>
        <div className="total-oreders-right-container-middle-content">
          <img src={Tiktopk} alt="TikTok" />
          <div>
            <div>
              <p className="height">TikTok</p>
            </div>
            <div className="flex">
              <p className="bold-middle">130,35K</p>
              <img src={ArrowSquareDownLeft} alt="Decrease" />
              <p className="red">+5</p>
            </div>
          </div>
        </div>
        <div className="total-oreders-right-container-middle-content">
          <img src={Facebook} alt="Facebook" />
          <div>
            <div>
              <p className="height">Facebook</p>
            </div>
            <div className="flex">
              <p className="bold-middle">280,96K</p>
              <img src={Greensquareup} alt="Increase" />
              <p className="green">+10</p>
            </div>
          </div>
        </div>
        <div className="total-oreders-right-container-middle-content">
          <img src={Amazon} alt="Amazon" />
          <div>
            <div>
              <p className="height">Amazon</p>
            </div>
            <div className="flex">
              <p className="bold-middle">400,6K</p>
              <img src={Greensquareup} alt="Increase" />
              <p className="green">+40</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <img> yerine <canvas> ekledik */}
        <canvas 
          ref={chartRef}
          style={{ width: "100%", height: "400px" ,marginTop:"-20px"}}></canvas>
        {/* <div className="big-graph-content">
          <div>
            <p className="bold-little-special">Platform view distribution</p>
            <p className="gray-little">April, 30 2026</p>
          </div>
          <div className="big-graph-content-text-container">
            <div className="big-graph-content-text">
              <div className="flex">
                <div className="div-light-blue"></div>
                <div>
                  <p className="gray">Instagram</p>
                  <p>45%</p>
                </div>
              </div>
              <div className="flex">
                <div className="div-red"></div>
                <div>
                  <p className="gray">TikTok</p>
                  <p>25%</p>
                </div>
              </div>
            </div>
            <div className="big-graph-content-text">
              <div className="flex">
                <div className="div-orange"></div>
                <div>
                  <p className="gray">Facebook</p>
                  <p>15%</p>
                </div>
              </div>
              <div className="flex">
                <div className="div-green"></div>
                <div>
                  <p className="gray">Amazon</p>
                  <p>15%</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
const RecentActivity = () => {
  const [activities, setActivities] = useState([]);

  // API'den veriyi çekme
  const fetchRecentActivity = async () => {
    try {
      const response = await fetch(
        "http://localhost:8088/api/PointOfSalesPage/RecentActivity?marketId=1"
      );
      if (!response.ok) {
        throw new Error("Veri çekme hatası");
      }
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Recent activity verisi çekilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  // Verileri tarih bazında gruplandırma (YYYY-MM-DD formatında)
  const groupedActivities = activities.reduce((groups, activity) => {
    const dateKey = new Date(activity.date).toISOString().split("T")[0];
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(activity);
    return groups;
  }, {});

  // Tarihleri ters sırada (son gün önce) listeleme
  const sortedDates = Object.keys(groupedActivities).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="recent-activity">
      <div className="recent-activity-header">
        <p>Recent Activity</p>
        <img src={Treedot} alt="Menu" />
      </div>
      <div className="scroll">
        {sortedDates.map((dateKey) => (
          <div className="recent-activity-container-contents" key={dateKey}>
            {/* Tarih başlığı, gün yerine data'dan gelen tarih */}
            <p>{dateKey}</p>
            {groupedActivities[dateKey].map((activity) => (
              <div key={activity.id} className="recent-activiy-container-box">
                <p>{activity.description}</p>
                {/* Saat bilgisini HH:MM:SS formatında gösterme */}
                <p className="gray">
                  {new Date(activity.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
const SalesActivity = () => {
  const [salesActivity, setSalesActivity] = useState([]);
  const [month, setMonth] = useState("January"); // Varsayılan ay
  const marketId = 1;

  // API'den verileri çekme fonksiyonu
  const fetchSalesActivity = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/PointOfSalesPage/SalesActivity?month=${encodeURIComponent(
          month
        )}&marketId=${marketId}`
      );
      if (!response.ok) {
        throw new Error("Veri çekme hatası");
      }
      const data = await response.json();
      setSalesActivity(data);
    } catch (error) {
      console.error("Sales activity verisi çekilirken hata oluştu:", error);
    }
  };

  // Ay değeri değiştiğinde veriyi yeniden çek
  useEffect(() => {
    fetchSalesActivity();
  }, [month]);

  // Ay seçimi değiştiğinde state güncellemesi
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className="sales-activity">
      <div className="sales-acitivity-header">
        <p>Sales Activity</p>
        <select value={month} onChange={handleMonthChange}>
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
      </div>

      {/* 1. Blok - To be Packed */}
      <div className="flex-special">
        <img src={Cargobox} alt="Cargobox" />
        <div>
          <p className="height">
            {salesActivity[0] ? salesActivity[0].status : "Loading..."}
          </p>
          <div className="flex">
            <p className="bold-little">
              {salesActivity[0]
                ? salesActivity[0].amount.toLocaleString()
                : "0"}
            </p>
            <img src={Greensquareup} alt="Arrow Up" />
            <p className="green">
              {salesActivity[0]
                ? salesActivity[0].percentage >= 0
                  ? `+${salesActivity[0].percentage}%`
                  : `${salesActivity[0].percentage}%`
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Blok - To be Shipped */}
      <div className="flex-special">
        <img src={Planebox} alt="Planebox" />
        <div>
          <p className="height">
            {salesActivity[1] ? salesActivity[1].status : "Loading..."}
          </p>
          <div className="flex">
            <p className="bold-little">
              {salesActivity[1]
                ? salesActivity[1].amount.toLocaleString()
                : "0"}
            </p>
            <img src={ArrowSquareDownLeft} alt="Arrow Down" />
            <p className="red">
              {salesActivity[1]
                ? salesActivity[1].percentage >= 0
                  ? `+${salesActivity[1].percentage}%`
                  : `${salesActivity[1].percentage}%`
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Blok - To be Delivered */}
      <div className="flex-special">
        <img src={Truckbox} alt="Truckbox" />
        <div>
          <p className="height">
            {salesActivity[2] ? salesActivity[2].status : "Loading..."}
          </p>
          <div className="flex">
            <p className="bold-little">
              {salesActivity[2]
                ? salesActivity[2].amount.toLocaleString()
                : "0"}
            </p>
            <img src={Greensquareup} alt="Arrow Up" />
            <p className="green">
              {salesActivity[2]
                ? salesActivity[2].percentage >= 0
                  ? `+${salesActivity[2].percentage}%`
                  : `${salesActivity[2].percentage}%`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const SalesByCatagory = () => {
  const [salesData, setSalesData] = useState([]);
  const [timestamp, setTimestamp] = useState("Last Week"); // Varsayılan seçim
  const marketId = 1;

  const fetchSalesData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/api/PointOfSalesPage/SalesByCategory?timestamp=${encodeURIComponent(
          timestamp
        )}&marketId=${marketId}`
      );
      if (!response.ok) {
        throw new Error("Veri çekme hatası");
      }
      const data = await response.json();
      setSalesData(data);
    } catch (error) {
      console.error("Veri çekilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, [timestamp]);

  const handleTimestampChange = (event) => {
    setTimestamp(event.target.value);
  };

  return (
    <div className="sales-by-category">
      <div className="sales-by-catagory-header">
        <p>Sales by Category</p>
        <select
          className="input-select"
          value={timestamp}
          onChange={handleTimestampChange}>
          <option value="Last Week">Last Week</option>
          <option value="Last Month">Last Month</option>
          <option value="Last Year">Last Year</option>
        </select>
      </div>
      <div className="border-vertical"></div>
      <div className="sales-by-catagory-body">
        <div className="sales-by-catagory-text">
          <div className="sales-by-catagory-text-container">
            <div className="div-blue"></div>
            <div>
              <p>
                {salesData[0]
                  ? `${salesData[0].categoryName} (${salesData[0].salePercentage}%)`
                  : "Loading..."}
              </p>
              <p className="gray-text">
                {salesData[0]
                  ? `${salesData[0].categoryProducts} Category Products`
                  : ""}
              </p>
            </div>
          </div>
          <div className="sales-by-catagory-text-container">
            <div className="div-light-blue"></div>
            <div>
              <p>
                {salesData[3]
                  ? `${salesData[3].categoryName} (${salesData[3].salePercentage}%)`
                  : "Loading..."}
              </p>
              <p className="gray-text">
                {salesData[3]
                  ? `${salesData[3].categoryProducts} Category Products`
                  : ""}
              </p>
            </div>
          </div>
          <div className="sales-by-catagory-text-container">
            <div className="div-orange"></div>
            <div>
              <p>
                {salesData[2]
                  ? `${salesData[2].categoryName} (${salesData[2].salePercentage}%)`
                  : "Loading..."}
              </p>
              <p className="gray-text">
                {salesData[2]
                  ? `${salesData[2].categoryProducts} Category Products`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="border-horizontal"></div>
        <div className="sales-by-catagory-container">
          <img className="background" src={Background} alt="Background" />
          <div className="background-text">
            <p className="catagoryname">
              {salesData[2] ? `${salesData[2].categoryName} ` : "Loading..."}
            </p>
            <p className="catagoryname">
              {salesData[2]
                ? `(${salesData[2].salePercentage}%) `
                : "Loading..."}
            </p>
          </div>
          <img
            className="salesbycatagoryimg"
            src={Salesbycategory}
            alt="Sales by Category"
          />
        </div>
      </div>
    </div>
  );
};

const Vistorsfunction = () => {
  const [selectedTimestamp, setSelectedTimestamp] = useState("Weekly");
  const chartRef = useRef(null); // Grafik için referans
  const chartInstance = useRef(null); // Chart örneğini saklamak için

  // Rastgele veri üretme fonksiyonu
  const generateRandomData = (count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  };

  // Grafik oluşturma efekti
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Eski grafiği temizle
    }

    const ctx = chartRef.current.getContext("2d");

    // Zaman dilimine göre etiketler ve verileri belirle
    let labels, data;
    switch (selectedTimestamp) {
      case "Weekly":
        labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        data = generateRandomData(7); // 7 gün için rastgele veri
        break;
      case "Monthly":
        labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
        data = generateRandomData(30); // 30 gün için rastgele veri
        break;
      case "Yearly":
        labels = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        data = generateRandomData(12); // 12 ay için rastgele veri
        break;
      default:
        labels = [];
        data = [];
    }

    // Yeni grafik oluştur
    chartInstance.current = new Chart(ctx, {
      type: "line", // Çizgi grafik
      data: {
        labels: labels,
        datasets: [
          {
            label: "Visitors",
            data: data,
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
  }, [selectedTimestamp]); // Zaman dilimi değiştiğinde grafik yeniden oluşturulur

  return (
    <div className="vistors-container">
      <div className="vistors-header">
        <p>Visitors</p>
        <div className="flex">
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Weekly")}>
            Weekly
          </button>
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Monthly")}>
            Monthly
          </button>
          <button
            className="vistors-buttons"
            onClick={() => setSelectedTimestamp("Yearly")}>
            Yearly
          </button>
        </div>
      </div>
      <div className="vistors-container-middle">
        <div>
          <div className="flex">
            <div className="flex-special">
              <p className="gray">New Visitors</p>
              <p className="green">+25%</p> {/* Rastgele değer */}
            </div>
            <div>
              <p className="gray-little-special">1,234</p>{" "}
              {/* Rastgele değer */}
            </div>
          </div>
          <div>
            <img src={Progressblue} alt="Progress Blue" />
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex-special">
              <p className="gray">Returning</p>
              <p className="red">-10%</p> {/* Rastgele değer */}
            </div>
            <div>
              <p className="gray-little-special">567</p> {/* Rastgele değer */}
            </div>
          </div>
          <div>
            <img src={Progressoramge} alt="Progress Orange" />
          </div>
        </div>
      </div>
      <div>
        {/* <img> yerine <canvas> ekledik */}
        <canvas
          ref={chartRef}
          style={{ width: "100%", height: "200px" }}></canvas>
      </div>
    </div>
  );
};

const ProductSales = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ month: "January", year: "2024" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Ay ve yıl değiştikçe API'den verileri çekiyoruz.
  useEffect(() => {
    if (filters.month && filters.year) {
      fetch(
        `http://localhost:8088/api/PointOfSalesPage/ProductSales?month=${filters.month}&year=${filters.year}&marketId=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) =>
          console.error("Error fetching product sales:", error)
        );
    }
  }, [filters.month, filters.year]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Her filtre değişiminde sayfa numarasını sıfırlıyoruz.
    setCurrentPage(1);
  };

  // Sayfalama işlemi
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="transaction-section-special-secondary">
      <div className="transaction-container-special">
        <div className="transaction-container-header">
          <div>
            <p className="transaction-p">Product Sales</p>
          </div>
          {/* Ay ve yıl select'leri, dinamik olarak API isteğini tetikler */}
          <div>
            <select
              name="month"
              value={filters.month}
              onChange={handleFilterChange}>
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
              name="year"
              value={filters.year}
              onChange={handleFilterChange}>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
        </div>

        <div className="select-input-container-pop"></div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>stok</th>
              <th>price</th>
              <th>sales</th>
              <th>earnings</th>
            </tr>
          </thead>
          <tbody className="tbdoy">
            {currentData.length > 0 ? (
              currentData.map((product, index) => (
                <tr key={startIndex + index}>
                  {/* Eğer orderId yoksa, index numarasını kullanıyoruz */}
                  <td>{product.orderId || startIndex + index + 1}</td>
                  <td>{product.productName}</td>
                  <div className="table-td-flex">
                    <button
                      className={
                        product.status === "Available"
                          ? "status-green"
                          : product.status === "On Review"
                          ? "paid-special-secondary"
                          : product.status === "Out of Stock"
                          ? "refunded-special-secondary"
                          : ""
                      }>
                      {product.status}
                    </button>
                  </div>
                  <td className="gray">{product.stock}</td>
                  <td className="bold-little">${product.price}</td>
                  <td className="gray">{product.sales}</td>
                  <td className="bold-little">{product.earnings}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No product sales found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <button
            className="previous"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}>
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            className="next"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
const LatestTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  // Burada name filtresi müşteri adına göre, date ise API çağrısı için kullanılacak
  const [filters, setFilters] = useState({ name: "", date: "", status: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // filters.date değiştiğinde API çağrısı tetikleniyor
  useEffect(() => {
    if (filters.date) {
      fetch(
        `http://localhost:8088/api/PointOfSalesPage/Transactions?date=${filters.date}T00%3A00%3A00Z&marketId=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
        })
        .catch((error) => console.error("Error fetching transactions:", error));
    }
  }, [filters.date]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Her filtre değiştiğinde sayfa numarasını sıfırla
    setCurrentPage(1);
  };

  // Gelen veride filtreleme; burada müşteri ismine ve statüye göre filtreleme yapıyoruz
  const filteredTransactions = transactions.filter((transaction) => {
    const customerMatch = filters.name
      ? transaction.customer.toLowerCase().includes(filters.name.toLowerCase())
      : true;
    const statusMatch = filters.status
      ? transaction.status.toLowerCase() === filters.status.toLowerCase()
      : true;
    return customerMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="transaction-section-special">
      <div className="transaction-container-special">
        <div className="transaction-container-header">
          <div>
            <p className="transaction-p">Transactions</p>
            <p className="height">
              Lorem ipsum dolor sit amet consectetur adipi
            </p>
          </div>
          {/* Tarih seçimi API çağrısını tetikler */}
          <input
            className="input-date"
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
          {/* İstersen diğer filtreler için ek inputlar da ekleyebilirsin */}
        </div>

        <div className="select-input-container-pop"></div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody className="tbdoy">
            {currentData.length > 0 ? (
              currentData.map((transaction, index) => (
                <tr key={startIndex + index}>
                  <td>{transaction.orderId || startIndex + index}</td>
                  <td>{transaction.productName}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.total}</td>
                  <td>
                    <div className="table-td-flex">
                      <button
                        className={
                          transaction.status === "To be Packed"
                            ? "pendingred-special"
                            : transaction.status === "To be Delivered"
                            ? "paid-special"
                            : transaction.status === "To be Shipped"
                            ? "refunded-special"
                            : ""
                        }>
                        {transaction.status}
                      </button>
                    </div>
                  </td>
                  <td>{transaction.customer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <div className="table-footer-buttons">
            <button
              className="previous"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}>
              Previous
            </button>
            <button
              className="next"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Pos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiLinks = [
    "http://localhost:8088/api/PointOfSalesPage/PopularSearch?marketId=1",
    "http://localhost:8088/api/PointOfSalesPage/QuickView?marketId=1",
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
        const combinedData = responses.flat();
        setData(combinedData);
        console.log(combinedData);
        // İlk 10 öğe farklı veriler ise, faturalar 11. öğeden (index 10) başlıyor:
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // selectedValue değiştiğinde API çağrısını tekrar yap

  return (
    <>
      <section className="header-section-pos">
        <div className="header-section-left">
          <div className="header-section-pos-left">
            <div className="header-section-pos-left-sales-overwiev">
              <div className="header-section-pos-left-sales-overwiev-header">
                <p>Sales Overview by Formula</p>
                <img src={Treedot} />
              </div>
              <div className="sales-animation-graph">
                {/* <img src={Salesoverviewgraph} /> */}
                <img src={Labels} />
                <div className="sales-animation-graph-container">
                  <img className="lines" src={Lines} />
                  <div className="third-columns-container">
                    <img className="lines" src={Lines} />

                    <div className="columns-container">
                      <div className="blue-column"></div>
                      <div className="light-blue-column"></div>
                      <div className="orange-column"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-secondary"></div>
                      <div className="light-blue-column-secondary"></div>
                      <div className="orange-column-secondary"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-third"></div>
                      <div className="light-blue-column-third"></div>
                      <div className="orange-column-third"></div>
                    </div>

                    <div className="columns-container">
                      <div className="blue-column-fourth"></div>
                      <div className="light-blue-column-fourth"></div>
                      <div className="orange-column-fourth"></div>
                    </div>
                    <div className="columns-container">
                      <div className="blue-column-fives"></div>
                      <div className="light-blue-column-fives"></div>
                      <div className="orange-column-fives"></div>
                    </div>
                  </div>
                  <div className="rows-container">
                    <p>Jan</p>
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                    <p>Jun</p>
                  </div>
                </div>
              </div>
              <div className="flex-space-between">
                <div className="flex">
                  <div className="circle-blue"></div>
                  <p>Sales</p>
                </div>
                <div className="flex">
                  <div className="circle-light-blue"></div>
                  <p>Gross Margin</p>
                </div>
                <div className="flex">
                  <div className="circle-orange"></div>
                  <p>Net Profit</p>
                </div>
              </div>
            </div>
          </div>

          <SalesByCatagory />
        </div>
        <div className="header-section-right">
          <div className="card-total-orders">
            <img className="wave-elemnts" src={WaweElements} />
            <div className="card-main-walet">
              <p className="card-main-wallet-item">
                {data?.[0]?.customer.customerName}
              </p>
              <p className="card-price-item">{data?.[0]?.customer.balance}$</p>
            </div>
            <div className="card-id">
              <p className="id">{data?.[0]?.customer.cardNumber}</p>
              <img src={Mastercard} />
            </div>
          </div>
          <div>
            <div className="popular-serch-header">
              <p>Popular Search</p>
              <img src={Treedot} />
            </div>
            <div className="popular-serch-img">
              <img src={Popularsearch} />
              <img className="popularsearcharrows" src={Popularsearcharrows} />
              <p className="popularsearcharrows-texts-blue">
                {data?.[0]?.categories?.[0]?.salePercentage}%
              </p>
              <p className="popularsearcharrows-texts-orange">
                {data?.[0]?.categories?.[1]?.salePercentage}%
              </p>
              <p className="popularsearcharrows-texts-red">
                {data?.[0]?.categories?.[2]?.salePercentage}%
              </p>
              <p className="popularsearcharrows-texts-green">
                {data?.[0]?.categories?.[3]?.salePercentage}%
              </p>
              <p className="popularsearcharrows-texts-light-blue">
                {data?.[0]?.categories?.[4]?.salePercentage}%
              </p>
            </div>
            <div className="dots-container-left">
              <div>
                <div className="dots-container-left-colorw">
                  <div className="blue-squere"></div>
                  <p>{data?.[0]?.categories?.[0]?.categoryName}</p>
                </div>
                <div className="dots-container-left-colorw">
                  <div className="green-squere"></div>
                  <p>{data?.[0]?.categories?.[1]?.categoryName}</p>
                </div>
                <div className="dots-container-left-colorw">
                  <div className="red-squere"></div>
                  <p>{data?.[0]?.categories?.[2]?.categoryName}</p>
                </div>
              </div>
              <div>
                <div className="dots-container-left-colorw">
                  <div className="orange-squere"></div>
                  <p>{data?.[0]?.categories?.[3]?.categoryName}</p>
                </div>
                <div>
                  <div className="dots-container-left-colorw">
                    <div className="light-squere"></div>
                    <p>{data?.[0]?.categories?.[4]?.categoryName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-header-tags-container">
              <div className="footer-header-tags-container">
                <p>Top 3 Popular Tags</p>
                <img src={Treedot} />
              </div>
            </div>
            <div className="flex left20px">
              <button className="gray-button-tags">
                # <p>{data?.[0]?.categories?.[0]?.categoryName}</p>
              </button>{" "}
              <button className="gray-button-tags">
                # <p>{data?.[0]?.categories?.[4]?.categoryName}</p>
              </button>{" "}
              <button className="gray-button-tags">
                # <p>{data?.[0]?.categories?.[2]?.categoryName}</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <LatestTransactions />

      <section className="Total-orders-section">
        <div className="total-orders-left-container">
          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Totalordersbasket} />
              <p>Total Orders</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">
                {data?.[1]?.totalOrders}
              </p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-blue">
                <img src={Vectorup} />
                {data?.[1]?.totalOrdersPercentage}%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>

          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Totalordersdollar} />
              <p>Total Orders</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">
                {data?.[1]?.totalSales}
              </p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-red">
                <img src={Vectordownred} />
                {data?.[1]?.totalSalesPercentage}%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>

          <div className="total-orders-left-content">
            <div className="total-orders-left-content-header">
              <img src={Growthgreen} />
              <p>Monthly Growth</p>
            </div>
            <div className="total-orders-content-big">
              <p className="total-orders-content-big-p">
                {data?.[1]?.monthlyGrowth}
              </p>
            </div>

            <div className="button-dark-container">
              <button className="button-dark-green">
                <img src={Vectorupgreen} />
                {data?.[1]?.monthlyGrowthPercentage}%
              </button>
              <p className="gray">higher than last month</p>
            </div>
          </div>
        </div>
        <TotalOrdersByPlatform />
      </section>

      <section className="product-sales-section-main">
        <section className="product-sales-section">
          <ProductSales />
          <div className="product-sales-section-middle">
            <Vistorsfunction />
            <SalesActivity />
          </div>
        </section>

        <RecentActivity />
      </section>
    </>
  );
};

export default Pos;
