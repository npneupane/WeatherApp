import React, { Component } from 'react'
import Card from '@material-ui/core/Card/Card'
import Grid from '@material-ui/core/Grid'

export default class WeatherCard extends Component {
    render() {
        let weather = this.props.data
        return (
            <div style={{margin:'30px 10%'}}>
                <Card>
                    <div style={{margin:20}}>
                    <div style={{color:"#eb6e4b",fontSize:16}}>
                        {new Date().toDateString()}</div>

                    <div style={{fontSize:24,fontWeight:900,marginTop:10}}>
                        {weather.name} ,{weather.sys.country  }
                    </div>
                    <hr/>

                    <div style={{marginBottom:10}}>
                        Sunrise : {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                    </div>

                    <div style={{marginBottom:10}}>
                        Sunset : {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                    </div>

                    <div style={{fontSize:36,fontWeight:500,marginLeft:'20%',color:"#3433f2",marginBottom:20}}>
                        {weather.main.temp}°C</div>

                    <div style={{fontSize:18,fontWeight:600,marginBottom:10,color:'#2488f4'}}>Feels like {weather.main.feels_like}°C.
                    {weather.weather[0].description}.{weather.weather[0].main} </div>
                    <Grid container spacing ={2} >
                        <Grid  item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Min temperature</div>
                            <div style={{fontWeight:500}}>{weather.main.temp_min}°C</div>
                        </Grid>

                        <Grid  item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Max temperature</div>  
                            <div style={{fontWeight:500}}>{weather.main.temp_max}°C</div>
                        </Grid>

                        <Grid item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Pressure</div>
                            <div style={{fontWeight:500}}>{weather.main.pressure}hPa</div>
                        </Grid>

                        <Grid   item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Humidity</div>
                            <div style={{fontWeight:500}}>{weather.main.humidity}%</div>
                        </Grid>

                        <Grid   item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Wind</div>
                            <div style={{fontWeight:500}}>{weather.wind.speed}m/s SSE</div>
                        </Grid>
                        <Grid   item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Visibility</div>
                            <div style={{fontWeight:500}}>{weather.visibility/10000}km</div>
                        </Grid>
                        <Grid   item xs ="4" sm="3">
                            <div style={{marginBottom:10,marginTop:15}}>Sea level</div>
                            <div style={{fontWeight:500}}>{weather.main.sea_level}m</div>
                        </Grid>
                        
                    </Grid>
                    </div>
                </Card>
            
            </div>
        )
    }
}