
import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import 'bootstrap/dist/css/bootstrap.min.css' //this is how you import bootstrap
import styled from 'styled-components'


const FontColor = styled.div`
    color : ${props => props.color}
`
const ColorHover = styled.div`

`
function Subject(props){
    return (
        <div className="subject-item">
            <img src={props.src} alt={props.name}/>
            <div className={`subject-item ${props.className}-btn`} >
                <FontColor color="black">
                    <p>{props.name}</p>
                </FontColor>
            </div>
        </div>
    )
}
function TotalSubject(){
    return (
        <div className="total-subject">
            <Subject src={fe_logo} className="front-end" name="Front-End"/>
            <Subject src={web_design_logo} className="web-design" name="Web Design" />
            <Subject src={infra_logo} className="infrastructure" name="Infrastructure"/>
            <Subject src={game_design_logo} className="game-design" name="Game Design"/>
            <Subject src={game_dev_logo} className="game-development" name="Game Development"/>
        </div>
    )
}
export default class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject_header : "Front-End",
            subject_description : ""
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent() {}

    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                <h1 className="team-header"></h1>
                <div className="row">
                    <div className="col">
                    <section className="subject-zone">
                        <h2>{this.state.subject_header}</h2>
                        <p>{this.state.subject_description}</p>
                        <button className="register">Register</button>
                    </section>
                    <section className="other-subject-zone">
                        <h4 className="other-subject">สาขาอื่นๆ</h4>
                        <TotalSubject />
                    </section>
                    </div>
                    <div className="col">
                        <img src={dolphin}  alt="Dolphin"/>
                    </div>
                </div>

                </div>
            </Fragment>
        )
    }
}
