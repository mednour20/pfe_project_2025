import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Domains", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Features data
  const features = [
    {
      title: "Efficient Water Management",
      description: "Precise irrigation, zero waste",
      icon: "/Water.png",
      iconAlt: "Water",
      iconWidth: "w-8",
      iconHeight: "h-[42px]",
    },
    {
      title: "Solar-Powered Autonomy",
      description: "Runs off-grid, eco-friendly energy",
      icon: "/Battery.png",
      iconAlt: "Battery",
      iconWidth: "w-[34px]",
      iconHeight: "h-[49px]",
    },
    {
      title: "Smart Remote Control",
      description: "Monitor and manage via the mobile-app",
      icon: "/hand-with-smartphone.png",
      iconAlt: "Hand with smartphone",
      iconWidth: "w-12",
      iconHeight: "h-12",
    },
    {
      title: "Boosted Crop Productivity",
      description: "Healthier plants, higher yields",
      icon: "/Plant.png",
      iconAlt: "Plant",
      iconWidth: "w-[45px]",
      iconHeight: "h-11",
    },
  ];

  // Benefits data
  const benefits = [
    "Up to 80% less water used",
    "Mobile app control, remote access",
    "Automated, AI-optimized scheduling",
    "Solar-powered, energy-efficient",
    "Real-time sensor data and alerts",
    "Low-maintenance, smart system",
    "Promotes sustainable farming",
    "Stable moisture = healthier crops",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full h-[570px] bg-[url(/Rectangle-176.png)] bg-cover bg-[50%_50%]">
          <div className="absolute inset-0 [background:linear-gradient(255deg,rgba(43,52,228,0)_0%,rgba(0,9,184,1)_100%)]" />

          <div className="relative z-10 w-full max-w-[958px] mx-auto pt-14 px-[82px] ml-8">
          <div className="flex justify-between items-center ml-[-40px]">
  <img
    className="w-[203px] h-[52px]"
    alt="Logo blue JET"
    src="/logo-blue-jet-whiteeee-1.png"
  />

  {/* Updated Navigation Menu */}
  <div className="flex space-x-[100px] ml-32 mr-32">
    {navItems.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="font-['Poppins',Helvetica] font-bold text-white text-base relative group"
      >
        {item.label}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </div>

  {/* Language Selector - Fixed version */}
  <div className="flex items-center ml-0">
    <div className="w-[55px] h-[37px] flex items-center justify-center overflow-hidden">
      <img
        className="min-w-[50px] min-h-[full] object-cover"
        alt="England flag"
        src="/england.png"
      />
    </div>
    <img
      className="w-[11px] h-[9px] ml-3"
      alt="Polygon"
      src="/polygon-5.svg"
    />
  </div>
</div>

            <div className="mt-[145px] ml-[-45px]">
              <h1 className="font-semibold text-white text-[80px] text-left tracking-[3.20px] leading-[113.6px] [font-family:'Poppins',Helvetica]">
                ERWINI
              </h1>
              <p className="font-light text-white text-xl text-left tracking-[1.28px] leading-[45.4px] [font-family:'Poppins',Helvetica]">
                Smart Irrigation Solutions for a Greener and More Sustainable Future
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        

        {/* Mobile App Showcase */}
        <section className="relative w-full mt-[109px] flex">
          <div className="w-[452px] h-[797px] ml-[111px] relative mt-[50px]">
            <div className="absolute w-[286px] h-[593px] top-[204px] left-[156px]">
              <div className="relative w-[249px] h-[593px] left-[18px] bg-[url(/iphone-12-pro.png)] bg-[100%_100%]">
                <img
                  className="absolute w-[215px] h-[569px] -top-1 left-[9px]"
                  alt="Screen iphone pro"
                  src="/screen-iphone-12-pro.png"
                />
              </div>
            </div>

            <div className="absolute w-[345px] h-[714px] top-0 left-0">
              <div className="relative w-[300px] h-[714px] -left-[52px] bg-[url(/iphone-12-pro-1.png)] bg-[100%_100%]">
                <img
                  className="absolute w-[255px] h-[569px] top-3.5 left-[30px]"
                  alt="Screen iphone pro"
                  src="/screen-iphone-12-pro-1.png"
                />
              </div>
            </div>
          </div>

          <div className="ml-[149px] max-w-[575px]">
            <GroupWrapperByAnima />
            <p className="mt-[4px] font-normal text-black text-xl text-justify leading-[21.9px] [font-family:'Poppins',Helvetica]">
              ERWINI is an intelligent, solar-powered irrigation system that
              helps farmers optimize water usage and boost crop productivity.
              Powered by IoT and AI, it enables real-time monitoring and remote
              control through a mobile app.
            </p>

            <div className="mt-[62px]">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start mb-[59px] last:mb-0"
                    >
                      <img
                        className={`${feature.iconWidth} ${feature.iconHeight} mr-3`}
                        alt={feature.iconAlt}
                        src={feature.icon}
                      />
                      <div>
                        <h3 className="font-semibold text-black text-[15px] leading-[21.3px] [font-family:'Poppins',Helvetica]">
                          {feature.title}
                        </h3>
                        <p className="font-light text-black text-[13px] leading-[18.5px] [font-family:'Poppins',Helvetica]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile App Features Section */}
        <section className="w-full mt-[184px]">
          <h2 className="font-semibold text-black text-[32px] text-center leading-[45.4px] [font-family:'Poppins',Helvetica]">
            Mobile App features
          </h2>

          <div className="flex mt-[100px]">
            <div className="w-[725px] ml-24 font-normal text-black text-xl text-justify leading-[28.4px] [font-family:'Poppins',Helvetica] mt-[50px]">
              The ERWINI mobile app lets you monitor, control, and optimize your
              irrigation system in real time. Powered by live sensor data, it
              helps you save water, boost crop yield, and manage your fields
              remotely all from your phone.
            </div>

            <div className="w-[1077px] h-[396px] relative ml-auto">
              <img
                className="absolute w-[1010px] h-[796px] top-0 left-[197px]"
                alt="Vector"
                src="/vector-7.png"
              />

              <div className="absolute w-[244px] h-[506px] top-[219px] left-[172px] rotate-[-18deg]">
                <div className="relative w-[527px] h-[636px] top-[-65px] left-[-141px]">
                  <img
                    className="absolute w-[407px] h-[566px] top-[25px] left-[75px] rotate-[18deg]"
                    alt="Iphone pro"
                    src="/screen-iphone-12-pro-3.png"
                  />
                  <img
                    className="absolute w-[376px] h-[599px] -top-[18px] left-[287px] rotate-[18deg]"
                    alt="Screen iphone pro"
                    src="/screen-iphone-12-pro-2.png"
                  />
                </div>
              </div>

              <div className="absolute w-[262px] h-[542px] top-[51px] left-[196px] rotate-[-11deg]">
                <div className="relative w-[456px] h-[623px] -top-10 left-[-97px]">
                </div>
              </div>
            </div>
          </div>
        </section>

        <DivWrapperByAnima />

        {/* ERWINI Packages Section */}
        <section className="w-full mt-[120px] text-center">
          <div className="mx-auto w-[228px]">
          <h2 className="text-[#2B34E4] font-semibold text-[64px] leading-normal [font-family:'Poppins',Helvetica]">
              ERWINI
            </h2>
            <p className="mt-[5px] font-semibold text-black text-2xl leading-[normal] [font-family:'Poppins',Helvetica]">
              Packages
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch px-4 py-8 gap-8">
  <OverlapGroupWrapperByAnima />
  <OverlapWrapperByAnima />
</div>
          
        </section>

        {/* Comparison Section */}
        <section className="w-full mt-[120px] mb-[120px]">
          <div className="mx-auto w-[1210px] h-[568px] relative">
            <div className="absolute w-[746px] h-[568px] top-0 left-0 rounded-[25px] [background:linear-gradient(229deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)]" />
            <div className="absolute w-[223px] h-[568px] top-0 left-0 bg-white rounded-[25px] shadow-[4px_0px_45.5px_-14px_#00000040]" />
            <DivByAnima />

            <Card className="absolute w-[549px] h-[568px] top-0 left-[661px] rounded-[25px] shadow-[0px_0px_56.9px_11px_#00000040] [background:linear-gradient(148deg,rgba(42,51,228,1)_0%,rgba(2,7,113,1)_100%)] border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-center text-2xl leading-[normal] [font-family:'Inter',Helvetica]">
                  With ERWINI
                </h3>

                <Separator className="my-4 bg-white/50" />

                <div className="flex flex-col space-y-[21px]">
                  {benefits.map((benefit, index) => (
                    <React.Fragment key={index}>
                      <p className="font-medium text-white text-base leading-[normal] [font-family:'Inter',Helvetica]">
                        {benefit}
                      </p>
                      {index < benefits.length - 1 && (
                        <Separator className="bg-white/50" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <GroupByAnima />
      </div>
    </div>
  );
};