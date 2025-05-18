import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Separator } from '../../components/ui/separator';
import { GroupByAnima } from './sections/GroupByAnima';
import { GroupWrapperByAnima } from './sections/GroupWrapperByAnima';
import { OverlapWrapperByAnima } from './sections/OverlapWrapperByAnima';

export const LandingPage = (): JSX.Element => {
  // State to track which set of images to display
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: 'Samira daoud',
      role: 'Farmer',
      image: '/group-1597883109.png',
      text: 'Thanks to ERWINI, our farm increased yield by 25% in just one season, it’s the best decision we’ve made.',
    },
    {
      id: 2,
      name: 'Med Khaled',
      role: 'Farmer',
      image: '/group-1597883110.png',
      text: 'ERWINI has simplified our irrigation process and helped us monitor soil conditions in real time.',
    },
    {
      id: 3,
      name: 'Ines daoud',
      role: 'Farmer',
      image: '/group-1597883111.png',
      text: 'Partnering with Bluejet Engineering gave us access to precise farming tools.',
    },
  ];

  // Expertise domains data - first set
  const expertiseDomainsSet1 = [
    {
      id: 1,
      title: "Mechanics",
      description: "Where precision meets motion",
      image: "/mask-group.png",
      position: "top-[138px] left-[304px]",
      titlePosition: "top-[266px] left-[219px]",
      descPosition: "top-[319px] left-[215px]",
    },
    {
      id: 2,
      title: "Electrical",
      description: "Powering innovation, one circuit at a time.",
      image: "/mask-group-1.png",
      position: "top-[138px] left-[997px]",
      titlePosition: "top-[266px] left-[913px]",
      descPosition: "top-[319px] left-[875px]",
    },
    {
      id: 3,
      title: "Mobile & Web",
      description: "Beautiful, seamless experiences at your fingertips.",
      image: "/mask-group-2.png",
      position: "top-[608px] left-[309px]",
      titlePosition: "top-[736px] left-[229px]",
      descPosition: "top-[791px] left-[136px]",
    },
    {
      id: 4,
      title: "Renewable",
      description: "Innovating for a greener tomorrow.",
      image: "/mask-group-3.png",
      position: "top-[608px] left-[997px]",
      titlePosition: "top-[736px] left-[913px]",
      descPosition: "top-[791px] left-[888px]",
    },
  ];

  // Expertise domains data - second set
  const expertiseDomainsSet2 = [
    {
      id: 5,
      title: "Blockchain",
      description: "Secure. Transparent.  The future of trust.",
      image: "/Mask group (15).png",
      position: "top-[138px] left-[284px]",
      titlePosition: "top-[266px] left-[195px]",
      descPosition: "top-[319px] left-[175px]",
    },
    {
      id: 6,
      title: "Robotics",
      description: "Bringing ideas to life, one robot at a time.",
      image: "/Mask group (13).png",
      position: "top-[138px] left-[997px]",
      titlePosition: "top-[266px] left-[913px]",
      descPosition: "top-[319px] left-[875px]",
    },
    {
      id: 7,
      title: "IoT",
      description: "Smart connections, smarter living.",
      image: "/Mask group (12).png",
      position: "top-[608px] left-[284px]",
      titlePosition: "top-[736px] left-[195px]",
      descPosition: "top-[791px] left-[195px]",
    },
    {
      id: 8,
      title: "AI Solutions",
      description: "Intelligence that transforms your world.",
      image: "/Mask group (14).png",
      position: "top-[608px] left-[997px]",
      titlePosition: "top-[736px] left-[913px]",
      descPosition: "top-[791px] left-[888px]",
    },
  ];

  // Image sets for the carousel
  const imageSets = [
    {
      topLeft: "/image-20.png",
      bottomLeft: "/image.png",
      bottomRight: "/image-1.png",
      topRight: "/image-24.png",
      domains: expertiseDomainsSet1,
    },
    {
      topLeft: "/image (3).png",
      bottomLeft: "/image (1).png",
      bottomRight: "/image (2).png",
      topRight: "/image (4).png",
      domains: expertiseDomainsSet2,
    }
  ];

  // Footer links
  const footerLinks = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Domains" },
    { id: 4, text: "Solutions" },
    { id: 5, text: "Contact" },
  ];

  // Function to change image set with animation
  const changeImageSet = (newSet: number) => {
    if (currentImageSet === newSet || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageSet(newSet);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Matches the transition duration
    }, 300); // Matches the transition duration
  };

  // Function to go to next image set
  const nextImageSet = () => {
    changeImageSet(1);
  };

  // Function to go to previous image set
  const prevImageSet = () => {
    changeImageSet(0);
  };

  // Transition styles
  const transitionStyles = {
    transition: 'opacity 300ms ease-in-out',
    opacity: isTransitioning ? 0 : 1
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Header Section */}
        <header className="relative w-[1440px] h-[1818px] -left-[47px] -top-[212px]">
          <GroupByAnima />
          <OverlapWrapperByAnima />
          <img
            className="absolute w-[52px] h-[26px] top-[70px] left-[1301px] object-cover"
            alt="England flag"
            src="/england-flag-1.png"
          />
        </header>

        {/* Main Content */}
        <main>
          {/* Group Wrapper Section */}
          <GroupWrapperByAnima />

          {/* Expertise Section */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="font-bold font-['Poppins',Helvetica] text-[#2b34e4] text-[40px] leading-[72.4px]">
                Our Expertise, Your Advantage
              </h2>
              <p className="font-normal font-['Poppins',Helvetica] text-[#4c4c4c] text-[22px] leading-[39.8px] mt-4">
                Our domain of expertise
              </p>
            </div>

            <div className="relative w-[1440px] h-[961px]">
              {/* Background Images with transition effect */}
              <div style={transitionStyles}>
                <img
                  className="w-[721px] h-[480px] top-0 left-0 absolute object-cover"
                  alt="Image"
                  src={imageSets[currentImageSet].topLeft}
                />
                <img
                  className="w-[719px] h-[480px] top-[480px] left-0 absolute object-cover"
                  alt="Image"
                  src={imageSets[currentImageSet].bottomLeft}
                />
                <img
                  className="w-[722px] h-[481px] top-[480px] left-[668px] absolute object-cover"
                  alt="Image"
                  src={imageSets[currentImageSet].bottomRight}
                />
                <img
                  className="w-[722px] h-[480px] top-0 left-[668px] absolute object-cover"
                  alt="Image"
                  src={imageSets[currentImageSet].topRight}
                />

                {/* Overlays */}
                <div className="absolute w-[648px] h-[480px] top-0 left-0 bg-[#00045966]" />
                <div className="absolute w-[722px] h-[480px] top-0 left-[648px] bg-[#00045966]" />
                <div className="absolute w-[722px] h-[481px] top-[480px] left-[648px] bg-[#00045966]" />
                <div className="absolute w-[648px] h-[481px] top-[480px] left-0 bg-[#00045966]" />

                {/* Expertise Domain Items */}
                {imageSets[currentImageSet].domains.map((domain) => (
                  <React.Fragment key={domain.id}>
                    <img
                      className={`absolute w-[95px] h-[95px] ${domain.position}`}
                      alt={`${domain.title} icon`}
                      src={domain.image}
                    />
                    <h3
                      className={`absolute w-[270px] ${domain.titlePosition} font-['Poppins',Helvetica] font-bold text-white text-[27px] text-center leading-normal`}
                    >
                      {domain.title}
                    </h3>
                    <p
                      className={`absolute ${domain.descPosition} font-['Poppins',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[36.2px] text-center`}
                    >
                      {domain.description}
                    </p>
                  </React.Fragment>
                ))}
              </div>

              {/* Navigation Arrows */}
              {currentImageSet === 0 ? (
                <div onClick={nextImageSet} className="cursor-pointer">
                  <img
                    className="absolute w-[127px] h-[259px] top-[354px] left-[1273px]"
                    alt="Ellipse"
                    src="/ellipse-24.svg"
                  />
                  <img
                    className="absolute w-3 h-[17px] top-[471px] left-[1334px]"
                    alt="Polygon"
                    src="/polygon-6.svg"
                  />
                </div>
              ) : (
                <div onClick={prevImageSet} className="cursor-pointer">
                  <img
                    className="absolute w-[127px] h-[259px] top-[348px] left-[-50px] transform rotate-180"
                    alt="Ellipse"
                    src="/ellipse-24.svg"
                  />
                  <img
                    className="absolute w-3 h-[17px] top-[471px] left-[5px] transform rotate-180"
                    alt="Polygon"
                    src="/polygon-6.svg"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="font-bold font-['Poppins',Helvetica] text-[#1d26bf] text-[35px] leading-[72.4px]">
                What our clients say
              </h2>
              <p className="font-normal font-['Poppins',Helvetica] text-[#4c4c4c] text-[20px] leading-[39.8px] mt-2">
                Testimonials
              </p>
            </div>

            <div className="flex justify-center gap-x-16 mt-6">
  {testimonials.map((testimonial) => (
    <div key={testimonial.id} className="relative w-[300px]">
      <div className="absolute w-[150px] h-[150px] top-0 left-[75px] rounded-full border border-solid border-black" />
      
      <img
        className="absolute w-[130px] h-[130px] top-3 left-[85px] object-cover rounded-full"
        alt={`${testimonial.name} profile`}
        src={testimonial.image}
      />

      <Card className="mt-20 rounded-[32px] shadow-[2px_2px_67px_-14px_#00000040]">
        <CardContent className="pt-12 pb-4 px-4">
          <div className="flex justify-center mb-3 mt-8"> {/* Adjusted spacing */}
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                className="w-6 h-[22px] mx-1" 
                alt="Star"
                src={`/star-${testimonial.id * 5 - 5 + star}.png`}
              />
            ))}
          </div>

                      <h3 className="text-center font-['Poppins',Helvetica] font-bold text-black text-[18px] leading-[34px]">
                        {testimonial.name}
                      </h3>

                      <p className="text-center font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-[16px] leading-[24px] mt-1">
                        {testimonial.role}
                      </p>

                      <p className="text-center font-['Poppins',Helvetica] font-light text-[#4c4c4c] text-[14px] leading-[24px] mt-3">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative w-full h-[558px] mt-24">
            <div className="absolute w-[1792px] h-[558px] -left-44">
              <div className="relative h-[558px]">
                <img
                  className="absolute w-[1400px] h-[518px] top-5 left-44"
                  alt="Background"
                  src="/group-1597883119.png"
                />
                <div className="absolute w-[1792px] h-[558px] top-0 left-0 [background:linear-gradient(90deg,rgba(43,52,228,0.9)_0%,rgba(24,29,126,0.9)_50%)]" />
              </div>

              <div className="absolute top-[79px] left-[542px] font-['Poppins',Helvetica] font-bold text-white text-[35px] leading-[72.4px]">
                Partner with Bluejet Engineering
              </div>

              <div className="absolute w-[1172px] top-[197px] left-[256px] font-['Poppins',Helvetica] font-normal text-white text-[25px] text-center leading-[54.3px]">
                Whether you're a startup or an agricultural client, we're ready
                to collaborate. Together, let's build smart and sustainable
                farming solutions with Erwini.
              </div>

              <Button className="absolute w-[327px] h-[87px] top-[380px] left-[682px] bg-white rounded-[50px] p-0 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between w-full px-8">
                  <span className="font-['Poppins',Helvetica] font-semibold text-[#2b34e4] text-[18px] text-center leading-[54.3px]">
                    Collaborate with us
                  </span>
                  <div className="w-[68px] h-[68px] rounded-full bg-[#2b34e4] flex items-center justify-center ml-4">
                    <img
                      className="w-[23px] h-[15px] object-contain"
                      alt="Contact icon"
                      src="/arrow-4.svg"
                    />
                  </div>
                </div>
              </Button>
            </div>
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
                    <li key={link.id}>
                      <a
                        href="#"
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