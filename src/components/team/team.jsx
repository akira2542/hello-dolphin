
import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import 'bootstrap/dist/css/bootstrap.min.css' //this is how you import bootstrap
import styled from 'styled-components'
import {Header,SubHeader,Content} from '../core/text'

const Button = styled.div`
    color : ${props => props.color};
    cursor : pointer;
    font-size : 12px;
    :hover {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
    }
    border : 2px solid ${props => props.color};
    padding : 10px;
    text-align : center;
    margin : 20px 0 0 0;
    font-family : "Itim-Regular";
    border-radius : 9px;
`
const Container = styled.div`
    background-color :  #023058;  
    height : 100vh;
    color : white;
    font-family : "Rye-Regular";
`
const SubjectItemContainer = styled.div`
    display : flex;
    width : 100%;
    align-items : flex-end;
`
const SubjectItem = styled.div`
    margin : 0 10px;
    display : flex;
    flex-direction : column;
    justify-items : center;
`
const DolphinImg = styled.div`
    width : 100%;
`
const SubjectLogo = styled.div`
    width : 91px;
    margin : 0 auto;
`
const OtherSubject = styled.h4`
    font-size: 32px;
    font-family : "Itim-Regular";
`
function Subject(props){
    return (
        <SubjectItem>
            <SubjectLogo><img src={props.src} alt={props.name}/></SubjectLogo>
            <Button color={props.color} >
                {props.name}
            </Button>
        </SubjectItem>
    )
}
function TotalSubject(){
    return (
        <SubjectItemContainer>
            <Subject src={fe_logo}  name="Front-End" color="#B9E6E9"/>
            <Subject src={web_design_logo}  name="Web Design" color="#E8BEC6"/>
            <Subject src={infra_logo} name="Infrastructure" color="#A8E9A1"/>
            <Subject src={game_design_logo}  name="Game Design" color="#FFED8C"/>
            <Subject src={game_dev_logo}  name="Game Development" color="#FFAC3A"/>
        </SubjectItemContainer>
    )
}
export default class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject_header : "Front-End",
            subject_description : "ในสาขานี้จะพาไปเปิดโลกของการเป็นนักพัฒนาเว็บไซต์ ซึ่งจะได้เรียนรู้ตั้งเเต่ HTML & CSS, Javascript เเละการใช้ git จนถึงการเขียน React ซึ่งเป็นสิ่งที่มีความต้องการสูง ในสายงาน IT ในปัจจุบัน"
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent() {}

    render() {
        return (
            <Fragment>
                <Container className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Header 
                                color="white"
                                textAlign="left"
                                headerText="Teams"
                            />
                            <section className="subject-zone">
                                <SubHeader 
                                    color="white"
                                    textAlign="left"
                                    subHeaderText={this.state.subject_header}
                                />
                                <Content 
                                    color="white"
                                    content={this.state.subject_description}
                                />
                                <button className="register">Register</button>
                            </section>
                            <section className="other-subject-zone">
                                <OtherSubject>สาขาอื่นๆ</OtherSubject>
                                <TotalSubject />
                            </section>
                            </div>
                        <div className="col">
                            <DolphinImg><img src={dolphin} alt="Dolphin"/></DolphinImg>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
