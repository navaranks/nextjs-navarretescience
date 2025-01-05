'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

function HomeCards() {
  const [chemLoaded, setChemLoaded] = useState(false);
  const [physLoaded, setPhysLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);

  const handleImageLoad = (setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col md:mb-0 md:flex-row">
      <Link
        href={'/chem-home'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!chemLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <Image
          src="/images/Chem.png"
          alt="Chemistry"
          width={256}
          height={256}
          loading='eager'
          onLoad={handleImageLoad(setChemLoaded)}
          className={`w-64 mx-auto ${chemLoaded ? 'block' : 'hidden'}`}
        />
      </Link>
      <Link
        href={'/phys-home'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!physLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <Image
          src="/images/cradle.png"
          alt="Physics"
          width={256}
          height={256}
          loading='eager'
          onLoad={handleImageLoad(setPhysLoaded)}
          className={`w-64 mx-auto ${physLoaded ? 'block' : 'hidden'}`}
        />
      </Link>
      <Link
        href={'/about'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!aboutLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <Image
          src="/images/aboutlogo.png"
          alt="About"
          width={256}
          height={256}
          loading='eager'
          onLoad={handleImageLoad(setAboutLoaded)}
          className={`w-64 mx-auto ${aboutLoaded ? 'block' : 'hidden'}`}
        />
      </Link>
    </div>
  );
}

export default HomeCards;
