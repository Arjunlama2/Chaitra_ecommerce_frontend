import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-[15px]">
      <div className="flex h-[40px] w-[80%] justify-between">
        <div className="flex gap-[91px] items-center">
          <p className="font-[600] text-[34px] text-[#0D0E43]">Hekto</p>

          <ul className=" flex text-base gap-[35px] leading-[20px] text-[#0D0E43] h-full items-center mt-0 cursor-pointer">
            <Link to={"/"}>
              <li className="text-[#FB2E86] flex items-center h-fit">
                <span>Home </span>
                <IoIosArrowDown className="text-sm  mt-1" />
              </li>
            </Link>
            <Link to={"/pages"}>
              {" "}
              <li>Pages</li>
            </Link>
            <Link to="/products" className="">
              <li>Products</li>
            </Link>

            <li>Blog</li>
            <Link to={"/shop"}>
              <li>Shop</li>
            </Link>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="w-[317px] flex items-center justify-between border-[2px] border-[#E7E6EF]">
          <input type="search" className="h-full w-full rounded-none px-3" />
          <div className="w-[51px] px-[15px] py-[10px] bg-[#FB2E86]">
            <CiSearch className=" text-white h-full  text-[20px] " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
