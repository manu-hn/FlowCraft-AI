'use client';
import { TEMPLATE_TYPE } from '@/utils/types'
import React, { useState } from 'react'
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

type Props = {
  selectedTemplate?: TEMPLATE_TYPE,
  getUserInputFormData(value: any): void
}

const FormSection = ({ selectedTemplate, getUserInputFormData }: Props) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  async function handleSubmit(e: any) {
    e.preventDefault();
    getUserInputFormData(formData)

  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  return (
    <div className='shadow-md p-[0.75em] rounded-lg  bg-slate-50 border md:max-h-[17.5em]'>
      <Image alt={`${selectedTemplate?.name} icon`} src={`${selectedTemplate?.icon}`} width={75} height={75} />
      <Heading classNames='text-[1em] md:text-[0.75em] font-bold text-primary'>{selectedTemplate?.name}</Heading>
      <p className='md:text-[0.55em]'>{selectedTemplate?.desc}</p>

      <form action="" onSubmit={handleSubmit}>
        {
          selectedTemplate?.form?.map((item) => (
            <div key={item?.label} className='flex flex-col py-[0.25em]'>

              {
                item?.field === 'input' ? (
                  <>
                    <label htmlFor="" className='text-[1em] md:text-[0.55em] mt-[1.25em]' >{item?.label}</label>
                    <Input placeholder='Search here' className='' name={item?.name} required={item?.required} onChange={handleInputChange} />
                  </>
                ) : (
                  <>
                    <label htmlFor="" className='text-[1em] md:text-[0.55em] mt-[1.25em]' >{item?.label}</label>
                    <Textarea placeholder='Description' className='' name={item?.name} required={item?.required} onChange={handleInputChange} />
                  </>
                )
              }
            </div>
          ))
        }
        <Button className='' type='submit'>Create</Button>
      </form>
    </div>
  )
}

export default FormSection;