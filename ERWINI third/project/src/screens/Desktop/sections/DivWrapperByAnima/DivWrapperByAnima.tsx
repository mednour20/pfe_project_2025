import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const DivWrapperByAnima = (): JSX.Element => {
  const features: FeatureItem[] = [
    {
      title: "Real-Time Alerts",
      description:
        "Get instant notifications for system status, weather changes, or irrigation cycles.",
      icon: "/Notification.png",
      alt: "Notification",
    },
    {
      title: "Live Sensor Data",
      description:
        "Monitor soil moisture, temperature, and humidity from anywhere.",
      icon: "/Weather.png",
      alt: "Weather",
    },
    {
      title: "Smart Scheduling",
      description: "Monitor and manage via the mobile-app",
      icon: "/schedule.png",
      alt: "Schedule",
    },
    {
      title: "Remote Control",
      description:
        "Start, stop, or adjust irrigation with one tap—no need to be on-site.",
      icon: "/globe-showing-americas.png",
      alt: "Globe showing",
    },
    {
      title: "Performance Dashboard",
      description:
        "Visual reports on water usage, savings, crop health trends, and more.",
      icon: "/statistics.png",
      alt: "Statistics",
    },
  ];

  return (
    <section className="w-full max-w-[600px] py-8 ml-[80px] -mt-[140px]">
      <div className="space-y-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="w-auto h-auto max-w-[54px] max-h-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[15px] leading-[21.3px]">
                    {feature.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-light text-black text-[13px] leading-[18.5px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
