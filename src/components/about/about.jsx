
import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import { Header, Content } from '../core/text'
import cloudLeft from '../../assets/images/about/cloud_left.png'
import cloudRight from '../../assets/images/about/cloud_right.png';
import clay from '../../assets/images/about/clay.png';
import Footer from './aboutfooter'
// if state are needed change to class component as you se fit - ruangrit 
const AboutContainer = styled.div`
background-color:#FF8782;
padding-bottom: 13.5em;
position: relative;

`
const CloudLeft = styled.img`
position: absolute;
right: 55em;
bottom: 0em;
/* margin-right: 150%; */
width: 55%;
@media (min-width: 1024px){
    left: 0em;    
    margin-top: 10em;
}
`
const CloudRight = styled.img`
position: absolute;
left:50em; 
width: 65%;
bottom: 10em;
`
const AboutBorder = styled.div`
margin-top: 16em;
margin-bottom: 20em;

padding: 20px;
border-radius: 30px;
border: 1px ;
background-color: rgba(252, 204, 171, 0.52);

@media (min-width: 1024px){
    width: 50em;
    height: 30em;
    margin-left: 4em;
}
`
const ClayTop = styled.img`
width: 90%;
margin-top: -4.5em;

`


export default class About extends Component {
    render() {
        return (
            <Fragment>
                <AboutContainer>
               
 <ClayTop src={clay} />
                    <div className="container">
                        
                    <div className="row">
                        
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <Header color="black" headerText="About" />
                        </div>
                        <div className="col-4">
                        </div>
                    </div>     
                  {/* <CloudLeft src={cloudLeft} /> */}
                
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
                            {/* <CloudRight src={cloudRight}/> */}
                        </div>
                    </div>
                </div>
                <Footer />

                </AboutContainer>

            </Fragment>
        )
    }
}
