import React from "react";
import {Collapse,Button, CardBody, Card} from 'reactstrap';

class ReposTile extends React.Component{
  constructor(){
    super();
    this.state={
      isOpen:false
    };
    this.toggle=this.toggle.bind(this);
  }
  toggle(){
    this.setState( prevState =>{return{isOpen:!prevState.isOpen}});
  }
  render(){
    return(
      <div className="container-lg">
        <button type="button" className="collapsible" onClick={this.toggle}>
          <img src={this.props.prop.avatar} className="icon"/>
          <p style={{color:"grey"}}>{this.props.prop.author}</p>
          <h3>{this.props.prop.name}</h3>
        </button>

        <Collapse isOpen={this.state.isOpen}>
          <div className="content">
            <p style={{color:"grey",paddingLeft:"100px"}}>{this.props.prop.description}</p>
            <br></br>
            <ul style={{paddingLeft:"100px","list-style-type":"none"}}>
              <li style={{color:this.props.prop.languageColor,float:"left",width:"33%"}}>{this.props.prop.language}</li>
              <li style={{float:"left",width:"33%"}}>
              <img style={{width:"20px",height:"20px"}}src="https://image.flaticon.com/icons/svg/148/148841.svg"/>{this.props.prop.stars}</li>
              <li style={{float:"right",width:"33%"}}>
                <img  style={{width:"20px",height:"20px"}} src="https://maxcdn.icons8.com/Android_L/PNG/48/Programming/git_fork-48.png"/>{this.props.prop.forks}</li>
            </ul>
          </div>
        </Collapse>
      </div>
    );
  };
}
export default ReposTile;
