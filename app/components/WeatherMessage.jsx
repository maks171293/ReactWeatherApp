import React from 'react';

let WeatherMessage = ({temp, location}) =>{
  return(
    <div>
      <h5>{`There is ${temp} in ${location}`}</h5>
    </div>
  );
};

export default WeatherMessage;
