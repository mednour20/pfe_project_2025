import React from "react";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";

export const Erwini = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="391:16"
    >
      <div className="bg-white w-full max-w-[1440px] flex flex-col">
        <FrameByAnima />
        <OverlapWrapperByAnima />
        <FrameWrapperByAnima />
        <DivWrapperByAnima />
        <DivByAnima />
        <OverlapGroupWrapperByAnima />
      </div>
    </div>
  );
};
