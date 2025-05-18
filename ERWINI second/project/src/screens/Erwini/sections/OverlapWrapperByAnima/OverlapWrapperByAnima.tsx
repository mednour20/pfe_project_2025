import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Features list for the card
  const features = [
    "2 motor control",
    "Motion alert system",
    "Power usage tracking",
    "App-based access",
    "Real-time monitoring",
    "Basic automation",
  ];

  return (
    <section className="relative w-full max-w-[433px] mx-auto my-8">
      <Card className="relative w-full max-w-[417px] mx-auto rounded-[25px] bg-black text-white shadow-[0px_0px_26.1px_4px_#00000040]">
        <CardContent className="p-7">
          <Badge className="bg-white text-black border-[#b9b9b9] rounded-[525px] px-2.5 py-1 w-auto h-auto">
            <span className="font-bold text-[15px] [font-family:'Inter',Helvetica]">
              Basic
            </span>
          </Badge>

          <h2 className="mt-6 mb-4 font-bold text-2xl [font-family:'Inter',Helvetica]">
            Essential &amp; Secure
          </h2>

          <Separator className="my-4 bg-white/50" />

          <ul className="space-y-[39px] mt-[38px]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-5">
                <span className="flex-shrink-0 w-3 h-2.5">
                  <CheckIcon className="w-3 h-2.5 text-white" />
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-xl leading-[23.9px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="rounded-[70px] bg-white text-black border-none hover:bg-white/90 hover:text-black"
            >
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-sm">
                Learn more
              </span>
              <span className="ml-2">→</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
