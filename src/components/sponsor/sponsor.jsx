
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'
// if state are needed change to class component as you se fit - ruangrit 

const Container = styled.div`
    width: 100%;
    height: 0px;
    padding: 0px;
    background-color: #023058;
    position: relative;
    z-index:1;
    @media (min-width: 700px){
        height: 100px;
        min-height: -webkit-fill-available;
      }
    @media (min-width: 1080px){
        padding-top:10vh;
        height: 300px;
      }
    @media (min-width: 1600px){
        height: 500px;
      }
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
