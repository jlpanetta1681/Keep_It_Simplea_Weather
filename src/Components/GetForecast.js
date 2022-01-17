import Axios from "axios";
import Super_Key from "../config";

const OpenWeatherPass = Super_Key;
const Url = "https://api.openweathermap.org/data/2.5/forecast";


const GetForecast = async(query) => {
    const { data }   = await Axios.get(Url, {
        params: {
            q: query,
            units: "imperial",
            APPID: OpenWeatherPass
        }
    }).catch((err) => {
        if(err.response) {
            alert("Please enter a valid city name!");
        }
    });

    console.log(data);
    return data;
};
export default GetForecast;