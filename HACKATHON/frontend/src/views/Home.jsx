import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { IoAccessibilityOutline, IoAppsOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Gradient from "../components/Gradient";
import { useNavigate } from "react-router-dom";
import HeroSVG from "../components/HeroSVG";

function Home() {
  return (
    <>
      <Navbar btn={"login"} />

      {/* HERO SECTION */}

      <section class="relative py-32 overflow-hidden">
        <Gradient />
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center -m-8">
            <div class="w-full md:w-1/2 p-8">
              <h2 class="mb-6 text-6xl  md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                Find the roommate you wished for
              </h2>
              <p class="font-sans text-lg text-gray-900 leading-relaxed md:max-w-lg"></p>
            </div>
            <div class="w-full md:w-1/2 hover:scale-105 transition-all ease-in-out">
              <HeroSVG />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] ">
          <svg
            class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* <div className="mx-6 p-2  overflow-hidden text-center ">
          <h1 className="text-7xl  font-medium max-sm:text-4xl">
            The next generation of searching for roommate.
          </h1>
          <h5 className="  text-gray-400">Join us now</h5>
        </div> */}
      </div>

      {/* Who we are  */}
      <div className="flex ">
        {/* <div className="  w-">
          <img src="./public/img.jpeg" />
        </div> */}

        <div className="mx-6 p-2 overflow-hidden text-center">
          <h2 className=" text-7xl max-sm:text-4xl font-bold">Who we are?</h2>
          <div className="">
            <h3 className="pt-10 px-10 text-lg max-sm:px-10">
              Welcome to our website, the perfect solution for those seeking a
              roommate. Our user-friendly platform makes it easy for you to
              search for compatible roommates based on shared interests,
              lifestyle, and location of building. Simply create an account,
              fill out your profile, and start browsing through our extensive
              database of potential roommates. You can communicate with
              potential matches using contact information, and our intuitive
              search tools will help you find the perfect fit. With our website,
              finding a roommate has never been easier!
            </h3>
          </div>
        </div>
      </div>

      <hr className=" my-10"></hr>

      {/* Features */}
      <div className="mx-6 p-2 overflow-hidden text-center">
        <h2 className=" text-7xl max-sm:text-4xl font-bold">Features</h2>
      </div>
      <div class="space-y-12 mt-20 p-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Roommate search
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Users can search for potential roommates based on various
            criteria,The search results should display relevant information
            about each potential roommate basic information, and a brief
            description.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Easy Connection
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Users can create a personal account and fill out a profile with
            information about themselves, and connect with others accordingly.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Advanced Filtering
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Users can search for roommates according to various criteria and can
            benifit from the filtering system.
          </p>
        </div>
      </div>

      {/* How it works */}
      <HowItWorks />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
