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

// linkpaths
const links = {
  Home: "http://localhost:5173/home",
  Education: "http://localhost:5173/education",
  Cryptocurrency: "http://localhost:5173/cryptocurrency",
  Invoicing: "http://localhost:5173/invoicing",
  Restaurant: "http://localhost:5173/restaurant",
  Banking: "http://localhost:5173/banking",
  Hrmanagement: "http://localhost:5173/hrmanagement",
  Ticketing: "http://localhost:5173/ticketing",
  Pointofsales: "http://localhost:5173/pointofsales",
  Hospital: "http://localhost:5173/hospital",
};

// components buttons
function Component({ imageSrc, title, altText }) {
  return (
    <div className="components">
      <img src={imageSrc} alt={altText} />
      <p>{title}</p>
    </div>
  );
}
// components openable buttons
function DropdownComponent({ imageSrc, title, dropdownItems, linkpath }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDivClick = () => {
    setIsActive(!isActive); // Toggle class name
  };

  const handleButtonClick = (event, index) => {
    setActiveButton(index); // Set active button index
  };

  return (
    <>
      <div
        className={isActive ? "profile-container-active" : "profile-container"}
        onClick={handleDivClick}>
        <div className="main-containers" onClick={toggleDropdown}>
          <img src={imageSrc} alt="dashboard-icon" />
          <p>{title}</p>
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
        {dropdownItems.map((link, index) => (
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
              {link === "Analytics" ? (
                <a style={{ textDecoration: "none" }} href={linkpath}>
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
          <div className="dashboard-container-s">
            <img src={Dashboard} alt="dashboard-icon" />
            <p>Dashboard</p>
          </div>
        </div>

        {/* Add Dropdown Component Here */}
        <DropdownComponent
          imageSrc={Account}
          title="Your Account"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["YourAccount"]}
        />

        <div className="applications">
          <p className="applications-text">APPLICATIONS</p>
        </div>
        <DropdownComponent
          imageSrc={LogistcsIMG}
          title="Logistics"
          dropdownItems={["Analytics", "Tracking", "Data"]}
          linkpath={links["Home"]}
        />

        <DropdownComponent
          imageSrc={EducationIMG}
          title="Education"
          dropdownItems={["Analytics", "Class Projects", "Data"]}
          linkpath={links["Education"]}
        />

        <DropdownComponent
          imageSrc={CryptocurrencyiMG}
          title="Cryptocurrency"
          dropdownItems={["Analytics", "Transactions", "Exchange"]}
          linkpath={links["Cryptocurrency"]}
        />

        <DropdownComponent
          imageSrc={InvoicingIMG}
          title="Invoicing"
          dropdownItems={["Analytics", "Transactions", "Create New"]}
          linkpath={links["Invoicing"]}
        />

        <DropdownComponent
          imageSrc={RestaurantIMG}
          title="Restaurant"
          dropdownItems={["Analytics", "Orders", "Data"]}
          linkpath={links["Restaurant"]}
        />

        <DropdownComponent
          imageSrc={BankingIMG}
          title="Banking"
          dropdownItems={["Analytics", "Transactions", "Data"]}
          linkpath={links["Banking"]}
        />

        <DropdownComponent
          imageSrc={HrmanagementIMG}
          title="HR Management"
          dropdownItems={["Analytics", "Employees", "Data"]}
          linkpath={links["Hrmanagement"]}
        />

        <DropdownComponent
          imageSrc={TicketingIMG}
          title="Ticketing"
          dropdownItems={["Analytics", "Transactions", "Data"]}
          linkpath={links["Ticketing"]}
        />

        <DropdownComponent
          imageSrc={PointofsalesIMG}
          title="Point of Sales"
          dropdownItems={["Analytics", "Transactions", "Data"]}
          linkpath={links["Pointofsales"]}
        />

        <DropdownComponent
          imageSrc={HospitalIMG}
          title="Hospital Management"
          dropdownItems={["Analytics", "Class Projects", "Data"]}
          linkpath={links["Hospital"]}
        />

        <DropdownComponent
          imageSrc={KanbanIMG}
          title="Kanban"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Kanban"]}
        />

        <DropdownComponent
          imageSrc={FileIMG}
          title="File Manager"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["File"]}
        />
        <DropdownComponent
          imageSrc={ContactsIMG}
          title="Contacts"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Contacts"]}
        />
        <DropdownComponent
          imageSrc={EmailIMG}
          title="E-mail"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Email"]}
        />
        <DropdownComponent
          imageSrc={MessagingIMG}
          title="Messaging"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Messaging"]}
        />
        <DropdownComponent
          imageSrc={EcommerceIMG}
          title="Ecommerce"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Ecommerce"]}
        />
        <DropdownComponent
          imageSrc={CalendarIMG}
          title="Calendar"
          dropdownItems={["Link 1", "Link 2", "Link 3"]}
          linkpath={links["Calendar"]}
        />

        <div className="applications">
          <p className="applications-text">COMPONENTS</p>
        </div>
        <Component
          imageSrc={CardsIMG}
          title="Cards"
          altText="Cards Component"
        />
        <Component
          imageSrc={FormsIMG}
          title="Forms"
          altText="Forms Component"
        />
        <Component
          imageSrc={TabelsIMG}
          title="Tables"
          altText="Tables Component"
        />
        <Component
          imageSrc={IconsIMG}
          title="Icons"
          altText="Icons Component"
        />
        <Component
          imageSrc={ChartsIMG}
          title="Charts"
          altText="Charts Component"
        />
        <Component
          imageSrc={AuthIMG}
          title="Authentications"
          altText="Auth Component"
        />
        <div className="applications">
          <p className="applications-text">Settings</p>
        </div>
        <Component
          imageSrc={SettingsIMG}
          title="Settings"
          altText="Settings Component"
        />
        <Component
          imageSrc={RolesIMG}
          title="Roles and Permissions"
          altText="Roles Component"
        />
        <Component
          imageSrc={PaymentsIMG}
          title="Payments"
          altText="Payments Component"
        />
        <Component
          imageSrc={UsersIMG}
          title="Users"
          altText="Users Component"
        />
      </div>
    </>
  );
}

export default Sidebar;
