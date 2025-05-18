import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      title: "Efficient Water Management",
      description: "Precise irrigation, zero waste",
      icon: "/water.png",
      alt: "Water",
      iconClassName: "w-8 h-[42px]",
    },
    {
      title: "Solar-Powered Autonomy",
      description: "Runs off-grid, eco-friendly energy",
      icon: "/battery.png",
      alt: "Battery",
      iconClassName: "w-[34px] h-[49px]",
    },
    {
      title: "Smart Remote Control",
      description: "Monitor and manage via the mobile-app",
      icon: "/hand-with-smartphone.png",
      alt: "Hand with smartphone",
      iconClassName: "w-12 h-12",
    },
    {
      title: "Boosted Crop Productivity",
      description: "Healthier plants, higher yields",
      icon: "/plant.png",
      alt: "Plant",
      iconClassName: "w-[45px] h-11",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-8">
      {/* Phone mockups */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative w-[300px] h-[714px] mr-4">
          <div className="relative w-full h-full bg-[url(/iphone-12-pro-1.png)] bg-[100%_100%]">
            <img
              className="absolute w-[260px] h-[685px] top-3.5 left-[30px]"
              alt="Screen iPhone Pro"
              src="/screen-iphone-12-pro-3.svg"
            />
          </div>
        </div>

        <div className="relative w-[249px] h-[593px] mt-[204px]">
          <div className="relative w-full h-full bg-[url(/iphone-12-pro.png)] bg-[100%_100%]">
            <img
              className="absolute w-[215px] h-[569px] top-3 left-[9px]"
              alt="Screen iPhone Pro"
              src="/screen-iphone-12-pro-1.svg"
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Title and tagline */}
        <div className="mb-8">
          <h1 className="[background:linear-gradient(125deg,rgba(24,29,126,1)_0%,rgba(43,52,228,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] text-transparent text-7xl md:text-8xl lg:text-[120px] font-semibold text-center lg:text-left leading-tight">
            ERWINI
          </h1>
          <h2 className="[background:linear-gradient(149deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-xl md:text-2xl text-center lg:text-left mt-2">
            Best way to monitor your irrigation
          </h2>
        </div>

        {/* Description */}
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg md:text-xl text-justify mb-10">
          ERWINI is an intelligent, solar-powered irrigation system that helps
          farmers optimize water usage and boost crop productivity. Powered by
          IoT and AI, it enables real-time monitoring and remote control through
          a mobile app.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="p-0 flex items-start gap-4">
                <img
                  className={feature.iconClassName}
                  alt={feature.alt}
                  src={feature.icon}
                />
                <div>
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[15px] tracking-[0] leading-[21.3px]">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-black text-[13px] tracking-[0] leading-[18.5px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
