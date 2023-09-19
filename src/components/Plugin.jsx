import React from "react";
import GPLogo from "../assets/images/gp-logo.png";

const Plugin = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-around my-5">
        <h3 className="text-[28px] font-bold text-white w-[270px]">
          Official WordPress plugins & themes
        </h3>
        <img src={GPLogo} alt="logo" />
      </div>
      <div className="grid grid-cols-2">
        <div className="relative min-h-fit">
          <div className="w-[6px] h-[calc(100%-30px)] bg-[#191923] absolute right-5"></div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                Link Juice Keeper
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                20,000+ active users
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              This plugin eliminates all 404 errors (Page Not Found) from your
              website with just a click.
            </p>
            <ul className="text-[13px] text-textColor list-disc pl-8 mb-3 leading-6">
              <li>
                Redirect errors to your homepage, an existing page, post or even
                a custom link
              </li>
              <li>Monitor/log all 404 errors</li>
              <li>Choose which redirect method to be used (301,302,307)</li>
              <li>Get email notifications for every 404 incident</li>
            </ul>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                Clone Posts
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                10,000+ active users
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              Easily clone (duplicate) posts, pages and custom post types in
              WordPress.
            </p>
            <ul className="text-[13px] text-textColor list-disc pl-8 mb-3 leading-6">
              <li>
                Enable clone feature for Posts, Pages or any Custom Post Type
                (CPT)
              </li>
              <li>Clone single Posts/Pages with one click</li>
              <li>Clone multiple Posts/pages with Bulk feature</li>
              <li>Set default Status & Date of cloned Posts/Pages</li>
              <li>Custom fields (post-metadata) are also copied</li>
            </ul>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                WP Robots Txt
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                20,000+ active users
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              Easily edit the contents of the dynamically generated robots.txt
              of your WordPress site.
            </p>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
        </div>
        <div className="relative min-h-fit">
          <div className="w-[6px] h-[calc(100%-30px)] bg-[#191923] absolute right-5"></div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                Aperitto
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                900+ active users
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              Aperitto is a simple, minimal, responsive WordPress theme. The
              clean typography and basic layout options make it a great start
              for any project.
            </p>
            <p className="text-[13px] text-textColor my-4">
              The user friendly customization options will get your site up and
              running in minutes.
            </p>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                Simple CPT
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                200+ active users
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              Simple CPT is a free WordPress plugin that lets you create custom
              post types and custom taxonomies (eg: categories, tags, etc.)
              directly from your admin dashboard without writing a single line
              code.
            </p>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
          <div className="bg-[#2C2C37] p-[40px] mr-11 mb-7">
            <div className="flex justify-between items-center">
              <h5 className="inline-block text-base font-semibold text-white">
                Simple Insta Feed
              </h5>
              <span className="text-[12px] text-[#def] bg-[#20202A] px-4 py-1 rounded-full">
                Just released!
              </span>
            </div>
            <span className="block text-[12px] text-[#8c8c8e] italic">
              WP Plugin
            </span>
            <p className="text-[13px] text-textColor my-4">
              This plugin connects to an Instagram account using the official
              Display API and displays the post feed in your WordPress website.
              Super simple to set up!
            </p>
            <ul className="text-[13px] text-textColor list-disc pl-8 mb-3 leading-6">
              <li>
                Easy embed feature to display Instagram posts from your
                Instagram account
              </li>
              <li>
                Completely responsive and mobile ready – layout looks great on
                any screen size and in any container width
              </li>
              <li>
                Customize the number of photos, number of columns, image size
                and captions display!
              </li>
            </ul>
            <a
              href="#"
              className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
            >
              get it here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plugin;
