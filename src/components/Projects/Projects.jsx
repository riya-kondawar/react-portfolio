import React from 'react';
import { getImageUrl } from "../../utils";
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "projects/duo-anim-website.png",
      title: "MotorWrks",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, est.",
      website: "https://riya-motor-wrks.vercel.app/",
      github: "https://github.com/riya-kondawar/MotorWrks"
    },
    {
      id: 2,
      image: "projects/college-dekho.png",
      title: "College Dekho",
      description: "College Dekho",
      website: "https://riya-kondawar.github.io/College-Dekho/",
      github: "https://github.com/riya-kondawar/College-Dekho"
    },
    {
      id: 3,
      image: "projects/duo-anim-website.png",
      title: "Login Form",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, est.",
      website: "https://riya-kondawar.github.io/react-form/",
      github: "https://github.com/riya-kondawar/react-form"
    },
    {
      id: 4,
      image: "projects/duo-anim-website.png",
      title: "Hotel.in",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, est.",
      website: "https://riya-kondawar.github.io/Hotel.in/",
      github: "https://github.com/riya-kondawar/Hotel.in"
    },
    {
      id: 5,
      image: "projects/duo-anim-website.png",
      title: "Cafe Menu",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, est.",
      website: "https://riya-kondawar.github.io/Cafe-Menu/",
      github: "https://github.com/riya-kondawar/Cafe-Menu"
    },
    {
      id: 6,
      image: "projects/duo-anim-website.png",
      title: "Pune Tourism",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, est.",
      website: "https://riya-kondawar.github.io/Pune-TKU/",
      github: "https://github.com/riya-kondawar/Pune-TKU"
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.description}>Check out my projects here...</p>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardBody}>
              <img className={styles.projectImg} src={getImageUrl(project.image)} alt={`Project ${project.id}`} />
              <div className={styles.info}>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.languages}</p>
                <div className={styles.buttons}>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.iconButton}
                      src={getImageUrl("projects/website.png")}
                      alt="Web-Image"
                    />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.iconButton}
                      src={getImageUrl("projects/github.png")}
                      alt="Github-Image"
                    />

                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
