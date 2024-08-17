'use client';
import FormSection from '@/components/form-component/FormSection';
import OutPutSection from '@/components/form-component/OutPutSection';
import { TEMPLATE_LIST_DATA } from '@/utils/data';
import { TEMPLATE_TYPE } from '@/utils/types';
import React from 'react'

type Props = {
  params: {
    "template-slug": string;
  }
}

const NewContentForm = ({ params }: Props) => {

  const selectedTemplate: TEMPLATE_TYPE | undefined = TEMPLATE_LIST_DATA.find((item) => item?.slug === params?.['template-slug']);

  function generateDataFromAI(data: any) {
    console.log(data)
  }
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-[2em] p-[1em] '>
      <FormSection selectedTemplate={selectedTemplate} getUserInputFormData={(value: any) => generateDataFromAI(value)} />
      <div className='col-span-2'>
        <OutPutSection />
      </div>
    </section>
  )
}

export default NewContentForm