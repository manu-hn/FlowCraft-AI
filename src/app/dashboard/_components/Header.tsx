import Heading from '@/components/shared/Heading';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full border shadow-sm border-b-2 py-3 px-6 flex items-center justify-between'>
      <div className='flex justify-center border rounded-lg items-center w-full max-w-xl px-3'>
        <Search />
        <Input type="text" className='border-transparent outline-transparent focus-visible:ring-0 w-full' placeholder='Search...' />
      </div>
      <div>
        <Heading classNames='bg-primary text-xs rounded-full py-1 px-6 text-white'>Become a Member for Just $6.99/Month!</Heading>
      </div>
    </header>
  )
}

export default Header;