"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';

interface PolaroidProps {
  PolaroidImage: string;
  Caption: string;
}

// iOS and iPadOS Detection Function
const isIOSOrIPadOS = () => {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
  const isIPadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  
  return isIOS || isIPadOS;
};

export default function PolaroidVideo({
  PolaroidImage,
  Caption,
}: PolaroidProps) {
  const [isIosOrIpadDevice, setIsIosOrIpadDevice] = useState(false);

  useEffect(() => {
    setIsIosOrIpadDevice(Boolean(isIOSOrIPadOS()));
  }, []);

  const getVideoSrc = (basename: string) => isIosOrIpadDevice ? `${basename}.mp4` : `${basename}.webm`;

  return (
    <Card className="max-w-md md:max-w-sm w-full shadow-lg m-auto bg-muted">
      <CardContent className="p-4">
        <div className="relative w-full overflow-hidden rounded-lg">
          <video 
            src={getVideoSrc(PolaroidImage)}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full"
          />
        </div>
      </CardContent>
      <CardFooter className="block text-center text-pretty">
        {Caption}
      </CardFooter>
    </Card>
  );
}