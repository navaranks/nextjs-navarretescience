"use client";

import "../globals.css";
import React from "react";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faFileCircleInfo,
  faFolderClosed,
  faHome,
} from "@fortawesome/pro-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BottomMenu from "@/components/bottommenu";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Source_Sans_3 } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Source_Sans_3({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImageLight = "/images/cbanner.webp";
  const heroImageDark = "/images/cbanner-dark.webp";
  const activeColor = "#DA4453";
  const bgGradient = "from-[#ED5565] to-[#DA4453]";
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/chem-home",
      label: "Home",
      icon: <FontAwesomeIcon icon={faHome} size="lg" />,
      isActive: pathname === "/chem-home",
    },
    {
      href: "/chem-schedule",
      label: "Schedule",
      icon: <FontAwesomeIcon icon={faCalendarWeek} size="lg" />,
      isActive: pathname.startsWith("/chem-schedule"),
      sublinks: [
        {
          href: "/chem-schedule/regular",
          label: "Regular Schedule",
          isActive: pathname === "/chem-schedule/regular",
        },
        {
          href: "/chem-schedule/honors",
          label: "Honors Schedule",
          isActive: pathname === "/chem-schedule/honors",
        },
        // Add more sublinks here
      ],
    },
    {
      href: "/chem-info",
      label: "Info",
      icon: <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />,
      isActive: pathname === "/chem-info",
    },
    {
      href: "/chem-handouts",
      label: "Handouts",
      icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />,
      isActive: pathname.startsWith("/chem-handouts"),
      sublinks: [
        {
          href: "/chem-handouts/handouts",
          label: "Handouts",
          isActive: pathname === "/chem-handouts/handouts",
        },
        {
          href: "/chem-handouts/practice-tests",
          label: "Practice Tests",
          isActive: pathname === "/chem-handouts/practice-tests",
        },
      ]
    }
  ];

  useEffect(() => {
    console.log("Current Path:", pathname);
    console.log("Navigation Links:", navLinks);
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <div className="wrapper">
            <main className="main-cointainer ">
              <div className="chem-light dark:chem-dark ">
                <MainNav bgColor={bgGradient} />
                <PageHero
                  ImageSrcLight={heroImageLight}
                  ImageSrcDark={heroImageDark}
                />
                <section className="bg-background min-h-fit h-full w-full">
                  <div className="last:pb-24 md:last:pb-28">
                    {children}
                    <Analytics />
                    </div>
                </section>
                <BottomMenu
                  links={navLinks.map((link) => ({
                    ...link,
                    sublinks: link.sublinks
                      ? link.sublinks.map((sublink) => ({
                          ...sublink,
                          icon: link.icon,
                        }))
                      : undefined,
                  }))}
                  activeColor={activeColor}
                />
              </div>
            </main>
          </div>
        </body>
      </ThemeProvider>
      <SpeedInsights />
    </html>
  );
}
