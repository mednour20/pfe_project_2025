import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const About = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "About", href: "#" },
    { text: "Products", href: "#" },
    { text: "Domains", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "Contact", href: "#" },
  ];

  // Service cards data
  const serviceCards = [
    {
      title: "For Farmers",
      description:
        "With ERWINI, make smarter irrigation choices and improve productivity effortlessly.",
      imageSrc: "/mask-group-11.png",
    },
    {
      title: "For Students",
      description:
        "We guide and support students throughout their final year projects with real-world experience.",
      imageSrc: "/mask-group-12.png",
    },
    {
      title: "For Startups",
      description:
        "We deliver tailored PCB cards to help bring your hardware solutions to life.",
      imageSrc: "/mask-group-13.png",
    },
  ];

  // Footer links data
  const footerLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Domains", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="383:2"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full h-[557px]">
          <img
            className="absolute w-full h-full object-cover"
            alt="Hero section"
            src="/hero-section-3-1.png"
          />

          {/* Navigation */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[49px] px-[60px] flex justify-between items-center">
            <img
              className="w-[241px] h-14 object-cover"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1-1.png"
            />

            <div className="flex space-x-[145px]">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-bold text-white text-base"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="flex items-center">
              <img
                className="w-[52px] h-[26px] mr-2 object-cover"
                alt="England flag"
                src="/england-flag-2.png"
              />
              <img
                className="w-[11px] h-[9px]"
                alt="Polygon"
                src="/polygon-5.svg"
              />
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative px-[70px] mt-[160px]">
            <h1 className="font-['Poppins',Helvetica] font-semibold text-[80px] text-center tracking-[3.20px] leading-[113.6px] text-white">
              About us
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[0.80px] leading-[28.4px] mt-[25px]">
              Discover who BlueJet Engineering is, what drives us, and our
              proudest innovation.
            </p>
          </div>
        </section>

        {/* About Company Section */}
        <section className="flex flex-col md:flex-row px-[50px] mt-[100px] gap-[125px]">
          <div className="relative w-full max-w-[633px] h-[493px]">
            <img
              className="absolute w-[225px] h-[94px] top-[191px] left-[161px]"
              alt="Line"
              src="/line-5-1.svg"
            />
            <img
              className="absolute w-[46px] h-40 top-[251px] left-[452px]"
              alt="Line"
              src="/line-6.svg"
            />
            <img
              className="absolute w-[334px] h-[304px] top-0 left-[299px]"
              alt="Mask group"
              src="/mask-group-1.png"
            />
            <img
              className="absolute w-[272px] h-[67px] top-[386px] left-44"
              alt="Line"
              src="/line-5.svg"
            />
            <img
              className="absolute w-[229px] h-52 top-[232px] left-0"
              alt="Mask group"
              src="/mask-group-2.png"
            />
            <img
              className="absolute w-[136px] h-32 top-[365px] left-[425px]"
              alt="Mask group"
              src="/mask-group-3.png"
            />
          </div>

          <div className="flex flex-col max-w-[583px]">
            <Card className="w-[358px] h-[67px] rounded-[50px] shadow-[0px_4px_16.7px_#00000040] mb-8 bg-[#2b34e4]">
              <CardContent className="flex items-center p-[13px]">
                <div className="flex">
                  <img
                    className="w-[42px] h-[42px]"
                    alt="Mask group"
                    src="/mask-group-6.png"
                  />
                  <img
                    className="w-[42px] h-[42px] -ml-5"
                    alt="Mask group"
                    src="/mask-group-5.png"
                  />
                  <img
                    className="w-[42px] h-[42px] -ml-5"
                    alt="Mask group"
                    src="/mask-group-4.png"
                  />
                </div>
                <p className="font-['Poppins',Helvetica] font-normal text-white text-xl ml-5">
                  Mostly clients happy !
                </p>
              </CardContent>
            </Card>

            <h2 className="font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[42px] leading-[76.0px] mb-6">
              Blue jet engineering <br />
              more than just a startup
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[22px] leading-[37.0px]">
              Founded in 2021 by Mr. Ismail Thabet, BLUE JET Engineering is a
              Tunisian startup specializing in advanced machinery and
              innovative, technology-driven solutions.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="relative w-full h-[512px] mt-[100px]">
          <img
            className="absolute w-full h-full object-cover"
            alt="Mask group"
            src="/mask-group.png"
          />
          <div className="absolute w-full h-full bg-[#2b34e4a6]" />

          <div className="relative flex flex-col items-center pt-7">
            <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[42px] leading-[76.0px]">
              Trust the professionals
            </h2>

            <div className="flex justify-between w-full px-[72px] mt-[84px]">
              <div className="flex flex-col items-center">
                <img
                  className="w-[106px] h-[106px]"
                  alt="Vision icon"
                  src="/mask-group-7.png"
                />
                <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[32px] leading-[57.9px] mt-5">
                  Vision
                </h3>
                <p className="font-['Poppins',Helvetica] font-normal text-white text-[22px] text-center leading-[39.8px] max-w-[441px]">
                  A connected, intelligent future for agriculture — built for
                  those who grow our world.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-[106px] h-[106px]"
                  alt="Mission icon"
                  src="/mask-group-8.png"
                />
                <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[32px] leading-[57.9px] mt-5">
                  Mission
                </h3>
                <p className="font-['Poppins',Helvetica] font-normal text-white text-[22px] text-center leading-[39.8px] max-w-[441px]">
                  Creating smart, sustainable tools that simplify agriculture
                  and boost performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accomplishments Section */}
        <section className="flex flex-col md:flex-row px-[50px] mt-[100px] gap-[200px]">
          <div className="flex flex-col max-w-[715px]">
            <p className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              We are the best
            </p>
            <h2 className="font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[42px] leading-[76.0px] mt-2">
              Undoubtedly one of our finest accomplishments
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[22px] leading-[37.0px] mt-6">
              At the 11th Salon de l'Entreprise in 2023, Blue Jet Engineering
              was awarded first place in the Startup Innovation Challenge. This
              prestigious honor highlighted our breakthrough{" "}
              <span className="font-bold">Erwini</span> smart irrigation system,
              validating our commitment to developing sustainable agricultural
              technologies.
            </p>

            <Button className="w-[218px] h-[52px] mt-8 rounded-[70px] bg-[#2b34e4] hover:bg-[#2428b5]">
              <span className="font-['Poppins',Helvetica] font-semibold text-white text-[17px] mr-4">
                Discover ERWINI
              </span>
              <div className="w-[34px] h-[33px] bg-white rounded-[17px/16.5px] flex items-center justify-center">
                <img
                  className="w-[18px] h-[11px]"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </div>
            </Button>
          </div>

          <div className="relative w-full max-w-[570px] h-[483px] bg-[url(/mask-group-9.png)] bg-cover">
            <div className="absolute w-[245px] h-[175px] bottom-0 right-0">
              <img
                className="w-full h-full rounded-[20px]"
                alt="Award"
                src="/mask-group-10.png"
              />
              <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-gradient-to-b from-[rgba(43,52,228,0.6)] to-[rgba(24,29,126,0.6)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-['Poppins',Helvetica] font-semibold text-[#ffff88] text-2xl leading-9">
                  First place #1
                </p>
                <p className="font-['Poppins',Helvetica] font-normal text-white text-[19px] text-center leading-[28.5px] mt-4">
                  Startup innovation challenge
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex flex-col md:flex-row px-[50px] mt-[100px] gap-[100px]">
          <div className="flex flex-col max-w-[668px]">
            <p className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              We take care of our clients
            </p>

            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="w-full h-40 mt-6 bg-white rounded-[25px] shadow-[2px_4px_21px_#00000040]"
              >
                <CardContent className="p-0 flex items-center">
                  <div className="w-[118px] h-[116px] rounded-[59px/58px] flex items-center justify-center ml-3.5 mt-[26px]">
                    <img
                      className="w-[69px] h-[69px]"
                      alt={card.title}
                      src={card.imageSrc}
                    />
                  </div>
                  <div className="ml-[37px] mt-[25px]">
                    <h3 className="font-['Poppins',Helvetica] font-bold text-black text-2xl leading-[40.3px]">
                      {card.title}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-light text-[#4c4c4c] text-[19px] leading-[34.4px] max-w-[500px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col max-w-[583px]">
            <h2 className="font-['Poppins',Helvetica] font-bold text-[#2b34e4] text-[42px] leading-[76.0px]">
              What makes us different from others
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-[#4c4c4c] text-[22px] leading-[37.0px] mt-6">
              At Bluejet Engineering, what sets us apart is our commitment to
              people. We design solutions that serve real needs and support
              those who shape the future — whether in{" "}
              <span className="font-bold">education</span>,{" "}
              <span className="font-bold">agriculture</span>, or innovation.{" "}
              <span className="font-bold">Collaboration</span> is at the heart
              of everything we do.
            </p>

            <Button className="w-[180px] h-[52px] mt-8 rounded-[70px] bg-[#2b34e4] hover:bg-[#2428b5]">
              <span className="font-['Poppins',Helvetica] font-semibold text-white text-[17px] mr-4">
                Contact us
              </span>
              <div className="w-[34px] h-[33px] bg-white rounded-[17px/16.5px] flex items-center justify-center">
                <img
                  className="w-[18px] h-[11px]"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </div>
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative w-full mt-[100px] pt-[233px] pb-[100px] bg-[url(/vector-3.svg)] bg-cover">
          <div className="max-w-[1320px] mx-auto px-[70px]">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-[465px]">
                <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
                  Join our newsletter to <br />
                  keep up do date with us !
                </h2>
                <div className="flex mt-4">
                  <div className="relative">
                    <Input
                      className="w-[465px] h-[70px] bg-white rounded-[40px] border-2 border-solid border-[#888888] shadow-[5px_4px_5.8px_#00000040] pl-[31px] text-xl"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button className="w-[196px] h-[70px] ml-3 bg-[#2cc689] hover:bg-[#25a974] rounded-[40px]">
                    <span className="font-['Poppins',Helvetica] font-semibold text-white text-xl">
                      Subscribe
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="w-full h-0.5 bg-white my-[50px]" />

            <div className="flex flex-col md:flex-row justify-between">
              <div className="max-w-[365px]">
                <img
                  className="w-[299px] h-[70px] object-cover"
                  alt="Logo blue JET"
                  src="/logo-blue-jet-whiteeee-1-1.png"
                />
                <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[28.4px] mt-4">
                  Innovation gets real with blueJet Engineering !
                </p>
                <div className="mt-8">
                  <img
                    className="w-[209px] h-[34px] object-cover"
                    alt="Social media icons"
                    src="/icons-sm-1.png"
                  />
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
                  Contact
                </h3>
                <div className="mt-4">
                  <h4 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                    Address
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[19.2px] max-w-[178px]">
                    Office N°7, Cyber Parc Dgueche, Tunisia
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                    Contact
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[25.5px]">
                    +216 94 632 228
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]">
                    Email
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-medium text-white text-[15px] leading-[19.2px]">
                    contact-@bluejetengineering.com
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[27px] leading-[45.9px]">
                  Links
                </h3>
                <div className="mt-4 flex flex-col space-y-2">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <img
                  className="w-[395px] h-[274px]"
                  alt="Capture d'écran"
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
