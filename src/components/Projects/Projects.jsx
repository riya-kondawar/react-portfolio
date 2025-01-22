import React from 'react';
import { getImageUrl } from "../../utils";
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "projects/PawFinds.png",
      title: "PawFinds",
      description: "Pet Adoption WebApp using MERN stack.",
      website: "https://riya-pawfinds.vercel.app/",
      github: "https://github.com/riya-kondawar/PawFinds"
    },
    {
      id: 2,
      image: "projects/PowerBI.png",
      title: "PowerBI Dashboard",
      description: "E-commerce sales data analysis visualization.",
      github: "https://github.com/riya-kondawar/powerBI-report-e-commerce-sales-data-analysis"
    },
    {
      id: 3,
      image: "projects/FakeTrue.png",
      title: "Fake News Detection",
      description: "Used NLP to detect if a piece of news is real or fake.",
      github: "https://github.com/riya-kondawar/Real-n-Fake-News-Detection"
    },
    {
      id: 4,
      image: "projects/duoStudio.png",
      title: "MotorWrks",
      description: "Built using GSAP.",
      website: "https://riya-motor-wrks.vercel.app/",
      github: "https://github.com/riya-kondawar/MotorWrks"
    },
    {
      id: 5,
      image: "projects/WordToPDF.png",
      title: "Word TO PDF converter",
      description: "Built using React.js",
      website: "https://riya-word-to-pdf.vercel.app/",
      github: "https://github.com/riya-kondawar/WordToPDF-react"
    },
    {
      id: 6,
      image: "projects/PuneWebsite.png",
      title: "Pune tourist places",
      description: "Built using HTML & CSS",
      website: "https://riya-kondawar.github.io/Hotel.in/",
      github: "https://github.com/riya-kondawar/Hotel.in"
    },
    {
      id: 7,
      image: "projects/ToDo.png",
      title: "ToDo App",
      description: "Built using javascript & CSS.",
      website: "https://riya-todo.vercel.app/",
      github: "https://github.com/riya-kondawar/College-Dekho"
    },
    {
      id: 8,
      image: "projects/Hotel.png",
      title: "Hotel.in",
      description: "Built using HTML & CSS",
      website: "https://riya-kondawar.github.io/Hotel.in/",
      github: "https://github.com/riya-kondawar/Hotel.in"
    },
    {
      id: 9,
      image: "projects/Pizza.png",
      title: "Pizza Planet",
      description: "Built using HTML &, CSS",
      website: "https://riya-pizza-planet.vercel.app/",
      github: "https://github.com/riya-kondawar/Free-Code-Camp/tree/main/product-landing-page"
    },
    // {
    //   id: 10,
    //   image: "projects/CollegeWebsite.png",
    //   title: "College Dekho",
    //   description: "Colleges listed in Pune",
    //   website: "https://riya-kondawar.github.io/College-Dekho/",
    //   github: "https://github.com/riya-kondawar/College-Dekho"
    // },
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
