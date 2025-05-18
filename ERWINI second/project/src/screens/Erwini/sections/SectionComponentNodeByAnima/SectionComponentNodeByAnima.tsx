import React from "react";
import { Separator } from "../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Data for the comparison table
  const comparisonData = [
    {
      feature: "Water Usage",
      withoutErwini: "Often excessive and inconsistent",
    },
    {
      feature: "Control Method",
      withoutErwini: "Manual operation",
    },
    {
      feature: "Irrigation Scheduling",
      withoutErwini: "Fixed or based on guesswork",
    },
    {
      feature: "Energy Source",
      withoutErwini: "Electricity or fuel-based pumps",
    },
    {
      feature: "Monitoring",
      withoutErwini: "No feedback or real-time data",
    },
    {
      feature: "Maintenance",
      withoutErwini: "Regular manual checks required",
    },
    {
      feature: "Environmental Impact",
      withoutErwini: "Risk of water waste and soil damage",
    },
    {
      feature: "Crop Health & Yield",
      withoutErwini: "Inconsistent irrigation affects crop quality",
    },
  ];

  return (
    <div className="w-full max-w-[701px] py-6">
      <Table>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="font-normal text-black text-base">
              Feature
            </TableHead>
            <TableHead className="font-semibold text-white text-2xl">
              Without ERWINI
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow className="border-none">
                <TableCell className="py-3 font-['Inter',Helvetica] font-normal text-black text-base">
                  {row.feature}
                </TableCell>
                <TableCell className="py-3 font-['Inter',Helvetica] font-medium text-white text-base">
                  {row.withoutErwini}
                </TableCell>
              </TableRow>
              {index < comparisonData.length - 1 && (
                <TableRow className="border-none">
                  <TableCell colSpan={2} className="p-0">
                    <Separator className="w-[665px] h-px" />
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
