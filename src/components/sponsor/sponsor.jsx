
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'
// if state are needed change to class component as you se fit - ruangrit 

const Container = styled.div`
    padding-top:10vh;
    width: 100%;
    height: 100%;
    background-color: #023058;
    position: relative;
    // min-height: 100vh;
    // min-height: -webkit-fill-available;
    z-index:1;
`
const Border = styled.div`
    width : 100%;
    height: 518px;
    margin:auto;
    -webkit-border-radius: 27px;
    -moz-border-radius: 27px;
    border-radius: 27px;
    background-color:rgb(176, 232, 255,0.85);
    z-index:1000;
`



export default function Sponsor() {
    return (
        <Fragment>
            <Container>
                <Header color="white " textAlign="center" headerText="Sponsor" />
                <div className="row pt-5" style={{
                    marginLeft: "0px",
                    marginRight: "0px",
                }}>
                    <div className="col" style={{zIndex:0}}>
                    </div>
                    <div className="col-10">
                        <Border></Border>
                    </div>
                    <div className="col" style={{zIndex:0}}>
                    </div>
                </div>
            </Container>
        </Fragment >
    )
}
