import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { _id, rating, image, Price, name, discription } = details;

  //All Reviews by Item
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(allReviews);
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
            <p className="font-bold">Reviews {allReviews.length} </p>
          </div>
        </div>
      </div>
      <div className="text-end">
        {user?.email ? (
          <button className="btn btn-outline btn-info mt-6 ">
            <Link to={`/addReview/${details?._id}`}>Add Review</Link>
          </button>
        ) : (
          <div className="text-end mt-6">
            <Link className="btn btn-outline" to={"/login"}>
              Please Login for Add Review
            </Link>{" "}
          </div>
        )}
      </div>
      <div className="my-20">
        <p className="text-center font-bold text-4xl">All Reviews</p>

        <ul className="menu bg-base-100 w-full p-2 rounded">
          {allReviews.map((data) => (
            <li className=" bg-stone-800 text-white mt-6 py-10">
              <p>{data.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
