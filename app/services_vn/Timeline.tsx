import React from 'react';

const Timeline = () => {
  return (
    <section className="py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Timeline for Small Devices */}
        <div className="relative block md:hidden">
          {/* Vertical Line */}
          <div className="absolute left-4 h-full border-l-4 border-[#d8a339]"></div>

          {/* Events */}
          <div className="space-y-16">
            {/* Event 1 */}
            <div className="relative flex items-start">
              <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">Founded</h4>
                <p className="text-gray-600 mt-2">
                  Established in 2024, we started with a vision to deliver excellence.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex items-start">
              <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">First Milestone</h4>
                <p className="text-gray-600 mt-2">
                  Reached our first milestone, setting a strong foundation for growth.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex items-start">
              <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">Expansion</h4>
                <p className="text-gray-600 mt-2">
                  Expanded operations to new markets, reaching more customers worldwide.
                </p>
              </div>
            </div>

            {/* Event 4 */}
            <div className="relative flex items-start">
              <div className="absolute left-0 w-8 h-8 bg-[#d8a339] rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">Present</h4>
                <p className="text-gray-600 mt-2">
                  Continuing to innovate and deliver value to our clients globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
