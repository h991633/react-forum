import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Category from "./Category";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    <Category />
  </BrowserRouter>,
  document.getElementById("root")
);
