'use client';
import CreditUsageTracker from '@/components/dashboard/CreditUsageTracker';
import { MENU_LIST } from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {}

const SideNavBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className=' border shadow-lg h-screen sticky left-0 top-0'>
      <div className='flex items-center py-[0.75em] '>
        <Image priority={true} src={`/assets/logos/FlowCraftAI.webp`} alt='FlowCraft AI Logo' width={500} height={100} />

      </div>
      <div className=' border-t flex flex-col justify-between h-[75%]'>
        <nav className=' border-t'>
          {
            MENU_LIST?.map((item) => (
              <Link key={item?.id} href={item.path}
                className={`flex w-full gap-4 hover:${pathname === item?.path ? "bg-primary text-white" : "bg-gray-100"}
               hover:font-semibold items-center px-[0.25em]
              hover:text-black py-[0.1em] my-[0.3em] rounded-lg ${pathname === item?.path && "bg-primary"}`}>

                <item.icon className='text-[0.75em]' />
                <p className='text-[0.6em]'>{item.title}</p>
              </Link>

            ))
          }
        </nav>

        <div>
          <CreditUsageTracker />
        </div>
      </div>
    </section>
  )
}

export default SideNavBar;