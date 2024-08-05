"use client";
import "../globals.css";
import BottomNav from "../../components/bottomnav";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarWeek,
  faFileCircleInfo,
  faFolderClosed,
} from "@fortawesome/pro-solid-svg-icons";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { useEffect } from "react";
import { Source_Sans_3 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BottomMenu from "@/components/bottommenu";
config.autoAddCss = false;

const inter = Source_Sans_3({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImageLight = "/images/pbanner.webp";
  const heroImageDark = "/images/pbanner-dark.webp";
  const activeColor = "#4A89DC";
  const bgGradient = "from-[#5D9CEC] to-[#4A89DC]";
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/phys-home",
      label: "Home",
      icon: <FontAwesomeIcon icon={faHome} size="lg" />,
      isActive: pathname === "/phys-home",
    },
    {
      href: "/phys-schedule",
      label: "Schedule",
      icon: <FontAwesomeIcon icon={faCalendarWeek} size="lg" />,
      isActive: pathname === "/phys-schedule",
    },
    {
      href: "/phys-info",
      label: "Info",
      icon: <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />,
      isActive: pathname === "/phys-info",
    },
    {
      href: "/phys-handouts",
      label: "Handouts",
      icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />,
      isActive: pathname.startsWith("/phys-handouts"),
      sublinks: [
        {
          href: "/phys-handouts/handouts",
          label: "Handouts",
          isActive: pathname === "/phys-handouts/handouts",
        },
        {
          href: "/phys-handouts/practice-tests",
          label: "Practice Tests",
          isActive: pathname === "/phys-handouts/practice-tests",
        },
        {
          href: "/phys-handouts/videos",
          label: "Lesson Videos",
          isActive: pathname === "/phys-handouts/videos",
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
            <main className="main-cointainer">
              <div className="phys-light dark:phys-dark">
                <MainNav bgColor={bgGradient} />
                <PageHero
                  ImageSrcLight={heroImageLight}
                  ImageSrcDark={heroImageDark}
                />
                <section className="bg-background min-h-fit h-full">
                  <div className="last:pb-24 md:last:pb-28">{children}</div>
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
