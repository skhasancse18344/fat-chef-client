import React from "react";

const AddServices = () => {
  const handlePlaceOrder = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl mt-40">Add our Services Here </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <input
            name="productName"
            type="text"
            placeholder="Product Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="rating"
            type="text"
            placeholder="Ratings"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="Price"
            type="text"
            placeholder="Price"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <textarea
          name="discription"
          className="textarea textarea-bordered h-24 w-full mt-6"
          placeholder="Add Description"
          required
        ></textarea>

        <input
          className="btn mb-20 mt-6"
          type="submit"
          value="Add To Service"
        />
      </form>
    </div>
  );
};

export default AddServices;
