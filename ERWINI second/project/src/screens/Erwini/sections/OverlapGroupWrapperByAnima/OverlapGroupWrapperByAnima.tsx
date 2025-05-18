import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapGroupWrapperByAnima = (): JSX.Element => {
  // Features list data for mapping
  const features = [
    "All Basic features",
    "8 electrovalve control",
    "Multi-zone irrigation",
    "Solar-powered compatibility",
    "Solar-powered system",
    "Cloud data backup",
  ];

  return (
    <div className="w-full max-w-[433px] mx-auto my-8">
      <Card className="relative w-full max-w-[417px] mx-auto rounded-[25px] bg-black text-white shadow-[0px_0px_26.1px_4px_#00000040]">
        <CardContent className="p-0">
          <div className="p-7 space-y-4">
            {/* Pro Badge */}
            <Badge className="bg-white text-black rounded-[525px] border border-solid border-[#b9b9b9] px-2.5 py-1 h-[29px] w-[77px]">
              <span className="w-full [font-family:'Inter',Helvetica] font-bold text-[15px] text-center">
                Pro
              </span>
            </Badge>

            {/* Title */}
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[0] leading-normal">
              Advanced &amp; Connected
            </h3>

            {/* Separator */}
            <Separator className="bg-white/50 h-px my-2" />

            {/* Features List */}
            <ul className="space-y-[39px] pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-5">
                  <img
                    className="w-3 h-2.5 mt-1.5"
                    alt="Done"
                    src={`/done-${index + 6}.png`}
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[23.9px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <div className="flex justify-center mt-6">
              <Button
                variant="outline"
                className="relative w-[142px] h-[31px] rounded-[70px] bg-white text-black border-none"
              >
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-sm text-center tracking-[0] leading-[21px]">
                  Learn more
                </span>
                <img
                  className="absolute w-3.5 h-[9px] right-4"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
