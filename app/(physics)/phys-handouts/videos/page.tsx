import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import React from 'react'

function PhysicsVideos() {
  return (
    <div className='flex flex-col px-4 gap-y-2'>
      <Card className='max-w-screen-xl w-full mx-auto'>
        <CardHeader className='text-center text-2xl py-2 px-4 font-extrabold'>Class Videos</CardHeader>
        <CardDescription className='text-center pb-2'>Here is a list of videos that may be useful throughout the year!</CardDescription>
      </Card>
      </div>
  )
}

export default PhysicsVideos