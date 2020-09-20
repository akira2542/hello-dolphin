
import React from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'
import Footer from './sponsorfooter'
// if state are needed change to class component as you se fit - ruangrit 

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #023058;
/* background: linear-gradient(135deg, #00103a 0%, #023058 100%); */
`

export default function Sponsor() {
    return (
        <Container>
            <Header color="white " textAlign="center" headerText="Sponsor" />
            <Footer/>
        </Container>
    )
}
