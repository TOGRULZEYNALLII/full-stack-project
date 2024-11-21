import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "../Layout/style.css";
function Layout() {
  return (
    <>
      <div className="container-main">
        <div className="container-HeOu">
          <Header />
          <Outlet />
        </div>
        <div className="container-Sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Layout;
