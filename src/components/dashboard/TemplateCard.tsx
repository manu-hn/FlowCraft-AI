import { TEMPLATE_TYPE, } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Heading from '../shared/Heading'



const TemplateCard = ({ aiPrompt, category, desc, form, icon, name, slug }: TEMPLATE_TYPE) => {
  
    return (
        <div className='p-[0.3em] flex border rounded-md shadow-lg bg-white flex-col cursor-pointer gap-[0.25em] hover:scale-105 transition-all duration-300'>
            <Image alt={`${name}`} src={icon} width={50} height={50} />
            <Heading classNames='text-[0.65em] font-semibold'>{name}</Heading>
            <p className='text-[0.55em] text-gray-500 line-clamp-3'>{desc}</p>
        </div>
    )
}

export default TemplateCard