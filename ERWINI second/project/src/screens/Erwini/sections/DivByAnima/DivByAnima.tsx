import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivByAnima = (): JSX.Element => {
  // Features list data
  const features = [
    "All Pro features",
    "AI integration",
    "Supports smart sensors",
    "Predictive alerts",
    "System adaptation",
    "Data analysis",
  ];

  return (
    <div className="w-full max-w-[433px] py-8">
      <Card className="relative w-full max-w-[417px] rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040]">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="self-start">
              <Badge className="bg-white text-black border border-solid border-[#b9b9b9] rounded-[525px] px-2.5 py-1">
                <span className="font-bold text-[15px]">Pro+</span>
              </Badge>
            </div>

            <h2 className="w-full text-center font-bold text-2xl">
              Intelligent &amp; Autonomous
            </h2>

            <Separator className="w-full" />

            <div className="w-full space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckIcon className="w-3 h-2.5 text-black" />
                  <span className="font-normal text-xl leading-[23.9px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="mt-4 font-semibold text-sm">
              Learn more
              <img
                className="w-3.5 h-[9px] ml-2"
                alt="Arrow"
                src="/arrow-5.svg"
              />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
