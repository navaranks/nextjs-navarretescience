"use client";
import BottomNav from "../../components/bottomnav";
import PageHero from "../../components/pagehero";
import MainNav from "../../components/mainnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faFileCircleInfo, faFolderClosed, faHome } from "@fortawesome/pro-solid-svg-icons";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import BottomMenu from "@/components/bottommenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImage = "/images/cbanner.webp";
  const activeColor = '#DA4453';
  const bgGradient = 'from-[#ED5565] to-[#DA4453]';
  const pathname = usePathname();

  const navLinks = [
    { href: '/chem-home', label: 'Home', icon: <FontAwesomeIcon icon={faHome} size="lg" />, isActive: pathname === '/chem-home' },
    { href: '/chem-schedule', label: 'Schedule', icon: <FontAwesomeIcon icon={faCalendarWeek} size="lg" />, isActive: pathname.startsWith('/chem-schedule'),
      sublinks: [
        { href: '/chem-schedule/regular', label: 'Regular Schedule', isActive: pathname === '/chem-schedule/regular' },
        { href: '/chem-schedule/honors', label: 'Honors Schedule', isActive: pathname === '/chem-schedule/honors' },
        // Add more sublinks here
      ]
    },
    { href: '/chem-info', label: 'Info', icon: <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />, isActive: pathname === '/chem-info' },
    { href: '/chem-handouts', label: 'Handouts', icon: <FontAwesomeIcon icon={faFolderClosed} size="lg" />, isActive: pathname === '/chem-handouts' },
  ];

  useEffect(() => {
    console.log('Current Path:', pathname);
    console.log('Navigation Links:', navLinks);
  }, [pathname]);

  return (
    <main className="overflow-hidden ">
      <div className="chem-light dark:chem-dark -mr-[calc(100vw-100%)]">
        <MainNav bgColor={bgGradient} />
        <PageHero ImageSrc={heroImage} />
        <section className="bg-background min-h-fit h-full">
          <div className="last:pb-24 md:last:pb-28">{children}</div>
        </section>
        <BottomMenu links={navLinks.map(link => ({
          ...link,
          sublinks: link.sublinks 
            ? link.sublinks.map(sublink => ({ ...sublink, icon: link.icon }))
            : undefined
        }))} activeColor={activeColor} />
      </div>
    </main>
  );
}
