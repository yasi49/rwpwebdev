import React from 'react';
import { Avataruser } from './Avataruser';
import Manu from './Manu';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import  Link from "next/link";


export default function Navbar() {
  return (
    <header className='grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between items-center w-screen px-3 py-1 border-b' >
      <div className=' flex justify-center gap-x-3'>
      

      <div>
          <Sheet>
                <SheetTrigger>
                <HamburgerMenuIcon className='md:hidden h-6 w-8 text-gray-400  rounded-md mt-2' />
                </SheetTrigger>

                <SheetContent side={'left'} className='w-50 sm:w-64'>

                  <div className='flex flex-col gap-y-4'>

                    <Button variant={"ghost"} size={'sm'}>
                      <Link href={'/'} className='text-lg font-medium'>Home</Link>
                    </Button>

                    <Button variant={"ghost"} size={'sm'}>
                      <Link href={'/profile'} className='text-lg font-medium '>Profile</Link>
                    </Button>

                    <Button variant={"ghost"} size={'sm'}>
                      <Link href={'/'} className='text-lg font-medium'>Blogs</Link>
                    </Button>

                  </div>
                
                </SheetContent>
            </Sheet>


      </div>
        <Avataruser/>
        
      </div>
      

      <div className='hidden md:flex justify-center gap-x-3'>
        <Manu />
      </div>

      <div className='flex justify-self-start'>
      <Button className='mr-3' variant={'ghost'}>Get in Touch</Button>
      </div>
      
      
    </header>
  )
}
