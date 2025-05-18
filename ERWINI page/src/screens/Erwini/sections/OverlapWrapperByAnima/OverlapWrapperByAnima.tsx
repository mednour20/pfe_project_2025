import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Navigation items data
  const navigationItems = [
    { label: "About", href: "#" },
    { label: "Products", href: "#" },
    { label: "Domains", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="relative w-full h-[570px] bg-[url(/rectangle-176.png)] bg-cover bg-center">
      <div className="relative h-full">
        <div className="flex justify-between items-center pt-14 px-20">
          <img
            className="w-[173px] h-[42px]"
            alt="Logo blue JET"
            src="/logo-blue-jet-whiteeee-1-1.png"
          />

          <NavigationMenu className="ml-[319px]">
            <NavigationMenuList className="flex gap-[126px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-['Poppins',Helvetica] font-bold text-white text-base"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center ml-auto">
            <img
              className="w-[55px] h-[37px] object-cover"
              alt="Language selector"
              src="/image-15.png"
            />
            <img
              className="w-[11px] h-[9px] ml-3"
              alt="Dropdown indicator"
              src="/polygon-5.svg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100px]">
          <h1 className="font-['Poppins',Helvetica] font-semibold text-white text-[80px] tracking-[3.20px] leading-[113.6px]">
            ERWINI
          </h1>
          <p className="font-['Poppins',Helvetica] font-light text-white text-[32px] tracking-[1.28px] leading-[45.4px] mt-4">
            Smart Irrigation for a Sustainable Future
          </p>
        </div>
      </div>
    </header>
  );
};
