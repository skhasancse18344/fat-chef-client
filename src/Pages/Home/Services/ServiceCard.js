import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { image, Price, name, discription } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-80" src={image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{discription.slice(0, 100)}</p>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: {Price} TK
        </p>

        <div className="card-actions justify-end">
          <Link to={`/items/${service?._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
