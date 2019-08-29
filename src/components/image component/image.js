import React from "react";

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
        <div>
            {type()}
        </div>
        );

    //ADDITIONAL FUNCTIONALITY I WANT TO GET WORKING - CONDITIONAL VIDEO SUPPORT //

    
}

export default ImageCard;