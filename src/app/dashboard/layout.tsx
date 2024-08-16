import type { DashboardProps } from '@/utils/types';
import React from 'react'
import SideNavBar from '@/app/dashboard/_components/SideNavBar';
import Header from '@/app/dashboard/_components/Header';



const DashboardLayout = ({ children }: DashboardProps) => {
    return (
        <section className='md:flex'>
            <div className='sticky left-0 hidden md:w-64 md:block'>
                <SideNavBar />
            </div>
            <div className='block w-full'>
                <Header />
                {children}
            </div>

        </section>
    )
}

export default DashboardLayout;