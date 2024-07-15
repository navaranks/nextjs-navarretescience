"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function HomeCards() {
  const [chemLoaded, setChemLoaded] = useState(false);
  const [physLoaded, setPhysLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);

  return (
    <div className="flex flex-col md:mb-0 md:flex-row">
      <Link
        href={'/chem-home'}
        className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30"
      >
        {!chemLoaded && <Skeleton className="w-64 h-64 mx-auto" />}
        <video
          src='/images/Chem.webm'
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
          src='/images/cradleloop.webm'
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
          src='/images/Aboutlogo.webm'
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