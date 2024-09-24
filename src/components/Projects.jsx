"use client";

import { useState } from 'react';
import { projects } from '@/assets/data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedProject, setExpandedProject] = useState(null);

    // Get unique categories from the project data
    const categories = ['All', ...new Set(projects.map(project => project.category))];

    // Filter projects by category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // Handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setExpandedProject(null); // Reset any expanded project when category changes
    };

    // Handle project card click to toggle expansion
    const handleProjectClick = (title) => {
        setExpandedProject(expandedProject === title ? null : title);
    };

    return (
        <div
            id='projects'
            className="p-5 pt-7">
            <div className="flex items-center gap-2  mb-3">
                <h1 className="text-3xl">Projects</h1>
                <div className="w-2/4 h-0.5 bg-gradient-to-r from-coral"></div>
            </div>

            {/* Category filter list */}
            <div className="flex flex-wrap gap-4 justify-center my-6 ">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-button'} bg-silver/20 font-semibold text-sm  rounded-lg p-2 w-fit `}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project cards */}
            <div className="project-list ">
                {filteredProjects.map((project) => (
                    <div
                        key={project.title}
                        className={`relative my-5 bg-lightGray rounded-md`}
                        onClick={() => handleProjectClick(project.title)}
                    >
                        {/* Project Card Content */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="project-image rounded-t-md"
                            style={{ objectFit: "contain" }}
                        // special next prop
                        />
                        <div className='p-3'>
                            <h2 className='text-xl'>{project.title}</h2>
                            <h3 className='absolute top-3 right-3 bg-silver/60 font-semibold text-sm rounded-lg p-2 w-fit text-coral'>
                                {project.category}
                            </h3>

                            {/* Expanded Project Details */}
                            {expandedProject === project.title && (
                                <div className="mt-2">
                                    <p className='tracking-wide'>{project.description}</p>
                                    <h3 className='mt-2 font-medium'>Stack:</h3>
                                    <ul className='flex flex-wrap gap-4 py-2'>
                                        {project.stack.map((tech) => (
                                            <li key={tech} className='bg-silver/20 font-semibold text-sm rounded-lg p-2 w-fit'>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex gap-3 mb-2'>
                                        <a className='shadow-md rounded-full p-1' href={project.url} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLink} size='xl' style={{ color: '#ef8354' }} />
                                        </a>
                                        <a className='shadow-md rounded-full p-1' href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} size='xl' style={{ color: '#ef8354' }} />
                                        </a>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Projects;
