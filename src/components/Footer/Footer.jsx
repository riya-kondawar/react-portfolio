import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container} id='contact'>
            <ul className={styles.links}>
                {/* <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:riya.kondawar@gmail.com">riya.kondawar@gmail.com</a>
                </li> */}
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/riyakondawar/">
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    &hearts;
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/riya-kondawar">
                        <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                    </a>
                </li>
            </ul>
            <p>2024 &copy; Build by Riya with &hearts;</p>
        </footer>
    )
}

export default Footer
