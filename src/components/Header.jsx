import { useState, useEffect, useRef } from "react";
import { header } from "../data/data";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
// import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { BsCart2 } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Cart from "./Cart";
import useClickOutside from "../hooks/useClickOutside";

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

  const handleClick = () => {
    if(cartOpen === false)
    setCartOpen(true)
    else setCartOpen(false)
  }
  // const ref = useRef(null);
  // useClickOutside(ref, () => {
  //   if (cartOpen) {
  //     setCartOpen(!cartOpen);
  //   }
  // });

  return (
    <>
      {cartOpen && <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />}
      <header
        // className="sticky top-0 bg-white shadow-md z-10 py-4"
        className={`${
          isActive ? "lg:top-0 bg-white shadow-2xl" : "lg;top-[60px] "
        }  py-4 fixed w-full bg-white
  transition-all z-10`}
      >
        <div className=" lg:mx-20 flex px-2 lg:px-0 justify-between items-center ">
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
            <ConnectButton />
            <div
              className=" cursor-pointer bg-gray-100 p-2 rounded-full"
              // ref={ref}
              onClick={handleClick}
            >
              <BsCart2 />
              {CartItem?.length > "0" ? (
                <span className="bg-red-500 text-center text-xs absolute ml-3 top-3 rounded-full px-2 py-1  text-white">
                  {CartItem?.length}
                </span>
              ) : (
                <></>
              )}
            </div>
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
