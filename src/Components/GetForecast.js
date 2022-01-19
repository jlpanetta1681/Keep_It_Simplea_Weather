
import Key from "../config"


import axios from "axios";

const Url = "https://community-open-weather-map.p.rapidapi.com/weather"



const GetForecast = () => {
const options = {
  method: 'GET',
  // url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: '',
    lat: '0',
    lon: '0',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'XML'
  },
  headers: {
    'x-rapidapi-host': Url,
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