
import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import { Header, Content } from '../core/text'
import cloudLeft from '../../assets/images/about/cloud_left.png'
import cloudRight from '../../assets/images/about/cloud_right.png';
import cloudRight2 from '../../assets/images/about/cloud_right2.png';
import salite from './Mhoooonnnsaliteeee.scss'
import clay from '../../assets/images/about/clay.png';
import Footer from './aboutfooter'
import whale from '../../assets/images/about/whale.png'
import turtle from '../../assets/images/about/turtle.png'
import Fallenstar from './fallenstar'
// if state are needed change to class component as you se fit - ruangrit 
const AboutContainer = styled.div`
background-color:#FF8782;
padding-bottom: 13.5em;
position: relative;
overflow : hidden;

`
const Whale = styled.img`
position: absolute;
width: 65%;
@media (min-width: 375px){
    top: -1%;
    left: -17%;
}
@media (min-width: 411px){
    left: -17%;
}

@media (min-width: 768px){
}
@media (min-width: 1024px){
    top: 21%;
    left: -17%;
}
@media (min-width: 1140px){
    top: -1%;
    left: -17%;

}
@media (min-width: 1280px){
    top: 3%;
    left: -25%;
}
@media (min-width: 1920px){
    top: 6%;
   
}

`
const Turtle = styled.img`
/* background: url(${turtle}); */
position: absolute;
width: 30%;
@media (min-width: 375px){
    bottom: 25%;
    right: 0%;
}
@media (min-width: 411px){
    bottom: 25%;
    right: 0%;
}
@media (min-width: 768px){
    bottom: 17%;
    right: 0%;
}
@media (min-width: 1024px){
    bottom: 28%;
    right: 0%;
}
@media (min-width: 1140px){
    bottom: 24%;

}
@media (min-width: 1280px){
    bottom: 27%;

}
@media (min-width: 1440px){
    bottom: 28%;
}
@media (min-width: 1920px){
    bottom: 30%;
    right: 3%;

    width: 20%;

}
`
const CloudLeft = styled.img`
position: absolute;
right: 45%;
bottom: 54%;
width: 55%;
@media (min-width: 375px){
bottom: 47%;

}
@media (min-width: 411px){
bottom: 45%;

}
@media (min-width: 768px){
    bottom: 35%;

}
@media (min-width: 1024px){
    display: none;
}
@media (min-width: 1140px){
    bottom: 47%;
display: block;

}
@media (min-width: 1280px){
    bottom: 49%;
}
@media (min-width: 1366px){
    bottom: 47%;

}
@media (min-width: 1440px){
    bottom: 45%;

}
@media (min-width: 1820px){
    bottom: 45%;
}
@media (min-width: 1920px){
    bottom: 38%;
}
/* -webkit-transform: scaleX(-1);
  transform: scaleX(-1); */
`
const CloudRight2 = styled.img`
position: absolute;
width: 50%;
right: 0%;
@media (max-width: 768px){
display: none;
}
@media (min-width: 1024px){
top: 25%;
}
@media (max-width: 1023px){
   display: none;
}
@media (min-width: 1140px){
   display: none;
}
`
const CloudRight = styled.img`
position: absolute;
left: 60%; 
width: 65%;
bottom: 28%;
@media (min-width: 375px){
bottom: 22%;

}
@media (min-width: 411px){
bottom: 22%;

}
@media (min-width: 768px){
    bottom: 15%;

}
@media (min-width: 1024px){
    bottom: 23%;
    
}
@media (min-width: 1024px){
    left: 0%;

    
}
@media (min-width: 1140px){
    bottom: 21%;
    left: 60%; 

}
@media (min-width: 1280px){
    bottom: 24%;

}
@media (min-width: 1366px){
    left: 60%; 

}
@media (min-width: 1440px){
    bottom: 21%;

}
@media (min-width: 1820px){
    bottom: 20%;
}
@media (min-width: 1920px){
    bottom: 22%;
}
`
const ParentAbout = styled.div`
padding-bottom: 5%;
@media (min-width: 375px){
padding-bottom: 0%;
}
@media (min-width: 411px){
padding-bottom: 0%;
}
@media (min-width: 768px){
padding-bottom: 10%;
padding-top: 0%;

}
@media (min-width: 1024px){
padding-top: 20%;
padding-bottom: 25%;

}
@media (min-width: 1280px){
padding-top: 15%;
padding-bottom: 30%;

}
@media (min-width: 1440px){
padding-bottom: 30%;
}
@media (min-width: 1820px){
padding-top: 25%;
padding-bottom: 50%;
}
@media (min-width: 1920px){
padding-top: 15%;
padding-bottom: 15%;
}

`
const AboutBorder = styled.div`
margin-top: 17%;
margin-bottom: 60%;
overflow: visible;
padding: 20px;
border-radius: 30px;
border: 1px ;
background-color: rgba(252, 204, 171, 0.52);
@media (min-width: 375px){
margin-bottom: 0%;
height: 50%;
padding-top: 0%;
}
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
margin-top: 0%;

height: 75%;
padding: 5%;
width: 100%;
}
@media (min-width: 1920px){
    margin-bottom: 40%;
}
`
const ClayTop = styled.img`
width: 100%;
@media (min-width: 375px){
    margin-top: 0%;
}

`
const HeaderContainer = styled.div`
@media(min-width: 1140px){
margin-top: 0%;
margin-bottom: -10%;

}
@media(min-width: 1280px){
margin-top: 0%;
margin-bottom: -7%;
z-index: 20;
position: relative;
}
@media(min-width: 1920px){
margin-bottom: -5%;

}
`


export default class About extends Component {
    render() {
        return (
            <Fragment>
                <AboutContainer>
                {/* <Fallenstar/> */}
                 <ClayTop src={clay} />
                <HeaderContainer><Header color="black" textAlign="center" headerText="About"/></HeaderContainer> 

                 <Whale src={whale} />
                  <CloudLeft className={salite.salitepailoeykonmekloidai} src={cloudLeft} />
                  <CloudRight className={salite.salitepailoeykonmekloidai2} src={cloudRight} />
                  <CloudRight2 className={salite.salitepailoeykonmekloidai3} src={cloudRight2} />
                 
                    <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <ParentAbout>
                            <AboutBorder>
                            <Content         
                                textIndent="24px"
                                textIndentIpad="50px"
                                textIndentDesktop="50px"                      
                                textAlign="่justify"
                                color="black"
                                content="Hello World - Dolphin เป็นโครงการที่จัดขึ้นเพื่อแบ่งปันความรู้ในด้านการสร้างเว็บไซต์
                    และเกม โดยจะมีการจัดการเรียน การสอนให้กับนักศึกษาที่เข้าร่วมโครงการสำหรับโครงการในปีนี้จะมีสาขาให้นักศึกษาได้เลือกตามความสนใจทั้งหมด 5 สาขา 
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
                            </ParentAbout>
                        </div>
                    </div>

                </div>
                <Turtle src ={turtle} />

                <Footer />

                </AboutContainer>

            </Fragment>
        )
    }
}
