import React from "react";
import { Dot } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div className="mt-[40px]">
      <h1 className="text-4xl font-bold text-center flex justify-center text-[#d8a339]">
        Our Services
      </h1>
      <div className="flex pt-6">
        {/* Left navigation */}
        <nav className=" p-6 text-black hidden sm:block border-r">
          <h2 className="text-2xl font-semibold mb-6 text-[#d8a339]">
            Services
          </h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#air-conditioning"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Air Conditioning Systems</span>
              </a>
            </li>
            <li>
              <a
                href="#electrical-plumbing"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Electrical &amp; Plumbing Systems</span>
              </a>
            </li>
            <li>
              <a
                href="#chimney-systems"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Chimney Systems</span>
              </a>
            </li>
            <li>
              <a
                href="#wooden-furniture"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Wooden Furniture</span>
              </a>
            </li>
            <li>
              <a
                href="#construction-decoration"
                className="hover:text-gray-700 flex items-center space-x-2"
              >
                <Dot />
                <span>Construction &amp; Interior Decoration</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="space-y-16">
            {/* Air Conditioning Systems */}
            <section id="air-conditioning">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Air Conditioning Systems
              </h2>
              <p>
                We provide comprehensive services for air conditioning systems,
                including installation, maintenance, and repair. Our experienced
                technicians will ensure your system runs smoothly and
                efficiently, keeping your space comfortable all year.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Installation of residential and commercial air conditioning
                  units
                </li>
                <li>Routine maintenance to improve energy efficiency</li>
                <li>
                  Repairs and troubleshooting for all types of air conditioners
                </li>
                <li>
                  Regular cleaning to prevent breakdowns and ensure optimal
                  performance
                </li>
              </ul>
            </section>

            {/* Electrical & Plumbing Systems */}
            <section id="electrical-plumbing">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Electrical &amp; Plumbing Systems
              </h2>
              <p>
                Our team specializes in the installation, maintenance, and
                repair of electrical and plumbing systems for both residential
                and commercial properties. We ensure safety and efficiency while
                keeping your home or business running smoothly.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Installation of electrical wiring and lighting systems</li>
                <li>Repairs of faulty electrical wiring and outlets</li>
                <li>
                  Plumbing installations, including faucets, toilets, and piping
                </li>
                <li>
                  Maintenance and repairs of water heaters, pipes, and drains
                </li>
                <li>
                  Safety inspections for both electrical and plumbing systems
                </li>
              </ul>
            </section>

            {/* Chimney Systems */}
            <section id="chimney-systems">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Chimney Systems
              </h2>
              <p>
                We provide expert chimney system maintenance, ensuring your home
                is safe and your chimney is functioning efficiently. Our
                services include inspections, cleaning, and repairs to prevent
                hazards such as chimney fires and carbon monoxide buildup.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Inspection of chimney liners, caps, and flues</li>
                <li>Cleaning to remove soot, creosote, and blockages</li>
                <li>Repairs to chimney structure and components</li>
                <li>
                  Safety checks to prevent leaks and ensure proper ventilation
                </li>
              </ul>
            </section>

            {/* Wooden Furniture */}
            <section id="wooden-furniture">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Wooden Furniture
              </h2>
              <p>
                Our services include the repair and restoration of wooden
                furniture, bringing back the beauty and functionality of your
                cherished pieces. Whether it's fixing broken furniture or
                enhancing the appearance of worn-out wood, we have you covered.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Repairing damaged or broken wooden furniture</li>
                <li>Restoring faded or worn-out wood surfaces</li>
                <li>
                  Re-finishing and polishing furniture to its original state
                </li>
                <li>Custom woodwork solutions for unique furniture needs</li>
              </ul>
            </section>

            {/* Construction & Interior Decoration */}
            <section id="construction-decoration">
              <h2 className="text-3xl font-semibold text-[#d8a339] mb-4">
                Construction &amp; Interior Decoration
              </h2>
              <p>
                Our construction and interior decoration services help you
                create spaces that are both functional and aesthetically
                pleasing. From new builds to home renovations, our team offers
                tailored solutions for every project.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Complete construction services for residential and commercial
                  spaces
                </li>
                <li>
                  Interior design consultations to bring your vision to life
                </li>
                <li>Custom furniture and decor solutions</li>
                <li>Renovation and remodeling of existing spaces</li>
                <li>
                  Wall painting, flooring installation, and lighting design
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
