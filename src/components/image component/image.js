import React from "react";

function ImageCard(props) {
    return (
    <div className = 'image-card'>
        <img src={props.url}></img> 
    </div>
    );
}

export default ImageCard;