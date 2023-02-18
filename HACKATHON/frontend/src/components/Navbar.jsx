import React, { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalPref from "./ModalPref";
function Navbar(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav class="p-5 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            MateUp
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => {
            setToggleNavbar((prevValue) => !prevValue);
          }}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            toggleNavbar
              ? "hidden w-full md:block md:w-auto"
              : "w-full md:block md:w-auto"
          }
          id="navbar-solid-bg"
        >
          <ul class="flex flex-col mt-4  bg-transparent items-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                class="block py-2 pl-3 pr-4 text-black  hover: md:bg-transparent  md:p-0 hover-underline-animation "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/search"}
                class="block py-2 pl-3 pr-4 text-black hover: md:bg-transparent  md:p-0 hover-underline-animation "
              >
                Search
              </Link>
            </li>

            <li>
              {user === (undefined || null) ? (
                <Link
                  class=" text-black flex cursor-pointer items-center hover:bg-black hover:text-white  transition-all ease-in-out flex-nowrap  px-6 py-2 border-black border-solid border-2"
                  to={"/" + props.btn}
                >
                  {props.btn === "" ? "Home" : props.btn}
                  <IoArrowForwardOutline className="ml-2" />
                </Link>
              ) : (
                <ModalPref />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
