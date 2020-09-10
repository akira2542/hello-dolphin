
import React, { Fragment } from 'react'
import styled from 'styled-components'


const Open = styled.div`

position: fixed;
z-index: 1;
top: 20px;
left: 20px;
cursor: pointer;
width: 35px;
height: 30px;

 & span,& span::before,& span::after {
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: white;
  position: absolute;
  content: '';
 }
 & span::before {
    bottom: -10px;
 }
 & span::after {
    bottom: -20px; 
}
@media (min-width: 1080px) {
          display: none;
      }
`
const Close = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  cursor: pointer;

    &:hover{
        opacity: 1;
    }
    ::before,::after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 3px;
        background-color: white;
    }
    ::before {
        transform: rotate(45deg);
    }
    ::after {
        transform: rotate(-45deg);
    }
`
const SideNav = styled.div`
  font-family : 'Itim-Regular' ;
  height: 100%; 
  width: 0; 
  position: fixed; 
  z-index: 2; 
  top: 0; 
  left: 0;
  background-color: #B0CCE5; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s; 
`
const Item = styled.a`
    font-size: 20px;
    color: white;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 20px 20px; 
    :hover {
        color: lightgray;
        text-decoration: none;
    }
`
const Overlay = styled.div`
    width: 0;
    height: 100%;
    z-index: 1;
    top: 0; 
    left: 0;
    position: fixed;
    background-color: rgb(0,0,0,0);
    transition: background-color 0.5s ease-in-out; 
    display: block;
`


export default function SideBar() {

    const expand = () => {
        let sidebar = document.getElementById("side-expand")
        let overlay = document.getElementById("side-overlay")
        sidebar.style.width = "250px"
        overlay.style.width = "100%"
        overlay.style.backgroundColor = "rgb(0,0,0,0.4)"
    }

    const collasp = () => {
        let sidebar = document.getElementById("side-expand")
        let overlay = document.getElementById("side-overlay")
        sidebar.style.width = "0px"
        overlay.style.backgroundColor = "rgb(0,0,0,0.0)"
        setTimeout(() => {
            overlay.style.width = "0"
          }, 500);
    }

    return (
        <Fragment>
            <Open onClick={expand}><span></span></Open>
            <SideNav id="side-expand">
                <Close onClick={collasp} />
                <Item href="#">Home</Item>
                <Item href="#">About</Item>
                <Item href="#">Team</Item>
                <Item href="#">FAQs</Item>
            </SideNav>
            <Overlay id="side-overlay" onClick={collasp} />
        </Fragment>
    )
}
