
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'
import Footer from './sponsorfooter'
// if state are needed change to class component as you se fit - ruangrit 

const Container = styled.div`
padding-top:12vh;
width: 100%;
height: auto;
background-color: #023058;
/* background: linear-gradient(135deg, #00103a 0%, #023058 100%); */
`
const Border = styled.div`
width : 100%;
height: 518px;
border-radius : 28px;
background-color:rgb(176, 232, 255,0.85);
`


export default function Sponsor() {
    return (
        <Fragment>
            <Container>
                <Header color="white " textAlign="center" headerText="Sponsor" />
                <div className="row pt-5">
                    <div className="col">
                    </div>
                    <div className="col-10">
                        <Border />
                    </div>
                    <div className="col">
                    </div>
                </div>
                <Footer />
            </Container>
        </Fragment >
    )
}
