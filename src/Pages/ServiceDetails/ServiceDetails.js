import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { rating, image, Price, name, discription } = useLoaderData();
  return (
    <div className="my-20">
      <div className="card lg:card-side bg-base-100 shadow-xl h-96">
        <img className="h-full" src={image} alt="Album" />

        <div className="card-body">
          <h2 className="card-title font-bold text-4xl">{name}</h2>
          <p>{discription}</p>
          <div className="flex content-between">
            <p>price : {Price}</p>
            <p>Ratings: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
