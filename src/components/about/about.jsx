
import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import { Header, Content } from '../core/text'
import cloudLeft from '../../assets/images/about/cloud_left.png'
import cloudRight from '../../assets/images/about/cloud_right.png';
import clay from '../../assets/images/about/clay.png';
import Footer from './aboutfooter'
import whale from '../../assets/images/about/whale.png'
import turtle from '../../assets/images/about/turtle.png'
// if state are needed change to class component as you se fit - ruangrit 
const AboutContainer = styled.div`
background-color:#FF8782;
padding-bottom: 13.5em;
position: relative;
overflow : hidden;

`
const CloudLeft = styled.img`
position: absolute;
right: 45%;
bottom: 54%;
width: 55%;
@media (min-width: 411px){
bottom: 45%;

}
@media (min-width: 768px){
    bottom: 35%;

}
/* -webkit-transform: scaleX(-1);
  transform: scaleX(-1); */
`
const CloudRight = styled.img`
position: absolute;
left: 60%; 
width: 65%;
bottom: 28%;
@media (min-width: 411px){
bottom: 20%;

}
@media (min-width: 768px){
    bottom: 15%;

}
@media (min-width: 1366px){
    left: 60%; 

}
`
const AboutBorder = styled.div`
margin-top: 17%;
margin-bottom: 60%;

padding: 20px;
border-radius: 30px;
border: 1px ;
background-color: rgba(252, 204, 171, 0.52);
@media (min-width: 411px){
margin-bottom: 0%;
height: 85%;
padding-top: 10%;
}
@media (min-width: 768px){
margin-bottom: 0%;
margin-top: 10%;

height: 80%;
padding: 5%;
width: 100%;
}
@media (min-width: 1024px){
margin-bottom: 15%;
margin-top: 0%;

height: 75%;
padding: 5%;
width: 100%;
}
@media (min-width: 1280px){
margin-bottom: 15%;
margin-top: 0%;

height: 75%;
padding: 5%;
width: 100%;
}
`
const ClayTop = styled.img`
width: 100%;
@media (min-width: 375px){
    margin-top: -4.2%;
}
@media (min-width: 411px) {
    }

/* @media (min-width: 411px){
    margin-top: -7%;
} */


`


export default class About extends Component {
    render() {
        return (
            <Fragment>
                <AboutContainer>
               
                 <ClayTop src={clay} />
                    <div className="container">
                        
                
                        
                       
                            <Header color="black" textAlign="center" headerText="About" />
                        
                       
             
                  <CloudLeft src={cloudLeft} />
                  <CloudRight src={cloudRight} />
                
                    <div className="row">
                        <div className="col-auto">
                            <AboutBorder>
                            <Content
                                
                                textIndent="24px"
                                textIndentIpad="50px"
                                textIndentDesktop="50px"                                
                                textAlign="่justify"
                                color="black"
                                content="Hello World - Dolphin เป็นโครงการที่จัดขึ้นเพื่อแบ่งปันความรู้ในด้านการสร้างเว็บไซต์
                    และเกม mโดยจะมีการจัดการเรียน การสอนให้กับนักศึกษาที่เข้าร่วมโครงการสำหรับโครงการในปีนี้จะมีสาขาให้นักศึกษาได้เลือกตามความสนใจทั้งหมด 5 สาขา 
                    คือ Front-End, Web Design, Infrastructure, Game Development และ Game Design"
                            />
                               <Content
                                
                                textIndent="24px"
                                textIndentIpad="50px"
                                textIndentDesktop="50px"                                
                                textAlign="่justify"
                                color="black"
                                content="นอกจากนี้ในช่วงท้ายของโครงการนักศึกษาที่เข้าร่วมโครงการในแต่ละสาขาจะได้มาร่วมกันสร้างเว็บไซต์และเกม ที่เกิดจากความสามารถของนักศึกษาเอง โดยในโครงการ Hello World - Dolphin 
                    นักศึกษาที่เข้าร่วมโครงการนั้นจะมีบทบาท เป็นโลมาที่พยายามเดินทางไปหาดวงดาวในตำนานที่ถูกเล่าขานต่อ ๆ 
                    กันมาซึ่งเปรียบเสมือนกับนักศึกษาที่เข้าร่วมโครงการ ที่เดินทางตามหาความฝันและเส้นทางเดินของตนเองนั่นเอง"
                            />
                            </AboutBorder>
                        </div>
                    </div>
                </div>
                <Footer />

                </AboutContainer>

            </Fragment>
        )
    }
}
