import React, { Component } from 'react'
import Fallenstar from './fallenstar.scss'

export default class fallenstar extends Component {
    render() {
        return (
            <div className ={Fallenstar.box}>
    <div className={Fallenstar.star}></div>
    <div className={Fallenstar.star}></div>
    <div className={Fallenstar.star}></div>
    <div className={Fallenstar.star}></div>
    <div className={Fallenstar.star}></div>
    
            </div>
        )
    }
}
