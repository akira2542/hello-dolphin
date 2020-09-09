
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import logo from '../../../assets/images/navbar/logo.png'

const Container = styled.div `
`
const Nav = styled.div `
  	margin: 0;
  	padding: 0;
    width: 100vw;
    height: 88px;
  	background-color : #A0D6D8;
  	transition : 0.2s ease-in-out;
  	-webkit-transition : 0.2s ease-in-out;
`
const ItemCon = styled.div `
    width: 100%;
    height: 100%;
    display : flex;
    justify-content: center;
` 
const Link = styled.a `
    color: inherit;
    text-decoration: none;
    
    :hover {
        color: inherit;
        text-decoration: none;
    }
`
const Item = styled.div `
    width: 160px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    :hover {
        background-color : #D3F7F8;
    }
`
const LogoCon = styled.div `
    margin-right:auto;
`
const Logo = styled.img `
    max-height: 100%;
`
const FlexHolder = styled.div `
    margin-left: auto;
    width: 185px;
`
export default class NavBar extends Component {

    listenScrollEvent = () => {
        if (window.innerWidth < 1080) return
        let mainnav = document.getElementById('mainnav');
        if (window.scrollY > 100) {
            mainnav.style.height = '67px'
        } else {
            mainnav.style.height = '88px'
        }
    }

	componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
	}
		
	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenScrollEvent)
	}


    render() {
        return (
            <Fragment>
                <Container className="fixed-top">
                    <Nav id="mainnav">
                        <ItemCon>
                            <LogoCon>
                                <Logo src={logo}/>
                            </LogoCon>
                            <Link href="#">
                                <Item>Home</Item>
                            </Link>
                            <Link href="#">
                                <Item>About</Item>
                            </Link>
                            <Link href="#">
                                <Item>From</Item>
                            </Link>
                            <Link href="#">
                                <Item>Faqs</Item> 
                            </Link>
                            <FlexHolder/>
                        </ItemCon>
                    </Nav>
                </Container>
                {/* <div style={{height:"2000px"}}></div> */}
            </Fragment>
        )
    }
}


