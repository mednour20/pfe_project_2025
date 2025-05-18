import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivByAnima = (): JSX.Element => {
  // Basic package features
  const basicFeatures = [
    "2 motor control",
    "Motion alert system",
    "Power usage tracking",
    "App-based access",
    "Real-time monitoring",
    "Basic automation",
  ];

  // Pro package features (left column)
  const proFeaturesLeft = [
    "All Basic features",
    "8 electrovalve control",
    "Supports smart sensors",
    "Multi-zone irrigation",
    "Real-time system alerts",
    "Solar-powered compatibility",
  ];

  // Pro package features (right column)
  const proFeaturesRight = ["Live data tracking", "Cloud data backup"];

  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="[background:linear-gradient(120deg,rgba(43,52,228,1)_0%,rgba(2,7,113,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent text-[64px] font-semibold [font-family:'Inter',Helvetica]">
          ERWINI
        </h2>
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-2xl mt-1">
          Packages
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Basic Package Card */}
        <Card className="w-[447px] h-[499px] rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040] bg-gradient-to-br from-black to-[#2B34E4] text-white">
          <CardContent className="p-0">
            <div className="p-12 pt-14">
              <Badge className="bg-white text-black rounded-[525px] border border-solid border-[#b9b9b9] font-bold text-[15px] px-4 py-1 [font-family:'Inter',Helvetica]">
                Basic
              </Badge>

              <h3 className="mt-10 [font-family:'Inter',Helvetica] font-bold text-white text-2xl">
                Essential &amp; Secure
              </h3>

              <Separator className="my-6 bg-white/30" />

              <ul className="space-y-10">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckIcon className="w-3 h-2.5 text-white" />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center mt-12">
                <Button className="w-36 h-[31px] rounded-[70px] bg-white text-black hover:bg-white/90">
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-sm">
                    Learn more
                  </span>
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

        {/* Pro Package Card */}
        <Card className="w-[704px] h-[499px] rounded-[25px] shadow-[0px_0px_26.1px_4px_#00000040] [background:linear-gradient(216deg,rgba(0,0,0,1)_0%,rgba(43,52,228,1)_100%)] text-white">
          <CardContent className="p-0">
            <div className="p-12 pt-14">
              <Badge className="bg-white text-black rounded-[525px] border border-solid border-[#b9b9b9] font-bold text-[15px] px-4 py-1 [font-family:'Inter',Helvetica]">
                Pro
              </Badge>

              <h3 className="mt-10 [font-family:'Inter',Helvetica] font-bold text-white text-2xl">
                Advanced &amp; Connected
              </h3>

              <Separator className="my-6 bg-white/30" />

              <div className="flex">
                <div className="w-1/2">
                  <ul className="space-y-10">
                    {proFeaturesLeft.map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <CheckIcon className="w-3 h-2.5 text-white" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-1/2">
                  <ul className="space-y-10">
                    {proFeaturesRight.map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <CheckIcon className="w-3 h-2.5 text-white" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xl">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button className="w-36 h-[31px] rounded-[70px] bg-white text-black hover:bg-white/90">
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-sm">
                    Learn more
                  </span>
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
    </section>
  );
};
