
import React from "react";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/theme-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMoonOverSun, faHouse, faPersonChalkboard, faPlanetMoon, faFlaskRoundPotion } from '@fortawesome/pro-duotone-svg-icons'
import { faBarsSort, faSun } from '@fortawesome/pro-solid-svg-icons'
import { ThemeButton } from "./ui/theme-button";
import { Button } from "./ui/button";

export default function MainNav({ bgColor = "bg-white" }) {
  const menus = [
    {
      icon: <FontAwesomeIcon icon={faHouse} swapOpacity size="lg" />,
      title: "Home",
      path: "/",
      bgGradient: "from-[#656D78] to-[#434A54]",
    },
    {
      icon: <FontAwesomeIcon icon={faFlaskRoundPotion} swapOpacity size="lg" />,
      title: "Chemistry",
      path: "/chem-home",
      bgGradient: "from-[#ED5565] to-[#DA4453]",
    },
    {
      icon: <FontAwesomeIcon icon={faPlanetMoon} size="lg" />,
      title: "Physics",
      path: "/phys-home",
      bgGradient: "from-[#5D9CEC] to-[#4A89DC]",
    },
    {
      icon: <FontAwesomeIcon icon={faPersonChalkboard} swapOpacity size="lg" />,
      title: "About Me",
      path: "/about",
      bgGradient: "from-[#AC92EC] to-[#967ADC]",
    },
  ];

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`bg-gradient-to-b ${bgColor} w-full border-b md:border-0`}>
      <div className="max-w-screen-xl w-screen px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between py-2 md:py-4 transform duration-500 ">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">
              Navarrete Science
            </h1>
          </Link>
          {isDesktop ? (
            <div className="flex items-center space-x-6 h-10">
              <ul className="items-center hidden space-x-6 md:flex">
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-lg font-bold text-white hover:text-accent "
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <ThemeButton /> 
            </div>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-input outline-none focus:outline-none">
                  <FontAwesomeIcon icon={faBarsSort} size="lg" color="white" flip="horizontal" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="py-4 pl-4 justify-between">
                <Card className="drop-shadow-lg border-none">
                  <CardHeader>
                    <CardTitle>Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {menus.map((item, idx) => (
                        <li key={idx} className="w-full">
                          <Link
                            href={item.path}
                            className="flex justify-between items-center p-2 rounded-md hover:bg-accent focus:bg-accent"
                          >
                            <div className="flex items-center">
                              <div
                                className={`h-8 w-8 bg-gradient-to-b ${item.bgGradient} rounded-sm mr-2 flex justify-center items-center`}
                              >
                                {React.cloneElement(item.icon, {
                                  color: "white",
                                })}
                              </div>
                              <span className="text-md">{item.title}</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} swapOpacity className="mr-2 h-5 w-5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center ">
                        <FontAwesomeIcon icon={faSun} size="xl" color="gold" className="dark:hidden" swapOpacity />
                        <FontAwesomeIcon icon={faMoonOverSun} size="xl" color="dodgerblue" className="hidden dark:block" />
                        <span className="ml-2">Dark Mode</span>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </nav>
  );
}
