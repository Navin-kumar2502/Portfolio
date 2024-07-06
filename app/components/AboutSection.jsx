"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MYSQL</li>
          <li>MongoDb</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Asian School,Muzaffarpur Bihar, India Class-10th | Percentage : 94.6</li>
          <li>Chinmaya Vidyalaya, Sector-5, Bokaro 
          Class-12th CBSE | Percentage : 92.5</li>
          <li>National Institute of Technology, Jamshedpur 
          B.Tech in Electrical Engineering | CGPA : 8.38</li>
        </ul>
      ),
    },
    {
      title: "Achievments",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Solved 600+ DSA Problems</li>
          <li>Currently Expert on Coding Ninjas</li>
          <li>Max rating of 1840 on leetcode</li>
          <li>5* on HackerRank in C++,Problem Solving and SQL</li>
        </ul>
      ),
    },
  ];
  
const AboutSection = () => {
    const [tab,setTab]=useState("skills");
    const[isPending,startTransition]=useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className="text-white" id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' alt="about-image" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a final-year student at NIT Jamshedpur, pursuing a degree in Electrical Engineering. Alongside my academic endeavors, I have developed a strong proficiency in MERN stack development, which has honed my technical skills and problem-solving abilities. I am currently seeking placement opportunities where I can leverage my expertise and contribute effectively to innovative projects.
                </p>
                <div className='flex flex-row  justify-start mt-8'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("certifications")} active={tab==="certifications"}>{" "}Certifications{" "}</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection