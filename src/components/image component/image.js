import React from "react";
import { ImageDiv } from '../../styles/styles'
// import { Player } from 'video-react';
// import styled from 'styled-components'



function ImageCard(props) {
    const type = () => {
        if (props.mediaType === 'image'){
            return (
                <div className = 'image-card'>
                    <img src={props.url} alt={props.title}></img> 
                </div>
                );
        } 
        //Still need to import a video component.
        
        // if (props.mediaType === 'video') {
        //     return (
        //         <Player
        //             playsInline
        //             poster="/assets/poster.png"
        //             src={props.url}
        //             />
        //         );
        // } 
    }

    return (
        <ImageDiv>
           {/*Image Card lives here <----*/} */} {type()}
        </ImageDiv>
        );

    //ADDITIONAL FUNCTIONALITY I WANT TO GET WORKING - CONDITIONAL VIDEO SUPPORT //

    
}

export default ImageCard;
