import React from "react";
import Nav from "../components/Nav";
import Meta from "../components/Meta";
import "./styles.scss";

export default () => (
  <div id="homepage">
    <Meta />
    <div id="banner">
      <Nav />
      <header>
        <h1>Ajay Narain Mathur</h1>
        <p>Programming, Reading and Cooking</p>
      </header>
    </div>
    <div id="styling">
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0 20, 20 0, 200 100, 0 100, 0" fill="#5855FF" />
      </svg>
    </div>
  </div>
);
