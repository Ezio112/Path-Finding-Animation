import React from "react";

class Graph extends React.Component{
  constructor(props){
    super(props)
    this.state={
      n:props.n,
      m:props.m
    }
  }

  GenerateRow(){
    var temp=[];
    for(var i=0;i<this.state.m;++i){
      temp.push(<td className={"j"+i} id="block" ></td>);
    }
    return temp;
  }
  GenerateTable(){
    var table=[];
    for(var i=0;i<this.state.n;++i){
      table.push([<tr className={"i"+i}>{this.GenerateRow()}</tr>]);
    }
    return table;
  }
  render(){
    return(
      <div>
        <table className="Graph">
          {this.GenerateTable()}
        </table>
      </div>
    )
  }
}
export default Graph;
