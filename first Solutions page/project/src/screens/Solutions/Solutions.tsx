import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Solutions = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { text: "About", href: "#" },
    { text: "Products", href: "#" },
    { text: "Domains", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "Contact", href: "#" },
  ];

  // Footer links
  const footerLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Domains", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full h-[570px]">
          <img
            className="absolute w-full h-[562px] left-0 object-cover"
            alt="Solutions Hero Background"
            src="/rectangle-176.png"
          />
          <div className="absolute w-full h-[570px] -top-2 left-0 [background:linear-gradient(255deg,rgba(43,52,228,0)_0%,rgba(43,46,255,1)_100%)]" />

          {/* Navigation - Updated to match About page */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[69px] -px-[20px] flex justify-between items-center ml-[70px]">
            <img
              className="w-[241px] h-14 object-cover"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1-1.png"
            />

            <div className="flex space-x-[100px] ml-32 mr-32">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-['Poppins',Helvetica] font-bold text-white text-base relative group"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center p-1 rounded -ml-16">
              <img
                className="w-[52px] h-[26px] mr-12 object-cover"
                alt="England flag"
                src="/england-flag-3.png"
              />
              <img
                className="w-[11px] h-[9px] -translate-x-8"
                alt="Polygon"
                src="/polygon-6.svg"
              />
            </div>
          </nav>

          {/* Hero content */}
          <div className="absolute top-[219px] left-[72px] flex flex-col items-start">
            <h1 className="w-[411px] font-semibold text-[80px] text-center text-white tracking-[3.20px] leading-[113.6px] whitespace-nowrap -mx-[15px] font-['Poppins',Helvetica]">
              Solutions
            </h1>
            <p className="mt-4 font-normal text-white text-xl text-center tracking-[0.80px] leading-[28.4px] whitespace-nowrap font-['Poppins',Helvetica] -mx-[10px]">
              From ERWINI to custom PCB cards, our smart solutions are built to
              solve real challenges with efficiency.
            </p>
          </div>
        </section>

        {/* ERWINI Solution Section */}
        <section className="relative mt-[50px] flex flex-row">
          <div className="ml-[55px] w-[505px] mt-[80px]">
            <p className="font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              Our principle solution
            </p>
            <h2 className="font-bold text-[#2b34e4] text-[42px] leading-[69.7px] mt-4">
              ERWINI: Smarter Irrigation, Better Yields
            </h2>
            <p className="font-normal text-[#4c4c4c] text-[22px] text-justify leading-[37.0px] mt-6">
              ERWINI is our intelligent irrigation solution that helps farmers
              save water, boost productivity, and take control of their fields
              with smart, automated precision.
            </p>

            <Button className="mt-10 w-[223px] h-12 rounded-[70px] bg-[#2b34e4] hover:bg-[#2229b5] flex items-center justify-between px-3">
              <span className="font-semibold text-white text-[17px] text-center leading-[25.5px]">
                Experience ERWINI
              </span>
              <div className="w-[30px] h-[29px] bg-white rounded-[15px/14.5px] flex items-center justify-center">
                <img
                  className="w-[17px] h-[9px]"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </div>
            </Button>
          </div>

          <div className="relative w-[601px] h-[675px] ml-[150px]">
            <img
              className="absolute w-[548px] h-[675px] top-0 left-[39px]"
              alt="ERWINI Solution"
              src="/rectangle-241.png"
            />

            <Card className="absolute w-[339px] h-[89px] top-[78px] left-[262px] rounded-[25px] shadow-[0px_0px_17.9px_-2px_#00000040] bg-white">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <p className="font-semibold text-black text-2xl text-center leading-[43.4px]">
                  Automate. Monitor. Save.
                </p>
              </CardContent>
            </Card>

            <Card className="absolute w-[186px] h-[81px] top-[519px] left-0 rounded-[25px] shadow-[0px_0px_17.9px_-2px_#00000040] bg-white">
              <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                <p className="font-semibold text-[#8cc549] text-[32px] text-center leading-[45px]">
                  90 +
                </p>
                <p className="font-semibold text-black text-2xl text-center leading-[43.4px] -mt-1">
                  Clients
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PCB Cards Solution Section */}
        <section className="relative mt-[100px] flex flex-row">
          <div className="relative w-[663px] h-[438px] ml-[35px]">
            <img
              className="absolute w-[565px] h-[430px] top-0 left-[18px] object-cover rounded-[25px]"
              alt="PCB Card"
              src="/rectangle-244.png"
            />

            <div className="absolute w-[403px] h-[82px] top-[356px] left-0 rounded-[25px] shadow-[0px_0px_17.9px_#00000040] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(2,7,113,1)_100%)] flex items-center">
              <p className="ml-[33px] font-semibold text-white text-[22px] leading-[37.0px]">
                High-Quality PCB Prototyping
              </p>
            </div>
          </div>

          <div className="ml-[34px] w-[593px]">
            <p className="font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              Our pcb cards solution
            </p>
            <h2 className="font-bold text-[#2b34e4] text-[42px] leading-[76.0px] mt-4">
              Powering Innovation, One Circuit at a Time
            </h2>
            <p className="font-normal text-[#4c4c4c] text-[22px] text-justify leading-[37.0px] mt-6">
              At BlueJet Engineering, we create high-performance PCBs that power innovation. From prototype to scale, 
              our boards are built to elevate every device.
            </p>

            <Button className="mt-10 w-[223px] h-12 rounded-[70px] bg-[#2b34e4] hover:bg-[#2229b5] flex items-center justify-between px-3">
              <span className="font-semibold text-white text-[17px] text-center leading-[25.5px]">
                Discover Our PCBs
              </span>
              <div className="w-[30px] h-[29px] bg-white rounded-[15px/14.5px] flex items-center justify-center">
                <img
                  className="w-[17px] h-[9px]"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </div>
            </Button>
          </div>
        </section>

        {/* Footer Section - Updated to match About page */}
        <footer className="relative w-full h-[880px] bg-[url(/vector-3.png)] bg-cover bg-no-repeat bg-center mt-40">
          <div className="pt-[233px] px-[42px]">
            <div className="flex justify-between">
              <div className="max-w-md">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
                  Join our newsletter to <br />
                  keep up do date with us !
                </h3>
              </div>

              <div className="flex space-x-4">
                <div className="relative">
                  <Input
                    className="w-[425px] h-[60px] bg-white rounded-[40px] border-2 border-solid border-[#888888] shadow-[5px_4px_5.8px_#00000040] pl-8 text-xl"
                    placeholder="Enter your email"
                  />
                </div>

                <Button className="w-[176px] h-[60px] bg-[#2cc689] rounded-[40px] font-['Poppins',Helvetica] font-semibold text-white text-xl">
                  Subscribe
                </Button>
              </div>
            </div>

            <Separator className="my-16 border-white" />

            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <img
                  className="w-[299px] h-[70px] object-cover mb-8"
                  alt="Logo blue JET"
                  src="/logo-blue-jet-whiteeee-1-1.png" 
                />

                <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[28.4px] mb-8">
                  Innovation gets real with blueJet Engineering !
                </p>

                <div className="mt-4">
                  <img
                    className="w-[209px] h-[34px] object-cover"
                    alt="Social media icons"
                    src="/icons-sm-1.png"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px] mb-4">
                  Contact
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                      Address
                    </h5>
                    <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[19.2px]">
                      Office N°7, Cyber Parc Dgueche, Tunisia
                    </p>
                  </div>

                  <div>
                    <h5 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                      Contact
                    </h5>
                    <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[25.5px]">
                      +216 94 632 228
                    </p>
                  </div>

                  <div>
                    <h5 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                      Email
                    </h5>
                    <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[19.2px]">
                      contact-@bluejetengineering.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px] mb-4">
                  Links
                </h4>

                <ul className="space-y-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <img
                  className="w-[395px] h-[274px]"
                  alt="Capture dcran"
                  src="/capture-d--cran--427--1.png"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};