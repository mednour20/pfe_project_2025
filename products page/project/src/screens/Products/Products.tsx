import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Control Unit (5 Relays)",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-2.png",
    row: 1,
  },
  {
    id: 2,
    title: "Control Unit (12 Relays)",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-2.png",
    row: 1,
  },
  {
    id: 3,
    title: "Soil Sense",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-3.png",
    row: 1,
  },
  {
    id: 4,
    title: "iRoots (5 Pumps)",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-4.png",
    row: 2,
  },
  {
    id: 5,
    title: "ORP Monitoring System",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-5-1.png",
    row: 2,
  },
  {
    id: 6,
    title: "pH Water Monitoring",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-5-1.png",
    row: 2,
    link: "https://renile.net/product/ph-water-monitoring/",
  },
  {
    id: 7,
    title: "Dissolved Oxygen Monitoring System",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-7.png",
    row: 3,
  },
  {
    id: 8,
    title: "SeaSense",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-2-1.png",
    row: 3,
  },
  {
    id: 9,
    title: "Weather Station",
    image: "/chatgpt-image-5-mai-2025--21-26-50-2-6.png",
    row: 3,
  },
];

// Navigation links
const navLinks = [
  { text: "About", href: "#" },
  { text: "Products", href: "#" },
  { text: "Domains", href: "#" },
  { text: "Solutions", href: "#" },
  { text: "Contact", href: "#" },
];

// Footer links
const footerLinks = ["Home", "About", "Domains", "Solutions", "Contact"];

export const Products = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section with updated Navbar */}
        <header className="relative w-full h-[558px] bg-[url(/products-hero-section-1.png)] bg-cover">
          {/* Updated Navigation */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[59px] px-[40px] flex justify-between items-center ml-[20px] mr-[80px]">
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

          <div className="text-left mt-[160px] px-[55px]">
  <h1 className="font-['Poppins',Helvetica] font-semibold text-white text-[80px] tracking-[3.20px] leading-[113.6px]">
    Products
  </h1>
  <p className="font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[0.80px] leading-[28.4px] mt-5 max-w-[1155px]">
    Smart sensors for water, soil, and climate monitoring, with a
    control unit for efficient system management.
  </p>
</div>
        </header>

        {/* Products Section */}
        <section className="px-10 mt-[100px]">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[64px] text-center leading-[90.9px]">
            Explore all products
          </h2>
          <p className="font-['Poppins',Helvetica] font-light text-black text-base leading-[22.7px] text-center mb-16 max-w-[800px] mx-auto">
            Smart monitoring tools including ORP, pH, weather, soil sensors, a
            central control unit and more for optimized automation.
          </p>

          {/* Products Grid - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ml-12">
            {products
              .filter((product) => product.row === 1)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {/* Products Grid - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ml-12">
            {products
              .filter((product) => product.row === 2)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {/* Products Grid - Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ml-12">
            {products
              .filter((product) => product.row === 3)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="text-center my-20">
            <h3 className="font-['Poppins',Helvetica] font-bold text-black text-2xl leading-[40.8px]">
              Expanding our product line soon...
            </h3>
          </div>
        </section>

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
                  {footerLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
                      >
                        {link}
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

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-[340px] h-[433px] shadow-[0px_0px_18.3px_#00000040] rounded-none overflow-hidden rounded-xl ">
      <CardContent className="p-0">
        <img
          className="w-full h-[340px] object-cover"
          alt={product.title}
          src={product.image}
        />
        <div className="h-[99px] rounded-[0px_0px_25px_25px] [background:linear-gradient(140deg,rgba(43,52,228,1)_0%,rgba(2,7,113,1)_100%)] flex flex-col items-center justify-center">
          {product.link ? (
            <a
              href={product.link}
              rel="noopener noreferrer"
              target="_blank"
              className="font-['Poppins',Helvetica] font-semibold text-white text-[15px] text-center leading-[21.7px]"
            >
              {product.title}
            </a>
          ) : (
            <div className="font-['Poppins',Helvetica] font-semibold text-white text-[15px] text-center leading-[21.7px]">
              {product.title}
            </div>
          )}
          <Button
            variant="ghost"
            className="mt-2 h-[31px] rounded-[70px] bg-white hover:bg-white/90"
          >
            <span className="font-['Poppins',Helvetica] font-semibold text-black text-sm text-center leading-[21px]">
              Learn more
            </span>
            <img
              className="w-3.5 h-[9px] ml-2"
              alt="Arrow"
              src="/arrow-5.svg"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};