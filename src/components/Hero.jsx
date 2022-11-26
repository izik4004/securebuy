import { useState } from "react";
import { hero } from "../data/data";
import { HiOutlineChevronDown } from "react-icons/hi";
import SellForm from "./SellForm";
// import Image from "../assets/category/casual.png";
// import SellForm from "./SellForm";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <>
      {/* <div
        aria-hidden="true"
        class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div class="blur-[156px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div class="blur-[156px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div> */}

      <section className="flex items-center container justify-between  me  mx-auto rounded-xl min-h-[700px]">
        {modalOpen === true ? (
          <SellForm setModalOpen={setModalOpen} modalOpen={modalOpen} />
        ) : (
          <></>
        )}
        <section className="  rounded-2xl bg-[#F6F7F9]">
          <div className="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl ">
                Scared of <span className="text-accent">getting scammed </span>{" "}
                by online vendors?
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                With securebuy your money is safe through the use of an escrow smart contract which holds the funds till your goods are delivered
              </p>
              <a onClick={() => setModalOpen(true)}
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Sell your products
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-accent rounded-lg hover:bg-gray-100 focus:ring-4 "
              >
               Shop Now
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
       
      </section>
    </>
  );
};

export default Hero;
