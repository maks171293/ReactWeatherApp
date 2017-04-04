import axios from 'axios';

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?&appid=77ad088e7409ebcec1f75c3c0bfaf992&units=metric';

export default {
  getData: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`

    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message)
    })
  }
}
