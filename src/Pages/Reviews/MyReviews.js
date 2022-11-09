import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://service-review-server-4ytx3fh66-skhasancse18344.vercel.app/myReviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReview(data))
      .catch((err) => console.error(err));
  }, [myReview]);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are Sure You Want to Delete This Review");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        {myReview.map((review) => (
          <div className="card w-80 bg-base-100 shadow-xl" key={review?._id}>
            <figure className="px-10 pt-10">
              <img
                src={review?.image}
                alt="UserImage"
                className="rounded-xl h-60 w-full"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">
                <span className="font-bold text-green-900">Email: </span>
                <p className="text-sm">{user?.email}</p>
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
                <button htmlFor="my-modal-6" className="btn btn-xs mr-6 ">
                  Update
                </button>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>

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
