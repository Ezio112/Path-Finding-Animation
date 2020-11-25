import React from "react"
import Header from "./Header.js"
import Graph from "./Graph"
class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Graph n={5} m={5} />
      </div>
    );
  }
}
export default App;
