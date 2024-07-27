"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// iOS and iPadOS Detection Function
const isIOSOrIPadOS = () => {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
  const isIPadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  
  return isIOS || isIPadOS;
};

function HomeCards() {
  const [chemLoaded, setChemLoaded] = useState(false);
  const [physLoaded, setPhysLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [isIosOrIpadDevice, setIsIosOrIpadDevice] = useState(false);

  useEffect(() => {
    setIsIosOrIpadDevice(Boolean(isIOSOrIPadOS()));
  }, []);

  const getVideoSrc = (basename: string) => isIosOrIpadDevice ? `${basename}.mp4` : `${basename}.webm`;

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
          onError={() => setChemLoaded(false)} // Ensure it’s set to a boolean
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
          onError={() => setPhysLoaded(false)} // Ensure it’s set to a boolean
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
          onError={() => setAboutLoaded(false)} // Ensure it’s set to a boolean
        />
      </Link>
    </div>
  );
}

export default HomeCards;