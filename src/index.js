import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./style.css";
import Adapter from "./Adapter.js";
import Control from "./Control.js";

ReactDOM.render(<App/>,document.getElementById("maze"));
Adapter.setAdapter(10,10);
ReactDOM.render(<Control/>,document.getElementById("Start_button"));
