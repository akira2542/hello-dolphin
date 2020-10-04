
import React, { Fragment } from 'react'
import styled from 'styled-components'
import kmuttsit from '../../assets/images/sponsor/KMUTTnSIT-01.png'
const Footer = styled.div`
  	margin-top: 50px;
    width: 100%;
    height: 119px;
  	background-color : #B0CCE5;
`
const Kmuttsit = styled.img`
    padding-top :10px;
    padding-bottom : 10px;
    width : 409px;
    height : 97px;
    max-height: 100%;
`
export default function SponsorFooter() {
    return (
        <Footer>
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <Kmuttsit src={kmuttsit} alt="kmuttsit" className="mt-2"/>
                </div>
                <div className="col-4">

                </div>
            </div>
        </Footer>
    )
}
