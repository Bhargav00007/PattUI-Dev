import React, { useState } from 'react'; 
import { FlipWords } from "../components/flip-word";
import { FiClipboard } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "$ npm install pattui";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const words = ["amazing", "fluid", "beautiful", "modern", "vibrant"];

  return (
    <div>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4 bg-black">
        <div className="lg:text-8xl text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mb-4">
          Build 
          <FlipWords words={words} /> <br />
          websites with PattUI
        </div>

        <div className="flex items-center space-x-4 p-4 -ml-4">
  <div
    className="d-flex lg:h-[4rem] lg:w-[15rem] text-sm sm:px-4 sm:py-3 lg:text-xl sm:text-xl flex items-center bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer"
    onClick={handleCopy}
  >
    <span className="mr-2">{textToCopy}</span>
    <FiClipboard className="text-xl" />
  </div>
  <button className="lg:text-xl lg:h-[4rem] lg:w-[11rem] text-sm sm:px-4 sm:py-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2">
    <IoBookSharp className="text-xl" />
    <span>Read Docs</span>
  </button>
</div>
</div>
    </div>
  );
};

export default Hero;
