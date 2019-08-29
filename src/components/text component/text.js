import React from "react";

function TextComponent(props) {
    return (
    <div className = 'text-component'>
        <h2 className = 'header'>{props.title} {props.date}</h2>
        <h3 className = 'date'>{props.date}</h3>
        <p className = 'explanation-text'>{props.explanation}</p>
    </div>
    );
}

export default TextComponent;