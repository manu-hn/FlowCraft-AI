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
      <div className='flex items-center'>
        <Image priority={true} src={`/assets/logos/FlowCraftAI.webp`} alt='FlowCraft AI Logo' width={500} height={100} />

      </div>
      <nav className='mt-4 border-t'>
        {
          MENU_LIST?.map((item) => (
            <Link key={item?.id} href={item.path}
              className={`flex w-full gap-4 hover:bg-gray-100 hover:font-semibold 
              hover:text-black py-3 px-6 my-2 rounded-lg ${pathname === item?.path && "bg-primary"}`}>
              {React.createElement(item.icon)}
              <p>{item.title}</p>
            </Link>

          ))
        }
      </nav>
    </section>
  )
}

export default SideNavBar;