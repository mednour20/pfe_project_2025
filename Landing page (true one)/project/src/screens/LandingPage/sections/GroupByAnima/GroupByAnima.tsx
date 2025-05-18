import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupByAnima = (): JSX.Element => {
  const navItems = [
    { label: "About", position: "left-0" },
    { label: "Products", position: "left-28" },       // Reduced from left-36
    { label: "Domains", position: "left-[210px]" },  // Reduced from left-[294px]
    { label: "Solutions", position: "left-[340px]" }, // Reduced from left-[458px]
    { label: "Contact", position: "left-[460px]" },   // Reduced from left-[617px]
  ];

  return (
    <section className="relative w-full h-[1312px]">
      <div className="relative w-full h-full max-w-[1440px] mx-auto">
        <div className="relative w-full h-full">
          <div className="relative w-[1400px] h-[1320px] mt-[212px] mx-auto bg-[url(/vector-2.png)] bg-cover bg-no-repeat bg-[position:-210px_-10px]">
            <div className="relative w-full max-w-[1052px] h-14 pt-[55px] px-[71px]">
              <img
                className="w-[220px] h-13 object-cover"
                alt="Logo blue JET"
                src="/logo-blue-jet-whiteeee-1-1.png"
              />

              <nav className="absolute w-[510px] h-6 top-[68px] left-[390px]"> {/* Reduced width */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`absolute top-0 ${item.position} font-['Poppins',Helvetica] font-bold text-white text-base p-0 text-[14px] relative group`}
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <img
            className="absolute w-[11px] h-[9px] top-[78px] right-[72px]"
            alt="Polygon"
            src="/polygon-5.svg"
          />
        </div>

        {/* Rest of your content remains unchanged */}
        <div className="absolute w-[685px] h-[735px] top-[444px] right-0">
          <div className="relative h-[735px]">
            <img
              className="absolute w-[635px] h-[655px] top-[-173px] left-[-20px]"
              alt="Mask group"
              src="/mask-group-4.png"
            />
          </div>
        </div>

        <div className="absolute w-[627px] top-[240px] left-[80px] font-['Poppins',Helvetica] font-bold text-white text-[92px] tracking-[6px] leading-[136.3px]">
          Innovation
          <br />
          gets real
          <br />
          with us.
        </div>

        <div className="absolute w-[466px] top-[700px] left-[80px] font-['Poppins',Helvetica] font-light text-white text-[21px] tracking-[1px] leading-[33px]">
          From smart systems to intelligent engineering — we turn big ideas into
          powerful realities.
        </div>

        <Button className="group absolute h-[60px] top-[860px] left-[80px] bg-white text-[#2b34e4] hover:bg-white/90 rounded-[70px] px-[40px] py-0 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <span className="font-['Poppins',Helvetica] font-semibold text-xl leading-7">
            Read more
          </span>
          <div className="ml-5 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#2b34e4] to-[#181d7e] transition-all duration-300 group-hover:ml-6 group-hover:scale-110">
            <ArrowRightIcon className="w-[20px] h-[15px] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105" />
          </div>
        </Button>
      </div>
    </section>
  );
};