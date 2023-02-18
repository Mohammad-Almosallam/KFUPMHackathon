import React from "react";
import {
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

function Footer() {
  return (
    <footer class="bg-black mt-20 pt-20 font-extralight tracking-widest text-white ">
      <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold   uppercase ">Company</h2>
          <ul>
            <li class="mb-4">
              <a href="#" class=" hover:underline">
                About
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Careers
              </a>
            </li>

            <li class="mb-4">
              <a href="#" class="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold  uppercase">Help center</h2>
          <ul>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Discord Server
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Twitter
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Facebook
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className=" font-extralight tracking-widest text-white ">
          <h2 class="mb-6 text-sm font-semibold  uppercase ">Legal</h2>
          <ul class="">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Licensing
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className=" font-extralight tracking-widest text-white ">
          <h2 class="mb-6 text-sm font-semibold uppercase ">Download</h2>
          <ul class="">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                IOS
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Android
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Windows
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                MacOS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-10 py-6 bg-black  md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-300 sm:text-center">
          © 2023 MindInstall™. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <IoLogoFacebook className="cursor-pointer" />
          <IoLogoTwitter className="cursor-pointer" />
          <IoLogoDribbble className="cursor-pointer" />
          <IoLogoGithub className="cursor-pointer" />
          <IoLogoInstagram className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
