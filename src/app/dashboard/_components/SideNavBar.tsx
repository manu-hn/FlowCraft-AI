'use client';
import { MENU_LIST } from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {}

const SideNavBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className='h-screen border shadow-lg'>
      <div className='flex items-center py-[0.75em] '>
        <Image priority={true} src={`/assets/logos/FlowCraftAI.webp`} alt='FlowCraft AI Logo' width={500} height={100} />

      </div>
      <nav className=' border-t'>
        {
          MENU_LIST?.map((item) => (
            <Link key={item?.id} href={item.path}
              className={`flex w-full gap-4 hover:${pathname === item?.path ? "bg-primary text-white" : "bg-gray-100"}
               hover:font-semibold items-center px-[0.25em]
              hover:text-black py-[0.1em] my-[0.3em] rounded-lg ${pathname === item?.path && "bg-primary"}`}>
              
              <item.icon className='text-[0.75em]' />
              <p className='text-[0.75em]'>{item.title}</p>
            </Link>

          ))
        }
      </nav>
    </section>
  )
}

export default SideNavBar;