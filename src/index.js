import React from "react";
import ReactDOM from "react-dom/client";
// import { Navbar } from "./navbar/navbar";
// import "./card/style.css";
import { database } from "./database";
import Card from "./card/card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="fuits">Fruits</h1>
      {database.slice(0, 5).map((item) => (
        <Card data={item} key={item.id} />
      ))}

      {database.slice(5, 10).map((item) => (
        <Card data={item} key={item.id} />
      ))}

      {database.slice(10, 15).map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  </React.StrictMode>
);
