import React, { Component } from 'react'
import {CallWeatherApi} from './callWeatherApi'
import ErrorComponent from './errorComponent'
import Header from './header'
import Loader from './loader'
import WeatherCard from './weatherCard'




export default class WeatherApp extends Component {
    constructor(props){
        super(props)
        this.state ={
            city:'pokhara',
            weatherData:'',
            loading:true,
            error:false,
            searchFlag:false

        }
    }


    componentDidMount(){
        this.getWeatherData()

    }

    getWeatherData=()=>{
        let self = this
       
        CallWeatherApi.getCurrentWeatherData(self.state.city).then(function(response){
            // console.log(response.data)
            self.setState({
                weatherData:response.data,
                loading:false
            })
            console.log(self.state.weatherData)
        }).catch(function(error){
            self.setState({
                error:true,
            })
        })

    }
    onRetry = ()=>{
        this.setState({
            error:false,
            loading:true,
        })
    }
    ongetCityName = (cityName)=>{
        let self = this
        console.log(cityName)
        self.setState({
            loading:true,
            city:cityName
        })
        console.log(self.state.loading)
        console.log(self.state.city)
        self.getWeatherData()
    }

    render() {
        return (
            <div>
                <Header 
                ongetCityName = {this.ongetCityName}/>
                <div>
                {this.state.error?
                <ErrorComponent
                onRetry = {this.onRetry}/>:
                this.state.loading?
                <div><Loader/></div> :
                <div><WeatherCard
                data= {this.state.weatherData}
                /></div>
                        
                }
                </div>
            </div>
        )
    }
}