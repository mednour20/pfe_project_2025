import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapGroupWrapperByAnima = (): JSX.Element => {
  const features = [
    "2 motor control",
    "Motion alert system",
    "Power usage tracking",
    "App-based access",
    "Real-time monitoring",
    "Basic automation",
  ];

  return (
    <div className="flex-1 min-w-[300px] max-w-[447px] mx-4">
      <Card className="w-full h-full rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040] bg-black text-white">
        <CardContent className="p-8 h-full flex flex-col">
          <div className="flex flex-col space-y-6 flex-grow">
            {/* Badge */}
            <div className="w-[77px] h-[29px] bg-white rounded-[525px] border border-solid border-[#b9b9b9] flex items-center justify-center">
              <span className="font-bold text-black text-[15px]">Basic</span>
            </div>

            {/* Title */}
            <h2 className="font-bold text-2xl [font-family:'Inter',Helvetica]">
              Essential &amp; Secure
            </h2>

            {/* Divider */}
            <Separator className="bg-white/50 my-2" />

            {/* Features list */}
            <div className="space-y-4 mt-4 flex-grow">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl leading-[23.9px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Learn more button */}
            <div className="flex justify-center mt-auto">
              <Button
                variant="outline"
                className="rounded-[70px] bg-white text-black font-semibold [font-family:'Poppins',Helvetica] text-sm"
              >
                Learn more
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
  );
};