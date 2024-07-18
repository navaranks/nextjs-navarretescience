"use client";
import "../globals.css";
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
import { ThemeProvider } from "../../components/ui/theme-provider";
import BottomMenu from "@/components/bottommenu";
import BottomNav from "@/components/bottomnav";
import { Source_Sans_3 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Source_Sans_3({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImageLight = "/images/cbanner.webp";
  const heroImageDark = "/images/cbanner-dark.webp";
  const activeColor = "#DA4453";
  const bgGradient = "from-[#ED5565] to-[#DA4453]";
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current Path:", pathname);
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
                  <div className="last:pb-24 md:last:pb-28">{children}</div>
                </section>
                <BottomNav
                  links={[
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
                      isActive: pathname === "/chem-schedule",
                    },
                    {
                      href: "/chem-info",
                      label: "Info",
                      icon: (
                        <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />
                      ),
                      isActive: pathname === "/chem-info",
                    },
                    {
                      href: "/chem-handouts",
                      label: "Handouts",
                      icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />,
                      isActive: pathname === "/chem-handouts",
                    },
                  ]}
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
