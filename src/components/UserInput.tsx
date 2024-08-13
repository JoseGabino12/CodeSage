import { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from 'react-simple-code-editor';
import prismCore from 'prismjs/components/prism-core';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';

import { useStore } from '@nanostores/react';
import { codeStore } from '../store/codeReviewStore';

import { ShowIcon } from '../icons/ShowIcon';

const { highlight, languages } = prismCore;

export const UserInput = () => {
  const [review, setReview] = useState(false);
  const [error, setError] = useState('');

  const code = useStore(codeStore);
  const maxChars = 500;

  const handleClick = () => {
    setReview(!review);
  };

  const handleChange = (value: string) => {
    if (value.length > maxChars) {
      codeStore.set(value.slice(0, maxChars));
      setError(`Character limit reached: ${maxChars}/${maxChars}`);
    } else {
      codeStore.set(value);
      setError(`${value.length}/${maxChars} characters used`);
    }
  };

  return (
    <>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: review ? 0 : 600,
          opacity: review ? 0 : 1,
          display: review ? 'none' : 'block',
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          overflow: 'hidden',
          width: '100%',
          padding: '10px',
        }}
      >
        <Editor
          id="inputCode"
          value={code}
          onValueChange={handleChange}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            height: '100%',
            width: '100%',
            color: 'white',
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: '#282c34',
            border: '1px solid #333',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            outline: 'none',
            whiteSpace: 'pre',
            lineHeight: '1.5',
            zIndex: 0,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: review ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ marginTop: '10px' }}
      >
        {error}
      </motion.div>

      <div className="flex gap-5 flex-col m-5 w-full items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-md border border-solid border-black dark:border-white"
          onClick={handleClick}
        >
          {review ? <ShowIcon height={32} width={32} /> : 'Review'}
        </motion.button>
      </div>
    </>
  );
};