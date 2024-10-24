import React from 'react';
import s1 from '../images/s1.jpg';
import './Project.css'; // Import the CSS file for styling

// Sample project data (using the imported image 's1')
const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of project one.",
    image: s1, // Use the imported image variable
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of project two.",
    image: s1,
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of project three.",
    image: s1,
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a brief description of project four.",
    image: s1,
  },
  {
    id: 5,
    title: "Project Five",
    description: "This is a brief description of project five.",
    image: s1,
  },
  {
    id: 6,
    title: "Project Six",
    description: "This is a brief description of project six.",
    image: s1,
  },
];

const Project = () => {
  return (
    <div className="project-section">
      <h2 className="project-title">Our Projects</h2>
      <div className="title-underline">
        <span></span>
      </div>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
      <button className='project-button'>View More</button>
    </div>
  );
};

export default Project;
