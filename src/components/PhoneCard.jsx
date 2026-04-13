import React from "react";
import MyButton from "./Shared/MyButton";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  const { name, image, description } = phone || {};
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <MyButton>
            <Link to={"/phone-details"}>View More</Link>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
