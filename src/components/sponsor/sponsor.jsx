
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'
import kmuttsit from '../../assets/images/sponsor/KMUTTnSIT-01.png'
// if state are needed change to class component as you se fit - ruangrit 

const Container = styled.div`
    padding-top:12vh;
    width: 100%;
    height: 100%;
    background-color: #023058;
`
const Border = styled.div`
    width : 100%;
    height: 518px;
    -webkit-border-radius: 27px;
    -moz-border-radius: 27px;
    border-radius: 27px;
    background-color:rgb(176, 232, 255,0.85);
`

const Footer = styled.div`
  	margin-top: 50px;
    width: 100%;
    height: 119px;
    background-color : #B0CCE5;
    max-width:100%;
`
const Kmuttsit = styled.img`
    padding-top :10px;
    padding-bottom : 10px;
    width : 409px;
    height : 97px;
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
                        <Border></Border>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <Footer>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-8">
                            <Kmuttsit src={kmuttsit} alt="kmuttsit" className="mt-2 img-fluid mx-auto d-flex justify-content-center" />
                        </div>
                        <div className="col-2">

                        </div>
                    </div>
                </Footer>
            </Container>
        </Fragment >
    )
}
