import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";

function MyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Restaurants",
    "Hotels",
    "Home services",
    "Shopping",
    "Car location",
    "Beauty & Spa",
  ];

  return (
    <section className="py-8">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>
        <NavbarContent className="sm:hidden">
          <NavbarBrand>
            <img src="./logo.png" alt="" className="w-44" />{" "}
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className=" hidden sm:flex gap-4 justify-center w-full ">
          <NavbarBrand>
            <img
              className="flex justify-center items-center"
              src="./logo.png"
              alt=""
            />{" "}
          </NavbarBrand>
          <NavbarContent>
            <NavbarItem>
              <div className="border rounded-full px-2 py-2 overflow-hidden">
                <div className="flex justify-center items-center flex-row gap-3 ">
                  <p>restaurant, hotel, service....</p>
                  <div className="border border-l bg-gray-400">.</div>
                  <p>Singapour...</p>
                  <div className="flex justify-center items-center bg-[#1677BD] rounded-full w-10 h-10 mx-auto">
                    <img className=" w-5 h-5 " src="./vector.png" alt="" />
                  </div>
                </div>
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarItem className=" hidden md:block justify-center items-center ">
            <img src="./world.png" alt="" />
          </NavbarItem>
          <NavbarItem>
            <Button className="bg-[#1E1E1E] text-white rounded-full">
              {" "}
              MyFeedback for busines
            </Button>
          </NavbarItem>
        </NavbarContent>

        <div className="sm:hidden">
          <NavbarContent className="w-full">
            <NavbarItem className="hidden lg:flex "></NavbarItem>
            <NavbarItem>
              <img src="./world.png" alt="" />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="bg-[#F5FAFF]">
            {menuitems.map((item, i) => (
              <NavbarMenuItem key={i}>
                <Link className="w-full text-black"> {item}</Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </Navbar>
    </section>
  );
}

export default MyNav;
