import React from "react";
import Java from "../../assets/java.jpeg";
import Cpp from "../../assets/cpp.jpeg";
import Js from "../../assets/js.jpeg";
// eslint-disable-next-line
import Node from "../../assets/node.webp";
import Reactjs from "../../assets/react.jpeg";
import C from "../../assets/c.jpeg";
import Html from "../../assets/html.jpeg";
import Css from "../../assets/css.jpeg";
import Mongo from "../../assets/mongo.jpeg";
// eslint-disable-next-line
import Express from "../../assets/express.jpeg";
import Mysql from "../../assets/mysql.jpg";
import Boot from "../../assets/boot.png";
import "./Skills.css";

function Skills() {
  const skillItems = [
    { id: 1, logo: Java, name: "Java" },
    { id: 2, logo: Cpp, name: "C++" },
    { id: 3, logo: Js, name: "JavaScript" },
    { id: 4, logo: C, name: "C" },
    { id: 5, logo: Html, name: "HTML" },
    { id: 6, logo: Css, name: "CSS" },
    // eslint-disable-next-line
    // { id: 7, logo: Node, name: 'Node.js' },
    { id: 8, logo: Reactjs, name: "React.js" },
    // eslint-disable-next-line
    // { id: 9, logo: Express, name: 'Express.js' },
    { id: 10, logo: Mongo, name: "MongoDB" },
    { id: 11, logo: Mysql, name: "MySQL" },
    { id: 12, logo: Boot, name: "Bootstrap" },
  ];

  return (
    <div className="skills-container" name="Skills">
      <div className="skills-header">
{/*         <h1 className="skills-title">SKILLS</h1> */}
        <h2 className="skills-subtitle">SKILLS</h2>
      </div>
      <div className="skills-grid">
        {skillItems.map((item) => (
          <div className="skill-card" key={item.id}>
            <img src={item.logo} className="skill-logo" alt={item.name} />
            <div className="skill-name">{item.name}</div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Skills;
