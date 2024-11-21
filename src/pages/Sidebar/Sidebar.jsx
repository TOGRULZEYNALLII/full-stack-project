import { useState } from "react";
import "../Sidebar/style/style.css";
import Icon from "../Sidebar/assets/icons/Icon.svg";
import Dot from "../Sidebar/assets/icons/dot.svg";
import Dashboard from "../Sidebar/assets/New folder (3)/application/dashboard.svg";
import DropdownIcon from "../Sidebar/assets/New folder (3)/settings/Dropdown.svg";
import Account from "../Sidebar/assets/New folder (3)/application/profile.svg";
import LogistcsIMG from "../Sidebar/assets/New folder (3)/application/Truck.svg";
import DropdownIconDown from "./assets/New folder (3)/settings/drpdownDown.svg";
import EducationIMG from "./assets/New folder (3)/application/education.svg";
import CryptocurrencyiMG from "./assets/New folder (3)/application/crypto.svg";
import InvoicingIMG from "./assets/New folder (3)/application/inno.svg";
import RestaurantIMG from "./assets/New folder (3)/application/restaurant.svg";
import BankingIMG from "./assets/New folder (3)/application/banking.svg";
import HrmanagementIMG from "./assets/New folder (3)/application/hr.svg";
import TicketingIMG from "./assets/New folder (3)/application/ticket.svg";
import PointofsalesIMG from "./assets/New folder (3)/application/sales.svg";
import HospitalIMG from "./assets/New folder (3)/application/Stethoscope.svg";
import KanbanIMG from "./assets/New folder (3)/application/kanban.svg";
import FileIMG from "./assets/New folder (3)/application/file.svg";
import ContactsIMG from "./assets/New folder (3)/application/contacts.svg";
import EmailIMG from "./assets/New folder (3)/application/mail.svg";
import MessagingIMG from "./assets/New folder (3)/application/meassgae.svg";
import EcommerceIMG from "./assets/New folder (3)/application/e-commerrce.svg";
import CalendarIMG from "./assets/New folder (3)/application/calendar.svg";
import CardsIMG from "./assets/New folder (3)/componenets/cards.svg";
import FormsIMG from "./assets/New folder (3)/componenets/forms.svg";
import TabelsIMG from "./assets/New folder (3)/componenets/tables.svg";
import IconsIMG from "./assets/New folder (3)/componenets/icons.svg";
import ChartsIMG from "./assets/New folder (3)/componenets/charts.svg";
import AuthIMG from "./assets/New folder (3)/componenets/auth.svg";
import SettingsIMG from "./assets/New folder (3)/settings/settingsprevios.svg";
import RolesIMG from "./assets/New folder (3)/settings/settings.svg.svg";
import PaymentsIMG from "./assets/New folder (3)/settings/Wallet.svg";
import UsersIMG from "./assets/New folder (3)/settings/Users.svg";
function YRAccouunt() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isActive, setIsActive] = useState(false); // State to manage class toggling

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle the div click for class toggling
  const handleDivClick = () => {
    setIsActive(!isActive); // Toggle the class name
  };

  // Function to handle button click inside the dropdown
  const handleButtonClick = (event, index) => {
    setActiveButton(index); // Set the active button index
  };

  return (
    <>
      <div
        className={isActive ? "profile-container-active" : "profile-container"}
        onClick={handleDivClick} // Toggle the class name when this div is clicked
      >
        <div className="main-containers" onClick={toggleDropdown}>
          <img src={Account} alt="dashboard-icon" />
          <p>Your Account</p>
        </div>
        <div>
          <img
            src={dropdownOpen ? DropdownIconDown : DropdownIcon}
            alt="dropdown-icon"
          />
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => handleButtonClick(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
function Logistics() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isActive, setIsActive] = useState(false); // State to manage class toggling

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDivClick = () => {
    setIsActive(!isActive); // Toggle the class name
  };

  const handleButtonClick = (event, index) => {
    setActiveButton(index); // Set the active button index
  };

  return (
    <>
      <div
        className={isActive ? "profile-container-active" : "profile-container"}
        onClick={handleDivClick}>
        <div className="main-containers" onClick={toggleDropdown}>
          <img src={LogistcsIMG} alt="dashboard-icon" />
          <p>Logistics</p>
        </div>
        <div>
          <img
            src={dropdownOpen ? DropdownIconDown : DropdownIcon}
            alt="dropdown-icon"
          />
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Anlytics", "Tracking", "Data "].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => handleButtonClick(event, index)}
              className="button">
              {link === "Anlytics" ? (
                <a
                  style={{ textDecoration: "none" }}
                  href="http://localhost:5173/home">
                  {link}
                </a>
              ) : (
                link
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Education() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={EducationIMG} alt="dashboard-icon" />
          <p> Education</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Class Projects", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link === "Analytics" ? (
                <a
                  style={{ textDecoration: "none" }}
                  href="http://localhost:5173/education ">
                  {link}
                </a>
              ) : (
                link
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Cryptocurrency() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={CryptocurrencyiMG} alt="dashboard-icon" />
          <p> Cryptocurrency</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Exchange"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link === "Analytics" ? (
                <a
                  style={{ textDecoration: "none" }}
                  href="http://localhost:5173/cryptocurrency ">
                  {link}
                </a>
              ) : (
                link
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Invoicing() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={InvoicingIMG} alt="dashboard-icon" />
          <p> Invoicing</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Create New"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link === "Analytics" ? (
                <a
                  style={{ textDecoration: "none" }}
                  href="http://localhost:5173/invoicing">
                  {link}
                </a>
              ) : (
                link
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Restaurant() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={RestaurantIMG} alt="dashboard-icon" />
          <p> Restaurant</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Orders", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Banking() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={BankingIMG} alt="dashboard-icon" />
          <p>Banking</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
function Hrmanagement() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={HrmanagementIMG} alt="dashboard-icon" />
          <p>HR Management</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Employees", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Ticketing() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={TicketingIMG} alt="dashboard-icon" />
          <p>Ticketing</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Pointofsales() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={PointofsalesIMG} alt="dashboard-icon" />
          <p>Point of sales</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Hospital() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={HospitalIMG} alt="dashboard-icon" />
          <p>Hospital Management</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Analytics", "Transactions", "Data"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Kanban() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={KanbanIMG} alt="dashboard-icon" />
          <p>Kanban</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function File() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={FileIMG} alt="dashboard-icon" />
          <p>File Manager</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Contacts() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={ContactsIMG} alt="dashboard-icon" />
          <p>Contacts</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Email() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={EmailIMG} alt="dashboard-icon" />
          <p>E-mail</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Messaging() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={MessagingIMG} alt="dashboard-icon" />
          <p>Messaging</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Ecommerce() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={EcommerceIMG} alt="dashboard-icon" />
          <p>Ecommerce</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Calendar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const button_click = (event, index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="profile-container" onClick={toggleDropdown}>
        <div className="main-containers">
          <img src={CalendarIMG} alt="dashboard-icon" />
          <p>Calendar</p>
        </div>
        <div>
          <img src={dropdownOpen ? DropdownIconDown : DropdownIcon}></img>
        </div>
      </div>
      <div
        className="dropdown-container"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {["Link 1", "Link 2", "Link 3"].map((link, index) => (
          <div className="drpdwn-section" key={index}>
            <div
              className={`drpdwn-border ${
                activeButton === index
                  ? "drpdwn-border-active"
                  : "drpdwn-border-none"
              }`}></div>
            <button
              onClick={(event) => button_click(event, index)}
              className="button">
              {link}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      <div className="components">
        <img src={CardsIMG} alt="components" />
        <p>Cards</p>
      </div>
    </>
  );
}

function Forms() {
  return (
    <>
      <div className="components">
        <img src={FormsIMG} alt="components" />
        <p>Forms</p>
      </div>
    </>
  );
}
function Tables() {
  return (
    <>
      <div className="components">
        <img src={TabelsIMG} alt="components" />
        <p>Tables</p>
      </div>
    </>
  );
}
function Icons() {
  return (
    <>
      <div className="components">
        <img src={IconsIMG} alt="components" />
        <p>Icons</p>
      </div>
    </>
  );
}
function Charts() {
  return (
    <>
      <div className="components">
        <img src={ChartsIMG} alt="components" />
        <p>Charts</p>
      </div>
    </>
  );
}
function Auth() {
  return (
    <>
      <div className="components">
        <img src={AuthIMG} alt="components" />
        <p>Authentications</p>
      </div>
    </>
  );
}

function Settings() {
  return (
    <>
      <div className="components">
        <img src={SettingsIMG} alt="components" />
        <p>Settings</p>
      </div>
    </>
  );
}
function Roles() {
  return (
    <>
      <div className="components">
        <img src={RolesIMG} alt="components" />
        <p>Roles and Permissions</p>
      </div>
    </>
  );
}
function Payments() {
  return (
    <>
      <div className="components">
        <img src={PaymentsIMG} alt="components" />
        <p>Payments</p>
      </div>
    </>
  );
}
function Users() {
  return (
    <>
      <div className="components">
        <img src={UsersIMG} alt="components" />
        <p>Users</p>
      </div>
    </>
  );
}
function Sidebar() {
  return (
    <>
      <div className="container-sidebar">
        <div className="top-container">
          <div className="top-container-left">
            <img src={Icon} alt="main-icon" />
            <p className="orbit">OrbitNest</p>
          </div>
          <div>
            <img src={Dot} alt="dot" />
          </div>
        </div>
        <div className="border-bottom"></div>

        <div className="dashboard">
          <div className="dashboard-container">
            <img src={Dashboard} alt="dashboard-icon" />
            <p>Dashboard</p>
          </div>
        </div>

        {/* Add Dropdown Component Here */}
        <YRAccouunt />

        <div className="applications">
          <p className="applications-text">APPLICATIONS</p>
        </div>

        <Logistics />
        <Education />
        <Cryptocurrency />
        <Invoicing />
        <Restaurant />
        <Banking />
        <Hrmanagement />
        <Ticketing />
        <Pointofsales />
        <Hospital />
        <Kanban />
        <File />
        <Contacts />
        <Email />
        <Messaging />
        <Ecommerce />
        <Calendar />

        <div className="applications">
          <p className="applications-text">COMPONENTS</p>
        </div>
        <Cards />
        <Forms />
        <Tables />
        <Icons />
        <Charts />
        <Auth />
        <div className="applications">
          <p className="applications-text">Settings</p>
        </div>
        <Settings />
        <Roles />
        <Payments />
        <Users />
      </div>
    </>
  );
}

export default Sidebar;
