import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const GroupByAnima = (): JSX.Element => {
  // Footer navigation links data
  const quickLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Domains", href: "#" },
    { title: "Solutions", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Contact information data
  const contactInfo = [
    { title: "Address", value: "Office N°7, Cyber Parc Dgueche, Tunisia" },
    { title: "Contact", value: "+216 94 632 228" },
    { title: "Email", value: "contact-@bluejetengineering.com" },
  ];

  return (
    <footer className="relative w-full py-16 bg-[url(/vector-3.svg)] bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
              Join our newsletter to <br />
              keep up do date with us !
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Input
                className="h-[70px] w-full sm:w-[465px] bg-white rounded-[40px] border-2 border-solid border-[#888888] shadow-[5px_4px_5.8px_#00000040] pl-8 text-xl font-['Poppins',Helvetica] font-light"
                placeholder="Enter your email"
              />
            </div>

            <Button className="h-[70px] w-full sm:w-[196px] bg-[#2cc689] rounded-[40px] font-['Poppins',Helvetica] font-semibold text-white text-xl">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="h-0.5 bg-white mb-16" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <img
              className="w-[299px] h-[70px] object-cover mb-6"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1-1.png"
            />

            <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[28.4px] mb-8">
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
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px] mb-4">
              Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
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
