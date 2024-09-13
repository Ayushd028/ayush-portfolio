import React from "react";
import E_Commerce from "../../assets/eCommerce.png";
import Daily from "../../assets/dailyDigest.png";
import MedAssist from "../../assets/MedAssist.jpg";
import Portfolio from "../../assets/Portfolio.png";
import "./Projects.css";

function ProjectCard({ logo, name, link, desc }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={logo} className="project-logo" alt={`${name} logo`} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <p className="project-description">{desc}</p>
      </div>
      <div className="project-link">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="source-code-button">
          Source Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const cardItems = [
    {
      id: 1,
      logo: Daily,
      name: "Daily Digest - Daily Dose of News",
      link: "#",
      desc: "A dynamic news app that brings you top headlines from various categories right to your fingertips. From handling APIs to designing a seamless user experience.",
    },
    {
      id: 2,
      logo: E_Commerce,
      name: "E-Commerce Website",
      link: "#",
      desc: "This website is carefully created to make it easy for users to buy sports equipment online, whether they’re looking for new or used ones. The site is designed to be easy to use, with secure payments.",
    },
    {
      id: 3,
      logo: MedAssist,
      name: "MedAssist",
      link: "#",
      desc: "This website functions as a comprehensive platform for scheduling appointments with doctors and laboratories. It facilitates easy access to medical reports.",
    },
    {
      id: 4,
      logo: Portfolio,
      name: "My Portfolio Website",
      link: "#",
      desc: "This portfolio project highlights my expertise in Web development, showcasing my skills in React. Explore my work with the Web Developer, including dynamic web applications and innovative solutions in machine learning and education.",
    },
  ];

  return (
    <div className="projects-container" name="Projects">
      <div className="projects-header">
        <h2 className="projects-subtitle">What I've Built</h2>
      </div>
      <div className="projects-grid">
        {cardItems.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
      <hr className="projects-divider" />
    </div>
  );
}

export default Projects;
