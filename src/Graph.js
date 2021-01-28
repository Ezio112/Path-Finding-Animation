import React from "react";

class Graph extends React.Component{
  constructor(props){
    super(props)
    this.state={
      row:props.row,
      column:props.column
    }
  }

  //Helper function for "GenerateTable()", Create a row of table with every getBox
  //having its j-position as class="j{j}"
  GenerateRow(){
    var temp=[];
    for(var i=0;i<this.state.column;++i){
      temp.push(<td className={"j"+i} id="block" ></td>);
    }
    return temp;
  }

  //Create a table with every table row having its i-position as class="i{i}"
  GenerateTable(){
    var table=[];
    for(var i=0;i<this.state.row;++i){
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
