import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima/GroupWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";

export const Erwini = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Domains", href: "#domains" },
    { label: "Solutions", href: "#solutions" },
    { label: "Contact", href: "#contact" },
  ];

  // ERWINI benefits
  const benefits = [
    {
      title: "Efficient Water Management",
      description: "Precise irrigation, zero waste",
      icon: "/water.png",
      iconAlt: "Water",
      iconWidth: "w-8",
      iconHeight: "h-[42px]",
    },
    {
      title: "Solar-Powered Autonomy",
      description: "Runs off-grid, eco-friendly energy",
      icon: "/battery.png",
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
      icon: "/plant.png",
      iconAlt: "Plant",
      iconWidth: "w-[45px]",
      iconHeight: "h-11",
    },
  ];

  // ERWINI advantages
  const advantages = [
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
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-[1440px] h-[570px] bg-[url(/rectangle-176.png)] bg-cover bg-[50%_50%]">
          <div className="w-full h-full [background:linear-gradient(255deg,rgba(43,52,228,0)_0%,rgba(0,9,184,1)_100%)]">
            <div className="w-[315px] absolute top-[219px] left-[72px] [font-family:'Poppins',Helvetica] text-white text-[80px] tracking-[3.20px] leading-[113.6px] whitespace-nowrap font-semibold text-center">
              ERWINI
            </div>

            <div className="absolute top-[317px] left-[82px] [font-family:'Poppins',Helvetica] font-light text-white text-[32px] text-center tracking-[1.28px] leading-[45.4px] whitespace-nowrap">
              Smart Irrigation for a Sustainable Future
            </div>

            <div className="absolute w-[1069px] h-14 top-[45px] left-20 flex items-center justify-between">
              <img
                className="w-[241px] h-14 object-cover"
                alt="Logo blue JET"
                src="/logo-blue-jet-whiteeee-1-1.png"
              />

              <NavigationMenu className="ml-auto">
                <NavigationMenuList className="flex gap-[145px]">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        href={item.href}
                        className="[font-family:'Poppins',Helvetica] font-bold text-white text-base"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center ml-8">
                <img
                  className="w-[52px] h-[26px] object-cover"
                  alt="England flag"
                  src="/england-flag-3.png"
                />
                <img
                  className="w-[11px] h-[9px] ml-2"
                  alt="Polygon"
                  src="/polygon-6.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Import GroupByAnima section */}
        <GroupByAnima />

        {/* iPhone Showcase Section */}
        <section className="relative w-[512px] h-[797px] top-[679px] left-[111px]">
          <div className="absolute w-[286px] h-[593px] top-[204px] left-[226px]">
            <div className="relative w-[249px] h-[593px] left-[18px] bg-[url(/iphone-12-pro.png)] bg-[100%_100%]">
              <img
                className="absolute w-[215px] h-[569px] top-3 left-[9px]"
                alt="Screen iphone pro"
                src="/screen-iphone-12-pro.svg"
              />
            </div>
          </div>

          <div className="absolute w-[345px] h-[714px] top-0 left-0">
            <div className="relative w-[300px] h-[714px] left-[22px] bg-[url(/iphone-12-pro-1.png)] bg-[100%_100%]">
              <img
                className="absolute w-[260px] h-[685px] top-3.5 left-[30px]"
                alt="Screen iphone pro"
                src="/screen-iphone-12-pro-3.svg"
              />
            </div>
          </div>
        </section>

        {/* Import GroupWrapperByAnima section */}
        <GroupWrapperByAnima />

        {/* Product Description */}
        <section className="absolute w-[575px] top-[903px] left-[772px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-justify tracking-[0] leading-[18.9px]">
          ERWINI is an intelligent, solar-powered irrigation system that helps
          farmers optimize water usage and boost crop productivity. Powered by
          IoT and AI, it enables real-time monitoring and remote control through
          a mobile app.
        </section>

        {/* Mobile App Features Section */}
        <section>
          <h2 className="absolute top-[1584px] left-[555px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[45.4px] whitespace-nowrap">
            Mobile App features
          </h2>

          <div className="absolute w-[655px] top-[1704px] left-24 [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-justify tracking-[0] leading-[28.4px]">
            The ERWINI mobile app lets you monitor, control, and optimize your
            irrigation system in real time. Powered by live sensor data, it
            helps you save water, boost crop yield, and manage your fields
            remotely all from your phone.
          </div>
        </section>

        {/* Benefits Section */}
        <section className="absolute w-[339px] h-[345px] top-[1055px] left-[815px]">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex items-start mb-[59px]"
              style={{ marginTop: index === 0 ? "0" : "" }}
            >
              <img
                className={`${benefit.iconWidth} ${benefit.iconHeight}`}
                alt={benefit.iconAlt}
                src={benefit.icon}
              />
              <div className="ml-2">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[15px] tracking-[0] leading-[21.3px] whitespace-nowrap">
                  {benefit.title}
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-light text-black text-[13px] tracking-[0] leading-[18.5px] whitespace-nowrap mt-1">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Import DivWrapperByAnima section */}
        <DivWrapperByAnima />

        {/* iPhone App Showcase */}
        <section className="absolute w-[1077px] h-[796px] top-[1679px] left-[814px]">
          <img
            className="absolute w-[1010px] h-[796px] top-0 left-[67px]"
            alt="Vector"
            src="/vector-7.svg"
          />

          <div className="absolute w-[244px] h-[506px] top-[219px] left-[72px] rotate-[-18deg]">
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
                src="/screen-iphone-12-pro-1.svg"
              />
            </div>
          </div>
        </section>

        {/* Packages Section Header */}
        <section className="absolute w-[228px] h-[90px] top-[2553px] left-[603px]">
          <div className="top-0 left-0 [background:linear-gradient(120deg,rgba(43,52,228,1)_0%,rgba(2,7,113,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] text-transparent text-[64px] tracking-[0] leading-[normal] absolute font-semibold text-center">
            ERWINI
          </div>

          <div className="absolute top-[61px] left-[59px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal]">
            Packages
          </div>
        </section>

        {/* Import OverlapWrapperByAnima section */}
        <OverlapWrapperByAnima />

        {/* Import OverlapGroupWrapperByAnima section */}
        <OverlapGroupWrapperByAnima />

        {/* Import DivByAnima section */}
        <DivByAnima />

        {/* Comparison Section */}
        <section className="absolute w-[1210px] h-[568px] top-[3538px] left-[117px]">
          <div className="w-[746px] h-[568px] left-0 rounded-[25px] [background:linear-gradient(229deg,rgba(0,0,0,1)_0%,rgba(102,102,102,1)_100%)] absolute top-0" />

          <div className="w-[223px] h-[568px] left-0 bg-white rounded-[25px] shadow-[4px_0px_45.5px_-14px_#00000040] absolute top-0" />

          {/* Import SectionComponentNodeByAnima section */}
          <SectionComponentNodeByAnima />

          <Card className="w-[549px] h-[568px] left-[661px] rounded-[25px] shadow-[0px_0px_56.9px_11px_#00000040] [background:linear-gradient(148deg,rgba(42,51,228,1)_0%,rgba(2,7,113,1)_100%)] absolute top-0 border-none">
            <CardContent className="p-6">
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl mb-4">
                With ERWINI
              </h3>

              <Separator className="w-full mb-4" />

              <div className="flex flex-col space-y-4">
                {advantages.map((advantage, index) => (
                  <React.Fragment key={index}>
                    <div className="[font-family:'Inter',Helvetica] font-medium text-white text-base whitespace-nowrap">
                      {advantage}
                    </div>
                    {index < advantages.length - 1 && (
                      <Separator className="w-full" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
