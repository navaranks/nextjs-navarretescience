"use client";
import BottomNav from "../../components/bottomnav";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarWeek, faFileCircleInfo, faFolderClosed } from "@fortawesome/pro-solid-svg-icons";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImageLight = "/images/pbanner.webp";
  const heroImageDark = "/images/pbanner-dark.webp";
  const activeColor = '#4A89DC';
  const bgGradient = 'from-[#5D9CEC] to-[#4A89DC]';
  const pathname = usePathname();

  const navLinks = [
    { href: '/phys-home', label: 'Home', icon: <FontAwesomeIcon icon={faHome} size="lg" />, isActive:pathname === '/phys-home' },
    { href: '/phys-schedule', label: 'Schedule', icon: <FontAwesomeIcon icon={faCalendarWeek} size="lg" />, isActive: pathname === '/phys-schedule' },
    { href: '/phys-info', label: 'Info', icon: <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />, isActive: pathname === '/phys-info' },
    { href: '/phys-handouts', label: 'Handouts', icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />, isActive: pathname === '/phys-handouts' },
  ];
  useEffect(() => {
    console.log('Current Path:', pathname);
    console.log('Navigation Links:', navLinks);
  }, [pathname]);
  return (
    <div className="wrapper">
      <main className="main-cointainer">
        <div className="phys-light dark:phys-dark" >
          <MainNav bgColor={bgGradient}/>
          <PageHero ImageSrcLight={heroImageLight} ImageSrcDark={heroImageDark} />
          <section className="bg-background min-h-fit h-full">
            <div className="last:pb-24 md:last:pb-28">{children}</div>
          </section>
          <BottomNav links={navLinks} activeColor={activeColor} />
        </div>
      </main>
    </div>
  );
}
