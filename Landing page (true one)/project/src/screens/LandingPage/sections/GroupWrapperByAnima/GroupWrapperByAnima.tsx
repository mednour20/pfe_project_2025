import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  const benefits = [
    "Save up to 80% of water consumption",
    "Receive real-time notifications and alarms",
    "No Costs For Remodeling",
  ];

  return (
    <section className="-mt-40 pb-2 md:pb-4 lg:pb-6 relative">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
    {/* Left side - Images */}
    <div className="w-full lg:w-1/2 relative">
      <div className="relative h-[685px] w-full">
        <div className="absolute w-[19px] h-[19px] top-[404px] left-[106px] rounded-[10.5px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />
        <div className="absolute w-[20px] h-[20px] top-[539px] left-72 rounded-[11px/10.5px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />
        <div className="absolute w-[20px] h-[20px] top-[517px] left-[349px] rounded-[11px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]" />

        <img
          className="absolute w-[140px] h-[139px] top-[229px] left-0"
          alt="Group"
          src="/group-1597883105.png"
        />

        <div className="absolute w-[460px] h-[400px] top-0 left-5">
          <img
            className="absolute w-[220px] h-[219px] top-[435px] left-0"
            alt="Group"
            src="/group-1597883106.png"
          />

          <img
            className="absolute w-[470px] h-[475px] top-0 left-[145px]"
            alt="Group"
            src="/group-1597883107.png"
          />

          <div className="absolute w-[110px] h-[110px] top-[317px] left-[506px] rounded-[55px] border-8 border-solid border-white [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)]">
            <img
              className="absolute w-[26px] h-7 top-[34px] left-[39px]"
              alt="Play button"
              src="/polygon-4.svg"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Right side - Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4">
      <h2 className="font-bold text-[#2b34e4] text-[35px] leading-[72.4px] font-['Poppins',Helvetica]">
        Discover ERWINI our principle solution Smart Irrigation Made Simple
      </h2>

      <p className="font-normal text-[#4c4c4c] text-[19px] leading-[39.8px] font-['Poppins',Helvetica]">
        ERWINI is Bluejet Engineering&apos;s smart irrigation system,
        allowing farmers to control watering remotely via a simple app and
        smart hardware.
      </p>

      <Card className="border-0 shadow-none">
        <CardContent className="p-0 space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                className="w-[38px] h-[38px] object-cover"
                alt="Checklist"
                src="/checklist-5.png"
              />
              <p className="font-semibold text-[#4c4c4c] text-[20px] leading-[39.8px] font-['Poppins',Helvetica]">
                {benefit}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-[304px] h-[74px] rounded-[70px] bg-[#2b34e4] hover:bg-[#181d7e] text-white relative group">
        <span className="font-semibold text-2xl font-['Poppins',Helvetica] mr-16">
          Discover more
        </span>
        <div className="absolute right-3.5 w-[47px] h-[46px] bg-white rounded-[23.5px/23px] flex items-center justify-center">
          <img
            className="w-[17px] h-[15px]"
            alt="Arrow"
            src="/arrow-3.svg"
          />
        </div>
      </Button>
    </div>
  </div>
</section>

  );
};
