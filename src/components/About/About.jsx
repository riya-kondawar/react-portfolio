import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.heading} >
                <h2 className={styles.title} >About</h2>
                <img id='aboutImage1' className={styles.aboutImage1} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
            </div>
            <div className={styles.content}>
                <img id='aboutImage2' className={styles.aboutImage2} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Analytics</h3>
                            <p className={styles.description}>Proficient in Python, Power BI, and machine learning, specializing in data visualization, predictive modeling, and interactive dashboards.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Web Development</h3>
                            <p className={styles.description}>Skilled in MERN stack, Tailwind CSS, RESTful APIs, and state management using context API, creating scalable, user-centric applications.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Technical Problem Solving</h3>
                            <p className={styles.description}>Expertise in technologies like React.js, MongoDB, and TensorFlow, delivering innovative, robust solutions.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Leadership and Collaboration</h3>
                            <p className={styles.description}>Managed events and content strategy as Media Head at IRIS, focusing on AI, data science, and web development.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
