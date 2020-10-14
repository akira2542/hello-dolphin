import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import styled , {keyframes} from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
    frontEnd : {
        primaryColor : "#B9E6E9",
        shadow: "#31CBED"
    },
    webDesign : {
        primaryColor : "#E8BEC6",
        shadow : "#DB6CBE"
    },
    infrastructure : {
        primaryColor : "#A8E9A1",
        shadow : "#93EB98"
    },
    gameDesign : {
        primaryColor : "#FFED8C",
        shadow : "#FFEE7C"
    },
    gameDev : {
        primaryColor : "#FFAC3A",
        shadow : "#FFA700"
    }
    
}

const wipWupAnimation = (shadow) => keyframes`
    0% { box-shadow :  0px 0px 17px 1px ${shadow}; }
    50% { box-shadow :  0px 0px 26px 1px ${shadow}; }
    100%{ box-shadow :  0px 0px 17px 1px ${shadow}; }
`
const Button = styled.div`
    color : ${props => props.isActive ? "black" : props.color};
    cursor : pointer;
    font-size : ${props => props.fontSize};
    border : 2px solid ${props => props.color};
    padding : 10px;
    text-align : center;
    margin : 20px 0 0 0;
    font-family : "Itim-Regular";
    border-radius : 9px;
    margin : 20px auto;
    width : ${props => props.width};
    background-color : ${props => props.isActive ? props.color : "none"};
    transition : .6s ease;
    :hover {
        color : black;
        background-color : ${props => props.color};
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
    animation : ${props => props.isActive? wipWupAnimation(props.shadow) : "none"} 3s ease-in-out infinite ;
    @media (min-width : 360px){
       display : none; 
    }
    @media (min-width : 1200px){
        display : block;
    }
    @media (min-width : 1800px){
        width : 150px;
    }
`
const Container = styled.div`
    background-color :  #023058;  
    /* background: linear-gradient(135deg, #00103a 0%, #023058 100%); */
    color : white;
    font-family : "Rye-Regular";
    padding-top : 40px;
    @media (min-width : 600px){
        height : auto;
    }
    @media (min-width : 1200px){
        height : 120vh;
        padding-top : 20px;
    }
    @media (min-width : 1400px){
        min-height : 120vh;
        padding-top : 30px;
    }
    @media (min-width : 1900px){
        min-height : 110vh;
        padding-top : 80px;
    }
    .animationFadeIn{
        animation: fadeInMobile .6s ease-in;   
        @media (min-width : 1200px){
            animation: fadeIn .6s ease-in;   
        }        
    }
    @keyframes fadeInMobile{
        0% { opacity : 0; }
        20% { opacity : 0; }
        100% { opacity: 1; }
    }
    @keyframes fadeIn{
        0% { opacity : 0; margin-left: 50px; }
        20% { opacity : 0; }
        100% { opacity: 1; }
    }
`
const SubjectItemContainer = styled.div`
    @media (min-width : 1200px){
        width : 110%;
    }
 `
const SubjectItem = styled.div`
    display : flex;
    flex-direction : column;
    padding : 0 !important;
    div {
        transition : all .6s ease-in-out;
        box-shadow :  0px 0px 0px 0px ${props => props.shadow};
    }
    :hover div {
        color : black;
        background-color : ${props => props.color};
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
    @media (min-width : 360px){
        margin : 0 5px;
        justify-items : center;
    }
    @media (min-width : 1200px){
        margin : 10px 10px;   
    }
`
const SubjectLogo = styled.div`
    background-image : url(${props => props.src});
    background-repeat : no-repeat;
    background-size : cover; 
    background-position : center;
    border-radius : 50%;
    margin : 0 auto;
    cursor : pointer;
    transition : all .6s ease-in-out;
    animation : ${props => props.isActive? wipWupAnimation(props.shadow) : "none"} 3s ease-in-out infinite;
    @media (min-width : 360px){
        width : 12vw;
        height : 12vw;
    }
    @media (min-width : 768px){
        width : 10vw;
        height : 10vw;
    }
    @media (min-width : 1024px){
        width : 8vw;
        height : 8vw;
    }
    @media (min-width : 1200px){
        width : 89px;
        height : 89px;
    }
    @media (min-width : 1600px){
        width : 99px;
        height : 99px;
    }
    @media (min-width : 1800px){
        width : 120px;
        height : 120px;
    }
`
const OtherSubject = styled.h4`
    font-size: 32px;
    font-family : "Itim-Regular";
    display : block;
    @media (max-width : 1200px){
        display : none;
    }
`
const Header = styled.h1`
    color : white;
    @media (min-width : 360px){
        font-size : 40px;
        text-align : center;
        display : none;
    }
    @media (min-width : 600px){
        font-size : 50px;
    }
    @media (min-width : 768px){
        font-size : 96px;
    }
    @media (min-width : 1200px){
        text-align : left;
        font-size : 110px;
        display : block;
    }
` 
const SubHeader = styled.h2`
    color : white;
    @media (min-width : 360px){
        font-size : 28px;
        text-align : center;
    }
    @media (min-width : 768px){
        font-size : 48px;
    }
    @media (min-width : 1200px){
        text-align : left;
        font-size : 60px;
    }
`
const Content = styled.div`
    font-size : 20px;
    font-family : "Itim-Regular";
    text-indent : 50px;
    @media (min-width : 360px){
        font-size : 16px;
        height : 140px;
    }
    @media (min-width : 600px){
        font-size : 18px;
        height : 100px;
    }
    @media (min-width : 768px){
        font-size : 22px;
        height : 130px;
    }
    @media (min-width : 866px){
        height : 110px;
    }
    @media (min-width : 1200px){
        height : 140px;
        width : 90%;
    }
    @media (min-width : 1600px){
        white-space : pre-wrap;
    }
`
const Wrapper = styled.div`
    margin : 0 auto;
`
const Column = styled.div` 
    position : relative;
`
const SubjectWrapper = styled.div`
    margin : 10px 0px;
`
const RegisterButton = styled(Button)`
    display : block;
    margin : 30px auto 0 auto;
    :hover{
        background-color : #6c757d;
        color : white;
        box-shadow : none;
        cursor : not-allowed;
    }
    @media (max-width : 1200px){
        font-size : 16px;
        width : 25vw;
    }
    @media (min-width : 1800px){
        font-size : 16px;
        width : 250px;
    }
`
const Img = styled.img`
    margin : 0 auto;
    @media (min-width : 360px){
        width : 250px;
        height : 240px;
    }
    @media (min-width : 768px){
        width : 400px;
        height : 370px;
    }
    @media (min-width : 1200px){
        width : 100%;
        height : auto;
        position : absolute;
        left : -10%;
        margin : 150px 0 0 auto;
    }
    @media (min-width : 1600px){
        margin : 50px 0 0 auto;
    }
`
const HeaderMobile = styled(Header)`
    display : block;
    margin : 0 auto;
    @media (min-width : 1200px){
        display : none;
    }
`
function Subject(props){
    return (
        <SubjectItem className="button" color={props.color} shadow={props.shadow} onClick={props.onClick}>
            <SubjectLogo  src={props.src} isActive={props.isActive} shadow={props.shadow} />
            <Button  color={props.color} fontSize={"12px"} isActive={props.isActive} shadow={props.shadow}  > {props.name} </Button>
        </SubjectItem>
    )
}
function TotalSubject(props){
    return (
        <SubjectItemContainer className="row justify-content-center justify-content-xl-start">
            <Subject src={fe_logo} name="Front-End" color={theme.frontEnd.primaryColor} shadow={theme.frontEnd.shadow} onClick={() => props.onClick(0)} isActive={props.isActive[0]} />
            <Subject src={web_design_logo}  name="Web Design" color={theme.webDesign.primaryColor} shadow={theme.webDesign.shadow} onClick={() => props.onClick(1)} isActive={props.isActive[1]} />
            <Subject src={infra_logo} name="Infrastructure" color={theme.infrastructure.primaryColor} shadow={theme.infrastructure.shadow} onClick={() => props.onClick(2)} isActive={props.isActive[2]} />
            <Subject src={game_design_logo}  name="Game Design" color={theme.gameDesign.primaryColor} shadow={theme.gameDesign.shadow} onClick={() => props.onClick(3)} isActive={props.isActive[3]} />
            <Subject src={game_dev_logo}  name="Game Development" color={theme.gameDev.primaryColor} shadow={theme.gameDev.shadow} onClick={() => props.onClick(4)} isActive={props.isActive[4]}  />
        </SubjectItemContainer>
    )
}
export default class Team extends Component {
    state = {
        subject_header : [
            "Front-End",
            "Web design",
            "Infrastructure",
            "Game Design",
            "Game Development"
        ],
        subject_description : [
            "ในสาขานี้จะพาไปเปิดโลกของการเป็นนักพัฒนาเว็บไซต์ ซึ่งจะได้เรียนรู้ตั้งเเต่ \n HTML & CSS, Javascript เเละการใช้ git จนถึงการเขียน React ซึ่งเป็นสิ่งที่มีความต้องการสูง \n ในสายงาน IT ในปัจจุบัน",
            `ในสาขานี้จะพาไปทำความรู้จักกับขั้นตอนในการ Design ที่เกี่ยวกับ Web Design โดยเริ่มตั้งแต่องค์ประกอบของการออกแบบเว็บไซต์, UX/UI, Adobe illustrator, ลิขสิทธิ์ ไปจนถึงการทำ Prototype ของงาน`,
            `ในสาขานี้จะพาไปรู้จักกับการวางโครงสร้างพื้นฐานของระบบของการสร้างและพัฒนาเว็บไซต์ต่างๆ ที่จะทำให้ทุกคนสามารถเข้าถึงเว็บไซต์ของเราได้ รวมถึงยังมีการสอนใช้เครื่องมือต่างๆที่จำเป็นต่อการวางระบบของเรา นอกจากนี้ยังได้เรียนรู้การทำงานแบบ DevOps อีกด้วย`,
            `ในสาขานี้จะทำให้คุณเปลี่ยนจาก "ผู้เล่นมาเป็นผู้สร้าง" กับพื้นฐานที่จำเป็นในการออกแบบเกม ตั้งแต่การใช้เส้นและสี การออกแบบตัวละคร ไปจนถึง องค์ประกอบของเกมว่ากว่าจะออกแบบเกมแต่ละเกม จะต้องรู้อะไรบ้าง ถ้าคุณสนใจ "แล้วเรามาเจอกัน"`,
            `ในสาขานี้จะพาไปพบการทำเกมบนเว็บไซต์ โดยการเรียนรู้ว่าเกมบนเว็บไซต์ที่เราเห็นกันนั้น มีองค์ประกอบอะไรบ้าง และจะสามารถสร้างเกมบนเว็บไซต์ขึ้นมาได้อย่างไรในเบื้องต้น รวมไปถึงจะได้ฝึกทักษะการทำงานเป็นทีมอีกด้วย`,
        ],
        prevIndex : 0,
        isActive : [true,false,false,false,false],
        headerIndex: 0,
        contentIndex: 0,
        contentClass : "animationFadeIn",
        colorCode : [theme.frontEnd.shadow]
    }

    changeTopic(index){
        setTimeout(()=>{
            this.setState({
                headerIndex : index,
                contentIndex : index
            })
        },40);
    }

    activeButton(index){
        if(index === this.state.prevIndex) return;
        const active = this.state.isActive;
        const prevIndex = this.state.prevIndex;
        
        if(active[prevIndex]){
            active[prevIndex] = false;
            active[index] = true;
            this.setState({
                contentClass : ""
            });
        }
        setTimeout(()=>{
            this.setState({
                isActive : active,
                prevIndex : index,
                contentClass : "animationFadeIn"
            })
        },20);
    }
    
    handleClick = (index) => {
        this.changeTopic(index);
        this.activeButton(index); 

    }

    render() {
        const styleHref = {
            textDecoration : "none",
            color : theme.frontEnd.primaryColor
        }
        return (
            <Fragment>
                <Container className="container-fluid">
                    <Wrapper className="row">
                        <HeaderMobile id="teams">Teams</HeaderMobile>
                    <Column  className="col-12 col-xl-6 offset-xl-1 order-2 order-xl-1">
                        <Header id="teams">Teams</Header>
                        <div className="row">
                        <SubjectWrapper className="col-12 order-2 order-xl-1">
                            <SubHeader className={this.state.contentClass}>{this.state.subject_header[this.state.headerIndex]}</SubHeader>
                            <Content className={this.state.contentClass}><p>{this.state.subject_description[this.state.contentIndex]}</p></Content>
                            <RegisterButton className="btn btn-secondary disabled" 
                                color="#B9E6E9" 
                                width="200px" 
                                fontSize="18px" > Register </RegisterButton> 
                        </SubjectWrapper>
                        <SubjectWrapper className="col-12 order-1 order-xl-2">
                            <OtherSubject>สาขาอื่นๆ</OtherSubject>
                            <TotalSubject onClick={(i) => this.handleClick(i)} isActive={this.state.isActive}  />
                        </SubjectWrapper>
                        </div>
                    </Column> 
                    <Column  className="col-12 col-xl-5 order-1 order-xl-2">
                        <div className="row">
                            <Img src={dolphin} className="img-fluid"/>
                        </div>
                    </Column>
                    </Wrapper>
                </Container>
            </Fragment>
        )
    }
}
