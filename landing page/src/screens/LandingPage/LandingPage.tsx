import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";

export const LandingPage = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Samira daoud",
      role: "Farmer",
      image: "/group-1597883109.png",
      testimonial:
        "Thanks to ERWINI, our farm increased yield by 25% in just one season.",
      position: "left-[66px]",
    },
    {
      id: 2,
      name: "Med Khaled",
      role: "Farmer",
      image: "/group-1597883110.png",
      testimonial:
        "ERWINI has simplified our irrigation process and helped us monitor soil conditions in real time.",
      position: "left-[535px]",
    },
    {
      id: 3,
      name: "Ines daoud",
      role: "Farmer",
      image: "/group-1597883111.png",
      testimonial:
        "Partnering with Bluejet Engineering gave us access to precise farming tools.",
      position: "left-[1004px]",
    },
  ];

  // Expertise domains data
  const expertiseDomains = [
    {
      id: 1,
      title: "Mechanics",
      description: "Where precision meets motion",
      icon: "/mask-group.png",
      position: {
        top: "138px",
        left: "304px",
        titleLeft: "219px",
        descLeft: "180px",
      },
    },
    {
      id: 2,
      title: "Electrical",
      description: "Powering innovation, one circuit at a time.",
      icon: "/mask-group-1.png",
      position: {
        top: "138px",
        left: "1037px",
        titleLeft: "959px",
        descLeft: "884px",
      },
    },
    {
      id: 3,
      title: "Mobile & Web",
      description: "Beautiful, seamless experiences at your fingertips.",
      icon: "/mask-group-2.png",
      position: {
        top: "608px",
        left: "309px",
        titleLeft: "229px",
        descLeft: "136px",
      },
    },
    {
      id: 4,
      title: "Renewable",
      description: "Innovating for a greener tomorrow.",
      icon: "/mask-group-3.png",
      position: {
        top: "608px",
        left: "1037px",
        titleLeft: "962px",
        descLeft: "919px",
      },
    },
  ];

  // Footer links
  const footerLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Domains" },
    { id: 4, title: "Solutions" },
    { id: 5, title: "Contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Header Section */}
        <div className="relative w-[1474px] h-[1818px] -left-[47px] -top-[212px]">
          <GroupByAnima />
          <OverlapWrapperByAnima />
          <img
            className="absolute w-[52px] h-[26px] top-[276px] left-[1301px] object-cover"
            alt="England flag"
            src="/england-flag-1.png"
          />
        </div>

        {/* Our Expertise Section */}
        <div className="relative flex flex-col items-center mt-16 mb-24">
          <div className="text-[#2b34e4] text-[40px] font-bold [font-family:'Poppins',Helvetica] leading-[72.4px] text-center">
            Our Expertise, Your Advantage
          </div>
          <div className="text-[#4c4c4c] text-[22px] font-normal [font-family:'Poppins',Helvetica] leading-[39.8px] mt-2">
            Our domain of expertise
          </div>
        </div>

        {/* Group Wrapper Section */}
        <GroupWrapperByAnima />

        {/* Expertise Domains Grid */}
        <div className="relative w-[1440px] h-[961px]">
          {/* Background Images */}
          <img
            className="w-[721px] h-[480px] absolute top-0 left-0 object-cover"
            alt="Image"
            src="/image-20.png"
          />
          <img
            className="w-[719px] h-[480px] absolute top-[480px] left-0 object-cover"
            alt="Image"
            src="/image.png"
          />
          <img
            className="w-[722px] h-[481px] absolute top-[480px] left-[718px] object-cover"
            alt="Image"
            src="/image-1.png"
          />
          <img
            className="w-[722px] h-[480px] absolute top-0 left-[718px] object-cover"
            alt="Image"
            src="/image-24.png"
          />

          {/* Overlays */}
          <div className="absolute w-[718px] h-[480px] top-0 left-0 bg-[#00045966]" />
          <div className="absolute w-[722px] h-[480px] top-0 left-[718px] bg-[#00045966]" />
          <div className="absolute w-[722px] h-[481px] top-[480px] left-[718px] bg-[#00045966]" />
          <div className="absolute w-[718px] h-[481px] top-[480px] left-0 bg-[#00045966]" />

          {/* Expertise Domain Cards */}
          {expertiseDomains.map((domain) => (
            <div key={domain.id} className="absolute">
              <img
                className={`absolute w-[110px] h-[110px] top-[${domain.position.top}] left-[${domain.position.left}]`}
                alt={`${domain.title} icon`}
                src={domain.icon}
              />
              <div
                className={`absolute w-[270px] top-[${Number.parseInt(domain.position.top) + 128}px] left-[${domain.position.titleLeft}] [font-family:'Poppins',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-normal`}
              >
                {domain.title}
              </div>
              <div
                className={`absolute w-[420px] top-[${Number.parseInt(domain.position.top) + 181}px] left-[${domain.position.descLeft}] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[36.2px]`}
              >
                {domain.description}
              </div>
            </div>
          ))}

          {/* Navigation Arrow */}
          <img
            className="absolute w-[127px] h-[259px] top-[354px] left-[1313px]"
            alt="Ellipse"
            src="/ellipse-24.svg"
          />
          <img
            className="absolute w-3 h-[17px] top-[471px] left-[1417px]"
            alt="Polygon"
            src="/polygon-6.svg"
          />
        </div>

        {/* Testimonials Section */}
        <div className="relative mt-24 mb-24">
          <div className="text-[#1d26bf] text-[40px] font-bold [font-family:'Poppins',Helvetica] leading-[72.4px] text-center mb-2">
            What our clients say
          </div>
          <div className="text-[#4c4c4c] text-[22px] font-normal [font-family:'Poppins',Helvetica] leading-[39.8px] text-center mb-12">
            Testimonials
          </div>

          {/* Testimonial Cards */}
          <div className="flex justify-center gap-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative w-[377px] h-[448px]"
              >
                <Card className="absolute w-[377px] h-[353px] top-[95px] left-0 rounded-[40px] shadow-[2px_2px_83.9px_-17px_#00000040]">
                  <CardContent className="pt-16">
                    <div className="flex flex-col items-center">
                      <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[43.4px]">
                        {testimonial.name}
                      </h3>
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-[#4c4c4c] text-[19px] tracking-[0] leading-[28.5px] mt-2">
                        {testimonial.role}
                      </p>
                      <p className="[font-family:'Poppins',Helvetica] font-light text-[#4c4c4c] text-[19px] text-center tracking-[0] leading-[28.5px] mt-4">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="absolute w-[189px] h-[188px] top-0 left-[94px] rounded-[94.5px/94px] border border-solid border-black flex items-center justify-center">
                  <img
                    className="w-[162px] h-[162px]"
                    alt={`${testimonial.name} avatar`}
                    src={testimonial.image}
                  />
                </div>

                {/* Star Ratings */}
                <div className="absolute flex top-[205px] left-[79px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className="w-9 h-[33px]"
                      alt="Star"
                      src="/star-7.svg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative w-full h-[558px] mt-24">
          <img
            className="absolute w-[1440px] h-[518px] top-5 left-0"
            alt="Background"
            src="/group-1597883119.png"
          />
          <div className="absolute w-full h-[558px] top-0 left-0 [background:linear-gradient(90deg,rgba(43,52,228,0.9)_0%,rgba(24,29,126,0.9)_100%)]">
            <div className="flex flex-col items-center justify-center h-full px-8">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[72.4px] text-center">
                Partner with Bluejet Engineering
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[54.3px] max-w-[1172px] mt-6">
                Whether you're a startup or an agricultural client, we're ready
                to collaborate. Together, let's build smart and sustainable
                farming solutions with Erwini.
              </p>
              <Button className="mt-16 bg-white rounded-[50px] h-[87px] w-[327px] p-0">
                <div className="flex items-center justify-between w-full px-10">
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#2b34e4] text-3xl text-center leading-[54.3px]">
                    Contact us
                  </span>
                  <div className="w-[69px] h-[68px] rounded-[34.5px/34px] flex items-center justify-center">
                    <img
                      className="w-[23px] h-[15px] object-cover"
                      alt="Arrow"
                      src="/image-2.png"
                    />
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative w-full h-[1025px] bg-[url(/vector-3.svg)] bg-[100%_100%]">
          <div className="container mx-auto px-4 pt-24">
            <div className="grid grid-cols-3 gap-8">
              {/* Logo and Newsletter */}
              <div className="col-span-1">
                <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[27px] tracking-[0] leading-[45.9px] mb-8">
                  Join our newsletter to <br />
                  keep up do date with us !
                </h2>
                <div className="flex mt-4">
                  <div className="relative flex-grow">
                    <Input
                      className="w-[465px] h-[70px] bg-white rounded-[40px] border-2 border-solid border-[#888888] shadow-[5px_4px_5.8px_#00000040] pl-8 text-xl [font-family:'Poppins',Helvetica] font-light"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button className="ml-3 w-[196px] h-[70px] bg-[#2cc689] rounded-[40px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xl">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-16 border-white" />

            <div className="grid grid-cols-3 gap-8">
              {/* Logo and Description */}
              <div className="col-span-1">
                <img
                  className="w-[299px] h-[70px] object-cover mb-6"
                  alt="Logo blue JET"
                  src="/logo-blue-jet-whiteeee-1-1.png"
                />
                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[28.4px] mb-8">
                  Innovation gets real with blueJet Engineering !
                </p>
                <div className="flex">
                  <img
                    className="w-[209px] h-[34px] object-cover"
                    alt="Social media icons"
                    src="/icons-sm-1.png"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-span-1">
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[27px] tracking-[0] leading-[45.9px] mb-4">
                  Contact
                </h3>
                <div className="mb-6">
                  <h4 className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[34px]">
                    Address
                  </h4>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[19.2px]">
                    Office N°7, Cyber Parc Dgueche, Tunisia
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[34px]">
                    Contact
                  </h4>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[25.5px]">
                    +216 94 632 228
                  </p>
                </div>
                <div>
                  <h4 className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[34px]">
                    Email
                  </h4>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[19.2px]">
                    contact-@bluejetengineering.com
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-span-1">
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[27px] tracking-[0] leading-[45.9px] mb-4">
                  Links
                </h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href="#"
                        className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[34px]"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Copyright Image */}
            <div className="mt-16">
              <img
                className="w-[395px] h-[274px]"
                alt="Copyright"
                src="/capture-d--cran--427--1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
