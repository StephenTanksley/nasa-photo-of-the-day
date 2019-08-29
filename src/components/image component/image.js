import React from "react";
import styled from 'styled-components'

const ImageDiv = styled.div`

    display: flex;
    width: 75%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    
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