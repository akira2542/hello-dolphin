import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'

const Container = styled.div`
width: 100%;
height: 100vh;
// background-color: #023058;
background: linear-gradient(45deg, #00103a 0%, #023058 100%);
`

const AccordianCon = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 50px;
`
const Accordian = styled.div`
font-family: 'Itim-Regular';
width: 80%;
@media (min-width : 600px){
    font-size: 18px;
    }
@media (min-width : 1080px){
    font-size: 24px;
    width: 900px;
}
@media (min-width : 1280px){
    width: 1170px;
    font-size: 30px;
    }    
`
const AccordianHeading = styled.div`
width: 100%;
background-color: #A6D4FF;
display: flex;
padding: 20px 20px;
cursor : pointer;
transition: 0.3s ease-in-out;
border-radius: 3px; 
border: 1px solid black;
    :hover {
        & .indicator {
            border-top-color: white;
            transform : translate(0,5px)
        }
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
  transition : 0.3s ease-in-out;
` 

const AccordianContent = styled.div`
width: 100%;
max-height: 0;
transition: 0.3s ease-in-out;
background-color: #DDEFFF;
overflow: hidden;
border-radius: 3px;
border: 1px solid black;
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
                        <AccordianHeading onClick={() => this.toggleContent(1)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม ?</div><Indicator className="indicator" /></AccordianHeading>
                        <AccordianContent id="content-1"><p>น้อง ๆ จากชั้นปีที่ 1 จากทั้งสาขา IT, CS และ DSI สามารถสมัครได้ ทั้งนี้ เนื่องจากในแต่ละสาขานั้นสามารถรับน้อง ๆ ที่จะมาเข้าร่วมโครงการได้อย่างจำกัด ดังนั้นจึงจำเป็นต้องมีการคัดเลือกน้อง ๆ ซึ่งจะคัดเลือกจากการตอบคำถามของน้อง ๆ ตอนรับสมัคร
</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(2)}><div>โครงการนี้จัดที่ไหน จะรบกวนเวลาเรียนไหม ?</div><Indicator className="indicator"/></AccordianHeading>
                        <AccordianContent id="content-2"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(3)}><div>การเรียนการสอนเป็นอย่างไร ?</div><Indicator className="indicator"/></AccordianHeading>
                        <AccordianContent id="content-3"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(4)}><div>จำเป็นต้องมีความรู้มาก่อนไหม ?</div><Indicator className="indicator"/></AccordianHeading>
                        <AccordianContent id="content-4"><p>Content</p></AccordianContent>
                        <AccordianHeading onClick={() => this.toggleContent(5)}><div>ใมีค่าใช้จ่ายในการสมัครไหม ?</div><Indicator className="indicator"/></AccordianHeading>
                        <AccordianContent id="content-5"><p>Content</p></AccordianContent>
                    </Accordian>
                </AccordianCon>
            </Container>
        )
    }
}

