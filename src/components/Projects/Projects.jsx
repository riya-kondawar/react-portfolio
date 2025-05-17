import { getImageUrl } from "../../utils";
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      image: "projects/SmartResumePro.png",
      title: "Smart ResumePro",
      description: "AI-powered resume builder and analyzer with an integrated chatbot for user assistance.",
      website: "https://resume-builder-nlp.el.r.appspot.com/",
      github: "https://github.com/riya-kondawar/Resume-builder-analyzer-NLP",
      tags: ["AI", "NLP", "React", "Node.js"]
    },
    {
      id: 2,
      image: "projects/PawFinds.png",
      title: "PawFinds",
      description: "Pet Adoption WebApp using MERN stack.",
      website: "https://riya-pawfinds.vercel.app/",
      github: "https://github.com/riya-kondawar/PawFinds",
      tags: ["MERN", "MongoDB", "Express", "React", "Node.js"]
    },
    {
      id: 3,
      image: "projects/EventEase.png",
      title: "EventEase- Java Swing",
      description: "Java desktop EMS built using Swing & AWT for the GUI and MySQL for backend.",
      github: "https://github.com/riya-kondawar/EventEase",
      tags: ["Java", "Swing", "MySQL"]
    },
    {
      id: 4,
      image: "projects/WordToPDF.png",
      title: "Word TO PDF converter",
      description: "Built using React.js",
      website: "https://riya-word-to-pdf.vercel.app/",
      github: "https://github.com/riya-kondawar/WordToPDF-react",
      tags: ["React", "JavaScript"]
    },
    {
      id: 5,
      image: "projects/duoStudio.png",
      title: "MotorWrks",
      description: "Built using GSAP.",
      website: "https://riya-motor-wrks.vercel.app/",
      github: "https://github.com/riya-kondawar/MotorWrks",
      tags: ["GSAP", "Animation", "React"]
    },
    {
      id: 6,
      image: "projects/FakeTrue.png",
      title: "Fake News Detection",
      description: "Used NLP to detect if a piece of news is real or fake.",
      github: "https://github.com/riya-kondawar/Real-n-Fake-News-Detection",
      tags: ["Python", "NLP", "Machine Learning"]
    },
    {
      id: 7,
      image: "projects/PowerBI.png",
      title: "PowerBI Dashboard",
      description: "E-commerce sales data analysis visualization.",
      github: "https://github.com/riya-kondawar/powerBI-report-e-commerce-sales-data-analysis",
      tags: ["PowerBI", "Data Visualization", "DAX"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className={styles.container} ref={ref}>
      <motion.div
        className={styles.heading}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>Projects</motion.h2>
        <motion.p className={styles.description} variants={itemVariants}>
          Here's a collection of my work. Each project represents unique challenges and solutions.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.projects}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.card}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.cardBody}>
              <img
                className={styles.projectImg}
                src={getImageUrl(project.image)}
                alt={`${project.title} project screenshot`}
                loading="lazy"
              />
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags && (
                  <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <div className={styles.buttons}>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <img
                        className={styles.iconButton}
                        src={getImageUrl("projects/website.png")}
                        alt="Website link"
                      />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <img
                      className={styles.iconButton}
                      src={getImageUrl("projects/github.png")}
                      alt="GitHub repository"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
