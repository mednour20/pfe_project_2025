import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupWrapperByAnima = (): JSX.Element => {
  // Benefits data for mapping
  const benefits = [
    "Save up to 80% of water consumption",
    "Receive real-time notifications and alarms",
    "No Costs For Remodeling",
  ];

  return (
    <section className="relative w-full py-16 flex flex-col md:flex-row gap-8 max-w-[1318px] mx-auto">
      {/* Left side - Images and decorative elements */}
      <div className="relative w-full md:w-1/2 h-[685px]">
        <div className="absolute w-[21px] h-[21px] top-[404px] left-[106px] rounded-[10.5px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />
        <div className="absolute w-[22px] h-[21px] top-[539px] left-72 rounded-[11px/10.5px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />
        <div className="absolute w-[22px] h-[22px] top-[517px] left-[349px] rounded-[11px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />

        <img
          className="absolute w-[165px] h-[164px] top-[229px] left-0"
          alt="Group"
          src="/group-1597883105.png"
        />

        <div className="absolute w-[638px] h-[685px] top-0 left-5">
          <img
            className="absolute w-[253px] h-[250px] top-[435px] left-0"
            alt="Group"
            src="/group-1597883106.png"
          />

          <img
            className="absolute w-[493px] h-[498px] top-0 left-[145px]"
            alt="Group"
            src="/group-1597883107.png"
          />

          <div className="absolute w-[110px] h-[110px] top-[357px] left-[516px] rounded-[55px] border-8 border-solid border-white [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]">
            <img
              className="absolute w-[26px] h-7 top-[40px] left-[45px]"
              alt="Polygon"
              src="/polygon-4.svg"
            />
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="relative w-full md:w-1/2 flex flex-col gap-8">
        <h2 className="font-bold text-[40px] text-[#2b34e4] [font-family:'Poppins',Helvetica] leading-[72.4px]">
          Discover ERWINI our principle solution Smart Irrigation Made Simple
        </h2>

        <p className="font-normal text-[22px] text-[#4c4c4c] [font-family:'Poppins',Helvetica] leading-[39.8px]">
          ERWINI is Bluejet Engineering&apos;s smart irrigation system, allowing
          farmers to control watering remotely via a simple app and smart
          hardware.
        </p>

        {/* Benefits list */}
        <div className="flex flex-col gap-6 mt-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                className="w-[38px] h-[38px] object-cover"
                alt="Checklist"
                src="/checklist-5.png"
              />
              <p className="font-semibold text-[22px] text-[#4c4c4c] [font-family:'Poppins',Helvetica] leading-[39.8px]">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="mt-8 w-[304px] h-[74px] rounded-[70px] bg-[#2b34e4] hover:bg-[#181d7e] relative group">
          <span className="font-semibold text-2xl text-white [font-family:'Poppins',Helvetica] leading-9">
            Discover more
          </span>
          <div className="absolute w-[47px] h-[46px] top-3.5 right-3.5 bg-white rounded-[23.5px/23px] flex items-center justify-center">
            <img className="w-[17px] h-[15px]" alt="Arrow" src="/arrow-4.svg" />
          </div>
        </Button>
      </div>
    </section>
  );
};
