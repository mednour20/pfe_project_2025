import { MoveRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  const cards = [
    {
      title: "Engineering Excellence. Built to Perform.",
      description:
        "At Bluejet, we believe in precision engineering and powerful partnerships.",
      image: "/precision.png",
      imageAlt: "Precision",
      imagePosition: "top-0 -left-[50px]",
      cardPosition: "mt-[116px]",
    },
    {
      title: "Where Engineering Meets Innovation.",
      description:
        "At Bluejet Engineering, we turn complex ideas into intelligent machines that perform.",
      image: "/engineering-and-inov.png",
      imageAlt: "Engineering and innovation",
      imagePosition: "top-[85px] left-[387px]",
      cardPosition: "mt-[201px] ml-[437px]",
    },
  ];

  return (
    <section className="relative w-full max-w-[1357px] mx-auto py-16 px-4 md:px-8">
      <div className="relative w-full max-w-[1341px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Text Content (unchanged) */}
        <div className="mb-8 lg:mb-0 lg:max-w-[467px]">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[35px] leading-[72.4px] max-w-[424px]">
            Bluejet Engineering
            <br />
            Precision You Can Trust
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[19px] leading-[33px] max-w-[467px] mt-8">
            Trusted by industry leaders for quality, speed, and innovation.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col md:flex-row gap-5 flex-1">
          {cards.map((card, index) => (
            <div key={index} className="relative flex-1">
              <Card className="relative w-full max-w-[360px] h-[330px] rounded-[40px] shadow-[2px_2px_36px_-13px_#00000080] bg-white z-10">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4 mb-3 relative">
                    {/* Image positioned above the circle */}
                    <div className="relative">
                      <img
                        className={`absolute w-[250px] h-[250px] object-cover z-20 ${index === 0 ? "-top-20 -left-0" : "-top-20 -left-0"}`}
                        alt={card.imageAlt}
                        src={card.image}
                      />
                      <div className="w-[90px] h-[86px] rounded-[45px/43px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)] z-10"></div>
                    </div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[17px] leading-[24px] pt-2 max-w-[190px]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-['Poppins',Helvetica] font-light text-[#4c4c4c] text-[16px] leading-[26px] mt-10 mb-5 max-w-[310px]">
                    {card.description}
                  </p>

                  <div className="flex items-center mt-auto">
                    <span className="font-['Poppins',Helvetica] font-normal text-[#191f85] text-[16px] leading-[26px] mr-2">
                      Learn more
                    </span>
                    <MoveRightIcon className="h-[12px] w-[26px] text-[#191f85]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};