import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapWrapperByAnima = (): JSX.Element => {
  const leftFeatures = [
    "All Basic features",
    "8 electrovalve control",
    "Multi-zone irrigation",
    "Solar-powered compatibility",
    "Solar-powered system",
    "Cloud data backup"
  ];

  return (
    <>
      {/* First Card (Blue Gradient) */}
      <div className="flex-1 min-w-[300px] max-w-[447px] mx-4">
        <Card className="w-full h-full rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040] [background:linear-gradient(216deg,rgba(0,0,0,1)_0%,rgba(43,52,228,1)_100%)]">
          <CardContent className="p-8 h-full flex flex-col">
            <div className="flex flex-col space-y-6 flex-grow">
              <div className="flex flex-col space-y-4">
                <Badge className="w-[77px] h-[29px] bg-white text-black rounded-[525px] border border-solid border-[#b9b9b9] flex items-center justify-center">
                  <span className="font-bold text-[15px]">Pro</span>
                </Badge>

                <h2 className="font-bold text-white text-2xl">
                  Advanced &amp; Connected
                </h2>
              </div>

              <Separator className="bg-white/50 h-px" />

              <div className="space-y-4 flex-grow">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-3 h-3 text-white" />
                    <span className="font-normal text-white text-xl leading-[23.9px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-auto">
                <Button
                  variant="default"
                  className="rounded-[70px] bg-white text-black hover:bg-white/90"
                >
                  <span className="font-semibold text-sm [font-family:'Poppins',Helvetica]">Learn more</span>
                  <img
                    className="w-3.5 h-[9px] ml-2"
                    alt="Arrow"
                    src="/arrow-5.svg"
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Card (Gray Gradient) */}
      <div className="flex-1 min-w-[300px] max-w-[447px] mx-4">
        <Card className="w-full h-full rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040] [background:linear-gradient(216deg,#979797_0%,#F1F1F1_100%)]">
          <CardContent className="p-8 h-full flex flex-col">
            <div className="flex flex-col space-y-8 flex-grow">
              <div className="flex flex-col space-y-4">
                <Badge className="w-[77px] h-[29px] bg-white text-black rounded-[525px] border border-solid border-[#b9b9b9] flex items-center justify-center">
                  <span className="font-bold text-[15px]">Pro</span>
                </Badge>

                <h2 className="font-bold text-black text-2xl">
                  Efficient & Stylish
                </h2>
              </div>

              <Separator className="bg-black/30 h-px" />

              <div className="space-y-4 flex-grow">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-3 h-3 text-black" />
                    <span className="font-normal text-black text-xl leading-[23.9px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-auto">
                <Button
                  variant="default"
                  className="rounded-[70px] bg-white text-black hover:bg-white/90"
                >
                  <span className="font-semibold text-sm [font-family:'Poppins',Helvetica]">Learn more</span>
                  <img
                    className="w-3.5 h-[9px] ml-2"
                    alt="Arrow"
                    src="/arrow-5.svg"
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};