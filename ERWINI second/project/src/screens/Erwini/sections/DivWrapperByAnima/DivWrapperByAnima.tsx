import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Real-Time Alerts",
      description:
        "Get instant notifications for system status, weather changes, or irrigation cycles.",
      icon: "/notification.png",
      alt: "Notification",
    },
    {
      id: 2,
      title: "Live Sensor Data",
      description:
        "Monitor soil moisture, temperature, and humidity from anywhere.",
      icon: "/weather.png",
      alt: "Weather",
    },
    {
      id: 3,
      title: "Smart Scheduling",
      description: "Monitor and manage via the mobile-app",
      icon: "/schedule.png",
      alt: "Schedule",
    },
    {
      id: 4,
      title: "Remote Control",
      description:
        "Start, stop, or adjust irrigation with one tap—no need to be on-site.",
      icon: "/globe-showing-americas.png",
      alt: "Globe showing",
    },
    {
      id: 5,
      title: "Performance Dashboard",
      description:
        "Visual reports on water usage, savings, crop health trends, and more.",
      icon: "/statistics.png",
      alt: "Statistics",
    },
  ];

  return (
    <section className="w-full max-w-[601px] py-8 mx-auto">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <ul className="space-y-8">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] leading-[21.3px] [font-family:'Poppins',Helvetica] text-black">
                    {feature.title}
                  </h3>
                  <p className="font-light text-[13px] leading-[18.5px] [font-family:'Poppins',Helvetica] text-black mt-1">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
