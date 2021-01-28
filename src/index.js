import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";
import SetAdapter from "./Adapter.js";
import Control from "./Control.js";
import Graph from "./Graph.js";
import Header from "./Header.js";

//Taking the size of input from user.
var sizeRow=Number(prompt("Enter number of rows required."));
var sizeColumn=Number(prompt("Enter number of column required."));

//Header contains only contains Instructions(text) to operate the tool.
ReactDOM.render(<Header/>,document.getElementById("head"));

//This creates a matrix of row*column
ReactDOM.render(<Graph row={sizeRow} column={sizeColumn}/>,document.getElementById("maze"));

//Set up listners on every box;
SetAdapter(sizeRow,sizeColumn);

//The bottom pannel of all the controls.
ReactDOM.render(<Control n={sizeRow} m={sizeColumn}/>,document.getElementById("controls"));
