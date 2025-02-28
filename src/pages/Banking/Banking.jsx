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
import Eye from "../Invoicing/assets/list/Eye.svg";
import Edit from "../Invoicing/assets/list/Edit.svg";
import Printer from "../Invoicing/assets/list/Printer.svg";
import Blueprogress from "./assets/spending/blueprogress.svg";
import Greenprogress from "./assets/spending/greenprogress.svg";
import Yellowprogress from "./assets/spending/yellowprogress.svg";
import Lightblueprogress from "./assets/spending/lightblueprogress.svg";
import { React, useState, useEffect } from "react";
import Statementhgraph from "./assets/spending/statementsgraph.svg";
import Statementharrows from "./assets/spending/statementharrows.svg";
const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all"); // varsayılan tüm işlemler
  const [currentPage, setCurrentPage] = useState(0);
  const [editTransaction, setEditTransaction] = useState(null); // düzenleme modundaki işlem
  const pageSize = 6;

  useEffect(() => {
    fetch(
      `http://localhost:8088/api/BankingPage/PreviousTransactions?timestamp=${filter}&userId=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, [filter]);

  // Tarih formatlama (display için)
  const formatDate = (isoString) => {
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
  };

  // Filtreleme fonksiyonu (today, weekly, monthly, yearly)
  const filterTransactions = (transactions, filter) => {
    const now = new Date();
    if (filter === "today") {
      return transactions.filter((tx) => {
        const txDate = new Date(tx.date);
        return txDate.toDateString() === now.toDateString();
      });
    } else if (filter === "weekly") {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return transactions.filter((tx) => {
        const txDate = new Date(tx.date);
        return txDate >= startOfWeek && txDate <= endOfWeek;
      });
    } else if (filter === "monthly") {
      return transactions.filter((tx) => {
        const txDate = new Date(tx.date);
        return (
          txDate.getMonth() === now.getMonth() &&
          txDate.getFullYear() === now.getFullYear()
        );
      });
    } else if (filter === "yearly") {
      return transactions.filter((tx) => {
        const txDate = new Date(tx.date);
        return txDate.getFullYear() === now.getFullYear();
      });
    } else {
      return transactions;
    }
  };

  const filteredTransactions = filterTransactions(transactions, filter);
  const totalPages = Math.ceil(filteredTransactions.length / pageSize);
  const displayedTransactions = filteredTransactions.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  // Filtre butonlarına tıklandığında
  const handleFilterClick = (filterName) => {
    setFilter(filterName); // Filtre değerini güncelle
  };

  // Sayfalama
  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < filteredTransactions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Edit butonuna tıklandığında ilgili işlem düzenleme moduna alınır
  const handleEditClick = (transaction) => {
    setEditTransaction({ ...transaction });
  };

  // Input alanlarındaki değişiklikleri yakalar
  const handleInputChange = (e, field) => {
    setEditTransaction({
      ...editTransaction,
      [field]: e.target.value,
    });
  };
  const handleSaveClick = (editedTransaction) => {
    // Eğer status boşsa "active" olarak gönderiyoruz.
    const status = editedTransaction.status
      ? editedTransaction.status
      : "active";

    // Tarihi ISO formatına çeviriyoruz.
    const formattedDate = new Date(editedTransaction.date).toISOString();

    // API URL'sine query parametresi ekleyerek, transactionId'yi dahil ediyoruz.
    const url = `http://localhost:8088/api/BankingPage/PreviousTransactionsEdit?transactionId=${editedTransaction.id}`;

    // API'nin beklediği alan isimleriyle payload'u oluşturuyoruz.
    const payload = {
      id: editedTransaction.id, // API örneğinde "id"
      name: editedTransaction.name, // API örneğinde "name"
      date: formattedDate, // ISO formatında tarih
      time: editedTransaction.time, // Zaman (örn. "09:37")
      category: editedTransaction.category, // Kategori
      amount: editedTransaction.amount, // Miktar
      status: status, // Geçerli bir status değeri (örn. "active")
      isIncome: editedTransaction.isIncome, // Gelir/gider bilgisi
      // userId: 1, // API body içinde beklenmiyorsa eklemeyin.
    };

    console.log("Sending payload:", payload);

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // JSON formatında veri gönderiyoruz
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.status === 204) {
          return {}; // No Content durumunda boş obje döndürüyoruz.
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        // Güncellenen veriyi transactions dizisinde güncelle
        setTransactions((prevTransactions) =>
          prevTransactions.map((tx) =>
            tx.id === editedTransaction.id ? editedTransaction : tx
          )
        );
        setEditTransaction(null);
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      });
  };
  return (
    <div>
      {/* Üst başlık ve filtre butonları */}
      <div className="Previous-Transactions-container-header">
        <div className="Previous-Transactions-container-header-left">
          <p>Previous Transactions</p>
          <p className="Previous-Transactions-container-header-left-text">
            Lorem ipsum dolor sit amet consectetur sit amet ipsum dolor sit amet
            consectetur.
          </p>
        </div>
        <div className="Previous-Transactions-container-header-right">
          <button
            className="Previous-Transactions-container-header-right-button-first"
            onClick={() => handleFilterClick("today")}>
            Today
          </button>
          <button
            className="Previous-Transactions-container-header-right-button"
            onClick={() => handleFilterClick("weekly")}>
            Weekly
          </button>
          <button
            className="Previous-Transactions-container-header-right-button"
            onClick={() => handleFilterClick("monthly")}>
            Monthly
          </button>
          <button
            className="Previous-Transactions-container-header-right-button-last"
            onClick={() => handleFilterClick("yearly")}>
            Yearly
          </button>
        </div>
      </div>

      {/* İşlemler tablosu */}
      <div className="transaction-table">
        <table className="transaction-table">
          <thead>
            <tr>
              <th className="th-black">Transaction Name</th>
              <th className="th-black">Date & Time</th>
              <th className="th-black">Category</th>
              <th className="th-black">Amount</th>
              <th className="th-black">Status</th>
              <th className="th-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedTransactions.map((transaction) => (
              <tr key={transaction.id}>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editTransaction.name}
                        onChange={(e) => handleInputChange(e, "name")}
                      />
                    </td>
                    <td>
                      <input
                        type="datetime-local"
                        value={
                          editTransaction.date && editTransaction.time
                            ? `${editTransaction.date}T${editTransaction.time}`
                            : ""
                        }
                        onChange={(e) =>
                          setEditTransaction({
                            ...editTransaction,
                            date: e.target.value.split("T")[0],
                            time: e.target.value.split("T")[1],
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editTransaction.category}
                        onChange={(e) => handleInputChange(e, "category")}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={editTransaction.amount}
                        onChange={(e) => handleInputChange(e, "amount")}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editTransaction.status || "active"}
                        onChange={(e) => handleInputChange(e, "status")}
                      />
                    </td>
                    <td>
                      <button
                        className="action-button save"
                        onClick={() => handleSaveClick(editTransaction)}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{transaction.name}</td>
                    <td>{`${transaction.date} ${transaction.time}`}</td>
                    <td>{transaction.category}</td>
                    <td
                      className={
                        transaction.isIncome ? "positive" : "negative"
                      }>
                      {transaction.amount}
                    </td>
                    <td>
                      <p
                        className={`status ${transaction.status.toLowerCase()}`}>
                        {transaction.status}
                      </p>
                    </td>
                    <td>
                      <img
                        className="save-button"
                        onClick={() => handleEditClick(transaction)}
                        src={Edit}
                        alt="Edit"
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
            {displayedTransactions.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="last-container">
        <button className="previous" onClick={handlePreviousPage}>
          Previous
        </button>
        <p>
          Page {currentPage + 1} of {totalPages}
        </p>
        <button className="next" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
const Banking = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiLinks = [
    "http://localhost:8088/api/BankingPage/GetCards?userId=1",
    "http://localhost:8088/api/BankingPage/IncomeExpenseStatistics?userId=1",
    "http://localhost:8088/api/BankingPage/SpendingCategories?userId=1",
    "http://localhost:8088/api/BankingPage/MonthlyStatements?userId=1",
    "http://localhost:8088/api/BankingPage/TransactionHistory?userId=1",
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
        const combinedData = responses.flat(); // Burada 's' fazlalığı vardı, kaldırıldı
        setData(combinedData); // Veriyi state'e kaydediyoruz

        // İlk 10 öğe farklı veriler ise, faturalar 11. öğeden (index 10) başlıyor:
        // console.log("Combined Data:", combinedData);
      } catch (error) {
        setError(error.message); // Hata durumunda mesajı state'e kaydediyoruz
      } finally {
        setLoading(false); // Yükleme işlemi bittiğinde loading durumu false oluyor
      }
    };

    fetchData();
  }, []); // sele
  return (
    <>
      <section className="cards-container">
        <div className="card-t">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Second Wallet</p>
            <p className="card-price-item"> ${data?.[0].cardBalance}</p>
          </div>
          <div className="card-id">
            <p className="id">{data?.[0].cardNumber}</p>
            <img src={Mastercard} />
          </div>
        </div>

        <div className="card-t-light-blue">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Third Wallet</p>
            <p className="card-price-item"> ${data?.[1].cardBalance}</p>
          </div>
          <div className="card-id">
            <p className="id">{data?.[1].cardNumber}</p>
            <img src={Mastercard} />
          </div>
        </div>

        <div className="card-t-green">
          <img className="wave" src={WaweElements} />
          <div className="card-main-walet">
            <p className="card-main-wallet-item">Main Wallet</p>
            <p className="card-price-item"> ${data?.[2].cardBalance}</p>
          </div>
          <div className="card-id">
            <p className="id">{data?.[2].cardNumber}</p>
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
                    ${data?.[3].income}
                  </p>
                </div>
                <div className="income-cotanier-left-middle-prices-container-footer">
                  <img src={Greenup} />
                  <p className="income-cotanier-left-middle-prices-container-footer-percentage">
                    {data?.[3].incomePercentage}%
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
                    expense
                  </p>
                </div>

                <div className="income-cotanier-left-middle-prices-container-left-prices">
                  <p className="income-cotanier-left-middle-prices-container-left-prices-p">
                    ${data?.[3].expense}
                  </p>
                </div>
                <div className="income-cotanier-left-middle-prices-container-footer">
                  <img src={Greenup} />
                  <p className="income-cotanier-left-middle-prices-container-footer-percentage">
                    {data?.[3].expensePercentage}%
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
            <p className="send-container-middle-container-item-text">
              Chose Recipient
            </p>
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
                  <input className="input" type="text" placeholder="Select" />
                  <img className="vectoricon" src={Vectordown} />
                </div>
              </div>
              <div>
                <p className="payement-catagory-container-p">
                  Payment Category
                </p>
                <div className="input-container">
                  <img className="vectoricon" src={Dollaricon} />
                  <input className="input" type="text" placeholder="Select" />
                </div>
              </div>
            </div>
            <div className="payement-catagory-container-button-container">
              <button className="payement-catagory-container-button">
                <img src={Telegram} />
                <p>Send Payment</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="Previous-Transactions-container">
        <TransactionTable />
      </section>

      <section className="Banking-footer">
        <div className="banking-footer-leftside-container">
          <div className="banking-footer-leftside-container-header">
            <p>Spending Categories</p>
            <img src={Treedotmenu} />
          </div>
          <div className="banking-footer-leftside-container-main-flex">
            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Pig} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">{data?.[4].category}</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Blueprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    ${data?.[4].amount} used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from ${data?.[4].limit}
                  </p>
                </div>
              </div>
            </div>
            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Basketmeal} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">
                  <p className="instalment">{data?.[5].category}</p>
                </p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Greenprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    ${data?.[5].amount} used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from ${data?.[5].limit}
                  </p>
                </div>
              </div>
            </div>

            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Car} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">{data?.[6].category}</p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Yellowprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    ${data?.[6].amount} used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from ${data?.[6].limit}
                  </p>
                </div>
              </div>
            </div>

            <div className="banking-footer-leftside-container-main">
              <div className="banking-footer-icon-container">
                <img src={Balon} />
              </div>
              <div className="banking-footer-icon-container-main">
                <p className="instalment">
                  {" "}
                  <p className="instalment">{data?.[7].category}</p>
                </p>
                <div className="progressbar-container">
                  <img className="progressbar" src={Lightblueprogress} />
                </div>

                <div className="banking-footer-icon-container-main-price">
                  <p className="banking-footer-icon-container-main-price-default  ">
                    ${data?.[7].amount} used /
                  </p>
                  <p className="banking-footer-icon-container-main-price-gray">
                    from ${data?.[7].limit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banking-footer-leftside-container">
          <div className="banking-footer-leftside-container-header">
            <p>Spending Categories</p>
            <img src={Treedotmenu} />
          </div>
          <div className="graph-container-price">
            <img
              className="graph-container-price-maingraph"
              src={Statementhgraph}
            />
            <img
              className="graph-container-price-maingraph-arrows"
              src={Statementharrows}
            />
            <p className="graph-container-price-installment">
              {data?.[8].percentage}%
            </p>
            <p className="graph-container-price-food">
              {data?.[9].percentage}%
            </p>
            <p className="graph-container-price-trasnporation">
              {data?.[10].percentage}%
            </p>
            <p className="graph-container-price-travel">
              {data?.[11].percentage}%
            </p>
            <p className="graph-container-price-investment">
              {data?.[12].percentage}%
            </p>
          </div>
          <div className="dots-container">
            <div className="dots-container-leftw">
              <div className="dots-container-left-colorw">
                <div className="blue-squere"></div>
                <p>{data?.[8].category}</p>
              </div>
              <div className="dots-container-left-colorw">
                <div className="green-squere"></div>
                <p>{data?.[9].category}</p>
              </div>
              <div className="dots-container-left-colorw">
                <div className="red-squere"></div>
                <p>{data?.[10].category}</p>
              </div>
            </div>
            <div className="dots-container-right">
              <div className="dots-container-left-colorw">
                <div className="light-blue-squere"></div>
                <p>{data?.[11].category}</p>
              </div>
              <div className="dots-container-left-colorw">
                <div className="yellow-squere"></div>
                <p>{data?.[12].category}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="history-container">
          <div className="history-container-header">
            <p>Transaction History</p>
            <img src={Treedotmenu} />
          </div>
          <div className="history-container-main-container">
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>{data?.[13].name}</p>
                <p className="history-container-main-text-gray">
                  {data?.[13].date} {data?.[13].time}
                </p>
              </div>
              <div>
                <p className="price-history">{data?.[13].amount}$ </p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Greendown} />
              <div className="history-container-main-text">
                <p>{data?.[14].name}</p>
                <p className="history-container-main-text-gray">
                  {data?.[14].date} {data?.[14].time}
                </p>
              </div>
              <div>
                <p className="price-history-green">{data?.[14].amount}$ </p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Greendown} />
              <div className="history-container-main-text">
                <p>{data?.[15].name}</p>
                <p className="history-container-main-text-gray">
                  {data?.[15].date} {data?.[15].time}
                </p>
              </div>
              <div>
                <p className="price-history-green">{data?.[15].amount}$ </p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>{data?.[16].name}</p>
                <p className="history-container-main-text-gray">
                  {data?.[16].date} {data?.[16].time}
                </p>
              </div>
              <div>
                <p className="price-history">{data?.[16].amount}$ </p>
              </div>
            </div>
            <div className="history-container-main">
              <img src={Redup} />
              <div className="history-container-main-text">
                <p>{data?.[17].name}</p>
                <p className="history-container-main-text-gray">
                  {data?.[17].date} {data?.[17].time}
                </p>
              </div>
              <div>
                <p className="price-history">{data?.[17].amount}$ </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
