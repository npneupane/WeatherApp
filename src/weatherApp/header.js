import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            cityName:""
        }
    }

    handleInput =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
            
        })
        // console.log(this.state.cityName)
    }
    render() {
        return (
            <div>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                    <Typography  variant="h6" noWrap style={{marginLeft:'5%'}}>
                        Weather App
                    </Typography>
                    <div style={{marginLeft:'10%',widht:'15%'}}>
                        <input type="text"
                         placeholder="Search by city name e.g pokhara" 
                         name="cityName"
                         onChange={this.handleInput}
                         value={this.state.cityName}/>
                        <button  
                        onClick={()=> this.props.ongetCityName(this.state.cityName)}
                        style={{ marginLeft:20,
                        color:'white',backgroundColor:'blue',
                        border:'2px solid green',
                        fontSize:26,borderRadius:20}}>Search</button>
                    </div>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}
