import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FrameByAnima = (): JSX.Element => {
  // Footer navigation links data
  const navigationLinks = [
    { title: "Home" },
    { title: "About" },
    { title: "Domains" },
    { title: "Solutions" },
    { title: "Contact" },
  ];

  // Contact information data
  const contactInfo = [
    { title: "Address", content: "Office N°7, Cyber Parc Dgueche, Tunisia" },
    { title: "Contact", content: "+216 94 632 228" },
    { title: "Email", content: "contact-@bluejetengineering.com" },
  ];

  return (
    <footer className="relative w-full py-16 bg-[url(/vector-3.svg)] bg-cover">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
              Join our newsletter to <br />
              keep up do date with us !
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Card className="bg-white rounded-[40px] border-2 border-solid border-[#888888] shadow-[5px_4px_5.8px_#00000040] p-0">
              <Input
                className="h-[70px] px-8 font-['Poppins',Helvetica] font-light text-[#bdc9cd] text-xl rounded-[40px] border-none"
                placeholder="Enter your email"
              />
            </Card>

            <Button className="h-[70px] w-[196px] bg-[#2cc689] rounded-[40px] font-['Poppins',Helvetica] font-semibold text-white text-xl">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="h-0.5 bg-white mb-12" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img
              className="w-[299px] h-[70px] object-cover mb-6"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1.png"
            />

            <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[28.4px] mb-6">
              Innovation gets real with blueJet Engineering !
            </p>

            <img
              className="w-[209px] h-[34px] object-cover"
              alt="Social Media Icons"
              src="/icons-sm-1.png"
            />
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px] mb-4">
              Contact
            </h4>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="mb-4">
                  <h5 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                    {item.title}
                  </h5>
                  <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[25.5px]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px] mb-4">
              Links
            </h4>

            <nav className="space-y-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Image */}
          <div className="col-span-1">
            <img
              className="w-full max-w-[395px] h-auto"
              alt="Capture dcran"
              src="/capture-d--cran--427--1.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
