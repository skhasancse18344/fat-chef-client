import React from "react";
import image from "../../../assets/1647019464547.jpeg";
import imgAbhishek from "../../../assets/clientSays/Abhishek.jpg";

const HomeContent = () => {
  return (
    <div className="my-20">
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img className="w-full rounded-3xl" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold font-mono">We Are Feane</h1>
          <p className="mt-6 font-mono">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn border-t-yellow-500 mt-20">Read More</button>
        </div>
      </div>
      <div className="my-20">
        <div className="text-center">
          <h1 className="text-4xl font-mono font-bold">
            What People Says About My Service ?
          </h1>
          <div className="grid  gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-70 mt-20 ">
            <div className="bg-info text-white h-full rounded-3xl">
              <img
                className="rounded-full w-20 h-20 ml-28 mt-6"
                src={imgAbhishek}
                alt=""
              />
              <h1 className="text-2xl font-bold mt-10">Abhishek</h1>
              <p className="mb-10 font-mono font-semibold">
                Its Very Testy And Juicy...Feel Like The Refreshing & Energetic
              </p>
            </div>
            <div className="bg-info text-white h-full rounded-3xl">
              <img
                className="rounded-full w-20 h-20 ml-28 mt-6"
                src={imgAbhishek}
                alt=""
              />
              <h1 className="text-2xl font-bold mt-10">Abhishek</h1>
              <p className="mb-10 font-mono font-semibold">
                Its Very Testy And Juicy...Feel Like The Refreshing & Energetic
              </p>
            </div>
            <div className="bg-info text-white h-full rounded-3xl">
              <img
                className="rounded-full w-20 h-20 ml-28 mt-6"
                src={imgAbhishek}
                alt=""
              />
              <h1 className="text-2xl font-bold mt-10">Abhishek</h1>
              <p className="mb-10 font-mono font-semibold">
                Its Very Testy And Juicy...Feel Like The Refreshing & Energetic
              </p>
            </div>
            <div className="bg-info text-white h-full rounded-3xl">
              <img
                className="rounded-full w-20 h-20 ml-28 mt-6"
                src={imgAbhishek}
                alt=""
              />
              <h1 className="text-2xl font-bold mt-10">Abhishek</h1>
              <p className="mb-10 font-mono font-semibold">
                Its Very Testy And Juicy...Feel Like The Refreshing & Energetic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
