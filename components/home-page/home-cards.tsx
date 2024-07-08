import Link from 'next/link'
import React from 'react'

function HomeCards() {
  return (
    <div className="flex flex-col  md:mb-0 md:flex-row">
        <Link href={'/chem-home'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30">
          <video src='/images/Chem.webm' autoPlay muted loop className='w-64 mx-auto '/>
        </Link>
        <Link href={'/phys-home'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-neutral-700 hover:bg-neutral-800/30">
          <video src='/images/cradleloop.webm' autoPlay muted loop className='w-64 mx-auto '/>
        </Link>
        <Link href={'/about'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group  hover:dark:border-neutral-700 hover:bg-neutral-800/30">
          <video src='/images/Aboutlogo.webm' autoPlay muted loop className='w-64 mx-auto '/>
        </Link>
      </div>
  )
}

export default HomeCards