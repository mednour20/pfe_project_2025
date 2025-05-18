import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupByAnima = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Domains", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <section className="relative w-full h-[1312px]">
      <div className="relative w-full h-full">
        {/* Background with navigation */}
        <div className="relative w-full h-full">
          <div className="relative w-[1179px] h-[1100px] mt-[212px] mx-auto bg-[url(/vector-2.png)] bg-[100%_100%]">
            <div className="relative flex justify-between items-center w-[1052px] h-14 pt-[49px] pl-[71px]">
              <img
                className="w-[241px] h-14 object-cover"
                alt="Logo blue JET"
                src="/logo-blue-jet-whiteeee-1-1.png"
              />

              <nav className="flex space-x-[149px]">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="font-['Poppins',Helvetica] font-bold text-white text-base"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <img
            className="absolute w-[11px] h-[9px] top-[285px] right-[72px]"
            alt="Polygon"
            src="/polygon-5.svg"
          />
        </div>

        {/* Right side geometric elements */}
        <div className="absolute w-[685px] h-[735px] top-[444px] right-0">
          <div className="relative h-[735px]">
            <img
              className="absolute w-[685px] h-[685px] top-[13px] left-0"
              alt="Mask group"
              src="/mask-group-4.png"
            />

            <img
              className="absolute w-[603px] h-[718px] top-4 left-[68px]"
              alt="Polygon"
              src="/polygon-1.svg"
            />

            <div className="absolute w-[37px] h-[34px] top-[551px] left-[38px] bg-[#2b34e4] rounded-[18.5px/17px]" />
            <div className="absolute w-[37px] h-[34px] top-0 left-[408px] bg-[#2b34e4] rounded-[18.5px/17px]" />
          </div>
        </div>

        {/* Main content */}
        <div className="absolute top-[431px] left-[118px] max-w-[627px]">
          <h1 className="font-['Poppins',Helvetica] font-bold text-white text-8xl tracking-[3.84px] leading-[136.3px]">
            Innovation
            <br />
            gets real
            <br />
            with us.
          </h1>

          <p className="mt-[40px] max-w-[466px] font-['Poppins',Helvetica] font-light text-white text-[22px] leading-[33px]">
            From smart systems to intelligent engineering — we turn big ideas
            into powerful realities.
          </p>

          <Button className="mt-[75px] w-[290px] h-[74px] bg-white rounded-[70px] hover:bg-white/90 group">
            <span className="font-['Poppins',Helvetica] font-semibold text-[#2b34e4] text-2xl leading-9">
              Read more
            </span>
            <span className="ml-[10px] w-[61px] h-[60px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#2b34e4] to-[#181d7e]">
              <ArrowRightIcon className="w-[21px] h-[15px] text-white" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
