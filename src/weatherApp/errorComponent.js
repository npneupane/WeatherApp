import React, { Component } from 'react'

export default class ErrorComponent extends Component {
    render() {
        return (
            <div>
                <p> Something Error occurs.....</p>
                <button onClick={()=> this.props.onRetry()}>Retry</button>
            </div>
        )
    }
}
