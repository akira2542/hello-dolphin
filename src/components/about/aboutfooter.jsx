
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import sunrise from '../../assets/images/about/sunrise.png'
import sunshadow from '../../assets/images/about/sun_shadow.png'
import boat from '../../assets/images/about/boat.png'
import waterblue from '../../assets/images/about/water_blue.png'
import waterdark from '../../assets/images/about/water_darkblue.png'
import salite from './Mhoooonnnsaliteeee.scss'
import waterpurple from '../../assets/images/about/water_purple.png'
import waterpink from '../../assets/images/about/water_pink.png'

const Waterblue = styled.img`
position: absolute;
width: 100%;
bottom: 4em;
right: 0em;
@media (min-width: 375px){
    bottom: 0em;
}
@media (min-width: 768px){
    bottom: 0em;
}
@media (min-width: 1024px){
    
    bottom: 1em;
}
`
const Waterdark = styled.img`
position: absolute;
width: 100%;
@media (min-width: 375px){
    bottom: -0.5%;
}
@media (min-width: 1024px){
    bottom: -1em;
}

`
const Waterpurple = styled.img`
position: absolute;
width: 100%;
bottom: 1em;
@media (min-width: 375px){
    bottom: 0;
}
@media (min-width: 1024px){
    
    bottom: 0;
}

`
const Waterpink = styled.img`
position: absolute;
width: 100%;
bottom: 5em;
@media (min-width: 375px){
    bottom: 1%;
}
@media (min-width: 1024px){
    bottom: 3em;
}

`
const Sunrise = styled.img`
position: absolute;
left: 51.5%;
transform: translateX(-50%);
width: 20%;
bottom: 12%;

 @media (min-width: 375px){
    bottom: 6%;
}
@media (min-width: 411px) {
        bottom: 7%;
    }
@media (min-width: 554px){
    bottom: 7.5%;
}
@media (min-width: 654px){
    bottom: 7.5%;
}

@media (min-width: 884px){
    bottom: 7%;
}
@media (min-width: 984px){
    bottom: 8%;
}
@media (min-width: 1024px){
    bottom: 8%;
}
@media (min-width: 1140px){
    bottom: 9%;
}
@media (min-width: 1280px){
    bottom: 8.5%;
}
@media (min-width: 1440px){
    bottom: 10%;
}
@media (min-width: 1440px){
    bottom: 11%;
}

`
const Sunshadow = styled.img`
position: absolute;
left: 50%;
transform: translateX(-50%);
width: 40%;
bottom: 6.5%;
@media (min-width: 375px){
    bottom: 3%;
}
@media (min-width: 411px) {
        bottom: 3.5%;
    }
    
@media (min-width: 554px){
    bottom: 4%;
}
@media (min-width: 654px){
    bottom: 4%;
}
@media (min-width: 768px){
    bottom: 4%;
}

@media (min-width: 884px){
    bottom: 4%;
}
@media (min-width: 984px){
    bottom: 4%;
}

@media (min-width: 1024px){
    bottom: 4.5%;
}
@media (min-width: 1140px){
    bottom: 5%;
}
@media (min-width: 1280px){
    bottom: 5%;
}
@media (min-width: 1440px){
    bottom: 5.5%;
}
@media (min-width: 1920px){
    bottom: 6%;
}



`
const Boat = styled.img`
position: absolute;
bottom: 0em;
width: 55%;
@media (min-width: 1024px){
    left: -3em;
    bottom: -2.6em;
    width: 60%;
}
@media (min-width: 375px){
    bottom: -0.5%;
}
`
const Wrapper = styled.div`
    overflow : hidden;
`

// if state are needed change to class component as you se fit - ruangrit 

export default class aboutfooter extends Component {
    
    render() {
        return (

                <Wrapper>
                <div>
                    <Sunrise className = {salite.sunrise} src={sunrise} />
                    <Waterblue src={waterblue} />
                    <Sunshadow src={sunshadow} />
                    <Waterpink className = {salite.salitepailoeyframekaiserX} src={waterpink} />
                    <Waterpurple className = {salite.salitepailoeyframekaiserX2} src={waterpurple} />
                    <Boat className = {salite.rotateandspinlikeyouheadgonnablowingup} src={boat} />
                    <Waterdark className = {salite.salitepailoeyframekaiserX3} src={waterdark} />
                </div>
                </Wrapper>

        )
    }
}
