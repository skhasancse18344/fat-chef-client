import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Items = () => {
  const items = useLoaderData();
  return (
    <div>
      <h1 className=" my-16 text-6xl font-bold text-teal-500 text-center">
        All Items
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        {items.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img className="w-96 h-80" src={item?.image} alt="Food" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item?.name}</h2>
                <p>{item?.discription.slice(0, 100)}</p>
                <p className="text-2xl text-orange-600 font-semibold">
                  Price: {item?.Price} TK
                </p>

                <div className="card-actions justify-end">
                  <Link to={`/checkout/${item?._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
