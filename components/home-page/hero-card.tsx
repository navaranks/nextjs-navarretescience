import React from 'react'
import { Card, CardContent } from '../ui/card'

function HeroCard() {
  return (
    <Card className=' text-center bg-transparent border-none p-4'>
        <CardContent className='p-0'>
            <video src='/images/logo2.webm' autoPlay muted loop  className='mx-auto md:w-1/2' />
        </CardContent>
    </Card>
  )
}

export default HeroCard