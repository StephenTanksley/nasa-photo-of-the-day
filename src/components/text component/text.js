import React from "react";

function TextComponent(props) {
    return (
    <div className = 'text-component'>
        <h2 className = 'header'>{props.title}</h2>
        <p className = 'explanation-text'>{props.explanation}</p>
    </div>
    );
}

export default TextComponent;