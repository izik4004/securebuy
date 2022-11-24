import { useState } from "react";
import { hero } from "../data/data";
import { HiOutlineChevronDown } from "react-icons/hi";
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

      <section className="items-center flex max-h-[800px] py-6 me bg-primary">
        <div
          className="container mx-auto min-h-[800px] w-2/3
      flex justify-center items-center"
        >
          <div
            className="flex flex-col lg:gap-x-[30]px gap-y-8
        lg:flex-row items-center justify-center
        text-center lg:text-left"
          >
            <div className="flex-1 ">
              <h1
                className="title mb-2 lg:mb-5 "
                data-aos="fade-in"
                data-aos-delay="500"
              >
                {title}
              </h1>
              <p
                className="lead mb-5 lg:mb-10 text-center"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                {subtitle}
              </p>

              <div
                className="flex items-center max-w-sm
               lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6 cursor-pointer"
                data-aos="fade-in"
                data-aos-delay="700"
              >
                <button
                  className="cursor-pointer btn btn-md lg:btn-sm
                  btn-accent flex justify-center items-center
                  lg:gap-x-4"
                  // onClick={() => setModalOpen(true)}
                >
                  {btnText}
                  {/* <HiOutlineChevronDown /> */}
                </button>
                <button
                  className="cursor-pointer btn btn-md lg:btn-sm
                  btn-accent flex justify-center items-center
                  lg:gap-x-4"
                  // onClick={() => setModalOpen(true)}
                >
                  {btnText}
                  {/* <HiOutlineChevronDown /> */}
                </button>
              </div>
            </div>
            <div className="flex-1 w-1/3" data-aos="fade-down" data-aos-delay="800">
            <img src={image} alt=""/>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
