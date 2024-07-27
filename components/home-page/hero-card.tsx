'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function HeroCard() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
      const isIPadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;

      if (isIOS || isIPadOS) {
        setVideoSrc('/images/logo_3.mp4');
      } else {
        setVideoSrc('/images/logo2.webm');
      }
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <Card className="text-center bg-transparent border-none p-4">
      <CardContent className="p-0">
        {!videoLoaded && !videoError && <Skeleton className="h-64 w-[600px] mx-auto" />}
        {videoError && <div className="h-64 w-[600px] mx-auto flex items-center justify-center">Video failed to load</div>}
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
            className={`mx-auto md:w-1/2 ${videoLoaded ? 'block' : 'hidden'}`}
            onCanPlayThrough={handleVideoLoad}
            onError={handleVideoError}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default HeroCard;
