import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

// Navigation links data
const navLinks = [
  { text: "About", href: "#" },
  { text: "Products", href: "#" },
  { text: "Domains", href: "#" },
  { text: "Solutions", href: "#" },
  { text: "Contact", href: "#" },
];

// Product cards data
const productCards = [
  {
    id: 1,
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-7.png",
    title: "Dissolved Oxygen Monitoring System",
    learnMoreLink: "#",
  },
  {
    id: 2,
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-2.png",
    title: "SeaSense",
    learnMoreLink: "#",
  },
  {
    id: 3,
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-6.png",
    title: "Weather Station",
    learnMoreLink: "#",
  },
  {
    id: 4,
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-3.png",
    title: "Soil Sense",
    learnMoreLink: "#",
  },
];

// Key features data
const keyFeatures = [
  {
    id: 1,
    text: (
      <>
        <span className="font-semibold">5 High-Capacity Relays:</span>
        <span className="font-medium">
          {" "}
          Each relay is rated for up to 8A, providing robust switching
          capabilities suitable for controlling a variety of high-power devices.
          Flexible Input Support: Compatible with both 220V AC and 5V DC inputs
          for broad system integration. Built-In Electrical Protection: Features
          surge protection, overcurrent protection, and noise suppression for
          safe, stable operation. Versatile Applications: Perfect for automated
          agriculture, industrial machinery, and smart control systems.
        </span>
      </>
    ),
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

export const Products = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative w-full h-[558px]">
          <div className="absolute inset-0 bg-[url(/products-hero-section-1.png)] bg-cover bg-center">
            <div className="absolute inset-0 [background:linear-gradient(255deg,rgba(43,52,228,0)_0%,rgba(0,9,184,1)_100%)]" />
          </div>

          {/* Navigation - Updated to match About page */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[59px] px-[70px] flex justify-between items-center ">
            <img
              className="w-[241px] h-14 object-cover"
              alt="Logo blue JET"
              src="/logo-blue-jet-whiteeee-1-1.png"
            />

            <div className="flex space-x-[100px] ml-32 mr-32">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Poppins',Helvetica] font-bold text-white text-base relative group"
                >
                  {link.text}
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

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-start mt-[160px] px-[60px]">
  <h1 className="font-['Poppins',Helvetica] font-semibold text-white text-[80px] tracking-[3.20px] leading-[113.6px]">
    Control Unit (5 Relays)
  </h1>
  <p className="font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[0.80px] leading-[28.4px] mt-4">
    Compact control unit with 5 relays for managing motors, valves,
    and sensors efficiently.
  </p>
</div>
        </section>

        {/* Product Details Section */}
        <section className="flex flex-row mt-[100px] px-8">
          <div className="flex-shrink-0">
            <img
              className="w-[717px] h-[717px] object-cover"
              alt="Control Unit"
              src="/rectangle-231.png"
            />
          </div>

          <div className="flex flex-col ml-10 max-w-[615px]">
            <h2 className="font-['Poppins',Helvetica] font-bold text-black text-[40px] text-center leading-[68px]">
              Control Unit (5 Relays)
            </h2>

            <p className="font-['Poppins',Helvetica] font-medium text-black text-[17px] text-justify leading-[28.9px] mt-6">
            Meet the 5-Relay Control Unit – a compact, powerful device designed for smart automation. 
            It manages up to five independent outputs such as motors, electrovalves, and sensors, 
            ensuring seamless integration, precise remote control, and reliable performance. Ideal 
            for irrigation, environmental monitoring, or industrial systems, it’s your go-to solution 
            for efficient and intelligent control.
            </p>

            <h3 className="font-['Poppins',Helvetica] font-bold text-black text-xl leading-[34px] mt-10">
              Key features:
            </h3>

            <div className="mt-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex mt-2">
                  <div className="flex flex-col space-y-12">
                    <img className="w-3 h-2.5" alt="Done" src="/done.png" />
                    <img className="w-3 h-2.5" alt="Done" src="/done-1.png" />
                    <img className="w-3 h-2.5" alt="Done" src="/done-2.png" />
                    <img className="w-3 h-2.5" alt="Done" src="/done-3.png" />
                  </div>
                  <div className="ml-4 font-['Poppins',Helvetica] font-normal text-black text-sm leading-[23.8px]">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-['Poppins',Helvetica] font-bold text-xl leading-[34px] bg-gradient-to-r from-[rgba(2,7,113,1)] to-[rgba(34,43,204,1)] bg-clip-text text-transparent">
                For pricing and availability:
              </p>

              <Button className="mt-4 rounded-[70px] bg-gradient-to-r from-[rgba(2,7,113,1)] to-[rgba(34,43,204,1)] text-white font-['Poppins',Helvetica] font-semibold text-[18px] px-8 py-2 h-[46px] w-[214px]">
                <span>Request a price</span>
                <img
                  className="ml-3 w-5 h-[9px]"
                  alt="Arrow"
                  src="/arrow-5.svg"
                />
              </Button>
            </div>
          </div>
        </section>

        {/* More Products Section */}
        <section className="mt-20">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-4xl text-center leading-[61.2px]">
            More products
          </h2>

          <div className="flex justify-center gap-8 mt-10">
            {productCards.map((product) => (
              <Card
                key={product.id}
                className="w-[267px] h-[324px] shadow-[0px_0px_18.3px_#00000040] rounded-[25px_25px_25px_25px] overflow-hidden"
              >
                <div className="relative h-full">
                  <img
                    className="w-full h-[267px] object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                  <div className="absolute bottom-0 w-full h-[78px] rounded-[0px_0px_25px_25px] [background:linear-gradient(140deg,rgba(43,52,228,1)_0%,rgba(2,7,113,1)_100%)] flex flex-col items-center justify-center">
                    <p className="font-['Poppins',Helvetica] font-semibold text-white text-[11px] text-center leading-[15.9px]">
                      {product.title}
                    </p>
                    <Button
                      variant="default"
                      className="mt-2 bg-white text-black rounded-[70px] h-6 w-28"
                    >
                      <span className="font-['Poppins',Helvetica] font-semibold text-[11px] text-center leading-[16.5px]">
                        Learn more
                      </span>
                      <img
                        className="ml-1.5 w-[11px] h-[9px]"
                        alt="Arrow"
                        src="/arrow-6.svg"
                      />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer Section */}
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