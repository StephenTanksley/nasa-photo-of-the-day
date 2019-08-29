import React from "react";
import styled from 'styled-components'

const ContainerDiv = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    margin: 0 auto;
    color: white;
    line-height: 1.5rem;
    font-size: 1.2rem;

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