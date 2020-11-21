import React from "react";
import ReposTile from "./ReposTile.js"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import offline_data from './offline_data.js'
import './style.css'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      details:offline_data,
      loading:true,
    };

    this.Tags=this.state.details.map(item=><ReposTile prop={item}/>);
  }
  AddListners(){

  }
  /*componentDidMount(){
    fetch("https://api.wheretheiss.at/v1/satellites/25544").then(response=> response.json())
    .then(data=> {
      this.setState(prevState=>{
        return{
          details:data,
          loading:false,
        };
      });
    });
  }*/
  render(){
    if(!this.state.loading){
      return(<h1>Loading....</h1>);
    }
    else if(this.state.loading){
      return(
        <div>
          {this.Tags}
        </div>
      );
    }
  }

}
export default App;
