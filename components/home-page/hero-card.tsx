'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function HeroCard() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <Card className='text-center bg-transparent border-none p-4'>
      <CardContent className='p-0'>
        {!videoLoaded && <Skeleton className="h-64 w-[600px] mx-auto" />}
        <video
          src='/images/logo2.webm'
          autoPlay
          muted
          playsInline
          loop
          className={`mx-auto md:w-1/2 ${videoLoaded ? 'block' : 'hidden'}`}
          onCanPlayThrough={handleVideoLoad}
        />
      </CardContent>
    </Card>
  );
}

export default HeroCard;
