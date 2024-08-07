'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function HeroCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Card className="text-center bg-transparent border-none p-4">
      <CardContent className="p-0">
        {!imageLoaded && <Skeleton className="h-64 w-[600px] mx-auto" />}
        <div className='w-full md:w-1/2 mx-auto'>
        <Image
          src="/images/compressedlogo.gif"
          alt="Hero Image"
          width={1600}
          height={500}
          onLoadingComplete={handleImageLoad}
          loading='eager'
          style={{width: '100%', height: '100%'}}
          className={` ${imageLoaded ? 'block' : 'hidden'}`}
        />
        </div>
      </CardContent>
    </Card>
  );
}

export default HeroCard;
