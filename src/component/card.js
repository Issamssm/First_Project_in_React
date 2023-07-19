import React from "react";

function Card(props) {
    let badgText;
    if (props.openspot === 0) {
        badgText = "SOLD OUT"
    } else if (props.openspot !== 0) {
        badgText = "ONLINE"
    }
    console.log(props.img)
    return (
        <div className='card'>
            {badgText && <span className="sold_out">{badgText}</span>}
            <img src={`../images/${props.img}`} alt="" className="card_image"/>
            <div className="card_stats">
                <img src="../images/Star 1.png" alt="" />
                <span>{ props.rating }</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <div className="card_content">
                <p className="card_title">{props.title}</p>
                <p><span className="bold">from {props.price}$</span> / person</p>                
            </div>

        </div>
    );
}

export default Card;