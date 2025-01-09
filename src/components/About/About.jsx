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
                            <h3>Frontend Developer</h3>
                            <p className={styles.description}>I'm a frontend developer with experience in building responsive & optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I'm a experience in developing fast and optimized backend systems & APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
