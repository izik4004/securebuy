import React from "react";
import Cards from "./Cards";
import { product } from "../data";

const Product = () => {
  const { title, subtitle } = product;
  return (
    <section className="section">
      <div className="container mx-auto">
        <h3 className="title text-center mb-20"></h3>
        <div className="gap-10 flex">
          <div className="lg:w-1/3">
            <input type="text" placeholder="Search" />
            <div className="flex flex-col">
              <ul>
                <li>Bedroom</li>
                <li>Bedroom</li>
                <li>Bedroom</li>
                <li>Bedroom</li>
                <li>Bedroom</li>
              </ul>
            </div>
          </div>
          <div class="lg:w-2/3">
            <div className="flex gap-6">
              <div class="lg:w-1/2 py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div class="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    class="bi bi-badge-ad"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                  Creative ads
                </h3>
                <p class="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>

              <div class="lg:w-1/2 py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div class="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    class="bi bi-badge-ad"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                  Creative ads
                </h3>
                <p class="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
