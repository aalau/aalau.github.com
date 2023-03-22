import React, { useEffect, useState } from 'react'
import './header.scss'
import { motion, AnimatePresence } from 'framer-motion';
//import { images } from '../../resources';


const items = [
  {
    id: 1,
    content: "software solutions."
  },
  {
    id: 2,
    content: "c# apps in .net"
  },
  {
    id: 3,
    content: "data analysis notebooks in python"
  },
  {
    id: 4,
    content: "websites using react"
  },
  {
    id: 5,
    content: "engaging user experiences"
  },

];


const Header = () => {
  const [index, setIndex] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        setIndex((state) => {
          if (state >= items.length - 1) return 0;
          return state + 1;
        });
      }, 5000);
      return () => clearInterval(id);
    }, []);

      // https://codesandbox.io/s/tuw5p?file=/src/Test01.js:579-1005
  return (
    <div className='app_header app_flex'>
      <h1>Aaron Lau</h1>
      <div className='inline'>
        <div className='text'>I design</div>
        <div className='animate text' style={{ position: "relative" }}>
        <AnimatePresence>
          <motion.div
            key={items[index].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            {items[index].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <h2>I am a software engineer.</h2>
    </div>
  )
}

export default Header