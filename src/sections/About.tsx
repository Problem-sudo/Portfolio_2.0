import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          
          I am Anit Maurya, a versatile and driven student pursuing a B.Tech in Electronics and Communication Engineering at the IIIT Nagpur. My journey in technology has been marked by a diverse array of experiences, from delving into front-end development to mastering the intricacies of full-stack web development. </p>
          <p className="about-grid-info-text">
          I excel in both front-end and back-end development. Skilled in HTML, CSS, React.js, and Redux Toolkit, I craft dynamic user interfaces. In back-end development, I leverage Node.js and Express.js, alongside MongoDB and MySQL for database management.
            
          </p>

          <p className="about-grid-info-text">
          Beyond technical skills, I lead sessions on web development and competitive programming, fostering a culture of learning. Driven by innovation, I constantly seek new challenges to grow and make an impact in technology.       

          </p>
          {/* <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p> */}
          {/* <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Elasticsearch</li>
            <li className="about-grid-info-list-item">Kibana</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul> */}
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Anit.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
