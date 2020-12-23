import React, { Component } from 'react'
import WeatherApp from './weatherApp/weatherApp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route path="/">
                        <WeatherApp />
                    </Route>
                    <Route path="/weather">
                        <WeatherApp />
                    </Route>
                </Switch>
                </Router>

            </div>
        )
    }
}
