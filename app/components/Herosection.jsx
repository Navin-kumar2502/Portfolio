"use client"
import React from 'react'; 
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from 'next/link';
const Herosection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal justify-self-start lg:mt-6 font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-secondary-600">Hello, I am{" "}</span>
            <br></br>
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Navin Kumar',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'an Electrical Engineer',
                    1000,
                    'Competitive Programmer',
                    1000,
                    'Mern Stack Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Final Year Student at National Institute of Technology Jamshedpur. Seeking Placement oppurtunities
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Navin_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target="_blank"
              download
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/avatar1.png"
              alt="avatar"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
