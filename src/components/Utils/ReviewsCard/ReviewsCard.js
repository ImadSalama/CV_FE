import React from 'react';
import './ReviewsCard.css'
import ReactStars from "react-rating-stars-component";

const ReviewsCard = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <img class="card-img-top" src="https://www.w3schools.com/w3images/avatar6.png" alt="Profile Img" />
                <h4 class="card-title   mt-4">{props.name}</h4>
                <h6 class="card-text"> {props.category} </h6>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ReactStars
                        count={5}
                        size={12}
                        isHalf={true}
                        value={5}
                        activeColor="#F8AF31"
                    /></div>
                <p class="cardtext py-3">"{props.review}"</p>
                <a href="More Srories" class="reviewLink">See More Stories</a>
            </div>
        </div>
    );
}

export default ReviewsCard;