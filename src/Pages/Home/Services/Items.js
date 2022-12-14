import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import UseTitle from "../../../hook/UseTitle";

const Items = () => {
  UseTitle("All Items");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-skhasancse18344.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 className=" my-16 text-6xl font-bold text-teal-500 text-center">
        All Items
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        {items.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <PhotoProvider>
                  <div className="foo">
                    <PhotoView key={item?._id} src={item?.image}>
                      <img
                        className="w-full h-80"
                        src={item?.image}
                        alt="Food"
                      />
                    </PhotoView>
                  </div>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item?.name}</h2>
                <p>{item?.discription.slice(0, 100)}</p>
                <p className="text-2xl text-orange-600 font-semibold">
                  Price: {item?.Price} TK
                </p>

                <div className="card-actions justify-end">
                  <Link to={`/items/${item?._id}`}>
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
