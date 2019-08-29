import React from "react";

function ImageCard(props) {
    return (
        <div className = 'image-card'>
            <img src={props.url}></img> 
        </div>
        );

    //ADDITIONAL FUNCTIONALITY I WANT TO GET WORKING - CONDITIONAL VIDEO SUPPORT //
    
    // if (props.media_type == 'image'){
    //     return (
    //         <div className = 'image-card'>
    //             <img src={props.url}></img> 
    //         </div>
    //         );
    // } 
    
    // if (props.media_type == 'video') {
    //     return (
    //         <div className = 'video-player'>
    //             <img src={props.url}></img> 
    //         </div>
    //         );
    // } 
    
}

export default ImageCard;