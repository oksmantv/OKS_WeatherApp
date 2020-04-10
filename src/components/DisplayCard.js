
import React from 'react';
import { min } from 'moment';
var moment = require('moment');

const DisplayCard = ({ day }) => {

  let img = undefined;
  if(day !== undefined)
  {  
    if(day.length !== 0)
    {
      img = `owf owf-${day.weather[0].id} owf-5x blue-text lighten-2`
    }
  }

  return (
    <div>
      {(day !== undefined && day.length !== 0) ? (
        <div className="col s12">
        <div className="card left">
            <i className={img}></i> 
            {
              /*console.log(day.main.temp),
              console.log(imgURL),
              console.log(day.weather[0].description)*/
            }
            <div className="">
            <p>Current Weather: {day.name}</p>
            <p>Temperature: {Math.round(day.main.temp)}°C ({Math.round(day.main.feels_like)}°C)</p>
            </div>
          </div> 
        </div>
      ) : null}
    </div>
  )
}

export default DisplayCard;