import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

const Letter: FC = () => {
  return (
    <div className="font-sans antialiased">
      {/* Header Section */}
      <header className="bg-[#023f92] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold">
            QCL Maintenance Services Co., Ltd.
          </h1>
          <p className="mt-2 text-lg">
            Your trusted partner in technical solutions and services
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#d8a339]">
            1. Thank You for Choosing Us
          </h2>
          <p className="text-lg mb-6">
            We sincerely appreciate your trust in using the services of QCL
            Maintenance Services Co., Ltd. Our experienced and highly skilled
            team is committed to providing you with superior service and optimal
            solutions for maintenance, repair, and installation of technical
            systems.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#d8a339]">
            2. Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {/* Service 1 */}
            <a href="/en/services#air-conditioning">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Air Conditioning Systems
                </h3>
                <p>
                  Installation and maintenance of air conditioning systems for
                  optimal performance and comfort.
                </p>
              </div>
            </a>

            {/* Service 2 */}
            <a href="/en/services#electrical-plumbing">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Electrical & Plumbing Systems
                </h3>
                <p>
                  Installation, maintenance, and repair of electrical and
                  plumbing systems with the highest safety standards.
                </p>
              </div>
            </a>

            {/* Service 3 */}
            <a href="/en/services#chimney-systems">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Chimney Maintenance
                </h3>
                <p>
                  Inspection, cleaning, and maintenance of chimneys to ensure
                  effective operation and prevent accidents.
                </p>
              </div>
            </a>

            {/* Service 4 */}
            <a href="/en/services#wooden-furniture">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Wooden Furniture Repair
                </h3>
                <p>
                  Maintaining aesthetic value and improving durability of wooden
                  furniture.
                </p>
              </div>
            </a>

            {/* Service 5 */}
            <a href="/en/services#construction-decoration">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Interior Design & Construction
                </h3>
                <p>
                  Design and build luxurious living spaces tailored to the
                  personal needs of our customers.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#d8a339]">
            3. Our Commitment to You
          </h2>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 pt-8">
            {/* Category 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">
                Exceptional Quality
              </h3>
              <p>Using the most modern materials and technology.</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">
                Competitive Pricing
              </h3>
              <p>
                Offering reasonable and effective investments for customers.
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg sm:flex-1">
              <h3 className="text-xl font-semibold mb-4">Dedicated Team</h3>
              <p>
                Experienced technicians, always ready to serve anytime and
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-col md:flex-row lg:flex-row flex justify-center items-center mt-7 gap-6">
        <Link href="/en/blog">
          <Button className="h-[50px] w-[250px] bg-[#023f92] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#023f92] hover:bg-[#023e92e7] transition duration-300 ease-in-out transform hover:scale-105">
            Find More Information
          </Button>
        </Link>
        <Link href="/en/contact">
          <Button className="h-[50px] w-[250px] bg-[#d8a339] text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-[#c58e2f] hover:bg-[#c58e2f] transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Letter;
