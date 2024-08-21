'use client';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { db } from '@/model/db';
import { GeminiOutpuSchema } from '@/model/schema';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { HISTORY_TYPE } from '@/utils/types';
import { CreditsUsageContext } from '@/context/CreditsTotalUsageContext';



const CreditUsageTracker = () => {
    const [totalUsage, setTotalUsage] = useState<number>(0);
    const { user } = useUser();
    const { state, dispatch } = useContext(CreditsUsageContext);

    useEffect(() => {
        user && getData();
    }, [user])


    const getData = async () => {
        {/* @ts-ignore */ }
        const results: Array<HISTORY_TYPE> = await db.select().from(GeminiOutpuSchema)
            .where(eq(GeminiOutpuSchema.createdBy, user?.primaryEmailAddress?.emailAddress));

        GetTotalUsage(results)
    }
    function GetTotalUsage(results: Array<HISTORY_TYPE>) {
        console.log(results)
        let totalNumbers: number = 0;
        results.forEach((ele) => (
            totalNumbers += Number(ele?.gemeiniResponse?.length)
        ));
        setTotalUsage(totalNumbers);

    }


    return (
        <section className='m-[0.2em] '>
            <div className='bg-primary text-white rounded-lg py-[0.5em] border-2 '>
                <h3 className='text-[0.6em] py-[0.25em] px-[0.5em]'>Credits</h3>
                <div className='h-2 bg-[#9981f9]  rounded-full my-[0.5em] mx-[0.5em] '>
                    <div className="h-2 bg-white rounded-full"
                        style={{ width: (totalUsage / 10000) * 100 + "%" }}
                    ></div>
                    <h2 className='text-[0.4em] my-[0.75em]'> {totalUsage}/10000 credits used</h2>
                </div>
            </div>
            <Button variant={'secondary'} className=' text-[0.55em] w-full rounded-lg py-[0.25em] text-primary'>Upgrade</Button>

        </section>
    )
}

export default CreditUsageTracker