import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const PcbCards = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { label: "About", href: "#" },
    { label: "Products", href: "#" },
    { label: "Domains", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Benefits cards data
  const benefitsCards = [
    {
      icon: "/mask-group-2.png",
      title: "Optimized performance",
      description: "Smooth, efficient operation.",
    },
    {
      icon: "/mask-group-3.png",
      title: "Faster Time to Market",
      description: "From idea to launch.",
    },
    {
      icon: "/mask-group-4.png",
      title: "Conscious Manufacturing",
      description: "Smart and sustainable.",
    },
    {
      icon: "/mask-group-5.png",
      title: "Precision Engineering",
      description: "Every detail counts.",
    },
    {
      icon: "/mask-group-6.png",
      title: "Reliable & Durable Design",
      description: "Built to last long.",
    },
    {
      icon: "/mask-group-7.png",
      title: "Custom-Fit for Your Project",
      description: "Designed to your specs.",
    },
  ];

  // Footer links
  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Domains", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Section with updated Navbar */}
        <div className="w-full h-[624px] relative bg-[url(/pcb-card-hero-section-1.png)] bg-cover bg-center">
          {/* Updated Navigation */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[49px] pl-[60px] pr-[60px] flex justify-between items-center mx-auto -ml-4">
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
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center p-1 rounded -ml-16">
              <img
                className="w-[52px] h-[26px] mr-12 object-cover"
                alt="England flag"
                src="/england-flag-4.png"
              />
              <img
                className="w-[11px] h-[9px] -translate-x-8"
                alt="Polygon"
                src="/polygon-5.svg"
              />
            </div>
          </nav>

          <div className="absolute w-[485px] top-[210px] left-[37px] font-['Poppins',Helvetica] font-semibold text-white text-[80px] text-center tracking-[3.20px] leading-[113.6px] whitespace-nowrap">
            PCB Cards
          </div>

          <div className="absolute w-[1285px] top-[333px] left-[54px] font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[0.80px] leading-[28.4px]">
            Discover how our custom PCB solutions power the heart of your
            technology.
          </div>
        </div>

        {/* PCB Design Section */}
        <div className="flex flex-row mt-[131px] px-[58px] gap-[81px]">
          <div className="relative w-[675px] h-[470px]">
            <div className="absolute w-[335px] h-[153px] top-[140px] left-[326px] bg-[#a7b2ab99] rounded-xl" />
            <div className="absolute w-[353px] h-[169px] top-[146px] left-[316px] bg-[#00430e99] rounded-xl" />
            <div className="absolute w-[335px] h-[153px] top-[283px] left-4 bg-[#a8b3ab99] rounded-xl" />
            <div className="absolute w-[353px] h-[169px] top-[290px] left-1.5 bg-[#00430e99] rounded-xl" />
            <img
              className="absolute w-[365px] h-[174px] top-[153px] left-[310px]"
              alt="Mask group"
              src="/mask-group.png"
            />
            <div className="absolute w-[335px] h-[153px] top-0 left-[15px] bg-[#a8b3ab99] rounded-xl" />
            <div className="absolute w-[353px] h-[169px] top-[7px] left-[5px] bg-[#00430e99] rounded-xl" />
            <div className="absolute w-[365px] h-[174px] top-[153px] left-[310px] rounded-xl [background:linear-gradient(180deg,rgba(43,52,228,0.15)_0%,rgba(24,29,126,0.15)_100%)]" />
            <img
              className="absolute w-[365px] h-[174px] top-[13px] left-0"
              alt="Mask group"
              src="/mask-group-1.png"
            />
            <img
              className="absolute w-[365px] h-[174px] top-[297px] left-0"
              alt="Mask group"
              src="/Mask-group-(31).png"
            />
            <div className="absolute w-[365px] h-[174px] top-[13px] left-0 rounded-xl [background:linear-gradient(180deg,rgba(43,52,228,0.15)_0%,rgba(24,29,126,0.15)_100%)]" />
          </div>

          <div className="flex flex-col max-w-[538px] gap-6">
            <h3 className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              Tailored PCB solutions.
            </h3>
            <h2 className="font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[42px] leading-[70.6px]">
              Discover Our PCB Design &amp; Prototyping <br/>Solution
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[22px] leading-[37.0px]">
              At BlueJet Engineering, we design custom, high-performance PCBs
              that bring your ideas to life. From concept to production, we
              deliver precise and reliable solutions that help your tech stand
              out.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative mt-[146px] w-full h-[990px]">
          <img
            className="absolute w-full h-full object-cover"
            alt="Pexels tanfeez"
            src="/pexels-tanfeez-10699354-1.png"
          />
          <div className="absolute w-full h-full [background:linear-gradient(180deg,rgba(43,52,228,0.65)_0%,rgba(24,29,126,0.65)_100%)]" />

          <div className="relative z-10 pt-[60px] flex flex-col items-center">
            <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[72.4px] mb-[85px]">
              Why Choose Our PCB Solutions?
            </h2>

            <div className="grid grid-cols-3 gap-x-[191px] gap-y-[84px] px-[95px]">
              {benefitsCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[293px] h-[290px] bg-white rounded-[30px]"
                >
                  <CardContent className="flex flex-col items-center pt-[43px]">
                    <div className="w-[122px] h-[122px] rounded-[61px] [background:linear-gradient(180deg,rgba(43,52,228,1)_0%,rgba(24,29,126,1)_100%)] flex items-center justify-center mb-[43px]">
                      <img
                        className="w-[72px] h-[72px]"
                        alt={card.title}
                        src={card.icon}
                      />
                    </div>
                    <h3 className="font-['Poppins',Helvetica] font-bold text-[#4c4c4c] text-[17px] mb-[10px]">
                      {card.title}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[15px] text-center">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="relative w-[1360px] h-[880px] bg-[url(/vector-3.png)] bg-cover bg-no-repeat bg-center mt-40">
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
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <img
          className="w-[395px] h-[274px]"
          alt="Company screenshot"
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