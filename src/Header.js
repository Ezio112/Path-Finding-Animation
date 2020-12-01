import React from "react";

class Header extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>Blue:Empty cell</li>
          <li>Black:Obstical</li>
          <li>Red: Destination</li>
          <li>Green: Starting point</li>
          <li>Yellow: Path explored</li>
        </ul>
        <p> Tap a cell multiple times to change its colour.</p>
        <p>There must be only one
          Starting point in the grid else the first Starting point with minimum ( i, j) will
          be taken as the Starting point.
        </p><br/>

      </div>
    );
  }
}
export default Header;
