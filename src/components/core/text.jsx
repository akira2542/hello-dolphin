import React from 'react'
import styled from 'styled-components'

const HeadLine = styled.h1`
    font-family: 'Rye-Regular', sans-serif;
    font-size: 40px;
    letter-spacing: 0.1em;
    color: ${props => props.color};
    text-align: ${props => props.textAlign || "center"};
    @media (min-width: 375px) {
        font-size: 60px;
    }
    @media (min-width: 768px) {
        font-size: 120px;
    }

    @media (min-width: 1024px) {
        font-size: 120px;
    }
    @media (min-width: 1440px) {
        font-size: 120px;
    }
    @media (min-width: 1920px) {
        font-size: 150px;
    }
    
`

const SubHead = styled.h2`
    font-family: 'Rye-Regular', sans-serif;
    font-size: 20px;
    text-align: ${props => props.textAlign};
    color: ${props => props.color};

    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const ContentText = styled.p`
    font-family: 'Itim-Regular', sans-serif;
    font-size: 12px;
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    text-indent: ${props => props.textIndent};
    padding: ${props => props.padding};
    line-height: 50px;
    @media (min-width: 411px){
font-size: 9px;
line-height: 18px;

}
@media (min-width: 375px) {
        font-size: 10px;
        line-height: 20px;
    }
    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 36px;
        text-align: ${props => props.textAlignResponsive};
        text-indent: ${props => props.textIndentIpad};
    }

    @media (min-width: 1024px) {
        font-size: 24px;
        line-height: 36px;
        text-align: ${props => props.textAlignDeskTop};
        text-indent: ${props => props.textIndentDesktop};
    }
`

export const Header = (props) => {
    return (
    <HeadLine color = {props.color}
    textAlign = {props.textAlign}
    >
        {props.headerText}
    </HeadLine>
    )
}

export const SubHeader = (props) => {
    return (
        <SubHead color = {props.color} 
            textAlign = {props.textAlign}
        >
            {props.subHeaderText}
        </SubHead>
    )
}

export const Content = (props) => {
    return (
        <ContentText color = {props.color}
            textAlign = {props.textAlign}
            textIndent = {props.textIndent}
            textIndentIpad = {props.textIndentIpad}
            textIndentDesktop = {props.textIndentDesktop}
            textAlignResponsive = {props.textAlignResponsive}
            padding = {props.padding}
        >
            {props.content}
        </ContentText>
    )
}




