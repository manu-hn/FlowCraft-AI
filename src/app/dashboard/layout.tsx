"use client";
import type { DashboardProps } from '@/utils/types';
import React, { useReducer } from 'react'
import SideNavBar from '@/app/dashboard/_components/SideNavBar';
import Header from '@/app/dashboard/_components/Header';
import { CreditsUsageContext, initialState, reducer } from '@/context/CreditsTotalUsageContext';

import { SnackbarProvider } from 'notistack'


const DashboardLayout = ({ children }: DashboardProps) => {
    const [state, dispatch] = useReducer<any>(reducer, initialState);
    return (
        <SnackbarProvider>
            <CreditsUsageContext.Provider value={{ state, dispatch }} >
                <section className='md:flex text-[4vw] md:text-[2vw]'>
                    <div className='sticky left-0 hidden md:w-64 md:block'>
                        <SideNavBar />
                    </div>
                    <div className='block w-full'>
                        <Header />
                        {children}
                    </div>

                </section>
            </CreditsUsageContext.Provider>
        </SnackbarProvider>
    )
}

export default DashboardLayout;