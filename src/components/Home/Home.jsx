import React, { useEffect, useState } from "react";
import Pic from "../../assets/picd.png";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./Home.css";

function Typewriter({ texts, typeSpeed = 100, backSpeed = 50, loop = true }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(typeSpeed);

  useEffect(() => {
    const type = () => {
      const fullText = texts[textIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        if (loop) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }

      setDelay(isDeleting ? backSpeed : typeSpeed);
    };

    const timer = setTimeout(type, delay);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    texts,
    textIndex,
    delay,
    typeSpeed,
    backSpeed,
    loop,
  ]);

  return <span className="text-red-700 font-bold">{currentText}</span>;
}

function Home() {
  return (
    <>
      <div className="background-container"></div>
      <div className="content-wrapper">
        <div className="home-container" name="Home">
          <div className="home-content">
            <div className="home-text">
              <span className="welcome-text">Welcome In My Feed</span>
              <div className="typewriter-container">
                <h1>Hello, I'm a </h1>
                <Typewriter texts={["Developer", "Programmer", "Coder"]} />
              </div>
              <p className="intro-text">
                I am a passionate and driven <b>Information Technology</b>{" "}
                graduate with a strong focus on{" "}
                <b>full-stack web development</b>. I thrive on transforming
                innovative ideas into impactful, user-friendly web applications.
                My expertise lies in building dynamic, responsive, and scalable
                solutions using the MERN stack (MongoDB, Express.js, React,
                Node.js), where I seamlessly blend my knowledge of both
                front-end and back-end technologies. <br />
                <br />
                As a continuous learner, I’m always exploring new trends and
                technologies to refine my craft and stay at the forefront of the
                ever-evolving tech landscape. Whether it's developing robust
                APIs, optimizing performance, or crafting intuitive user
                interfaces, I am committed to delivering high-quality solutions
                that solve real-world problems.
              </p>
              <div className="socials-container">
                <div className="available-on">
                  <h1>Available On</h1>
                  <ul className="social-icons">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/-ayushdwivedi/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Ayushd028"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithubSquare className="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ayush.d__/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagramSquare className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="working-on">
                  <h1>Currently Working On</h1>
                  <div className="tech-icons">
                    <SiMongodb className="icon" />
                    <SiExpress className="icon" />
                    <FaReact className="icon" />
                    <FaNodeJs className="icon" />
                    <FaJava className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-img">
              <img src={Pic} alt="Profile" className="img-circle" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
