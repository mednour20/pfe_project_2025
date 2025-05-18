import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const ContactUs = (): JSX.Element => {
  // Navigation links
  const navLinks = [
    { text: "About", href: "#" },
    { text: "Products", href: "#" },
    { text: "Domains", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "Contact", href: "#" },
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Frequently asked questions",
      answer: "Answer to frequently asked question",
    },
    {
      question: "Frequently asked questions",
      answer: "Answer to frequently asked question",
    },
    {
      question: "Frequently asked questions",
      answer: "Answer to frequently asked question",
    },
    {
      question: "Frequently asked questions",
      answer: "Answer to frequently asked question",
    },
    {
      question: "Frequently asked questions",
      answer: "Answer to frequently asked question",
    },
  ];

  // Footer links
  const footerLinks = ["Home", "About", "Domains", "Solutions", "Contact"];

  // Social media icons
  const socialIcons = [
    { name: "Facebook", src: "/facebook.png" },
    { name: "LinkedIn", src: "/linkedin.png" },
    { name: "Instagram", src: "/instagram.png" },
    { name: "YouTube", src: "/youtube.png" },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: "/email.png",
      title: "Email",
      content: "contact-@bluejetengineering.com",
    },
    {
      icon: "/location.png",
      title: "Address",
      content: "Office N°7, Cyber Parc Dgueche, Tunisia",
    },
    {
      icon: "/phone.png",
      title: "Contact",
      content: "+216 94 632 228",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[563px] bg-[url(/handshake-hero-section-1.png)] bg-cover bg-center">
          {/* Updated Navigation */}
          <nav className="relative w-full max-w-[1069px] h-14 pt-[49px] px-[70px] flex justify-between items-center ">
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
                  {link.text}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center p-1 rounded -ml-16">
              <img
                className="w-[52px] h-[26px] mr-12 object-cover"
                alt="England flag"
                src="/england-flag-2.png"
              />
              <img
                className="w-[11px] h-[9px] -translate-x-8"
                alt="Polygon"
                src="/polygon-5.svg"
              />
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative px-[70px] mt-[160px] text-left">
            <h1 className="font-['Poppins',Helvetica] font-semibold text-[80px] tracking-[3.20px] leading-[113.6px] text-white text-left mb-6">
              Contact us
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[0.80px] leading-[28.4px]">
              Have a question or a project in mind? Let&apos;s connect.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4">
          {/* Contact Section */}
          <section className="flex flex-col md:flex-row gap-10 py-16">
            {/* Left Column - Contact Info */}
            <div className="flex-1">
              <h2 className="font-['Poppins',Helvetica] font-medium text-black text-[40px] leading-[72.4px]">
                Don&apos;t hesitate to contact us
              </h2>
              <p className="font-['Poppins',Helvetica] font-light text-black text-xl leading-[36.2px] mt-4 mb-12">
              Don’t hesitate to reach out to us! Simply fill out the form below or use the contact details provided
               — we’re here to help and answer any questions you may have.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <img
                      className="w-[52px] h-[52px]"
                      alt={info.title}
                      src={info.icon}
                    />
                    <div>
                      <h3 className="font-['Poppins',Helvetica] font-medium text-black text-xl leading-[34px]">
                        {info.title}
                      </h3>
                      <p className="font-['Poppins',Helvetica] font-medium text-black text-[15px] leading-[19.2px]">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-12" />

              {/* Social Media */}
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-2xl text-center leading-[43.4px] mb-4">
                Follow us on
              </h3>
              <div className="flex justify-center gap-6">
                {socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    className="w-10 h-10"
                    alt={icon.name}
                    src={icon.src}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1">
              <Card className="w-full max-w-[680px] rounded-[50px] shadow-lg p-12">
                <CardContent className="p-0">
                  <h2 className="font-['Poppins',Helvetica] font-normal text-black text-[32px] text-center leading-[57.9px] mb-8">
                    Leave your message
                  </h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="font-['Poppins',Helvetica] font-normal text-[#3f3f3f] text-[15px] leading-[27.2px]">
                        Name
                      </label>
                      <Input className="h-[43px] bg-[#f1f1f1] rounded-[10px] shadow-[inset_0px_4px_13.1px_-10px_#00000040]" />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Poppins',Helvetica] font-normal text-[#3f3f3f] text-[15px] leading-[27.2px]">
                        E-mail
                      </label>
                      <Input className="h-[43px] bg-[#f1f1f1] rounded-[10px] shadow-[inset_0px_4px_13.1px_-10px_#00000040]" />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Poppins',Helvetica] font-normal text-[#3f3f3f] text-[15px] leading-[27.2px]">
                        Your subject
                      </label>
                      <Input className="h-[43px] bg-[#f1f1f1] rounded-[10px] shadow-[inset_0px_4px_13.1px_-10px_#00000040]" />
                    </div>

                    <div className="space-y-2">
                      <label className="font-['Poppins',Helvetica] font-normal text-[#3f3f3f] text-[15px] leading-[27.2px]">
                        Your message
                      </label>
                      <Textarea className="h-[171px] bg-[#f1f1f1] rounded-[10px] shadow-[inset_0px_4px_13.1px_-10px_#00000040]" />
                    </div>

                    <Button className="w-full h-[43px] bg-[#1a208d] rounded-[10px] hover:bg-[#151a75]">
                      <span className="font-['Poppins',Helvetica] font-bold text-white text-base text-center leading-[29.0px] mr-2">
                        Send message
                      </span>
                      <img
                        className="w-[9px] h-2"
                        alt="Arrow"
                        src="/bx-arrow-back-svg.svg"
                      />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-[#f7f7f7] rounded-t-3xl">
            <div className="text-center mb-12">
              <h2 className="font-['Poppins',Helvetica] font-medium text-black text-[64px] leading-[115.8px]">
                FAQ
              </h2>
              <p className="font-['Poppins',Helvetica] font-extralight text-black text-4xl leading-[65.2px]">
                Frequently asked questions
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full max-w-5xl mx-auto"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-4 bg-[#e0e0e0] rounded-[10px] shadow-[inset_0px_4px_13.1px_-10px_#00000040]"
                >
                  <AccordionTrigger className="px-12 py-4 font-['Poppins',Helvetica] font-light text-black text-[28px] leading-[50.7px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-12 py-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>

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
          {footerLinks.map((title, index) => (
            <li key={index}>
              <a
                href="#"
                className="font-['Poppins',Helvetica] font-medium text-white text-xl leading-[34px]"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <img
          className="w-[395px] h-[274px]"
          alt="Company screenshot"
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