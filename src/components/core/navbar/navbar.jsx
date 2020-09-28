
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import logo from '../../../assets/images/navbar/logo.png'

const Container = styled.div `
font-family : 'Itim-Regular' ;
`
const Nav = styled.div `
  	margin: 0;
  	padding: 0;
    width: 100vw;
    height: 88px;
  	background-color : #A0D6D800;
    color : white;
    font-size:24px ;
  	transition : 0.2s ease-in-out;
  	-webkit-transition : 0.2s ease-in-out;
    display: block;
      @media (max-width: 1080px) {
          display: none;
      }
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
    cursor : pointer;
    
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
    transition: 0.3s ease-in-out;
    :hover {
        background-color : #D3F7F8;
        color: black;
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
    width: 192px;
`
export default class NavBar extends Component {

    listenScrollEvent = () => {
        if (window.innerWidth < 1080) return
        this.viewportHandler(this.props.innerRefs)
        let mainnav = document.getElementById('mainnav');
        if (window.scrollY > 100) {
            mainnav.style.height = '67px'
            mainnav.style.backgroundColor = '#A0D6D8ff'
            mainnav.style.color = 'black'
        } else {
            mainnav.style.height = '88px'
            mainnav.style.backgroundColor = '#A0D6D800'
            mainnav.style.color = 'white'
        }
    }

    viewportHandler = (refs) => {
        let element = null
        for (const key in refs) {
                element = ReactDOM.findDOMNode(refs[key].current)
                if (this.isInViewport(element)) {
                    console.log(`${key} : is in viewport`)
                }
        }
    }

    isInViewport = (element) => {
        let bounding = element.getBoundingClientRect();
        if (bounding.top >= -200 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight+200) {
        return true
        } else {
        return false
        }
    }

    scrollToNode = (ref,yOffset) => {
        let node = ReactDOM.findDOMNode(ref)
        let y = node.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
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
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.home.current,0)}>
                                <Item>Home</Item>
                            </Link>
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.about.current,200)}>
                                <Item>About</Item>
                            </Link>
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.team.current,-50)}>
                                <Item>Teams</Item>
                            </Link>
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.faqs.current,-80)}>
                                <Item>FAQs</Item> 
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


