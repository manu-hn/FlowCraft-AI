'use client';
import FormSection from '@/components/form-component/FormSection';
import OutPutSection from '@/components/form-component/OutPutSection';
import { chatSession } from '@/model/GeminiAiModel';
import { TEMPLATE_LIST_DATA } from '@/utils/data';
import { TEMPLATE_TYPE } from '@/utils/types';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {
  params: {
    "template-slug": string;
  }
}

const NewContentForm = ({ params }: Props) => {
  const [geminiResults, setGeminiResults] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const selectedTemplate: TEMPLATE_TYPE | undefined = TEMPLATE_LIST_DATA.find((item) => item?.slug === params?.['template-slug']);

  async function generateDataFromAI(data: any) {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalPromptForGemini = JSON.stringify(data) + " , " + SelectedPrompt;

    const results = await chatSession.sendMessage(FinalPromptForGemini);
    setGeminiResults(results?.response?.text())
    setLoading(false);
  }
  return (
    <section className=''>
      <Link href={'/dashboard'}
        className='flex items-center text-[0.5em] bg-orange-500 text-white w-[8em] justify-center m-[1em] rounded-md py-[0.35em]'>
        <ArrowLeftIcon className='mx-[0.25em]' /> Back
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[2em] p-[1em] '>
        <FormSection selectedTemplate={selectedTemplate} getUserInputFormData={(value: any) => generateDataFromAI(value)} loading={loading} />
        <div className='col-span-2'>
          <OutPutSection geminiResults={geminiResults} />
        </div>
      </div>
    </section>
  )
}

export default NewContentForm