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
    width: 70%;

    @media (min-width: 1280px) {
        width: 43%;
    }

    @media (min-width: 1366px) {
        width: 54%;
    }

    @media (min-width: 1440px) {
        width: 53%;
    }
    @media (max-height: 500px) {
        width: 400px;
    }
`

const CoralOrange = styled.img`
    position: absolute;
    bottom: 10%;
    left: 15%;
    width: 20%;

    @media (min-width: 375px) {
        bottom: 8.8%;
    }

    @media (min-width: 411px) {
        bottom: 9%;
    }

    @media (min-width: 768px) {
        width: 15%;
        bottom: 14%;
    }

    @media (min-width: 1024px) {
        width: 15%;
        bottom: 13%;
        left: 18%;
    }

    @media (min-width: 1280px) {
        width: 13%;
        bottom: 15%;
        left: 15%;
    }

    @media (min-width: 1366px) {
        width: 10%;
        bottom: 20%;
        left: 13%;
    }

    @media (min-width: 1440px) {
        width: 10%;
        bottom: 21%;
        left: 13%;
    }

    @media (min-width: 1500px) {
        width: 10%;
        bottom: 26%;
        left: 13%;
    }
`

const ClayDarkBlue = styled(CoralShadowLeft)`
    width: 35%;
    bottom: -2%;
    height: 12%;

    @media (min-width: 1280px) {
        width: 25%;
        height: auto;
    }

    @media (min-width: 1366px) {
        width: 30%;
        height: auto;
    }
`

const CoralGreen = styled.img`
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 8%;

    @media (min-width: 1280px) {
        width: 5%;
    }

    @media (min-width: 1366px) {
        bottom: 5%;
    }

    @media (min-width: 1440px) {
        bottom: 8%;
    }
`

const DarkBlueSand = styled(CoralShadowLeft)`
    width: 100%;
    height: 5%;

    @media (min-width: 1440px) {
        height: 10%;
    }
`

const CoralShadowRight = styled.img`
    position: absolute;
    right: 0%;
    bottom: 0px;
    width: 65%;

    @media (min-width: 1024px) {
        width: 60%;
    }
`

const CoralDark = styled(CoralShadowRight)`
    width: 50%;   
`

const FishBlue = styled.img`
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 10%;

    @media (min-width: 1280px) {
        width: 6%;
        bottom: 30%;
    }

    @media (min-width: 1366px) {
        width: 8%;
        bottom: 30%;
    }

    @media (min-width: 1440px) {
        bottom: 40%;
        width: 5%;
    }
`

const FishOrange = styled(FishBlue)`
    left: 45%;
    bottom: 5%;

    @media (min-width: 1440px) {
        bottom: 10%;
    }
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

