
import React, { Fragment } from 'react'
import styled from 'styled-components'
import kmuttsit from '../../assets/images/sponsorfooter/KMUTTnSIT-01.png'
import underoceancoral from '../../assets/images/sponsorfooter/underocean_coral.png'
import underoceanturtle from '../../assets/images/sponsorfooter/underocean_turtle.png'
const Container = styled.div`
    /* width: 100%; */
    padding-top:100px;
    background-color: #023058;
    position: relative;
    /* min-height: -webkit-fill-available; */
      @media (min-width: 700px){
        padding-top:350px;
      }
      @media (min-width: 1080px){
        min-height: 30vh;
        padding-top:500px;
      }
      @media (min-width: 1300px){
        padding-top:600px;
      }
      @media (min-width: 1500px){
        padding-top: 800px;
      }
    
`
const Footer = styled.div`
    z-index : 90;
    position : absolute;
    width: 100%;
    height: unset;
    background-color : #B0CCE5;
    bottom: 0;
`
const Underocean = styled.img`
    position: absolute;
    right: 100%;
    bottom: 20px;
    left: -0.24%;
    width: 100%;    
    z-index:1;
    @media (min-width: 700px){
        bottom: 30px;
    }
    @media (min-width: 1080px){
        bottom: 70px;
    }
    @media (min-width: 1600px){
        bottom: 50px;
    }
`

const Underturtle = styled.img`
    position: absolute;
    z-index: 20;
    width: 120px;
    bottom: 100px; 
    left: 80px; 
    @media (min-width: 700px){
        width: 250px;
        bottom:150px; 
        left:150px; 
      }
      @media (min-width: 1000px){
        width: 300px;
        bottom:150px; 
        left:250px; 
      } 
    @media (min-width: 1200px){
        width: 300px;
        bottom:320px; 
        left:350px; 
      }
    @media (min-width: 1440px){
        width: 350px;
        bottom:320px; 
        left:350px; 
      }
    @media (min-width: 1600px){
        width: 350px;
        bottom:420px; 
        left:500px; 
      }

`

const Kmuttsit = styled.img`
    padding:0px 0 5px ;
    height: 30px;
    @media (min-width: 700px){
        height: 50px;
      }
      @media (min-width: 1080px){
        height: 75px;
      }
      @media (min-width: 1600px){
        height: 100px;
      }
    
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
