import React from "react";

function Items() {
  return (
    <section className="">
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12  place-items-center place-content-center gap-1 py-3 mb-4">
        <div>
          <img className="mx-auto mb-4" src="./squar.png" alt="" />
          <h2>All</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./restu.png" alt="" />
          <h2>Restaurants</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./hotel.png" alt="" />
          <h2>Hotels</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./hom.png" alt="" />
          <h2>Home services</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./shop.png" alt="" />
          <h2>Shopping</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./carwas.png" alt="" />
          <h2>Car location</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./spa.png" alt="" />
          <h2>Beauty & Spa</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./park.png" alt="" />
          <h2>Park</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./museum.png" alt="" />
          <h2>museum</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./car.png" alt="" />
          <h2>Car wash</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./bars.png" alt="" />
          <h2>Bars</h2>
        </div>
        <div>
          <img className="mx-auto mb-4" src="./gyms.png" alt="" />
          <h2>Gyms</h2>
        </div>
      </div>
    </section>
  );
}

export default Items;
