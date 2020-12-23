import axios from 'axios'
import {CONFIG} from './config'
export class CallWeatherApi {
    static getCurrentWeatherData = async (cityName)=>{
        let url = CONFIG.WEATHER_API_URL.replace('~',cityName)

        return await axios.get(url+CONFIG.WEATHER_API_KEY)
    }




}