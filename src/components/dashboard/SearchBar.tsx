'use client';
import Heading from '@/components/shared/Heading';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useRef } from 'react';

type Props = {
  onSearchUserInput(value: string): void;
};

const SearchBar = ({ onSearchUserInput }: Props) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      onSearchUserInput(e.target.value);
    }, 500);
  }

  return (
    <section
      className='p-[1em] bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600
    flex flex-col justify-center items-center text-white'
    >
      <Heading classNames='text-[0.85em] font-bold'>Browse All Templates</Heading>
      <p className='text-[0.55em]'>What can we craft today?</p>
      <div className='w-full flex justify-center my-[0.3em]'>
        <div className='flex gap-[0.3em] items-center border rounded-md px-[0.25em] w-[80%] md:w-[40%]'>
          <Search className='size-[1.25em] md:size-[0.75em]' />
          <Input
            type='text'
            placeholder='Search...'
            className='border-none placeholder:text-white focus-visible:ring-0'
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
