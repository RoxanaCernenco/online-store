import React from "react";
import { Link } from "react-router-dom";

const Commercial = () => {
  return (
    <section className="h-[1000px] bg-woman bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-left h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-pink-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SPRING COLLECTION <br />
            <span className="font-semibold">WOMAN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
