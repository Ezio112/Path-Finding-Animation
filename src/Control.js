import React from "react";
import FindPath from "./FindPath.js";

class Control extends React.Component{
  constructor(props){
    super();
    this.state={
      algo:"DFS",
      n:props.n,
      m:props.m
    };
    this.handleChange=this.handleChange.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
  }
  clickHandler(){
    FindPath(this.state.algo,this.state.n,this.state.m);
  }
  handleChange(event){
    this.setState({algo:event.target.value});
  }
  render(){
    return(
      <div>
      <lable>
        Choose an algorithm:
        <br/>
        <select onChange={this.handleChange}>
          <option value="DFS">Depth-first search</option>
          <option value="BFS">Breadth-first search</option>
          <option value="BiDir">Bi-directional search</option>
        </select>
      </lable>
      <br/>
      <button onClick={this.clickHandler}>Start</button>
      </div>
    )
  }
}
export default Control;
