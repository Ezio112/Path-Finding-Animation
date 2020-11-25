import React from "react";

class Header extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>Blue:Empty cell</li>
          <li>Red:pata nahi</li>
          <li>Black:Obstical</li>
          <li>Yellow: Path explored</li>
        </ul>
      </div>
    );
  }
}
export default Header;
