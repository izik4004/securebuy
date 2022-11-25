import { useState, useEffect } from "react";
import { header } from "../data/data";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
// import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { BsCart2 } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Cart from "./Cart";

const Header = ({ CartItem }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { logo, btnText } = header;
  const [cartOpen, setCartOpen] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <>
      {cartOpen === true ? 
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/> 
      : <></>}
      <header
        // className="sticky top-0 bg-white shadow-lg z-10"
        className={`${
          isActive ? "lg:top-0 bg-white shadow-2xl" : "lg;top-[60px]"
        } py-6 lg:py-6 fixed w-full bg-white
  transition-all z-10`}
      >
        <div className="container mx-auto flex justify-between items-center ">
          <a
            href="/"
            data-aos="fade-down"
            data-aos-delay="1200"
            className="flex"
          >
            <h1 className="logotext  text-[#6420FE]">
              Secure<span className="logotext text-accent">Buy</span>
            </h1>
          </a>
          <div
            className="hidden lg:flex"
            data-aos="fade-down"
            data-aos-delay="1200"
          >
            <Nav />
          </div>

          <div className="flex items-center gap-4">
            <div
             
              className="border border-red-500 rounded-full p-2 cursor-pointer"
            >
              <BsCart2  onClick={() => setCartOpen(true)}/>
              {CartItem?.length > "0" ? (
                <span className="bg-red-500 text-center text-xs absolute ml-3 top-3 rounded-full px-2 py-1 text-white">
                  {CartItem?.length}
                </span>
              ) : (
                <></>
              )}
            </div>
            <ConnectButton />
            {/* <button
            className="btn btn-sm btn-outline hidden lg:flex px-10"
            data-aos="fade-down"
            data-aos-delay="1400"
          >
            {btnText}
          </button> */}
            <button
              className="lg:hidden"
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? (
                <MdClose className="text-3xl text-accent" />
              ) : (
                <HiMenuAlt4 className="text-3xl text-accent" />
              )}
            </button>
          </div>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } fixed top-0 w-[60vw] lg:hidden transition-all bottom-0 bg-pink-400`}
          >
            {/* <MobileNav /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
