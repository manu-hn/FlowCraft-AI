import Heading from '@/components/shared/Heading';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header 
    className='w-full border shadow-sm border-b-2 py-[0.85em] px-[1em] flex 
    flex-col gap-[0.75em] md:gap-[0.5em] md:flex-row items-center justify-between '>
      <div className='flex justify-center border rounded-lg items-center w-full max-w-xl px-3 '>
        <Search />
        <Input type="text" className='border-transparent outline-transparent focus-visible:ring-0 w-full' placeholder='Search...' />
      </div>
      <div className='group cursor-pointer'>
        <Heading 
        classNames='bg-primary text-xs rounded-full py-1 px-[0.85em] text-white group-hover:bg-secondary-foreground  transition-all duration-300 
        '>Become a Member for Just $6.99/Month!</Heading>
      </div>
    </header>
  )
}

export default Header;