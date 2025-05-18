import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
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
    { title: "Address", content: "Office N°7, Cyber Parc Dgueche, Tunisia" },
    { title: "Contact", content: "+216 94 632 228" },
    { title: "Email", content: "contact-@bluejetengineering.com" },
  ];

  return (
    <footer className="relative w-full h-[880px] bg-[url(/vector-3.png)] bg-cover bg-no-repeat bg-center font-['Poppins',Helvetica]">
      <div className="container mx-auto px-[42px] pt-[233px]">
        {/* Newsletter Section */}
        <div className="flex justify-between">
          <div className="max-w-md">
            <h3 className="font-bold text-white text-[27px] leading-[45.9px]">
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

            <Button className="w-[176px] h-[60px] bg-[#2cc689] rounded-[40px] font-semibold text-white text-xl">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="my-16 border-white" />

        {/* Footer Content */}
        <div className="grid grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <img
              className="w-[299px] h-[70px] object-cover mb-8"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1.png"
            />
            <p className="font-normal text-white text-xl leading-[28.4px] mb-8">
              Innovation gets real with blueJet Engineering !
            </p>
            <div className="mt-4">
              <img
                className="w-[209px] h-[34px] object-cover"
                alt="Social media icons"
                src="/icons-sm.png"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="font-bold text-white text-[27px] leading-[45.9px] mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index}>
                  <h5 className="font-medium text-white text-xl leading-[34px]">
                    {item.title}
                  </h5>
                  <p className="font-medium text-white text-[15px] leading-[19.2px]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-white text-[27px] leading-[45.9px] mb-4">
              Links
            </h4>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-medium text-white text-xl leading-[34px] hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Decorative Image */}
          <div className="col-span-1">
            <img
              className="w-[395px] h-[274px]"
              alt="Capture dcran"
              src="/place.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};