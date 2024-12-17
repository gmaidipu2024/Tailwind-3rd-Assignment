import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
} from "@nextui-org/react";

const FooterData = {
  menus1: ["About MyFeedback", "Investor Relations"],
  menus2: [
    "MyFeedback for business",
    "Collections",
    "Talk",
    "Events",
    "MyFeedback Blog",
    "Support",
    "Developers",
  ],
};

function Footer() {
  const { menus1, menus2 } = FooterData;

  return (
    <footer className=" py-12 ">
      <hr className="py-3"/>
      <div className=" container mx-auto overflow-hidden grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3 items-start justify-center gap-12 px-20 ">
        <div className="grid grid-cols-2 justify-center md:grid-cols-4 gap-32 mx-auto ">
          <div className="text-center md:text-start">
            <h1 className="text-[#26395C] text-xl text-center font-bold mb-10  ">
              {" "}
              About
            </h1>

            <div className="flex gap-3 items-start justify-around ">
              <div>
                {menus1.map((item, i) => (
                  <ul key={i}>
                    <li className="mb-2">{item} </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          {/* div part -2 */}
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-[#26395C] text-xl font-bold mb-10 ">
            {" "}
            MyFeedback
          </h1>
          {menus2.map((item, i) => (
            <ul key={i}>
              <li className="mb-2">{item} </li>
            </ul>
          ))}
        </div>
        {/* last part */}
        <div className=" rounded-lg px-16 py-10 mb-2 col-span-1">
          <div className="flex flex-col justify-items-center py-5">
            <h2 className="text-[#1E1E1E] text-2xl font-bold py-2">Language</h2>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  English <img src="./ary.png" alt="" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Bangla</DropdownItem>
                <DropdownItem key="copy">Italian</DropdownItem>
                <DropdownItem key="edit">France</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex flex-col justify-items-center py-5">
            <h2 className="text-[#1E1E1E] text-2xl font-bold py-2">
              Countries
            </h2>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  Bangladesh <img src="./ary.png" alt="" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Canada</DropdownItem>
                <DropdownItem key="copy">Italy</DropdownItem>
                <DropdownItem key="edit">France</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
