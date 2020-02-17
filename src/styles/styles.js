import styled from 'styled-components'
import { devices } from './devices'

export const ContainerDiv = styled.div`

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

    /*media queries*/

    @media ${devices.mobileS} {
        max-width: 374px;
        width: 90%;
    }
    `;

export const LoadingContainer = styled.div`
    
    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    color: white;
    background-color: black;
    line-height: 2rem;
    font-size: 1.1rem;
    font-family: Trebuchet MS, Arial

    /*media queries*/

    @media ${devices.mobileS} {
        max-width: 374px;
        width: 90%;
    }
    `

export const ImageDiv = styled.div`

    display: flex;
    width: 60%;
    height: 30rem;
    border: .5rem solid black;
    border-radius: 0.9rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        animation: kenburns 30s infinite;
    }

    @keyframes kenburns {
        0% {
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        80% {
            transform: scale3d(.9, .9, .9) translate3d(-6rem, -4rem, -2rem)
            animation-timing-function: ease-in;
            opacity: 1;
        }
        90% {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(2rem, 2rem, 1rem);
            opacity: 1;
        }
        100% {
            transform: scale3d(1, 1, 1) translate3d(0rem, 0rem, 0rem);
            animation-timing-function: ease-out;
            opacity: 0
        }
    }

    @media ${devices.mobileS} {
        width: 90%;
    }
`;

export const AppContainer = styled.div`
    
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

    @media ${devices.mobileS} {
        width: 100%;
    }
`;

export const PageContainer = styled.div`
    background-color: black;
    height: auto;
`;
