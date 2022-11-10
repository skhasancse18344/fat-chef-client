import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const reviewsData = useLoaderData();
  const [update, setUpdate] = useState(reviewsData);

  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log(update);
    fetch(
      `https://service-review-server-skhasancse18344.vercel.app/UpdateReview/${update._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
          event.target.reset();
        }
        // console.log(data);
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const updateData = { ...update };
    updateData[field] = value;
    setUpdate(updateData);
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h2 className="text-4xl mt-40">
          Update Your Reviews For {reviewsData?.serviceName}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <input
            onChange={handleInputChange}
            name="rating"
            type="text"
            placeholder="Ratings"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <textarea
          onChange={handleInputChange}
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-6"
          placeholder="Add Description"
          required
        ></textarea>

        <input className="btn mb-20 mt-6" type="submit" value="Update Review" />
      </form>
    </div>
  );
};

export default UpdateReview;
