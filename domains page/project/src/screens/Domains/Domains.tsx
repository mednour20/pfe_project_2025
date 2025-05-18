import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Link } from "react-router-dom";

// Domain card data for mapping
const domainCards = [
  {
    id: 1,
    title: "Mechanical",
    description:
      "Designing ultra-precise and innovative mechanical systems that seamlessly bring complex ideas to life with peak efficiency, unmatched strength, and intelligent automation.",
    icon: "/Mask-group-(17).png",
    image: "/mechanics.png",
  },
  {
    id: 2,
    title: "Electrical",
    description:
      "Powering smarter systems through advanced electrical design, efficient circuitry, and seamless hardware integration tailored for real-world performance.",
    icon: "/Mask-group-(16).png",
    image: "/Mask-group-(24).png",
  },
  {
    id: 3,
    title: "MW Dev",
    description:
      "Crafting seamless digital solutions—from sleek mobile apps to dynamic websites—that engage users and elevate experiences across every platform.",
    icon: "/Mask-group-(18).png",
    image: "/Mask-group-(25).png",
  },
  {
    id: 4,
    title: "Renewable",
    description:
      "Driving sustainable change by designing innovative clean energy systems that intelligently harness natural resources efficiently, significantly reduce carbon footprint while maximizing output.",
    icon: "/Mask-group-(19).png",
    image: "/Mask-group-(26).png",
  },
  {
    id: 5,
    title: "IOT",
    description:
      "Integrating smart devices into connected environments to collect data, automate tasks, and deliver real-time insights for better decisions.",
    icon: "/Mask-group-(20).png",
    image: "/Mask-group-(27).png",
  },
  {
    id: 6,
    title: "AI",
    description:
      "Developing intelligent algorithms that analyze, predict, adapt and learn autonomously—making your technology smarter, more efficient and your business faster.",
    icon: "/Mask-group-(21).png",
    image: "/Mask-group-(28).png",
  },
  {
    id: 7,
    title: "Robotics",
    description:
      "Designing intelligent machines that automate complex tasks, improve precision, and transform industries through advanced control systems.",
    icon: "/Mask-group-(22).png",
    image: "/Mask-group-(29).png",
  },
  {
    id: 8,
    title: "Blockchain",
    description:
      "Building secure and decentralized systems that ensure trust, transparency, and data integrity across all your digital transactions.",
    icon: "/Mask-group-(23).png",
    image: "/Mask-group-(30).png",
  },
];

// Navigation links
const navLinks = [
  { title: "About", href: "#" },
  { title: "Products", href: "#" },
  { title: "Domains", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Contact", href: "#" },
];

// Footer links
const footerLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Domains", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Contact", href: "#" },
];

export const Domains = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <header className="relative w-full h-[562px] bg-[url(/domains-hero-section-1.png)] font-['Poppins',Helvetica] bg-cover">
          {/* Updated Navigation */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[49px] px-[30px] flex justify-between items-center ml-4">

            <img
              className="w-[241px] h-14 object-cover"
              alt="Logo blue JET"
              src="/logo-bluejet.png"
            />

            <div className="flex space-x-[100px] ml-32 mr-32">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-bold text-white text-base relative group"
                >
                  {link.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center p-1 rounded -ml-16">
              <img
                className="w-[52px] h-[26px] mr-12 object-cover"
                alt="England flag"
                src="/england.png"
              />
              <img
                className="w-[11px] h-[9px] -translate-x-8"
                alt="Polygon"
                src="/polygon-5.svg"
              />
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mt-32 text-left">
              <h1 className="font-semibold text-[80px] text-white tracking-[3.20px] leading-[113.6px] mr-auto">
                Domains
              </h1>
              <p className="font-normal text-white text-xl tracking-[0.80px] leading-[28.4px] mt-4 whitespace-nowrap overflow-x-auto">
                Explore the fields where BlueJet Engineering delivers smart, reliable solutions.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <p className="font-medium text-[#4c4c4c] text-[27px] leading-[48.9px]">
              What we&apos;re best at
            </p>
            <h2 className="font-bold text-[#2b34e4] text-[42px] leading-[76.0px]">
              Smart solutions, Smart domains
            </h2>
          </div>

          {/* Domain Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domainCards.map((domain) => (
              <Card
                key={domain.id}
                className="rounded-[25px] shadow-[4px_4px_22.3px_#00000040] border-none overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative p-10 pb-0">
                    <div className="absolute top-[22px] left-[43px] w-[77px] h-[77px] rounded-[38.5px] bg-gradient-to-b from-[#2b34e4] to-[#181d7e] flex items-center justify-center hover:scale-105 transition-transform">
                      <img
                        className="w-[42px] h-[42px]"
                        alt="Domain icon"
                        src={domain.icon}
                      />
                    </div>
                    <div className="mt-20">
                      <h3 className="font-bold text-black text-2xl text-center leading-[43.4px] text-left pr-96">
                        {domain.title}
                      </h3>
                      <p className="font-normal text-[#4c4c4c] text-lg leading-[32.6px] mt-2 mb-8">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="w-full h-[365px] object-cover"
                      alt={`${domain.title} illustration`}
                      src={domain.image}
                    />
                    <div className="absolute inset-0 rounded-b-[25px] bg-gradient-to-b from-[rgba(43,52,228,0.3)] to-[rgba(24,29,126,0.3)]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* CTA Section */}
        <section className="
  w-full h-[651px] 
  relative
  mt-16 
  flex flex-col items-center justify-center 
  px-4 text-center
">
  {/* Background Image with Gradient Overlay */}
  <div className="
    absolute inset-0
    bg-[url(/photo-blue-jet.png)] bg-cover bg-center
    after:content-[''] 
    after:absolute 
    after:inset-0 
    after:bg-gradient-to-b 
    after:from-[rgba(43,52,228,0.6)] 
    after:to-[rgba(24,29,126,0.6)]
  "></div>
  
  {/* Content (appears above everything) */}
  <div className="relative z-10">
    <h2 className="font-bold text-white text-[40px] leading-[72.4px] mb-8">
      Proven Know-How, Trusted Everywhere
    </h2>
    <p className="font-normal text-white text-3xl leading-[54.3px] max-w-5xl mb-16">
      With strong technical expertise and a results-driven mindset, we
      transform ideas into real-world solutions across AI, IoT, and
      digital systems. Our ability to adapt and innovate has earned us the
      trust of clients in Gafsa, Tozeur, and several other regions—proving
      that our work speaks louder than words.
    </p>
    <Button className="bg-white text-[#2b34e4] rounded-[50px] h-[87px] px-10 text-3xl font-semibold hover:bg-gray-100">
      Contact us
      <div className="w-[69px] h-[68px] ml-8 rounded-full bg-[#2b34e4] flex items-center justify-center">
        <img className="w-[23px] h-[15px]" alt="Arrow" src="/arrow-5.svg" />
      </div>
    </Button>
  </div>
</section>

        {/* Footer */}
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
          src="/logo-bluejet.png" 
        />

        <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[28.4px] mb-8">
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
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <img
          className="w-[395px] h-[274px]"
          alt="Company screenshot"
          src="/place.png"
        />
      </div>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
};