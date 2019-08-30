import React from "react";
import styled from 'styled-components'

const ContainerDiv = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    color: white;
    line-height: 2rem;
    font-size: 1.1rem;
    font-family: Trebuchet MS, Arial

`;

function TextComponent(props) {
    return (
    <ContainerDiv>
        <h2 className = 'header'>{props.title} {props.date}</h2>
        <h3 className = 'copyright'> © {props.copyright} - {props.date}</h3>
        <p className = 'explanation-text'>{props.explanation}</p>
    </ContainerDiv>
    );
}



export default TextComponent;