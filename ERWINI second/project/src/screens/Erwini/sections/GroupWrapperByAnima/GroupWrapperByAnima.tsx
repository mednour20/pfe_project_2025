import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[484px] mx-auto py-6">
      <CardContent className="flex flex-col items-center justify-center p-0">
        <h1
          className="w-full font-['Poppins',Helvetica] font-semibold text-[120px] leading-[170.4px] tracking-[0] text-center whitespace-nowrap 
          [background:linear-gradient(125deg,rgba(24,29,126,1)_0%,rgba(43,52,228,1)_100%)] 
          [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
        >
          ERWINI
        </h1>

        <p
          className="w-full max-w-[464px] mt-2 font-['Poppins',Helvetica] font-semibold text-2xl leading-[34.1px] tracking-[0] text-center
          [background:linear-gradient(149deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)]
          [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
        >
          Best way to monitor your irrigation
        </p>
      </CardContent>
    </Card>
  );
};
