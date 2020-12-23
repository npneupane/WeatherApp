import React, { Component } from 'react'
import {CircularProgress} from '@material-ui/core'

export default class Loader extends Component {
    render() {
        return (
            <div style={{fontSize:18,fontWeight:500,align:'center',marginTop:20}}>
                Please wait! Data are loading...........
                <div style={{marginLeft:'5%'}}>
                    <CircularProgress/> 
                </div>
                               
            </div>
        )
    }
}
