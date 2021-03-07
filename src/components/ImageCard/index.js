import React from "react";
import './imageCard.scss';

const ImageCard = (props) => {
    return (
        <div className="ImageCardContainer">
            <div className={props.className}>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default  ImageCard