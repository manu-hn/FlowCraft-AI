'use client';
import React, { useEffect, useState } from 'react';
import Template from "@/app/(data)/Template"
import type { TEMPLATE_TYPE } from '@/utils/types';
import TemplateCard from './TemplateCard';

type Props = {
    userSearchInput: string | null;
}

const TemplateList = ({ userSearchInput }: Props) => {
    const [templateList, setTemplateList] = useState(Template);

    useEffect(() => {
        if(userSearchInput){
            const filteredList = Template.filter(template => template.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filteredList);
        }else{
            setTemplateList(Template);
        }
    
    }, [userSearchInput])

    return (
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.55em] p-[0.75em]'>
            {
                templateList?.map((template: TEMPLATE_TYPE, index: number) => (
                    <TemplateCard key={template?.name} {...template} />
                ))
            }
        </section>
    )
}

export default TemplateList