import React from 'react';

let WeatherMessage = ({temp, location}) =>{
  return(
    <div>
      <h4 className="text-center">{`There is ${temp} in ${location}`}</h4>
    </div>
  );
};

export default WeatherMessage;
