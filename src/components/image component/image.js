import React, { useState } from "react";

function ImageCard(props) {
    console.log(props)
    return (
    <div>
        <img src={props.url}></img> 
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
    );
}

export default ImageCard;