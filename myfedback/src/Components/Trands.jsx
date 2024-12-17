import React from "react";

function Trends() {
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
      <h1 className=" text-[#1E1E1E] font-bold text-xl md:text-3xl lg:text-4xl  mt-10 mb-10">
        The latest trends
      </h1>
      {/* part-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-4 ">
        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trand1.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            Bella Italia
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend2.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Little Shucker
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (264 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend3.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            Marafuku Ramen
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend4.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Bottega
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>
      </div>
      {/* part-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-4 ">
        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend5.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            Arabia Nights
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend6.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Lokma
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (264 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend7.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            The sung
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend8.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Starbelly
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>
      </div>
      {/* part-3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-4 ">
        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend9.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            Lori
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend10.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Ngally
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (264 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend11.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold  text-start leading-tight py-2 mb-2 ">
            Digonal
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>

        <div className="w-fit  bg-white rounded-3xl  ">
          <img className="w-full mx-auto" src="./trend12.png" alt="" />
          <h2 className="text-md lg:text-xl font-bold lg:w-[50%] text-start leading-tight py-2 mb-2 ">
            Kitko
          </h2>
          <p className=" text-gray-700 w-full text-xl text-justify  mb-2 ">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex  gap-2 mb-2  ">
            {TagData.map((data, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <img src={data.imgs} alt="" />
              </div>
            ))}

            <div className="py-4 ">
              <p> 5.0 (34 reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Trends;
