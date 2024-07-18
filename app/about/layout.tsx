"use client";
import "../globals.css";
import { Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "../../components/ui/theme-provider";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Source_Sans_3({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImage = "/images/aboutheader.webp";

  const bgGradient = "from-[#AC92EC] to-[#967ADC]";

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <main className="">
            <div className="about-light dark:about-dark">
              <MainNav bgColor={bgGradient} />
              <PageHero ImageSrcLight={heroImage} ImageSrcDark={heroImage} />
              <section className="bg-background min-h-fit h-full">
                <div className="  last:pb-24 md:last:pb-12">{children}</div>
              </section>
            </div>
          </main>
        </body>
      </ThemeProvider>
      <SpeedInsights />
    </html>
  );
}
