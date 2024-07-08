import React from 'react'
import { AtomIcon } from 'lucide-react'

function IconDivider() {
  return (
    <div className='flex items-center w-full mx-4'>
        <div className='flex-grow h-0.5 bg-[#F6bb42]'></div>
        <div className='mx-2'>
            <AtomIcon className='text-[#F6bb42]' size={24} />
        </div>
        <div className='flex-grow h-0.5 bg-[#F6bb42]'></div>
    </div>
  )
}

export default IconDivider