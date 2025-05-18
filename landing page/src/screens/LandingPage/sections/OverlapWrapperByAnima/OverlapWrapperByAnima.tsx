import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  const cards = [
    {
      id: 1,
      title: "Engineering Excellence. Built to Perform.",
      description:
        "At Bluejet, we believe in precision engineering and powerful partnerships.",
      image: "/precision.png",
      imageAlt: "Precision",
      offset: false,
    },
    {
      id: 2,
      title: "Where Engineering Meets Innovation.",
      description:
        "At Bluejet Engineering, we turn complex ideas into intelligent machines that perform.",
      image: "/engineering-and-inov.png",
      imageAlt: "Engineering and innovation",
      offset: true,
    },
  ];

  return (
    <section className="relative w-full max-w-[1357px] mx-auto py-16 px-4 md:px-8">
      <div className="relative w-full max-w-[1341px] mx-auto">
        <div className="mb-8 md:mb-0 md:w-[467px] font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[22px] leading-[33px]">
          Trusted by industry leaders for quality, speed, and innovation.
        </div>

        <div className="relative w-full">
          <h2 className="mb-10 md:w-[424px] font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[40px] leading-[72.4px]">
            Bluejet Engineering
            <br />
            Precision You Can Trust
          </h2>

          <div className="flex flex-col md:flex-row gap-8 relative">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative ${card.offset ? "md:mt-20" : ""}`}
              >
                <Card className="relative w-full md:w-[414px] rounded-[50px] shadow-[2px_2px_46px_-13px_#00000080]">
                  <CardContent className="p-8">
                    <div className="w-[111px] h-[107px] rounded-[55.5px/53.5px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)] mb-4"></div>

                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-xl leading-[30.4px] mb-4 max-w-[223px]">
                      {card.title}
                    </h3>

                    <p className="font-['Poppins',Helvetica] font-light text-[#4c4c4c] text-[22px] leading-[33px] mb-8 max-w-[369px]">
                      {card.description}
                    </p>

                    <div className="flex items-center">
                      <span className="font-['Poppins',Helvetica] font-normal text-[#191f85] text-[22px] leading-[33px] mr-4">
                        Learn more
                      </span>
                      <ArrowRightIcon className="w-[31px] h-[15px] text-[#191f85]" />
                    </div>
                  </CardContent>
                </Card>

                <img
                  className={`absolute w-[348px] h-[400px] ${index === 0 ? "top-[-100px] right-[-50px]" : "top-[-15px] right-[-50px]"} object-cover z-10`}
                  alt={card.imageAlt}
                  src={card.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
