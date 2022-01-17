import Axios from "axios";
import Key from '../config';


const OpenWeatherPass = Key;
const Url = "https://api.openweathermap.org/data/2.5/weather";

const GetWeatherApi = async(query) => {
    const { data } = await Axios.get(Url, {
        params: {
            q: query,
            units: 'Imperial',
            APPID: OpenWeatherPass 
        }
    }).catch((err)=>{
        if(err.response){
            alert("Please enter a valid search")
        }
    })
    console.log(data)
     return data;
     }
  export default GetWeatherApi;

