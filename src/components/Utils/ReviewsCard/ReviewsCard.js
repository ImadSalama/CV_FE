import React from "react";
import "./ReviewsCard.css";
import ReactStars from "react-rating-stars-component";
import { apiUrl } from "./../../../services/settings";

const getImageSrc = (src = "") => {
  const unNeededUrl = "public/";
  if (!src) {
    return "https://www.w3schools.com/w3images/avatar6.png";
  }

  return src.includes(unNeededUrl)
    ? `${apiUrl}/${src.replace(unNeededUrl, "")}`
    : src;
};

const ReviewsCard = (props) => {
  const imgSrc = getImageSrc(props.image);
  return (
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src={imgSrc} alt="Profile Img" />
        <h4 class="card-title   mt-4">{props.name}</h4>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReactStars
            count={5}
            size={12}
            isHalf={true}
            value={props.rate}
            activeColor="#F8AF31"
          />
        </div>
        <p class="cardtext py-3">"{props.review}"</p>
        <a href="More Srories" class="reviewLink">
          See More Stories
        </a>
      </div>
    </div>
  );
};

export default ReviewsCard;
