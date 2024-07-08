"use client";
import BottomNav from "../../components/bottomnav";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faFileCircleInfo, faFolderClosed, faHome } from "@fortawesome/pro-solid-svg-icons";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImage = "/images/cbanner.webp";
  const activeColor = '#DA4453';
  const bgGradient = 'from-[#ED5565] to-[#DA4453]';
  const pathname = usePathname();

  const navLinks = [
    { href: '/chem-home', label: 'Home', icon: <FontAwesomeIcon icon={faHome} size="lg" />, isActive: pathname === '/chem-home' },
    { href: '/chem-schedule', label: 'Schedule', icon: <FontAwesomeIcon icon={faCalendarWeek} size="lg" />, isActive: pathname === '/chem-schedule' },
    { href: '/chem-info', label: 'Info', icon: <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />, isActive: pathname === '/chem-info' },
    { href: '/chem-handouts', label: 'Handouts', icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />, isActive: pathname === '/chem-handouts' },
  ];

  useEffect(() => {
    console.log('Current Path:', pathname);
    console.log('Navigation Links:', navLinks);
  }, [pathname]);

  return (
    <main className="">
      <div className="chem-light dark:chem-dark">
        <MainNav bgColor={bgGradient} />
        <PageHero ImageSrc={heroImage} />
        <section className="bg-background min-h-fit h-full">
          <div className="  last:pb-24 md:last:pb-28">{children}</div>
        </section>
        <BottomNav links={navLinks} activeColor={activeColor} />
      </div>
    </main>
  );
}
