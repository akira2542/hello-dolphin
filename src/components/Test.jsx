import React, { Component } from 'react'
import style from '~/app.scss'
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: blue;
  border: 2px solid blue;
  ${props => props.primary && `
    background-color: blue
    color: white;
  `}
`;


export default class Test extends Component {
    render() {
        return (
            <h1>Hello, world!</h1>
        );
    }
}