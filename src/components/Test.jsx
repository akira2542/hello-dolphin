import React, { Component } from 'react'
import '~/app.scss'
export default class Test extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Hello {this.props.name}</h1>
                </div>
            </div>
        );
    }
}