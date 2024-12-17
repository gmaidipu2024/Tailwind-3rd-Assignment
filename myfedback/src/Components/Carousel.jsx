import { Button } from "@nextui-org/react";
import { React, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const CarouselData = [
    {
      id: 1,
      imgaes: "./food1.png",
      heading: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      id: 2,
      imgaes: "./rest1.png",
      heading: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      id: 3,
      imgaes: "./food2.png",
      heading: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      id: 3,
      imgaes: "./rest2.png",
      heading: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlider = CarouselData[currentIndex];

  const handelPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };
  const handelNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    <section className="overflow-hidden  ">
      <div className="bg-[#1677BD] mx-auto container rounded-xl">
        <div className=" relative w-full max-w-screen-2xl mx-auto overflow-hidden ">
          <h1 className="text-start text-[white] text-xl md:text-3xl lg:text-4xl font-bold py-4 mb-4 ml-5">
            Find the best restaurant ratings below
          </h1>

          <div className="flex items-center justify-between  ">
            <button
              onClick={handelPrev}
              className=" absolute left-9 transform -translate-x-6 flex items-center justify-center bg-gray-600 text-white w-8 h-8 rounded-full "
            >
              <FaArrowLeft />
            </button>

            <div className="flex flex-col lg:flex-row items-center justify-center py-10  gap-6 px-4 ">
              {/* div 1 */}
              <div className="w-fit lg:w-1/2 bg-white rounded-3xl mx-auto ">
                <img
                  className="w-full mx-auto"
                  src={currentSlider.imgaes}
                  alt=""
                />

                <h2 className="text-md lg:text-4xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ml-4">
                  {currentSlider.heading}
                </h2>
                <p className=" text-gray-700 text-xl text-justify lg:w-[70%] mb-2 ml-5">
                  {" "}
                  {currentSlider.des}{" "}
                </p>

                <div className="flex  gap-2 mb-2 ml-4 ">
                  {TagData.map((data, i) => (
                    <div key={i} className="flex items-center gap-2 ">
                      <img src={data.imgs} alt="" />
                    </div>
                  ))}

                  <div className="py-4 ">
                    <p> 5.0 (8/6 reviews)</p>
                  </div>
                </div>
              </div>

              <div className="w-fit lg:w-1/2 bg-white rounded-3xl mx-auto ">
                <img
                  className="w-full mx-auto"
                  src={currentSlider.imgaes}
                  alt=""
                />

                <h2 className="text-md lg:text-4xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ml-4">
                  {currentSlider.heading}
                </h2>
                <p className=" text-gray-700 text-xl text-justify lg:w-[70%] mb-2 ml-5">
                  {" "}
                  {currentSlider.des}{" "}
                </p>

                <div className="flex  gap-2 mb-2 ml-4 ">
                  {TagData.map((data, i) => (
                    <div key={i} className="flex items-center gap-2 ">
                      <img src={data.imgs} alt="" />
                    </div>
                  ))}

                  <div className="py-4 ">
                    <p> 5.0 (8/6 reviews)</p>
                  </div>
                </div>
              </div>

              <div className="w-fit lg:w-1/2 bg-white rounded-3xl mx-auto ">
                <img
                  className="w-full mx-auto"
                  src={currentSlider.imgaes}
                  alt=""
                />

                <h2 className="text-md lg:text-4xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ml-4">
                  {currentSlider.heading}
                </h2>
                <p className=" text-gray-700 text-xl text-justify lg:w-[70%] mb-2 ml-5">
                  {" "}
                  {currentSlider.des}{" "}
                </p>

                <div className="flex  gap-2 mb-2 ml-4 ">
                  {TagData.map((data, i) => (
                    <div key={i} className="flex items-center gap-2 ">
                      <img src={data.imgs} alt="" />
                    </div>
                  ))}

                  <div className="py-4 ">
                    <p> 5.0 (8/6 reviews)</p>
                  </div>
                </div>
              </div>

              <div className="w-fit lg:w-1/2 bg-white rounded-3xl mx-auto ">
                <img
                  className="w-full mx-auto"
                  src={currentSlider.imgaes}
                  alt=""
                />

                <h2 className="text-md lg:text-4xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ml-4">
                  {currentSlider.heading}
                </h2>
                <p className=" text-gray-700 text-xl text-justify lg:w-[70%] mb-2 ml-5">
                  {" "}
                  {currentSlider.des}{" "}
                </p>

                <div className="flex  gap-2 mb-2 ml-4 ">
                  {TagData.map((data, i) => (
                    <div key={i} className="flex items-center gap-2 ">
                      <img src={data.imgs} alt="" />
                    </div>
                  ))}

                  <div className="py-4 ">
                    <p> 5.0 (8/6 reviews)</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handelNext}
              className=" absolute right-0 transform -translate-x-6 flex items-center justify-center bg-gray-700 text-white w-8 h-8 rounded-full "
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
