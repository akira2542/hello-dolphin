
import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import styled , {keyframes} from 'styled-components'


const theme = {
    frontEnd : {
        primaryColor : "#B9E6E9",
        secondaryColor : "#31CBED"
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
    0% {
        box-shadow :  0px 0px 17px 1px ${shadow};
    }
    50% {
        box-shadow :  0px 0px 26px 1px ${shadow};
    }
    100%{
        box-shadow :  0px 0px 17px 1px ${shadow};
    }

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
    box-shadow :  0px 0px 15px 1px ${props => props.isActive ? props.shadow : "none"};
    :hover {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
    animation : ${props => props.isActive? wipWupAnimation(props.shadow) : "none"} 3s ease-in-out infinite ;
    @media (min-width : 360px){
       display : none; 
    }
    @media (min-width : 1200px){
        display : block;
    }
`
const Container = styled.div`
    background-color :  #023058;  
    /* background: linear-gradient(135deg, #00103a 0%, #023058 100%); */
    height : 100vh;
    color : white;
    font-family : "Rye-Regular";
    @media (min-width : 600px){
        height : auto;
    }
    @media (min-width : 1200px){
        height : 100vh;
    }
`
const SubjectItemContainer = styled.div`
    display : flex;
    width : 100%;
    align-items : flex-start;
    @media (min-width : 360px){
        justify-content : center;
    }
    @media (min-width : 1200px) and (max-width : 1320px){
        width : 110%;
    }
    @media (min-width : 1200px){
        justify-content : left;
    }
`
const SubjectItem = styled.div`
    display : flex;
    flex-direction : column;
    :hover div {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 15px 1px ${props => props.shadow};
    }
    @media (min-width : 360px){
        margin : 0 10px;
        justify-items : center;
    }
    margin : 10px 10px;
`
const SubjectLogo = styled.div`
    background-image : url(${props => props.src});
    background-repeat : no-repeat;
    background-size : cover; 
    background-position : center;
    margin : 0 auto;
    border-radius : 50%;
    cursor : pointer;
    box-shadow :  0px 0px 15px 1px ${props => props.isActive ? props.shadow : "none"};
    animation : ${props => props.isActive? wipWupAnimation(props.shadow) : "none"} 3s ease-in-out infinite;

    @media (min-width : 360px){
        width : 13vw;
        height : 13vw;
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
    text-align : justify;
    @media (min-width : 360px){
        font-size : 16px;
        height : 85px;
    }
    @media (min-width : 600px){
        font-size : 18px;
        height : 80px;
    }
    @media (min-width : 768px){
        font-size : 22px;
        height : 100px;
    }
    @media (min-width : 1200px){
        width : 95%;
    }
`
const Wrapper = styled.div`
    max-width : 90vw;
    margin : 0 auto;
    display : flex;
    @media (min-width : 360px){
        flex-direction : column;
    }
    @media (min-width : 1200px){
        flex-direction : row;
    }
`
const Column = styled.div`
    display : flex;
    flex-direction : column;
    width : 50%;
    margin : 10px 0;
    justify-content : center;
    @media (min-width : 360px){
        width : 100%;
        order : ${props => props.order};
    }
    @media (min-width : 1200px){
        flex-direction : column;
        order : 0;
    }
`
const SubjectWrapper = styled.div`
    @media (max-width : 1199px){
        margin : 20px 0px;
        order : ${props => props.order};
    }
`
const RegisterButton = styled(Button)`
    display : block;
    margin-top : 30px;
    @media (max-width : 1200px){
        font-size : 16px;
        width : 25vw;
    }
`
const Img = styled.img`
    margin : 0 auto;
    @media (min-width : 360px){
        width : 55%;
    }
    @media (min-width : 768px){
        width : 45%;
    }
    @media (min-width : 800px){
        width : 35%;
    }
    @media (min-width : 1200px){
        width : 100%;
    }
`
const HeaderMobile = styled(Header)`
    display : block;
    @media (min-width : 1200px){
        display : none;
    }
`
function Subject(props){
    return (
        <SubjectItem color={props.color} shadow={props.shadow} className="active" onClick={props.onClick}>
            <SubjectLogo  src={props.src} isActive={props.isActive} shadow={props.shadow} />
            <Button  color={props.color} fontSize={"12px"} isActive={props.isActive} shadow={props.shadow} > {props.name} </Button>
        </SubjectItem>
    )
}
function TotalSubject(props){
    return (
    <SubjectItemContainer>
        <Subject src={fe_logo}  name="Front-End" color={theme.frontEnd.primaryColor} shadow={theme.frontEnd.secondaryColor} onClick={() => props.onClick(0)} isActive={props.isActive[0]}/>
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
            "Game Developer"
        ],
        subject_description : [
            `ในสาขานี้จะพาไปเปิดโลกของการเป็นนักพัฒนาเว็บไซต์ ซึ่งจะได้เรียนรู้ตั้งเเต่ HTML & CSS, Javascript เเละการใช้ git จนถึงการเขียน React ซึ่งเป็นสิ่งที่มีความต้องการสูง ในสายงาน IT ในปัจจุบัน`,
            `2`
        ],
        prevIndex : 0,
        isActive : [true,false,false,false,false],
        headerIndex: 0,
        contentIndex: 0
    }

    changeTopic(index){

        this.setState({
            headerIndex : index,
            contentIndex : index
        })

    }

    activeButton(index){
        if(index === this.state.prevIndex) return;
        const active = this.state.isActive;
        const prevIndex = this.state.prevIndex;
        if(active[prevIndex]){
            active[prevIndex] = false;
            active[index] = true;
            this.setState({
                isActive : active,
                prevIndex : index
            })
        }
    }

    handleClick = (index) => {
        this.changeTopic(index);
        this.activeButton(index); 
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Wrapper>
                        <HeaderMobile id="teams">Teams</HeaderMobile>
                    <Column order="2">
                        <Header id="teams">Teams</Header>
                        <SubjectWrapper order="2">
                            <SubHeader>{this.state.subject_header[this.state.headerIndex]}</SubHeader>
                            <Content><p className="content">{this.state.subject_description[this.state.contentIndex]}</p></Content>
                            <RegisterButton 
                                color="#B9E6E9" 
                                shadow="#31CBED"
                                width="200px" 
                                fontSize="18px" > Register </RegisterButton>
                        </SubjectWrapper>
                        <SubjectWrapper order="1">
                            <OtherSubject>สาขาอื่นๆ</OtherSubject>
                            <TotalSubject onClick={(i) => this.handleClick(i)} isActive={this.state.isActive} />
                        </SubjectWrapper>
                    </Column> 
                    <Column order="1">
                        <Img src={dolphin} />
                    </Column>
                    </Wrapper>
                </Container>
            </Fragment>
        )
    }
}
