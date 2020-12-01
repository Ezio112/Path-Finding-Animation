import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";
import SetAdapter from "./Adapter.js";
import Control from "./Control.js";
import Graph from "./Graph.js";
import Header from "./Header.js";

ReactDOM.render(<Header/>,document.getElementById("head"));
ReactDOM.render(<Graph n={10} m={10}/>,document.getElementById("maze"));
SetAdapter(10,10);
ReactDOM.render(<Control/>,document.getElementById("controls"));
