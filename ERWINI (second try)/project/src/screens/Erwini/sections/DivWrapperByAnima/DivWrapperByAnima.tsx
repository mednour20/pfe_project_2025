import React from "react";

export const DivWrapperByAnima = (): JSX.Element => {
  // App features data for mapping
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
    <section className="w-full max-w-[1344px] mx-auto py-16 px-6">
      <h2 className="text-center text-[32px] font-semibold [font-family:'Poppins',Helvetica] text-black leading-[45.4px] mb-16">
        Mobile App features
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <p className="text-xl font-normal [font-family:'Poppins',Helvetica] text-black text-justify leading-[28.4px] mb-8">
            The ERWINI mobile app lets you monitor, control, and optimize your
            irrigation system in real time. Powered by live sensor data, it
            helps you save water, boost crop yield, and manage your fields
            remotely all from your phone.
          </p>

          <div className="space-y-12 mt-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="w-auto h-auto max-w-[54px] max-h-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[15px] leading-[21.3px]">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-black text-[13px] leading-[18.5px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[803px]">
          <img
            className="absolute w-[557px] h-[803px] right-0 top-0"
            alt="Vector"
            src="/vector-7.svg"
          />

          <div className="absolute w-[244px] h-[506px] top-[218px] left-[72px] rotate-[-18deg]">
            <div className="relative w-[527px] h-[636px] top-[-65px] left-[-141px]">
              <img
                className="absolute w-[377px] h-[546px] top-[45px] left-[75px] rotate-[18deg]"
                alt="Iphone pro"
                src="/iphone-12-pro-2.png"
              />
              <img
                className="absolute w-[346px] h-[519px] top-[58px] left-[87px] rotate-[18deg]"
                alt="Screen iphone pro"
                src="/screen-iphone-12-pro-2.svg"
              />
            </div>
          </div>

          <div className="absolute w-[262px] h-[542px] top-[51px] left-[196px] rotate-[-11deg]">
            <div className="relative w-[456px] h-[623px] -top-10 left-[-97px]">
              <img
                className="absolute w-[355px] h-[565px] top-[29px] left-[51px] rotate-[11deg]"
                alt="Iphone pro"
                src="/iphone-12-pro-3.png"
              />
              <img
                className="absolute w-[325px] h-[539px] top-[42px] left-[66px] rotate-[11deg]"
                alt="Screen iphone pro"
                src="/screen-iphone-12-pro.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
