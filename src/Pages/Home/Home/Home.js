import React from "react";
import UseTitle from "../../../hook/UseTitle";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import HomeContent from "./HomeContent";

const Home = () => {
  UseTitle("Fat Chef-Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <HomeContent></HomeContent>
    </div>
  );
};

export default Home;
