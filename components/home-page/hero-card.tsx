'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function HeroCard() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/images/logo2.webm');

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    if (isIOS) {
      setVideoSrc('/images/logo2.mov');
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <Card className='text-center bg-transparent border-none p-4'>
      <CardContent className='p-0'>
        {!videoLoaded && <Skeleton className="h-64 w-[600px] mx-auto" />}
        <video
          src={videoSrc}
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