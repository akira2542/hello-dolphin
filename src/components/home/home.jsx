
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/home/Logo.png'
import facebook from '../../assets/images/home/facebook.png'
import Footer from './homefooter'
import dolphin from '../../assets/images/home/dolphin.png'

const HomeContainer = styled.div`
    display: table;
    position: relative;
    height: 100vh;
    font-family : 'Itim-Regular' ;
    background-color: #023058;
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const Logo = styled.img`
    width: 50%;
`

const Facebook = styled.img`
    width: 64px;
    margin-right: 1%;
`

const Fanpage = styled.a`
    font-size: 30px;
    vertical-align: middle;
    margin-left: 1%;
    color: white;

    :hover {
        text-decoration: none;
        color: white;
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
