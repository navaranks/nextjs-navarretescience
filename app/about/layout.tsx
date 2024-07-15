"use client";

import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImage = "/images/aboutheader.webp";
 
  const bgGradient = 'from-[#AC92EC] to-[#967ADC]';

  return (
    <main className="" >
      <div className="about-light dark:about-dark" >
        <MainNav bgColor={bgGradient}/>
        <PageHero ImageSrcLight={heroImage} ImageSrcDark={heroImage} />
        <section className="bg-background min-h-fit h-full">
          <div className="  last:pb-24 md:last:pb-12">{children}</div>
        </section>
        
      </div>
    </main>
  );
}
