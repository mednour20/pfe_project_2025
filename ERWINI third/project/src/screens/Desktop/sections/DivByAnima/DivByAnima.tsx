import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const DivByAnima = (): JSX.Element => {
  // Data for the comparison table
  const features = [
    {
      name: "Water Usage",
      withoutErwini: "Often excessive and inconsistent",
    },
    {
      name: "Control Method",
      withoutErwini: "Manual operation",
    },
    {
      name: "Irrigation Scheduling",
      withoutErwini: "Fixed or based on guesswork",
    },
    {
      name: "Energy Source",
      withoutErwini: "Electricity or fuel-based pumps",
    },
    {
      name: "Monitoring",
      withoutErwini: "No feedback or real-time data",
    },
    {
      name: "Maintenance",
      withoutErwini: "Regular manual checks required",
    },
    {
      name: "Environmental Impact",
      withoutErwini: "Risk of water waste and soil damage",
    },
    {
      name: "Crop Health & Yield",
      withoutErwini: "Inconsistent irrigation affects crop quality",
    },
  ];

  return (
    
    <div className="w-full max-w-[701px] py-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-normal text-black text-base">
              Feature
            </TableHead>
            <TableHead className="font-semibold text-white  text-2xl">
              Without ERWINI
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-normal text-black text-base">
                {feature.name}
              </TableCell>
              <TableCell className="font-medium text-white text-base">
                {feature.withoutErwini}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
