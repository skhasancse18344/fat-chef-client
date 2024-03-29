import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../../hook/UseTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  UseTitle("All Service");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://service-review-server-skhasancse18344.vercel.app/servicesFeature"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <h1 className="mb-16 text-5xl font-bold  text-center uppercase">
        What Type Of Food We Delivered ...!!!
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-16">
        <Link to={"/items"}>
          <button className="btn btn-outline btn-warning">All Items</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
