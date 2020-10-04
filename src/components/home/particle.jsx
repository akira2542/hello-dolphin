import React, { Component, Fragment } from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';

const ParticleContainer = styled.div`
    background: rgb(9,10,15);
    background-color: #023058;
    background: linear-gradient(45deg, #00103a 0%, #023058 100%);
    background-color: black;
    height: 100%;
    width: 100%;
`
const ParticleStyle = {
    position:'absolute'
}
const ParticleStyleMobile = {
    position:'absolute'
}

export default class StarParticle extends Component {

    state={
        WindowHeight: '2000px',
        innerHeight: '1000px',
        move: true,
        ClientHeight: '1000px',
        isInHeightSet: true
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
        this.moveCheck()
        setTimeout(
            function() {
                this.updateWindowDimensions()
            }
            .bind(this),
            500
        );
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    
    updateWindowDimensions = () => {
        let Height = window.document.body.clientHeight+"px"     
        let inHeight = window.innerHeight+"px" 
        let ClientHeight = window.document.body.clientHeight+"px" 
        this.setState({
            WindowHeight: Height,
            innerHeight: inHeight,
            ClientHeight: ClientHeight
        })
        this.moveCheck()
    }

    moveCheck = () => {
        if (window.innerWidth < 1080){
            this.setState({
                move: false
            })   
        }else{
            this.setState({
                move: true
            })  
        }
    }
 
    getMove = () => {
        return this.state.move
    }

    getHeight = () => {
        return this.state.WindowHeight
    }
    getClientHeight = () => {
        return this.state.ClientHeight
    }
    getInnerHeight = () => {
        return this.state.innerHeight
    }
    render() {
        if (this.getMove() && true){
        return (
            <ParticleContainer id="desktop-container">
            <Particles 
                key="move" 
                height={this.state.innerHeight} 
                style={ParticleStyle}
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "opacity": 0.02
                        },
                        "move": {
                            "enable": true,
                            "direction": "right",
                            "speed": 0.1
                        },
                        "size": {
                            "value": 2,
                            "random": true
                        },
                        "opacity": {
                            'value': 1,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": false
            }} />  
                {this.props.children}
            </ParticleContainer>
            )
        }else {
            return (
                <ParticleContainer id="mobile-container">
                <Particles 
                    key="don't move" 
                    height={this.state.innerHeight} 
                    style={ParticleStyleMobile}
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "opacity": 0.02
                            },
                            "move": {
                                "enable": true,
                                "direction": "none",
                                "speed": 0
                            },
                            "size": {
                                "value": 2,
                                "random": true
                            },
                            "opacity": {
                                'value': 0.8,
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": false
                }} />
                    {this.props.children}
                </ParticleContainer>
            )
        }
    }
}

