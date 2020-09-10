import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #023058;
`

const AccordianCon = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 50px;
`
const Accordian = styled.div`
width: 1170px;
font-family: 'Itim-Regular';
font-size: 30px;    
`
const AccordianHeading = styled.div`
width: 100%;
background-color: #C1D3E8;
display: flex;
padding: 20px 20px;
cursor : pointer;
transition: 0.3s ease-in-out;

    :hover {
        background-color: #C1D3E8DD;
    }
`
const Indicator = styled.div`
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid black;
  margin-left: auto;
  margin-right: 15px;
  align-self: center;
` 

const AccordianContent = styled.div`
width: 100%;
max-height: 0;
transition: 0.3s ease-in-out;
background-color: darkgray;
overflow: hidden;
margin-bottom: 12px;
 & p{
    margin: 0.5em 1em 0.5em 1em;
 }
`

export default class Faqs extends Component {

    state = {
        isOpen : [false,false,false,false,false],
        prevIndex: -1
    }

    toggleContent = (index) => {
        let arrindex = index-1
        let id = `content-${index}`
        let content = document.getElementById(id)
        let isOpen = this.state.isOpen

        if (isOpen[arrindex]) {
            this.collaspContent(content)
            isOpen[arrindex] = false;
            this.setState({
                isOpen : isOpen
            })
            return;
        };

        this.expandContent(content)
        isOpen[arrindex] = true;
        if (this.state.prevIndex > -1 && this.state.prevIndex !== arrindex) {
            this.collaspContent(document.getElementById(`content-${this.state.prevIndex+1}`))
            isOpen[this.state.prevIndex] = false
        }
        this.setState({
            isOpen : isOpen,
            prevIndex : arrindex
                        })
    }

    expandContent = (element) => {
        element.style.maxHeight = "200px"
    }

    collaspContent = (element) => {
        element.style.maxHeight = "0"        
    }

    render() {
        return (
            <Container>
                <Header color="white " textAlign="center" headerText="FAQS" />
                <AccordianCon>
                    <Accordian>
                        <AccordianHeading onClick={() => this.toggleContent(1)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม?</div><Indicator/></AccordianHeading>
                        <AccordianContent id="content-1"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(2)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม?</div><Indicator/></AccordianHeading>
                        <AccordianContent id="content-2"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(3)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม?</div><Indicator/></AccordianHeading>
                        <AccordianContent id="content-3"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(4)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม?</div><Indicator/></AccordianHeading>
                        <AccordianContent id="content-4"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(5)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม?</div><Indicator/></AccordianHeading>
                        <AccordianContent id="content-5"><p>Content</p></AccordianContent>
                    </Accordian>
                </AccordianCon>
            </Container>
        )
    }
}

