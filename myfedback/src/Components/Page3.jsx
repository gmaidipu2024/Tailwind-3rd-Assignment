import React from "react";

import { LuUserRound } from "react-icons/lu";
import MyNav from "./MyNav";
import Footer from "./Footer";
import { Button } from "@nextui-org/react";

function Page3() {
  return (
    <section className="container mx-auto">
      <div>
        <MyNav />

         {/* 1st part */}
         <div className="container mx-auto px-4 ">
          <hr />
          <div>
            <h3 className=" text-[#232323] underline py-6 font-semibold">
              Home / BellaItalia
            </h3>
          </div>
          <div className="bg-[url(../heropic.png)] bg-no-repeat overflow-hidden relative bg-cover w-full px-4">
            <div className=" w-full md:w-[50%] md:ms-16">
              <div className="flex items-center gap-2 mt-4 mb-4">
                <div>
                  <h2 className="text-white text-xl md:text-3xl font-bold">
                    Bella Italia
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <p>5.0 (834 reviews)</p>
              </div>
              <p className="text-white md:w-[80%] ">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <p className="py-3 text-white md:w-[80%] mb-10">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>

              <div className="flex gap-3 py-3 text-white ">
                <img className="w-5" src="./whitel.png" alt="" />
                <p className="underline">Singapour, Bishan-Ang Mo Kio Park </p>
              </div>
              <div className="flex gap-3 py-3 text-white mb-20 ">
                <img className="w-5" src="./whitec.png" alt="" />
                <p className="underline">7j/7, 08:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className=" absolute  md:ms-[35%] md:mt-[-4%] ms-[30%] mt-[-16%] ">
            <img src="./bella.png" alt="" />
          </div>
        </div>

        {/* 2nd part */}
        <div className=" px-4 mt-24 ">
          <div className="md: ms-10">
          <h2 className="text-xl md:text-3xl text-[#1E1E1E] font-bold mb-3">Discover our magnificent place in photos</h2>
          <p className="text-[#5E5E5E] md:w-[50%]">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
          </div>
          
        <div className="flex justify-center items-center gap-3 mx-auto py-6 ">
          <div>
            <img src="./dis1.png" alt="" />
          </div>
          <div >
            <img className="mb-3" src="./dis2.png" alt="" />
            <img src="./dis3.png" alt="" />
          </div>
          <div >
            <img className="mb-3" src="./dis4.png" alt="" />
            <img src="./dis5.png" alt="" />
          </div>
        </div>
        </div>
        {/* 3rd part */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto py-4 mt-20 mb-8">
          <div className="ms-10">
            <h2 className="text-[#1E1E1E] font-bold text-2xl">
              More informations
            </h2>
            <div>
              <div className="flex gap-3 py-3 ">
                <img className="" src="./menu.png" alt="" />
                <p className="underline">See the menu</p>
              </div>

              <div className="flex gap-3 py-3 ">
                <img className="" src="./phone.png" alt="" />
                <p className="underline">+847 87 37 29 01</p>
              </div>

              <div className="flex gap-3 py-3 ">
                <img className="" src="./locat.png" alt="" />
                <p className="underline">Singapour, Bishan</p>
              </div>

              <div className="flex gap-3 py-3 ">
                <img className="" src="./clock.png" alt="" />
                <p className="underline">7j/7, 08:00 - 22:00</p>
              </div>

              <div className="flex gap-3 py-3 ">
                <img className="" src="./book.png" alt="" />
                <p className="underline">www.bellaitalia.com</p>
              </div>

              <div className="flex gap-3 py-3 ">
                <img className="" src="./social.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src="./smlmp.png" alt="" />
          </div>
        </div>
        
        {/* 4th part */}
        <div>
          <hr />
          <div className=" py-5 mb-6">
            <div className="flex flex-wrap items-start gap-5 mt-4 mb-4 px-3">
              <img className="w-15 h-15" src="./bgstar.png" alt="" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Overall rating
                </h2>
                <p> 834 Reviews </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.11.2024)</p>
                </div>
              </div>
              <div className="hidden md:flex flex-col ml-10">
                <span> 5 stars </span>
                <span> 0 stars </span>
                <span> 0 stars </span>
                <span> 0 stars </span>
                <span> 0 stars </span>
              </div>
              <div>
                <img src="./rating.png" alt="" />
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* 5th part */}
        <div className="px-5">
          {/* part-1 */}
          <div className="flex gap-4 py-5">
            <img src="./fl.png" alt="" />
            <img src="./short.png" alt="" />
          </div>

          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Wei Jie
                </h2>
                <p> Singapore, Little india </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.11.2024)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-2 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Mei Ling
                </h2>
                <p> Singapore, Orchad boulevard </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(8.12.2024)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-3 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Wei Xiong
                </h2>
                <p> Singapore, Takashimaya </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(8.10.2024)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-4 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Ming Wei
                </h2>
                <p> Singapore, Little India </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.8.2024)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-5 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Zhi Hao
                </h2>
                <p> Singapore,Bon Keng </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.10.2024)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-6 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Si Yang
                </h2>
                <p> Singapore,Beemer</p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.02.2023)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
          {/* part-7 */}
          <div className="bg-[#F8F8F8] py-5 mb-6">
            <div className="flex items-center gap-2 mt-4 mb-4">
              <LuUserRound className="w-10 h-10" />
              <div>
                <h2 className="text-[#232323] text-xl md:text-2xl font-bold">
                  Wei Ting
                </h2>
                <p> Singapore,Toa Payoh </p>
                <div className="flex items-center gap-2 py-2">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <p>(28.02.2023)</p>
                </div>
              </div>
            </div>
            <p className="py-4 px-4 text-[#8F8F8F] md:w-[50%]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
        </div>

        {/* 6th part */}
        <div>
          <Button color="primary" className=" flex mx-auto mb-10 text-md  ">
            {" "}
            Show More reviews
          </Button>
          <h2 className="text-[#1E1E1E] text-xl md:text-3xl font-bold px-4">
            Also discover...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            {/* part-1 */}
            <div>
              <div className="flex gap-2 mt-3">
                <img src="./p3.png" alt="" />
              </div>
              <div className="flex items-center gap-2 mt-4 mb-4">
                <div>
                  <h2 className="text-[#232323] text-xl md:text-3xl font-bold">
                    The melt
                  </h2>
                </div>
              </div>
              <p className="py-3 text-[#8F8F8F] w-[80%]">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <div className="flex items-center gap-2">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star3.png" alt="" />
                <img src="./star2.png" alt="" />
                <p>3.5 (334 reviews)</p>
              </div>
            </div>
            {/* part-2 */}
            <div>
              <div className="flex gap-2 mt-3">
                <img src="./p3.png" alt="" />
              </div>
              <div className="flex items-center gap-2 mt-4 mb-4">
                <div>
                  <h2 className="text-[#232323] text-xl md:text-3xl font-bold">
                    {" "}
                    Lokma
                  </h2>
                </div>
              </div>
              <p className="py-3 text-[#8F8F8F] w-[80%]">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <div className="flex items-center gap-2">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <p>5.0 (253 reviews)</p>
              </div>
            </div>
            {/* part-3 */}
            <div>
              <div className="flex gap-2 mt-3">
                <img src="./p3.png" alt="" />
              </div>
              <div className="flex items-center gap-2 mt-4 mb-4">
                <div>
                  <h2 className="text-[#232323] text-xl md:text-3xl font-bold">
                    {" "}
                    Leslie sakho
                  </h2>
                </div>
              </div>
              <p className="py-3 text-[#8F8F8F] w-[80%]">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <div className="flex items-center gap-2">
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star2.png" alt="" />
                <p>4.5 (653 reviews)</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}

export default Page3;
