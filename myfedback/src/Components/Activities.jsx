import React from "react";
import { FaUser } from "react-icons/fa";

function Activities() {
  return (
    <section className="container mx-auto py-10 px-4">
      <div>
        <h2 className="text-[#1E1E1E] text-xl md:text-3xl font-bold">
          Recent's activities
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mt-4 mb-4">
            <FaUser />
            <div>
              <h2 className="text-[#232323] font-bold"> Leslie sakho</h2>
              <p>Canada, toronto</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="./Group.png" alt="" />
            <p>16/12/2024</p>
          </div>
          <p>
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.The lorem ipsum is, in printing, a
            series of meaningless words used temporarily to calibrate a layout.
          </p>
          <p className="py-3">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex gap-2 mt-3">
            <img src="./ac1.png" alt="" />
            <img src="./ac2.png" alt="" />
            <img src="./ac3.png" alt="" />
          </div>
          <button className="underline py-4 text-[#232323]">Discover</button>
        </div>
        {/* part-2 */}
        <div>
          <div className="flex items-center gap-2 mt-4 mb-4">
            <FaUser />
            <div>
              <h2 className="text-[#232323] font-bold"> Leslie sakho</h2>
              <p>Canada, toronto</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="./Group.png" alt="" />
            <p>16/12/2024</p>
          </div>
          <p>
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.The lorem ipsum is, in printing, a
            series of meaningless words used temporarily to calibrate a layout.
          </p>
          <p className="py-3">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex gap-2 mt-3">
            <img src="./ac4.png" alt="" />
            <img src="./ac5.png" alt="" />
            <img src="./ac6.png" alt="" />
          </div>
          <button className="underline py-4 text-[#232323]">Discover</button>
        </div>
        {/* part-3 */}
        <div>
          <div className="flex items-center gap-2 mt-4 mb-4">
            <FaUser />
            <div>
              <h2 className="text-[#232323] font-bold"> Leslie sakho</h2>
              <p>Canada, toronto</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="./Group.png" alt="" />
            <p>16/12/2024</p>
          </div>
          <p>
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.The lorem ipsum is, in printing, a
            series of meaningless words used temporarily to calibrate a layout.
          </p>
          <p className="py-3">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>

          <div className="flex flex-wrap gap-2 mt-3 aspect-auto">
            <img src="./ac7.png" alt="" />
            <img src="./ac8.png" alt="" />
            <img src="./ac9.png" alt="" />
          </div>
          <button className="underline py-4 text-[#232323]">Discover</button>
        </div>
      </div>
    </section>
  );
}

export default Activities;
