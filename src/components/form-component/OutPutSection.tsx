"use client";
import { Button } from '../ui/button';
import Heading from '../shared/Heading';
import { CopyIcon } from '@radix-ui/react-icons';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';

type OutPutProps = {
  geminiResults: string;
}

const OutPutSection = ({ geminiResults }: OutPutProps) => {
  const editorRef: any = useRef(null);
  

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(geminiResults)
  }, [geminiResults])

  return (
    <div className='md:max-h-[17.5em] bg-[#FFF] border shadow-md py-[0.75em]'>
      <div className='flex justify-between px-[0.75em]'>
        <Heading classNames=''>Results:</Heading>
        <Button><CopyIcon className='mx-[0.5em]' /> Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your results will be reflected here"
        height="15em"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />

    </div>
  );
};

export default OutPutSection;
