import { Button } from "@nextui-org/react";
import React from "react";

function Discover() {
  return (
    <section>
      <div className="container mx-auto bg-[#F2F2F2]">
        <div className="grid place-items-center content-center py-4 px-4">
          <h2 className="text-xl mb-3 text-[#1E1E1E]">
            Discover more cool restaurants
          </h2>
          <Button color="primary">Show more </Button>
        </div>
        {/* second div */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4 py-10">
          <div className="mb-2 md:py-[10%] text-start md:w-[370px] md:ml-[200px]">
            <h2 className="text-2xl font-bold text-[]  mb-3">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h2>
            <p className="py-5">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <button className="bg-[#1E1E1E] text-white rounded-full px-4 py-2 mb-4">
              Explore MyFeedback business
            </button>
          </div>
          <div>
            <img src="./nature.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
