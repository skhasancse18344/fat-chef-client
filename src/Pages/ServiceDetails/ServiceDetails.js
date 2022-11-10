import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import UseTitle from "../../hook/UseTitle";

const ServiceDetails = () => {
  UseTitle("Services Details");
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { _id, rating, image, Price, name, discription } = details;

  //All Reviews by Item
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://service-review-server-skhasancse18344.vercel.app/reviews?service=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setAllReviews(data))
      .catch((err) => console.error(err));
  }, [_id]);
  console.log(allReviews);
  return (
    <div className="my-20">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <img className="h-96 w-3/4" src={image} alt="Album" />

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
            <Link to={"/login"}>
              <button className="btn btn-outline">
                Please Login for Add Review
              </button>
            </Link>{" "}
          </div>
        )}
      </div>
      <div className="my-20">
        <p className="text-center font-bold text-4xl">All Reviews</p>

        <ul className="menu bg-base-100 w-full p-2 rounded">
          {allReviews.map((data) => (
            <li
              key={data?._id}
              className=" bg-stone-800 text-white mt-6 py-2 w-full"
            >
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div>
                  <img className="w-20 h-20" src={data?.userImage} alt="" />
                  <p className="mt-4 text-xs">Date & Time : {data.time}</p>
                </div>
                <div>
                  <p>Email : {data.customer}</p>
                  <p className="mt-6">Message: {data.message}</p>
                </div>
                <div>
                  <p>Rating : {data.updateRating}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
