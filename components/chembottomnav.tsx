import React from 'react';
import Link from 'next/link';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactElement;
  isActive: boolean;
}

interface BottomNavProps {
  links: NavItem[];
  activeColor: string;
}

const ChemBottomNav: React.FC<BottomNavProps> = ({ links, activeColor }) => {
  return (
    <div className="fixed bottom-0 w-full py-3 md:py-5 z-10 bg-primary-foreground border-t dark:border-zinc-800 border-zinc-200 shadow-lg transform duration-500">
      <div className="flex flex-row items-center justify-around max-w-screen-xl px-4 mx-auto bg-transparent md:px-8">
        <Link href="/chem-home" className="relative flex flex-col items-center justify-center">
          {React.cloneElement(links[0].icon, { color: links[0].isActive ? activeColor : undefined })}
          <span>Home</span>
        </Link>
        <Link href="/chem-schedule" className="relative flex flex-col items-center justify-center">
          {React.cloneElement(links[1].icon, { color: links[1].isActive ? activeColor : undefined })}
          <span>Schedule</span>
        </Link>
        <Link href="/chem-info" className="relative flex flex-col items-center justify-center">
          {React.cloneElement(links[2].icon, { color: links[2].isActive ? activeColor : undefined })}
          <span>Info</span>
        </Link>
        <Link href="/chem-handouts" className="relative flex flex-col items-center justify-center">
          {React.cloneElement(links[3].icon, { color: links[3].isActive ? activeColor : undefined })}
          <span>Handouts</span>
        </Link>
      </div>
    </div>
  );
};

export default ChemBottomNav;
