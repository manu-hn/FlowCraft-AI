"use clinet";
import React from 'react'
import { Button } from '../ui/button'
import { currentUser } from '@clerk/nextjs/server';

type Props = {}

const CreditUsageTracker = async (props: Props) => {

    

    return (
        <section className='m-[0.2em] '>
            <div className='bg-primary text-white rounded-lg py-[0.5em] border-2 '>
                <h3 className='text-[0.6em] py-[0.25em] px-[0.5em]'>Credits</h3>
                <div className='h-2 bg-[#9981f9]  rounded-full my-[0.5em] mx-[0.5em] '>
                    <div className="h-2 bg-white rounded-full"
                        style={{ width: "35%" }}
                    ></div>
                    <h2 className='text-[0.4em] my-[0.75em]'> 350/1000 credits used</h2>
                </div>
            </div>
            <Button variant={'secondary'} className=' text-[0.55em] w-full rounded-lg py-[0.25em] text-primary'>Upgrade</Button>

        </section>
    )
}

export default CreditUsageTracker