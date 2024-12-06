import React from "react"; // Add this import
import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Helmet } from "react-helmet";
import LogistcsPage from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Eductaion from "./pages/Education/Education";
import Cryptocurrency from "./pages/Cryptocurrency/Cryptocurrency";
import Invoicing from "./pages/Invoicing/Invoicing";
import Restaurant from "./pages/Restaurant/Restaurant";
import Banking from "./pages/Banking/Banking";
import Hrmanagement from "./pages/Hrmanagement/Hrmanagement";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <LogistcsPage />,
      },
      {
        path: "/education",
        element: <Eductaion />,
      },
      {
        path: "/cryptocurrency",
        element: <Cryptocurrency />,
      },
      {
        path: "/invoicing",
        element: <Invoicing />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/banking",
        element: <Banking />,
      },
      {
        path:"/hrmanagement",
        element: <Hrmanagement />,
      }
    ],
  },
];

const Elements = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <BrowserRouter>
        <Elements />
      </BrowserRouter>
    </>
  );
}

export default App;
