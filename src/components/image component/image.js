import React from "react";
import { ImageDiv } from '../../styles/styles'

function ImageCard(props) {
    const type = () => {
        if (props.mediaType === 'image'){
            return (
                <div className = 'image-card'>
                    <img src={props.url} alt={props.title}></img> 
                </div>
                );
        } 
    }

    return (
        <ImageDiv>
           {/*Image Card lives here <----*/} */} {type()}
        </ImageDiv>
        );
    
}

export default ImageCard;
