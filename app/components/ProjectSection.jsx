"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1, 
    title: "Tic Tac Toe website",
    description:"(40-50s to open, for first time as deployed on render)",
    image: "/images/projects/project1.png",
    tag: ["All","Mobile"],
    gitUrl: "https://github.com/Navin-kumar2502/Online-Tic-Tac-Toe",
    previewUrl: "https://online-tic-tac-toe-client.onrender.com/",
  },
  {
    id: 2,
    title: "Chat Website",
    description:"(40-50s to open, for first time as deployed on render)",
    image: "/images/projects/project2.jpg",
    tag: ["All","Web", "Mobile"],
    gitUrl: "https://github.com/Navin-kumar2502/Chat_App",
    previewUrl: "https://chat-app-hcre.onrender.com/",
  },
  {
    id: 3,
    title: "Dynamic Weather App",
    description:"(40-50s to open, for first time as deployed on render)",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Navin-kumar2502/Dynamic_Weather_App",
    previewUrl: "https://dynamic-weather-app-z9xi.onrender.com/?city",
  },
  {
    id: 4,
    title: "WorkPulse (Task Manager Website)",
    image: "/images/projects/project12.png",
    tag: ["All","Web", "Mobile"],
    gitUrl: "https://github.com/Navin-kumar2502/WorkPulse",
    previewUrl: "https://work-pulse.vercel.app",
  },
  
  {
    id: 5,
    title: "Random Quotes website",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Navin-kumar2502/RandomQuotes",
    previewUrl: "https://navin-kumar2502.github.io/RandomQuotes/",
  },
  {
    id: 6,
    title: "Todo List App",
    image: "/images/projects/project5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Navin-kumar2502/ToDoList1",
    previewUrl: "https://navin-kumar2502.github.io/ToDoList1/",
  },
  {
    id: 7,
    title: "Covid Tracker Website",
    image: "/images/projects/project3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Navin-kumar2502/Covid_Tracker",
    previewUrl: "https://navin-kumar2502.github.io/Covid_Tracker/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
     <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-5">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    </>
  );
};

export default ProjectsSection;
