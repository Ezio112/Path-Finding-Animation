import React from "react";
import FindPath from "./FindPath.js";

class Control extends React.Component{
  constructor(){
    super();
    this.state={
      algo:"DFS"
    };
    this.handleChange=this.handleChange.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
  }
  clickHandler(){
    FindPath(this.state.algo);
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
          <option value="DFS">Depth first search</option>
          <option value="BFS">Beradth first search</option>
        </select>
      </lable>
      <br/>
      <button onClick={this.clickHandler}>Start</button>
      </div>
    )
  }
}
export default Control;
