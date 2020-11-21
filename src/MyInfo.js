import React from "react"

function MyInfo(prop){
  return(
    <div className="container jumbotron">
    <h1> Satellites information.</h1>
    <h1> Name:{prop.prop.name}</h1>
    <p> id: {prop.prop.id}</p>
    <p> Latitude:{prop.prop.latitute}</p>
    <p> Longitude:{prop.prop.longitude}</p>
    <p> Altitude:{prop.prop.altitude}</p>
    <p> Velocity:{prop.prop.velocity}</p>
    <p> Visibility:{prop.prop.visibility}</p>
    <p> footprint:{prop.prop.footprint}</p>
    </div>
  );
}
export default MyInfo
