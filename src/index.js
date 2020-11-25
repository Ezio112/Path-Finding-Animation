import React from "react";
import ReactDOM from "react-dom"
import App from "./App.js"
import "./style.css"
import setAdapter from "./Adapter.js"
ReactDOM.render(<App/>,document.getElementById("root"));

/*function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j)
}
function setColor(){
  getBox(i,i).style.backgroundColor="red";
  i++;
  j++;
  if(i>3){
    clearInterval(MyAgent);
  }
}

var i=0,j=0;
var MyAgent= setInterval(setColor,1000);*/
setAdapter(5,5);
