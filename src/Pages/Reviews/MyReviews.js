import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import UseTitle from "../../hook/UseTitle";

const MyReviews = () => {
  UseTitle("My Review");
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  // console.log(myReview);

  useEffect(() => {
    fetch(
      `https://service-review-server-skhasancse18344.vercel.app/myReviews?email=${user?.email}`
    )
      // {
      //   headers: {
      //     authorizaton: `Bearer ${localStorage.getItem("chefToken")}`,
      //   },
      // }

      .then((res) => res.json())
      //   if (res.status === 401 || res.status === 403) {
      //     return logOut();
      //   }
      //   return res.json();
      // })
      .then((data) => setMyReview(data))
      .catch((err) => console.error(err));
  }, [user?.email]);
  const handleDelete = (id) => {
    // console.log(id)
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
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = myReview.filter((review) => review._id !== id);
            setMyReview(remaining);
          }
          console.log(data);
        });
    }
  };

  return (
    <div className="my-16">
      {myReview.length === 0 ? (
        <div className="h-[70vh] flex justify-center items-center">
          <p className="text-2xl font-bold text-yellow-400">No Review Found</p>
        </div>
      ) : (
        <div>
          <h1>You Have {myReview.length} Review</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {myReview.map((review) => (
              <div
                className="card w-80 bg-base-100 shadow-xl"
                key={review?._id}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={review?.userImage}
                    alt="UserImage"
                    className="rounded-xl h-60 w-full"
                  />
                </figure>
                <div className="card-body  ">
                  <h2 className="card-title">
                    <span className="font-bold text-green-900">
                      User Name:{" "}
                    </span>
                    <p className="text-sm">{review?.customer}</p>
                  </h2>
                  <h2 className="card-title">
                    <span className="font-bold text-green-900">
                      Service Name:
                    </span>
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
                    <Link to={`/UpdateReview/${review?._id}`}>
                      <button className="btn btn-xs mr-6 ">Update</button>
                    </Link>

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
      )}
    </div>
  );
};

export default MyReviews;
