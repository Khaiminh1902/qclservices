import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d8a339]">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            At{" "}
            <span className="text-[#d8a339] font-semibold">QCL Services</span>,
            we blend innovation and reliability to deliver exceptional solutions
            tailored to your needs.
          </p>
        </div>

        {/*
        <div className="relative mb-12 pt-5 hidden sm:block">
          <div className="absolute h-full border-l-4 border-[#d8a339] left-1/2 transform -translate-x-1/2 z-0"></div>
          <div className="space-y-12 z-10">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="w-full md:w-1/2 text-right pr-8">
                <h4 className="text-lg font-semibold text-gray-800">Founded</h4>
                <p className="text-gray-600">
                  Established in 2024, QCL Services began its journey with a
                  mission to deliver excellence.
                </p>
              </div>
              <div className="w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-full md:w-1/2 pl-8"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="w-full md:w-1/2"></div>
              <div className="w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-full md:w-1/2 pl-8">
                <h4 className="text-lg font-semibold text-gray-800">
                  First Milestone
                </h4>
                <p className="text-gray-600">
                  Achieved [specific milestone] that set a foundation for
                  sustained growth and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="w-full md:w-1/2 text-right pr-8">
                <h4 className="text-lg font-semibold text-gray-800">
                  Expansion
                </h4>
                <p className="text-gray-600">
                  Expanded operations to [new region/market] to serve a wider
                  customer base.
                </p>
              </div>
              <div className="w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-full md:w-1/2 pl-8"></div>
            </div>
          </div>
        </div>
        */}

        {/*<div className="py-12 px-6 sm:px-12 md:px-20 lg:px-32 sm:hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative block md:hidden">
              <div className="absolute left-4 h-full border-l-4 border-[#d8a339]"></div>
              <div className="space-y-16">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Founded
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Established in 2024, we started with a vision to deliver
                      excellence.
                    </p>
                  </div>
                </div>

                 Event 2 
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16">
                    <h4 className="text-lg font-semibold text-gray-800">
                      First Milestone
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Reached our first milestone, setting a strong foundation
                      for growth.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Expansion
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Expanded operations to new markets, reaching more
                      customers worldwide.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Present
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Continuing to innovate and deliver value to our clients
                      globally.
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>*/}

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {/* Mission */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#d8a339] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide exceptional services that prioritize quality,
              efficiency, and client success. We aim to simplify challenges and
              deliver innovative solutions that drive meaningful results.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#d8a339] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a leading name in our industry, recognized for our
              unwavering commitment to excellence, cutting-edge solutions, and a
              customer-first approach.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#d8a339] mb-4 text-center">
              Our Values
            </h3>
            <ul className="text-gray-700 space-y-4">
              <li>
                <span className="font-semibold text-gray-800">Integrity:</span>{" "}
                Honesty and transparency guide our decisions.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Excellence:</span>{" "}
                Striving for the highest standards in every service.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Innovation:</span>{" "}
                Embracing creativity and advancements for forward-thinking
                solutions.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Customer-Centricity:
                </span>{" "}
                Prioritizing your satisfaction above all.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center items-center mt-24">
        <Link href="/en/contact">
          <Button className="h-[50px] w-[250px] bg-[#d8a339] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#c58e2f] hover:bg-[#c58e2f] hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
