import React from "react";

export const OverlapGroupWrapperByAnima = (): JSX.Element => {
  // Data for the comparison table
  const features = [
    {
      name: "Water Usage",
      without: "Often excessive and inconsistent",
      with: "Up to 80% less water used",
    },
    {
      name: "Control Method",
      without: "Manual operation",
      with: "Mobile app control, remote access",
    },
    {
      name: "Irrigation Scheduling",
      without: "Fixed or based on guesswork",
      with: "Automated, AI-optimized scheduling",
    },
    {
      name: "Energy Source",
      without: "Electricity or fuel-based pumps",
      with: "Solar-powered, energy-efficient",
    },
    {
      name: "Monitoring",
      without: "No feedback or real-time data",
      with: "Real-time sensor data and alerts",
    },
    {
      name: "Maintenance",
      without: "Regular manual checks required",
      with: "Low-maintenance, smart system",
    },
    {
      name: "Environmental Impact",
      without: "Risk of water waste and soil damage",
      with: "Promotes sustainable farming",
    },
    {
      name: "Crop Health & Yield",
      without: "Inconsistent irrigation affects crop quality",
      with: "Stable moisture = healthier crops",
    },
  ];

  return (
    <section className="w-full max-w-[1210px] mx-auto my-20 px-4">
      <div className="relative w-full">
        <div className="flex flex-col md:flex-row rounded-[25px] overflow-hidden shadow-lg">
          {/* Features column */}
          <div className="w-full md:w-[223px] bg-white rounded-l-[25px] shadow-[4px_0px_45.5px_-14px_#00000040] z-10">
            <div className="p-3 font-normal text-black text-base">Feature</div>
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="p-3 font-normal text-black text-base border-t border-gray-200"
              >
                {feature.name}
              </div>
            ))}
          </div>

          {/* Without ERWINI column */}
          <div className="w-full md:w-[523px] rounded-none md:rounded-none [background:linear-gradient(229deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)]">
            <div className="p-6 font-semibold text-white text-2xl text-center md:text-left">
              Without ERWINI
            </div>
            {features.map((feature, index) => (
              <div
                key={`without-${index}`}
                className="px-6 py-3 font-medium text-white text-base border-t border-gray-700"
              >
                {feature.without}
              </div>
            ))}
          </div>

          {/* With ERWINI column */}
          <div className="w-full md:w-[549px] rounded-r-[25px] [background:linear-gradient(148deg,rgba(42,51,228,1)_0%,rgba(2,7,113,1)_100%)]">
            <div className="p-6 font-semibold text-white text-2xl text-center md:text-left">
              With ERWINI
            </div>
            {features.map((feature, index) => (
              <div
                key={`with-${index}`}
                className="px-6 py-3 font-medium text-white text-base border-t border-gray-700"
              >
                {feature.with}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
