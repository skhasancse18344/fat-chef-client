import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://service-review-server-skhasancse18344.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorizaton: `Bearer ${localStorage.getItem("chefToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReview(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are Sure You Want to Delete This Review");
    if (proceed) {
      fetch(
        `https://service-review-server-skhasancse18344.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="my-16">
      <h1>You Have {myReview.length} Review</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {myReview.map((review) => (
          <div className="card w-80 bg-base-100 shadow-xl" key={review?._id}>
            <figure className="px-10 pt-10">
              <img
                src={review?.userImage}
                alt="UserImage"
                className="rounded-xl h-60 w-full"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">
                <span className="font-bold text-green-900">User Name: </span>
                <p className="text-sm">{review?.customer}</p>
              </h2>
              <h2 className="card-title">
                <span className="font-bold text-green-900">Service Name:</span>
                <p className="text-sm">{review?.serviceName}</p>
              </h2>
              <h2 className="card-title">
                <span className="font-bold text-green-900">Rating: </span>
                {review?.updateRating}
              </h2>
              <h2 className="card-title">
                <span className="font-bold text-green-900">Message: </span>
                <p className="text-xs">{review?.message}</p>
              </h2>

              <div className="card-actions mt-6">
                <button className="btn btn-xs mr-6 ">Update</button>

                <button
                  className="btn btn-xs"
                  onClick={() => handleDelete(review?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
