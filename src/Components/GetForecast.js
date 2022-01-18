// import Axios from "axios";
// import Super_Key from "../config";
// import Axios from "axios";
import Key from "../config"

// const OpenWeatherPass = Super_Key;
// const Url = "https://api.openweathermap.org/data/2.5/forecast";


import axios from "axios";


const GetForecast = () => {
const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'xml'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': Key
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

};
export default GetForecast;