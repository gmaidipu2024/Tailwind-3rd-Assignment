import React from "react";

const imges = ["./trend1.png", "./trend2.png", "./trend4.png", "./trend5.png"];

function Carosl2() {
  return (
    <section>
      <div className="flex ">
        {imges.map((im, i) => (
          <div className="mx-auto">
            <img src={im} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carosl2;
