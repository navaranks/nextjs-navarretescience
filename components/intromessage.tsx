"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

import { Skeleton } from './ui/skeleton';

interface IntroMessageProps {
  IntroImageSrcLight: string;
  IntroImageSrcDark: string;
  SchoolYear: string;
  Subject: string;
}
function IntroMessage( {IntroImageSrcLight, IntroImageSrcDark, SchoolYear, Subject}: IntroMessageProps) {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log('Loading Image', loading);
  // }, []);

  const handleImageLoad = () => {
    // console.log('Image Loaded');
    setLoading(false);
  };
  return (
    <div className=' px-4 gap-y-2'>
        <Card className='max-w-screen-xl mx-auto'>
            <CardContent className='flex flex-col md:flex-row px-4 py-3'>
                <div className='mx-auto p-2 dark:hidden '>
                  {loading && <Skeleton className="h-80 w-80 md:w-64 md:h-64 rounded-xl" />}
                    <Image style={{display: loading ? 'none':'block'}} className='dark:hidden' src={IntroImageSrcLight}  width={320} height={320}  alt='Intro Image' onLoad={handleImageLoad} priority loading='eager'/>
                    
                  
                </div>
                <div className='mx-auto p-2 hidden dark:block'>
                  {loading && <Skeleton className="h-80 w-80 md:w-64 md:h-64 rounded-xl" />}
                    
                    <Image style={{display: loading ? 'none':'block'}} className='hidden dark:block' src={IntroImageSrcDark}  width={320} height={320}  alt='Intro Image' onLoad={handleImageLoad} priority loading='eager'/>
                    
                </div>
                <div className='w-full m-auto px-5'>
                    <h1 className='text-3xl font-bold text-center py-2'> WELCOME CLASS OF {SchoolYear}</h1>
                    <p className='text-pretty '>Welcome Scientists to our {Subject} Class Web Page! You are going to be using this page alot so make sure to bookmark it. I am very excited to have all of you in my classroom as we embark on this journey together called {Subject}. We are all going to work together, learn together, and grow together. I hope that you are equally as excited to learn about {Subject} as I am to teach it. Use the tabs below to view our schedule, policies and handouts.</p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default IntroMessage