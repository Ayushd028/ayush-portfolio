import React from "react";
import E_Commerce from "../../assets/eCommerce.png";
import Daily from "../../assets/dailyDigest.png";
import MedAssist from "../../assets/MedAssist.jpg";
import Portfolio from "../../assets/Portfolio.png";
import Bookly from "../../assets/Bookly.png";
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
      link: "https://github.com/Ayushd028/Daily-Digest",
      desc: "A dynamic news app that brings you top headlines from various categories right to your fingertips. From handling APIs to designing a seamless user experience.",
    },
    {
      id: 2,
      logo: E_Commerce,
      name: "Sports Zone",
      link: "https://github.com/Ayushd028/Eshop",
      desc: "The SportZone frontend is meticulously designed to provide users with a seamless and enjoyable shopping experience for both new and used sports equipment. The focus is on creating an intuitive and easy-to-navigate interface that ensures users can browse, compare, and purchase products with minimal effort.",
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
      link: "https://github.com/Ayushd028/Portfolio",
      desc: "This portfolio project highlights my expertise in Web development, showcasing my skills in React. Explore my work with the Web Developer, including dynamic web applications and innovative solutions in machine learning and education.",
    },
    {
      id: 5,
      logo: Bookly,
      name: "Bookly",
      link: "https://github.com/Ayushd028/Books.git",
      desc: "The BookStore frontend is designed to provide an intuitive, engaging, and visually appealing experience for book lovers and casual readers alike. It serves as a dynamic and user-friendly interface that allows customers to browse, search, and purchase books effortlessly.",
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
