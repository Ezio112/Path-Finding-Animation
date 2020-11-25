import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./style.css";
import setAdapter from "./Adapter.js";
import FindPath from "./FindPath.js";
ReactDOM.render(<App/>,document.getElementById("root"));

setAdapter(5,5);
FindPath("DFS");
