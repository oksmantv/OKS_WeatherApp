
import React from 'react';
var moment = require('moment');

const DayCard = ({ day }) => {

  let img = undefined;
  let newDate = new Date();
  let weekday = undefined;

  if(day !== undefined)
  {  
    if(day.length !== 0)
    {    

      //console.log(day.main.temp_min,"<-->",day.main.temp_max)
      weekday = day.dt * 1000
      newDate.setTime(weekday)
      img = `owf owf-${day.weather[0].id} blue-text owf-5x`
    }
  }
  return (
    <div>
    {(day !== undefined && day.length !== 0) ? (
    <div className="col sm4">
      <div className="card">
      <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
      <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
         <i className={img}></i> 
        <h6>{Math.round(day.main.temp_min)}°C - {Math.round(day.main.temp_max)}°C</h6>
        <div className="card-body">
          <p className="card-text">{day.weather[0].description}</p>
        </div>
      </div>
    </div>
    ) : ( null )}
    </div>
  )

}

export default DayCard;