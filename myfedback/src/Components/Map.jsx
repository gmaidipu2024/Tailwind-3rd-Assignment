import { Button } from "@nextui-org/react";
import React from "react";

function Map() {
  const TagData = [
    {
      id: 1,
      imgs: "./star.png",
    },
    {
      id: 2,
      imgs: "./star.png",
    },
    {
      id: 3,
      imgs: "./star.png",
    },
    {
      id: 4,
      imgs: "./star.png",
    },
    {
      id: 4,
      imgs: "./star.png",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
        <div>
          <p className="text-[#232323] font-bold md:ml-20">
            Home / All restaurants
          </p>
          <div className="flex gap-4 md:ml-20">
            <h2 className="text-[#1E1E1E] text-xl md:text-3xl font-bold">
              best restaurants in singapore
            </h2>
            <img src="./short.png" alt="" />
          </div>
          <div>
            <div className="mx-auto container rounded-xl">
              <div className=" relative w-full max-w-screen-2xl mx-auto overflow-hidden ">
                <h1 className="text-start text-[white] text-xl md:text-3xl lg:text-4xl font-bold py-2 ml-5">
                  Find the best restaurant ratings below
                </h1>

                {/* part-1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start  mb-5">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp1.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      The snug
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star3.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">4.5</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mb-5 ">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp2.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      Bottega
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">5.0</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mb-5 ">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp3.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      Little Shucker
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star2.png" alt="" />
                      <img className="w-6 h-6" src="./star2.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">3.0</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start  mb-5">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp4.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      Lokma
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star3.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">4.5</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start  mb-5">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp5.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      Starbelly
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star3.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">4.5</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start  mb-5">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp6.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      The melt
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star3.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">4.5</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                {/* part-7 */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start  mb-5">
                  <div className="md:ml-20">
                    <img className="w-fit  " src="./mp7.png" alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-[#232323] text-xl  md:text-3xl font-bold py-2 ">
                      Aribia Night
                    </h2>
                    <p className="mb-3 text-[#8F8F8F]">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>
                    <div className=" flex gap-2 ">
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star.png" alt="" />
                      <img className="w-6 h-6" src="./star3.png" alt="" />
                      <p>
                        {" "}
                        <span className="font-bold">4.5</span> (654 reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <Button color="primary" className="md:ml-20 mb-10">
                  Show more
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Part -2 */}
        <div>
          <img src="./map.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Map;
