
import React, { Fragment } from 'react'
import styled from 'styled-components'
import kmuttsit from '../../assets/images/sponsorfooter/KMUTTnSIT-01.png'
import underoceancoral from '../../assets/images/sponsorfooter/underocean_coral.png'
import underoceanturtle from '../../assets/images/sponsorfooter/underocean_turtle.png'
const Container = styled.div`
    padding-top:350px;
    width: 100%;
    height: 100%;
    background-color: #023058;
    position: relative;
    // min-height: 100vh;
    // min-height: -webkit-fill-available;
`
const Footer = styled.div`
  	margin-top: 50px;
    width: 100%;
    height: 119px;
    background-color : #B0CCE5;
    max-width:100%;
`
const Underocean = styled.img`
    position: absolute;
    right: 100%;
    bottom: 23%;
    left: -0.24%;
    width: 100%;    
    z-index:1;
`

const Underturtle = styled.img`
    position: absolute;
    width: 30%;
    z-index:20;

    top:220px; 
    left:130px; 
    max-width:575px; 
    
    //  @media (min-width: 375px){
    //      top:220px; 
    // left:130px; 
    //  }
    //  @media (min-width: 411px){
    //     top:220px; 
    // left:130px; 
    //  }
    //  @media (min-width: 768px){
    //      top:220px; 
    // left:130px; 
    //  }
    //  @media (min-width: 1024px){
    //      top:220px; 
    // left:130px; 
    //  }
    //  @media (min-width: 1140px){
    //    top:220px; 
    // left:130px; 

    //  }
    //  @media (min-width: 1280px){
    //      top:220px; 
    // left:130px; 

    //  }
    //  @media (min-width: 1920px){
    //      top:220px; 
    //     left:130px; 

    //  }
`

const Kmuttsit = styled.img`
    padding-top :10px;
    padding-bottom : 10px;
    width : 409px;
    height : 97px;
    
`


export default function SponsorFooter() {
    return (
        <Fragment>
            <Container>
                <Underocean src={underoceancoral} />
                <Underturtle src={underoceanturtle} />
                <Footer>
                    <div className="row" style={{
                        marginLeft: "0px",
                        marginRight: "0px",
                    }}>
                        <div className="col-2" style={{ zIndex: 1 }}>

                        </div>
                        <div className="col-8">
                            <Kmuttsit src={kmuttsit} alt="kmuttsit" className="mt-2 img-fluid mx-auto d-flex justify-content-center" />
                        </div>
                        <div className="col-2" style={{ zIndex: 1 }}>

                        </div>
                    </div>
                </Footer>
            </Container>
        </Fragment>
    )
}
