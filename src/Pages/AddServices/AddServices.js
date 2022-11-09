import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productName.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const Price = form.Price.value;
    const discription = form.discription.value;

    const services = {
      name,
      image,
      rating,
      Price,
      discription,
    };
    console.log(services);
    fetch("https://service-review-server-skhasancse18344.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("One Service Added Successfully");
        }
      })
      .catch((err) => console.error(err));
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddService}>
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
            placeholder="Image URL ibb link"
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
