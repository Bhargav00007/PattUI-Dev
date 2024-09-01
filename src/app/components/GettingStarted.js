import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GettingStarted = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.6; // 60% of the viewport height

      const element = document.getElementById('cards-container');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold flex justify-center mb-20 mt-20">Getting Started</h1>
      <div id="cards-container" className="relative h-screen flex items-center justify-center">

        {/* Vertical Line (Hidden on md and smaller screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 hidden md:block"></div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className="lg:h-[12rem] lg:w-[35rem] h-[12rem] w-[20rem] absolute left-[10%]  lg:top-1 sm:top-1  top-1 bg-gray-800 shadow-lg rounded-lg p-6 "
        >
          <h2 className="text-3xl font-semibold">Installation</h2>
          <p className="text-xl mt-2">$ npm install pattui</p>
          <p className="text-xl mt-2">$ yarn add pattui</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:h-[12rem] lg:w-[35rem] h-[12rem] w-[20rem]  absolute right-[10%]  lg:top-1/3 sm:top-1/3 top-1/3 bg-gray-800 shadow-lg rounded-lg p-6"
        >
      <h2 className="text-3xl font-semibold">Import Styles</h2>
      <p className="text-xl mt-2">import 'pattui/styles.css';</p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:h-[12rem] lg:w-[35rem] h-[12rem] w-[20rem]  absolute left-[10%]  lg:top-2/3 sm:top-2/3 top-2/3 bg-gray-800 shadow-lg rounded-lg p-6 ">
          <h2 className="text-3xl font-semibold">Import Modules</h2>
          <p className="text-xl mt-2">import from 'pattui'</p>
        </motion.div>
    
      </div>
    </>
  );
};

export default GettingStarted;
