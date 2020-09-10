import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Header } from '../core/text'

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #023058;
`

const AccordianCon = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Accordian = styled.div`
width: 800px;
border: 1px solid red;
`
const AccordianHeading = styled.div`
width: 100%;
background-color: #C1D3E8; 
`
const Indicator = styled.div`` 

const AccordianContent = styled.div`
width: 100%;
background-color: grey;
`

export default class Faqs extends Component {
    render() {
        return (
            <Container>
                <Header color="white " textAlign="center" headerText="FAQS" />
                <AccordianCon>
                    <Accordian>
                        <AccordianHeading>Heading</AccordianHeading>
                        <AccordianContent>Content</AccordianContent>
                    </Accordian>
                </AccordianCon>
            </Container>
        )
    }
}

