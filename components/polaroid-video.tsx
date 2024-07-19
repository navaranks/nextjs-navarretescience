"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';

interface PolaroidProps {
  PolaroidImage: string;
  Caption: string;
}

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export default function PolaroidVideo({
  PolaroidImage,
  Caption,
}: PolaroidProps) {
  const [isIosDevice, setIsIosDevice] = useState(false);

  useEffect(() => {
    setIsIosDevice(isIOS());
  }, []);

  const getVideoSrc = (basename: string) => isIosDevice ? `${basename}.mp4` : `${basename}.webm`;

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