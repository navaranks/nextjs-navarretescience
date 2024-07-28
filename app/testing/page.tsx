import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { MenubarContent, MenubarItem } from '@radix-ui/react-menubar'
import Link from 'next/link'
import React from 'react'
import "../globals.css";
import { HomeIcon } from 'lucide-react';

function Testing() {
  return (
    <div className='w-full'>
        <nav className='fixed bottom-0 w-full border-t  bg-primary-foreground'>
            <div className='mx-auto flex h-20 max-w-screen-xl items-center justify-around px-6'>
                <Menubar className='w-full justify-between h-auto'>
                    <MenubarMenu>
                        <MenubarTrigger className='w-full'>
                            <div className='flex flex-col justify-between items-center mx-auto'>
                                <HomeIcon className='h-6 w-6 item' />
                                <Link href='/'>Home</Link>
                            </div>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='w-full '>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                                <HomeIcon className='h-6 w-6 item' />
                                Schedule
                            </div>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem >
                                <Link href='/chem-schedule/honors'>Honors Schedule</Link>
                            </MenubarItem>
                            <MenubarItem >
                                <Link href='/chem-schedule/regular'>Regular Schedule</Link>
                                
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='w-full'>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                                <HomeIcon className='h-6 w-6 item' />
                                <Link href='/'>Info</Link>
                            </div>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='w-full'>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                                <HomeIcon className='h-6 w-6 item' />
                                Handouts
                            </div>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem >
                                <Link href='/chem-handouts/handouts'>Handouts</Link>
                            </MenubarItem>
                            <MenubarItem >
                                <Link href='/chem-handouts/practice-tests'>Practice Tests</Link>
                                
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </nav>
    </div>
  )
}

export default Testing
