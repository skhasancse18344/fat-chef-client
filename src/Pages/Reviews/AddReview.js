import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddReview = () => {
  const { _id, image, Price, name, discription } = useLoaderData();
  const { user } = useContext(AuthContext);
  //   const {   metadata } = user;
  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;

    const rating = form.rating.value;
    const updateRating = rating.slice(0, 1);
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: name,
      customer: user?.displayName,
      Price,
      email: user?.email,
      message,
      photoURL: user?.photoURL,
      image,
      updateRating,
      discription,
      time: user?.metadata?.creationTime,
    };
    console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your Review Added Successfully");
        }
      })
      .catch((err) => console.error(err));

    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleReviews}>
        <h2 className="text-4xl mt-40">Add Your Valuable Reviews For {name}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <input
            name="rating"
            type="text"
            placeholder="Ratings"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-6"
          placeholder="Add Description"
          required
        ></textarea>

        <input className="btn mb-20 mt-6" type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default AddReview;
