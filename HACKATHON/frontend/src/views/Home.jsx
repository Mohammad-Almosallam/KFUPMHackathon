import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { IoAccessibilityOutline, IoAppsOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Gradient from "../components/Gradient";
import { useNavigate } from "react-router-dom";

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
              <h2 class="mb-6 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                Find the roommate you wished for.
              </h2>
              <p class="font-sans text-lg text-gray-900 leading-relaxed md:max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever sin
              </p>
            </div>
            <div class="w-full md:w-1/2 p-8">
              <img
                class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="flaro-assets/images/features/feature.png"
                alt=""
              />
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
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  Students looking for roommates
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  44 million
                </dd>
              </div>

              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  Assets under holding
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  $119 trillion
                </dd>
              </div>

              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  New users annually
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  46,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <hr className="  my-28"></hr>
      {/* Who we are  */}
      <div className="flex ">
        {/* <div className="  w-">
          <img src="./public/img.jpeg" />
        </div> */}

        <div className="mx-6 p-2 overflow-hidden text-center">
          <h2 className=" text-7xl max-sm:text-4xl">Who we are?</h2>
          <div className="">
            <h3 className="pt-10 px-10 text-lg max-sm:px-10">
              Our web application allows students to create a profile with
              information such as their name, age, gender, major, hobbies, and
              any other relevant information that could help them find a
              compatible roommate, also allows students to communicate with
              potential roommates and get to know them before making a decision.
            </h3>
          </div>
        </div>
      </div>

      <hr className=" my-10"></hr>

      {/* Features */}
      <div className="mx-6 p-2 overflow-hidden text-center">
        <h2 className=" text-7xl max-sm:text-4xl">Features</h2>
      </div>
      <div class="space-y-12 mt-20 p-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Plan it, create it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Protect your organization, devices and stay compliant with our
            structured workflows and custom permissions made for you.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Business Automation
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Auto-assign tasks, send Slack messages, and much more. Now power up
            with hundreds of new templates to help you get started.
          </p>
        </div>
      </div>

      <hr className=" my-10"></hr>
      {/* How it works */}
      <HowItWorks />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
