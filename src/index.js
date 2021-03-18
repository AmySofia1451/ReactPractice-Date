import React from "react";
import ReactDOM from "react-dom";

var YOURNAME = "Amy";
let currentDate = new Date();
let CURRENTYEAR = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
