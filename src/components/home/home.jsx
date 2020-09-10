
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/home/Logo.png'
import facebook from '../../assets/images/home/facebook.png'
import Footer from './homefooter'

const HomeContainer = styled.div`
    display: table;
    position: relative;
    height: 100vh;
    width: 100%;
    font-family : 'Itim-Regular' ;
    background-color: #023058;
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const Logo = styled.img`
    width: 55%;
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

export default class home extends Component {
    render() {
        return (
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
        )
    }
}
