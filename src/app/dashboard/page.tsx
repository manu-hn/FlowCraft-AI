"use client";
import React, { useState } from 'react';
import SearchBar from '@/components/dashboard/SearchBar';
import TemplateList from '@/components/dashboard/TemplateListComponent';

type Props = {};

const DashBoard = (props: Props) => {
  const [userSearchInput, setUserSearchInput] = useState<string | null>(null);
 

  return (
    <section className='text-[4vw] md:text-[2vw]'>
      <SearchBar onSearchUserInput={setUserSearchInput} />
      <TemplateList userSearchInput={userSearchInput} />
    </section>
  );
};

export default DashBoard;
