import React, { Component, Fragment } from 'react'
import styled, {keyframes} from 'styled-components'
import { Header } from '../core/text'

import dolp_img from '../../assets/images/faqs/underocean_dophin.png'
import whale_img from '../../assets/images/faqs/underocean_whale.png'


const blink = keyframes`
  0% {
    background-color: #DDEFFF;
  }
  100% {
    background-color: #A6D4FF;
  }
`
const bobble = keyframes`
  0% {
    transform: translate(0,0);
  }
  50% {
    transform: translate(0,20px);
  } 
  100% {
    transform: translate(0,0);
  }
`


const Container = styled.div`
width: 100%;
height: 600px;
padding: 40px 0 0 0;
position: relative;
background-color: #023058;

@media (min-width : 768px){
    height: 1000px;
    } 
@media (min-width : 1080px){
    height: 1000px;
    padding: 20px 0 0 0;
    }  
@media (min-width : 1280px){
    height: 1100px;
    }  
@media (min-width : 1980px){
    height: 1200px;
    }  
`

const AccordianCon = styled.div`
width: 100%;
margin-top: 20px;
@media (min-width : 764px){
    margin-top: 80px;
    }
`
const Accordian = styled.div`
font-family: 'Itim-Regular';
width: 80%;
font-size: 10px;
z-index: 1;
@media (min-width : 414px){
    font-size: 12px;
    }
@media (min-width : 768px){
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
padding: 10px 10px;
cursor : pointer;
transition: 0.3s ease-in-out;
border-radius: 3px; 
border: 1px solid black;
    :hover {

        animation: ${blink} 1s;

        & .indicator {
            border-top-color: white !important;
            transform : translate(0,5px) !important;
        }
    }
    @media (min-width : 1280px){
        padding: 10px 10px;
    } 
    @media (min-width : 1400px){
        padding: 20px 20px;
    }   
    
`
const Indicator = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid black;
  margin-left: auto;
  margin-right: 15px;
  align-self: center;
  transition : 0.3s ease-in-out;
  @media (min-width : 768px){
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid black;
    }   
`

const AccordianContent = styled.div`
    width: 100%;
    max-height: 0;
    transition: 0.3s ease-in-out;
    background-color: #DDEFFF;
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 12px;
 & p{
        margin: 0.5em 1em 0.5em 1em;
 }
`

const DolphinBg = styled.img`
    position : absolute;
    right: 0px;
    width: 150px;
    bottom: 100px;
    @media (min-width : 700px){
        bottom: 80px;
        right: 10px;
        width: 300px;
        animation: ${bobble} 5s infinite ease-in-out;
    }
    @media (min-width : 1080px){
        width: 400px;
    }
    @media (min-width : 1280px){
        bottom: 40px;
        right: 0px;
        
    }
    @media (min-width : 1920px){
        width: 450px;
        right: 10px;
    }
`
const WhaleBg = styled.img`
    position : absolute;
    left: 0;
    bottom: 70px;
    width: 200px;
    @media (min-width : 700px){
        bottom: 0px;
        width: 500px;
        animation: ${bobble} 17s infinite ease-in-out;
    }
    @media (min-width : 1080px){
        bottom: -100px;
        width: 700px;

    }
`

export default class Faqs extends Component {

    state = {
        isOpen: [false, false, false, false, false],
        prevIndex: -1
    }

    toggleContent = (index) => {
        let arrindex = index - 1
        let id = `content-${index}`
        let indicator_id = `in-${index}`
        let content = document.getElementById(id)
        let indicator = document.getElementById(indicator_id)
        let isOpen = this.state.isOpen

        if (isOpen[arrindex]) {
            this.collaspContent(content,indicator)
            isOpen[arrindex] = false;
            this.setState({
                isOpen: isOpen
            })
            return;
        };

        this.expandContent(content,indicator)
        isOpen[arrindex] = true;
        if (this.state.prevIndex > -1 && this.state.prevIndex !== arrindex) {
            this.collaspContent(document.getElementById(`content-${this.state.prevIndex + 1}`),document.getElementById(`in-${this.state.prevIndex + 1}`))
            isOpen[this.state.prevIndex] = false
        }
        this.setState({
            isOpen: isOpen,
            prevIndex: arrindex
        })
    }

    expandContent = (element,indicator) => {
        element.style.maxHeight = "200px"
        element.style.border = "1px solid black"
        if (window.innerWidth < 1080) return
        indicator.style.borderTopColor = "white"
        indicator.style.transform = "translate(0,5px)"
    }

    collaspContent = (element,indicator) => {
        element.style.maxHeight = "0"
        if (window.innerWidth >= 1080) {
        indicator.style.borderTopColor = "black"
        indicator.style.transform = "translate(0,0)"
        }
        setTimeout(() => {
            element.style.border = "0px"
        }, 300);
    }

    render() {
        return (
            <Container>
                <Header color="white " textAlign="center" headerText="FAQS" />
                <AccordianCon className="container-fluid">
                    <div className="row">
                        <div className="col-1"></div>
                        <Accordian className="col-10">
                            <AccordianHeading onClick={() => this.toggleContent(1)}><div>ใครสมัครได้บ้าง สมัครแล้วเข้าได้ทุกคนไหม ?</div><Indicator className="indicator" id="in-1" /></AccordianHeading>
                            <AccordianContent id="content-1">
                                <p>น้อง ๆ จากชั้นปีที่ 1 จากทั้งสาขา IT, CS และ DSI สามารถสมัครได้ ทั้งนี้ เนื่องจากในแต่ละสาขานั้นสามารถรับน้อง ๆ ที่จะมาเข้าร่วมโครงการได้อย่างจำกัด ดังนั้นจึงจำเป็นต้องมีการคัดเลือกน้อง ๆ ซึ่งจะคัดเลือกจากการตอบคำถามของน้อง ๆ ตอนรับสมัคร</p>
                            </AccordianContent>
                            <AccordianHeading onClick={() => this.toggleContent(2)}><div>โครงการนี้จัดที่ไหน จะรบกวนเวลาเรียนไหม ?</div><Indicator className="indicator" id="in-2" /></AccordianHeading>
                            <AccordianContent id="content-2">
                                <p>โครงการนี้จะจัดขึ้นในทุกวันพุธและวันอาทิตย์ สำหรับในวันพุธจะเริ่มเรียนเวลา 18.00 - 20.00
                                น. โดยสถานที่เรียนจะเป็นอาคารเรียนรวม 2 ชั้น 3 และตึกคณะเทคโนโลยีสารสนเทศ
                        ซึ่งแต่ละสาขาจะใช้สถานที่ต่างกัน ส่วนวันอาทิตย์จะเริ่มเรียนเวลา 17.30 - 20.00 น. ผ่านทาง Microsoft Team</p>
                            </AccordianContent>
                            <AccordianHeading onClick={() => this.toggleContent(3)}><div>การเรียนการสอนเป็นอย่างไร ?</div><Indicator className="indicator" id="in-3" /></AccordianHeading>
                            <AccordianContent id="content-3"><p>จะเป็นการเรียนภายในห้องเรียนในทุกวันพุธ และเรียนออนไลน์ในทุกวันอาทิตย์
                            นอกจากนี้ในการเรียนการสอนทุกครั้งจะมีการบันทึกวิดีโอการเรียนการสอนเพื่อให้น้อง ๆ
                            สามารถกลับมาดูย้อนหลังได้ และในบางสาขานั้นก็ยังมีคลิปวิดีโอส่วนเสริมที่เป็นเกร็ดเล็กเกร็ดน้อย
                        ที่น้อง ๆ สามารถดูเพื่อเสริมความรู้ให้ตัวเองได้เช่นกัน</p>
                            </AccordianContent>
                            <AccordianHeading onClick={() => this.toggleContent(4)}><div>จำเป็นต้องมีความรู้มาก่อนไหม ?</div><Indicator className="indicator" id="in-4" /></AccordianHeading>
                            <AccordianContent id="content-4"><p>ไม่จำเป็น ขอแค่น้อง ๆ มีความมุ่งมั่นตั้งใจ น้อง ๆ ก็สามารถเข้าร่วมกิจกรรมและมาเรียนรู้กับพี่ ๆ ได้</p>
                            </AccordianContent>
                            <AccordianHeading onClick={() => this.toggleContent(5)}><div>มีค่าใช้จ่ายในการสมัครไหม ?</div><Indicator className="indicator" id="in-5" /></AccordianHeading>
                            <AccordianContent id="content-5"><p>ไม่มีค่าใช้จ่าย ฟรีตลอดทั้งโครงการ</p></AccordianContent>
                        </Accordian>
                        <div className="col-1"></div>
                    </div>
                </AccordianCon>
                <DolphinBg src={dolp_img} />
                <WhaleBg src={whale_img} />
            </Container>
        )
    }
}

