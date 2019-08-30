import React from "react";
import styled from 'styled-components'

const ImageDiv = styled.div`

    display: flex;
    // transform: scale(0.85);
    margin: 2rem;
    margin-top: 6rem;
    width: 60rem;
    height: 30rem;
    border: .5rem solid black;
    border-radius: 2.5rem;
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
        90% {
            transform: scale3d(1.1, 1.1, 1.1) translate3d(6rem, 4rem, 2rem)
            animation-timing-function: ease-in;
            opacity: 1;
        }
        100% {
            transform: scale3d(2, 2, 2) translate3d(0rem, 2rem, 1rem);
            opacity: 0;
        }
    }
`;


function ImageCard(props) {
    const type = () => {
        if (props.mediaType === 'image'){
            return (
                <div className = 'image-card'>
                    <img src={props.url}></img> 
                </div>
                );
        } 
        
        if (props.mediaType === 'video') {
            return (
                <div className = 'video-player'>
                    <img src={props.url}></img> 
                </div>
                );
        } 
    }

    return (
        <ImageDiv>
            {type()}
        </ImageDiv>
        );

    //ADDITIONAL FUNCTIONALITY I WANT TO GET WORKING - CONDITIONAL VIDEO SUPPORT //

    
}

export default ImageCard;