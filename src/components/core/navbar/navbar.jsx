
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
  	background-color : #7ECBEC00;
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
        background-color : #C3ECFD !important;
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
            mainnav.style.backgroundColor = '#7ECBECff'
            mainnav.style.color = 'black'
        } else {
            mainnav.style.height = '88px'
            mainnav.style.backgroundColor = '#7ECBEC00'
            mainnav.style.color = 'white'
        }
    }

    viewportHandler = (refs) => {
        let element
        let item
        let topRange = 200
        let pageRange = 500
        for (const key in refs) {
                element = ReactDOM.findDOMNode(refs[key].current)
                item = document.getElementById(key)
                topRange = (key == "about")? 800 : 200 
                pageRange = (key == "about")? 1000 : 500 
                if (this.isInViewport(element,topRange,pageRange)) {
                    // console.log(`${key} : is in viewport`)
                    if (item !== null) {
                        item.style.backgroundColor = "white"
                        return  
                    } 
                }
                if (item !== null) {
                    item.style.backgroundColor = "inherit"
                } 
        }
    }

    isInViewport = (element,topRange,pageRange) => {
        let bounding = element.getBoundingClientRect();
        return bounding.top >= -topRange && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)+pageRange
    }

    scrollToNode = (ref,yOffset) => {
        if (window.innerWidth > 1080 && window.innerWidth < 1600) {
            yOffset = (ref.constructor.name == "About")? 400 : yOffset
        }
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
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.about.current,600)}>
                                <Item id="about" >About</Item>
                            </Link>
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.team.current,-50)}>
                                <Item id="team">Teams</Item>
                            </Link>
                            <Link onClick={()=>this.scrollToNode(this.props.innerRefs.faqs.current,-80)}>
                                <Item id="faqs">FAQs</Item> 
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


