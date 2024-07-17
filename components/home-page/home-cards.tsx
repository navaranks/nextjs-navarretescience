"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

function HomeCards() {
  const [chemLoaded, setChemLoaded] = useState(false);
  const [physLoaded, setPhysLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [isIosDevice, setIsIosDevice] = useState(false);

  useEffect(() => {
    setIsIosDevice(isIOS());
  }, []);
  
  const getVideoSrc = (basename: string) => isIosDevice ? `${basename}.mp4` : `${basename}.webm`;

  return (
    <div className="flex flex-col md:mb-0 md:flex-row">
      <Link
        href={'/chem-home'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!chemLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <video
          src={getVideoSrc('/images/Chem')}
          autoPlay
          muted
          playsInline
          loop
          className={`w-64 mx-auto ${chemLoaded ? 'block' : 'hidden'}`}
          onCanPlayThrough={() => setChemLoaded(true)}
        />
      </Link>
      <Link
        href={'/phys-home'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!physLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <video
          src={getVideoSrc('/images/cradleloop')}
          autoPlay
          muted
          playsInline
          loop
          className={`w-64 mx-auto ${physLoaded ? 'block' : 'hidden'}`}
          onCanPlayThrough={() => setPhysLoaded(true)}
        />
      </Link>
      <Link
        href={'/about'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!aboutLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <video
          src={getVideoSrc('/images/Aboutlogo')}
          autoPlay
          muted
          playsInline
          loop
          className={`w-64 mx-auto ${aboutLoaded ? 'block' : 'hidden'}`}
          onCanPlayThrough={() => setAboutLoaded(true)}
        />
      </Link>
    </div>
  );
}

export default HomeCards;