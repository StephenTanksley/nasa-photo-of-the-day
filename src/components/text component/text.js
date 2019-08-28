import React from "react";

function TextComponent(props) {
    console.log(props)
    return (
    <div className = 'text-component'>
        <h2>{props.title}</h2>
        <p>{props.explanation}</p>
    </div>
    );
}

export default TextComponent;