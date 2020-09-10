import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import coral_shadow_left from '../../assets/images/home/coral_shadow_left.png'
import coral_shadow_right from '../../assets/images/home/coral_shadow_right.png'
import clay_darkblue from '../../assets/images/home/clay_darkblue.png'
import coral_dark from '../../assets/images/home/coral_dark.png'
import darkblue_sand from '../../assets/images/home/darkblue_sand.png'
import coral_green from '../../assets/images/home/coral_green.png'
import coral_orange from '../../assets/images/home/coral_orange.png'
import fish_blue from '../../assets/images/home/fish_blue.png'
import fish_orange from '../../assets/images/home/fish_orange.png'

const CoralShadowLeft = styled.img`
    position: absolute;
    bottom: 0px;
    width: 53%;
`

const CoralOrange = styled.img`
    position: absolute;
    bottom: 28%;
    left: 12%;
    width: 10%;
`

const ClayDarkBlue = styled(CoralShadowLeft)`
    width: 30%;
    bottom: -2%;
`

const CoralGreen = styled.img`
    position: absolute;
    bottom: 8%;
    left: 5%;
    width: 5%;
`

const DarkBlueSand = styled(CoralShadowLeft)`
    width: 100%;
    height: 10%;
`

const CoralShadowRight = styled.img`
    position: absolute;
    right: 0%;
    bottom: 0px;
    width: 60%;
`

const CoralDark = styled(CoralShadowRight)`
    width: 50%;   
`

const FishBlue = styled.img`
    position: absolute;
    bottom: 40%;
    left: 5%;
    width: 5%;
`

const FishOrange = styled(FishBlue)`
    left: 45%;
    bottom: 10%;
`
export default class homefooter extends Component {
    render() {
        return (
            <Fragment>
                <FishBlue src={fish_blue} />                
                <CoralOrange src={coral_orange} />
                <CoralShadowLeft src={coral_shadow_left} />
                <CoralShadowRight src={coral_shadow_right} />
                <ClayDarkBlue src={clay_darkblue} />
                <CoralGreen src={coral_green} />
                <DarkBlueSand src={darkblue_sand} />
                <CoralDark src={coral_dark} />
                <FishOrange src={fish_orange} />
            </Fragment>
        )
    }
}

