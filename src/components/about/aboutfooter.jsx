
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import sunrise from '../../assets/images/about/sunrise.png'
import sunshadow from '../../assets/images/about/sun_shadow.png'
import boat from '../../assets/images/about/boat.png'
import waterblue from '../../assets/images/about/water_blue.png'
import waterdark from '../../assets/images/about/water_darkblue.png'

import waterpurple from '../../assets/images/about/water_purple.png'
import waterpink from '../../assets/images/about/water_pink.png'

const Waterblue = styled.img`
position: absolute;
width: 100%;
bottom: 4em;
right: 0em;
@media (min-width: 375px){
    bottom: 0%;
}
@media (min-width: 1024px){
    
    bottom: 3em;
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
    bottom: 5%;
}
@media (min-width: 441px) {
        bottom: 5%;
    }
@media (min-width: 554px){
    bottom: 5%;
}
@media (min-width: 654px){
    bottom: 7%;
}

@media (min-width: 884px){
    bottom: 7%;
}
@media (min-width: 984px){
    bottom: 8%;
}
@media (min-width: 1024px){
    bottom: 11%;
}


/* @media (min-width: 1024px){
    left: 33em;
    bottom: 13em;
} */
/* @media (min-width: 1040px){
    left: 27em;
    bottom: 10em;
}

@media (min-width: 1080px){
    left: 28em;
    bottom: 11em;
}
@media (min-width: 1120px){
    left: 29em;
}
@media (min-width: 1180px){
    left: 30em;
}
@media (min-width: 1220px){
    left: 32em;
    
} */
`
const Sunshadow = styled.img`
position: absolute;
left: 50%;
transform: translateX(-50%);
width: 40%;
bottom: 6.5%;
@media (min-width: 375px){
    bottom: 2.5%;
}
@media (min-width: 441px) {
        bottom: 3%;
    }
    
@media (min-width: 554px){
    bottom: 3%;
}
@media (min-width: 654px){
    bottom: 3.5%;
}
@media (min-width: 738px){
    bottom: 3.6%;
}

@media (min-width: 884px){
    bottom: 3.5%;
}
@media (min-width: 984px){
    bottom: 4%;
}
@media (min-width: 1024px){
    bottom: 6.5%;
}
@media (min-width: 1440px){
    bottom: 7%;
}
/* 
@media (min-width: 1040px){
    left: 21.5em;
    bottom: 7.5em;
}
@media (min-width: 1080px){
    bottom: 8em;
}
@media (min-width: 1120px){
    left: 22.5em;
    bottom: 8.5em;
    

}
@media (min-width: 1180px){
    left: 23.5em;
    bottom: 9em;

    

}
@media (min-width: 1280px){
    left: 26.5em;
    bottom: 8.2em;
    height: 12%;    
} */



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


// if state are needed change to class component as you se fit - ruangrit 

export default class aboutfooter extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Sunrise src={sunrise} />
                    <Waterblue src={waterblue} />
                    <Sunshadow src={sunshadow} />
                    <Waterpink src={waterpink} />
                    <Waterpurple src={waterpurple} />
                    <Boat src={boat} />
                    <Waterdark src={waterdark} />
                </div>
            </Fragment>
        )
    }
}
