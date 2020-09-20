
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/home/Logo.png'
import facebook from '../../assets/images/home/facebook.png'
import Footer from './homefooter'
import dolphin from '../../assets/images/home/dolphin.png'
import Fallenstar from './fallenstar'

const HomeContainer = styled.div`
    overflow: hidden;
    display: table;
    position: relative;
    height: 100vh;
    font-family : 'Itim-Regular' ;
    background-color: #023058;
    background: linear-gradient(45deg, #00103a 0%, #023058 100%);
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const Logo = styled.img`
    position :relative;
    width: 100%;
    z-index : 100;
    @media (min-width: 1024px) {
        width: 80%;
    }

    @media (min-width: 1366px) {
        width: 60%;
    }

    @media (min-width: 1500x) {
        width: 50%;
    }
`

const Facebook = styled.img`
    width: 10%;
    margin-right: 3%;
    
    @media (min-width: 1024px) {
        width: 8%;
    }

    @media (min-width: 1440px) {
        margin-right: 2%;
        width: 5%;
    }

    @media (min-width: 1024px) {
        width: 4%;
        margin-right: 1%;
    }
`

const Fanpage = styled.a`
    font-size: 24px;
    vertical-align: middle;
    margin-left: 1%;
    color: white;
    position: relative;
    z-index: 1;

    :hover {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 1024px) {
        font-size: 36px;
    }

    @media (min-width: 1440px) {
        
    }
`

const Dolphin = styled.img`
    display: none;

    @media (min-width: 768px) {
        display: block;
        position: absolute;
        width: 35%;
        right: 3%;
        bottom: 1%;
    }

    @media (min-width: 1366px) {
        width: 27%;
    }

    @media (min-width: 1500px) {
        width: 23%;
    }
`

export default class home extends Component {
    render() {
        return (

            <Fragment>
                <HomeContainer>
                    <HomeContent>
                        <Fallenstar/>
                        <Logo src={logo} alt="Hello World Dolphin Logo" />
                        <br />
                        <Fanpage href="https://www.facebook.com/SITHelloWorld" target="_blank">
                            <Facebook src={facebook} alt="Facebook Logo" />
                            SIT HelloWorld
                        </Fanpage>
                    </HomeContent>
                </HomeContainer>
                <Footer />
                <Dolphin src={dolphin} />
            </Fragment>
        )
    }
}
